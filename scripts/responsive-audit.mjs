import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5174';
const PHASE = process.env.PHASE || (process.argv.includes('--after') ? 'after' : 'before');

const VIEWPORTS = [
  { name: '320x568', width: 320, height: 568 },
  { name: '360x740', width: 360, height: 740 },
  { name: '390x844', width: 390, height: 844 },
  { name: '414x896', width: 414, height: 896 },
  { name: '430x932', width: 430, height: 932 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '820x1180', width: 820, height: 1180 },
  { name: '1024x768', width: 1024, height: 768 },
  { name: '1280x800', width: 1280, height: 800 },
];

const ROUTES = [
  '/',
  '/about',
  '/about/company-overview',
];

const reportDir = path.join(rootDir, 'responsive-report');
const screensDir = path.join(reportDir, 'screens', PHASE);

fs.mkdirSync(screensDir, { recursive: true });

function getSelector(el) {
  if (!el) return '';
  if (el.id) return `#${el.id}`;
  let selector = el.tagName.toLowerCase();
  if (el.className && typeof el.className === 'string') {
    const classes = el.className
      .trim()
      .split(/\s+/)
      .filter(c => c && !c.includes(':') && !c.includes('[') && !c.includes('/') && !c.includes('.'))
      .slice(0, 2);
    if (classes.length > 0) {
      selector += '.' + classes.join('.');
    }
  }
  const text = (el.innerText || el.textContent || '').trim().slice(0, 30).replace(/\n/g, ' ');
  if (text) {
    selector += ` ("${text}")`;
  }
  return selector;
}

async function runAudit() {
  console.log(`Starting Responsive Audit for Phase: [${PHASE}] on ${BASE_URL}...`);

  const browser = await chromium.launch({ headless: true });
  const allResults = [];

  for (const route of ROUTES) {
    console.log(`\nAuditing route: ${route}`);
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
      });

      // Record CLS
      await page.addInitScript(() => {
        window.__clsScore = 0;
        try {
          const observer = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                window.__clsScore += entry.value;
              }
            }
          });
          observer.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
          // ignore
        }
      });

      const url = `${BASE_URL}${route}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (e) {
        console.warn(`Fallback domcontentloaded for ${url}: ${e.message}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      }

      await page.waitForTimeout(600);

      // Scroll from top to bottom in steps to trigger lazy loading / animations
      const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      const step = Math.min(400, Math.max(200, Math.floor(vp.height / 2)));
      for (let y = 0; y < scrollHeight; y += step) {
        await page.evaluate((scrollPos) => window.scrollTo(0, scrollPos), y);
        await page.waitForTimeout(100);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);

      // Extract Audit Findings
      const auditData = await page.evaluate(({ vpWidth, vpHeight }) => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const hasHorizontalOverflow = docWidth > winWidth + 1;

        // 1. Offending elements for horizontal overflow
        const overflowElements = [];
        const allDomElements = document.querySelectorAll('*');
        for (const el of allDomElements) {
          const rect = el.getBoundingClientRect();
          // Check if right edge exceeds viewport
          if (rect.width > 0 && rect.height > 0 && rect.right > winWidth + 1.5) {
            // Check if computed overflow is hidden on an ancestor
            overflowElements.push({
              tag: el.tagName.toLowerCase(),
              id: el.id || '',
              className: (typeof el.className === 'string' ? el.className : '').slice(0, 80),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
              text: (el.innerText || el.textContent || '').slice(0, 40).replace(/\s+/g, ' ').trim(),
            });
          }
        }

        // 2. Clipped or overflowing text
        const clippedTextElements = [];
        const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');
        for (const el of textElements) {
          // Only direct text-bearing elements or leaf text
          if (el.children.length <= 1 && el.innerText && el.innerText.trim().length > 3) {
            const cs = window.getComputedStyle(el);
            if (cs.display !== 'none' && cs.visibility !== 'hidden') {
              if (el.scrollWidth > el.clientWidth + 2 && (cs.overflow === 'hidden' || cs.textOverflow === 'ellipsis')) {
                clippedTextElements.push({
                  tag: el.tagName.toLowerCase(),
                  className: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
                  scrollWidth: el.scrollWidth,
                  clientWidth: el.clientWidth,
                  text: el.innerText.slice(0, 40).replace(/\s+/g, ' ').trim(),
                });
              }
            }
          }
        }

        // 3. Tap targets < 44x44
        const smallTapTargets = [];
        const interactive = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
        for (const el of interactive) {
          const rect = el.getBoundingClientRect();
          const cs = window.getComputedStyle(el);
          if (
            cs.display !== 'none' &&
            cs.visibility !== 'hidden' &&
            rect.width > 0 &&
            rect.height > 0 &&
            (rect.width < 44 || rect.height < 44)
          ) {
            // Avoid false positives for hidden elements or items inside other interactive wrappers
            smallTapTargets.push({
              tag: el.tagName.toLowerCase(),
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              text: (el.innerText || el.getAttribute('aria-label') || el.title || '').slice(0, 35).replace(/\s+/g, ' ').trim(),
              className: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
            });
          }
        }

        // 4. Body text < 14px
        const smallBodyText = [];
        const pAndLi = document.querySelectorAll('p, li');
        for (const el of pAndLi) {
          const cs = window.getComputedStyle(el);
          const fontSize = parseFloat(cs.fontSize);
          const rect = el.getBoundingClientRect();
          if (
            cs.display !== 'none' &&
            cs.visibility !== 'hidden' &&
            rect.width > 0 &&
            rect.height > 0 &&
            fontSize < 13.9 &&
            (el.innerText || '').trim().length > 10
          ) {
            smallBodyText.push({
              tag: el.tagName.toLowerCase(),
              fontSize: `${fontSize}px`,
              text: el.innerText.slice(0, 40).replace(/\s+/g, ' ').trim(),
              className: (typeof el.className === 'string' ? el.className : '').slice(0, 60),
            });
          }
        }

        // 5. Images with fixed pixel widths larger than viewport
        const wideImages = [];
        const images = document.querySelectorAll('img, svg, video');
        for (const img of images) {
          const rect = img.getBoundingClientRect();
          if (rect.width > winWidth + 1) {
            wideImages.push({
              tag: img.tagName.toLowerCase(),
              src: (img.src || '').slice(-40),
              width: Math.round(rect.width),
            });
          }
        }

        return {
          docWidth,
          winWidth,
          hasHorizontalOverflow,
          overflowElements: overflowElements.slice(0, 8),
          clippedTextElements: clippedTextElements.slice(0, 8),
          smallTapTargets: smallTapTargets.slice(0, 10),
          smallBodyText: smallBodyText.slice(0, 8),
          wideImages,
          cls: window.__clsScore || 0,
        };
      }, { vpWidth: vp.width, vpHeight: vp.height });

      // Save screenshot
      const safeRouteName = route === '/' ? 'home' : route.replace(/[^a-zA-Z0-9]/g, '_');
      const screenPath = path.join(screensDir, `${safeRouteName}_${vp.name}.png`);
      await page.screenshot({ path: screenPath, fullPage: true });

      const result = {
        route,
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        screenshot: path.relative(rootDir, screenPath).replace(/\\/g, '/'),
        ...auditData,
      };

      allResults.push(result);
      console.log(`  [${vp.name}] Overflow: ${auditData.hasHorizontalOverflow ? `YES (${auditData.docWidth}px > ${auditData.winWidth}px)` : 'NO'}, Small Tap Targets: ${auditData.smallTapTargets.length}, Small Text: ${auditData.smallBodyText.length}`);

      await page.close();
    }
  }

  await browser.close();

  // Save audit JSON
  const jsonPath = path.join(reportDir, `audit_${PHASE}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(allResults, null, 2));
  console.log(`\nAudit finished! Saved JSON to ${jsonPath}`);

  // Generate or update markdown report
  generateMarkdownReport(allResults, PHASE);
}

function generateMarkdownReport(results, phase) {
  const mdPath = path.join(reportDir, 'report.md');
  let existingContent = '';
  if (fs.existsSync(mdPath)) {
    existingContent = fs.readFileSync(mdPath, 'utf8');
  }

  let tableRows = '';
  for (const r of results) {
    const issues = [];
    if (r.hasHorizontalOverflow) {
      const topOffenders = r.overflowElements.map(e => `${e.tag}${e.className ? '.' + e.className.split(' ')[0] : ''} (w:${e.width}px)`).join(', ');
      issues.push(`Horizontal overflow (${r.docWidth}px vs ${r.winWidth}px) [Offenders: ${topOffenders || 'body/html'}]`);
    }
    if (r.clippedTextElements.length > 0) {
      issues.push(`Clipped text: ${r.clippedTextElements.length} items (${r.clippedTextElements.map(c => `"${c.text}"`).slice(0, 2).join(', ')})`);
    }
    if (r.smallTapTargets.length > 0) {
      issues.push(`Small tap targets (<44px): ${r.smallTapTargets.length} items (${r.smallTapTargets.map(t => `${t.tag} "${t.text}" ${t.width}x${t.height}`).slice(0, 2).join(', ')})`);
    }
    if (r.smallBodyText.length > 0) {
      issues.push(`Body text <14px: ${r.smallBodyText.length} items (${r.smallBodyText.map(t => `"${t.text}" ${t.fontSize}`).slice(0, 2).join(', ')})`);
    }
    if (r.wideImages.length > 0) {
      issues.push(`Oversized image: ${r.wideImages.length} items`);
    }

    const issueText = issues.length > 0 ? issues.join('<br>') : 'None (Passed)';
    const selectorText = r.overflowElements.concat(r.smallTapTargets).slice(0, 2).map(x => `${x.tag}${x.className ? '.' + x.className.split(' ')[0] : ''}`).join(', ') || '-';
    const fixText = phase === 'before' ? 'Pending audit remediation' : (issues.length === 0 ? 'Fixed & verified' : 'Investigating');

    tableRows += `| \`${r.route}\` | \`${r.viewport}\` | ${issueText} | \`${selectorText}\` | ${fixText} |\n`;
  }

  const phaseHeader = `\n## Responsive Audit Results: ${phase.toUpperCase()}\n\n| Route | Viewport | Issue | Selector | Fix Applied |\n|---|---|---|---|---|\n${tableRows}\n`;

  if (phase === 'before') {
    const fullDoc = `# Machino Polymers Responsive Audit & Remediation Report

Tested Routes:
- \`/\` (Home)
- \`/about\` (About Us)
- \`/about/company-overview\` (Company Overview)

Tested Viewports:
- 320x568 (iPhone SE / Small Phone)
- 360x740 (Standard Android)
- 390x844 (iPhone 12/13/14)
- 414x896 (iPhone XR / 11)
- 430x932 (iPhone 14/15 Pro Max)
- 768x1024 (iPad Portrait)
- 820x1180 (iPad Air Portrait)
- 1024x768 (iPad Landscape / Small Laptop)
- 1280x800 (Desktop Baseline - Untouched)

${phaseHeader}
`;
    fs.writeFileSync(mdPath, fullDoc);
  } else {
    // Append or update AFTER section
    if (existingContent.includes('## Responsive Audit Results: AFTER')) {
      const parts = existingContent.split('## Responsive Audit Results: AFTER');
      fs.writeFileSync(mdPath, parts[0] + phaseHeader);
    } else {
      fs.writeFileSync(mdPath, existingContent + phaseHeader);
    }
  }

  console.log(`Updated report markdown at: ${mdPath}`);
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});

import { chromium } from 'playwright';

async function verify() {
  console.log('--- STARTING MIRAC STACK VERIFICATION ---');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Verify Banner caption in DOM and image
  const captionCount = await page.evaluate(() => {
    const banner = document.querySelector('.stacked-panel-banner');
    if (!banner) return 0;
    const textNodes = Array.from(banner.querySelectorAll('*')).filter(el => 
      el.textContent && el.textContent.includes('ISO 9001 · IATF 16949 COMPLIANT PRODUCTION FLOOR')
    );
    return textNodes.length;
  });
  console.log('Banner caption DOM nodes count (expected 2 nested or 1 container):', captionCount);

  // 2. Test Desktop Stacking Behavior at 1920x1080
  console.log('\nTesting 1920x1080 desktop stacking...');
  const bannerPosBefore = await page.evaluate(() => {
    const banner = document.querySelector('.stacked-panel-banner');
    const mirac = document.querySelector('.stacked-panel-mirac');
    const quality = document.querySelector('#quality');
    const stack = document.querySelector('.mirac-stack');
    return {
      bannerTop: banner.getBoundingClientRect().top,
      miracTop: mirac.getBoundingClientRect().top,
      qualityTop: quality.getBoundingClientRect().top,
      stackTop: stack.getBoundingClientRect().top,
      bannerSticky: window.getComputedStyle(banner).position,
      miracPosition: window.getComputedStyle(mirac).position,
      miracZIndex: window.getComputedStyle(mirac).zIndex,
      miracBorderRadius: window.getComputedStyle(mirac).borderTopLeftRadius,
      qualityPosition: window.getComputedStyle(quality).position
    };
  });
  console.log('Initial positions & styles:', bannerPosBefore);

  // Scroll to bring banner to top
  await page.evaluate(() => {
    const stack = document.querySelector('.mirac-stack');
    stack.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const bannerPinned = await page.evaluate(() => {
    const banner = document.querySelector('.stacked-panel-banner');
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    const bannerRect = banner.getBoundingClientRect();
    return {
      top: bannerRect.top,
      expectedTop: navH,
      isPinned: Math.abs(bannerRect.top - navH) < 2
    };
  });
  console.log('Banner reached sticky top:', bannerPinned);

  // Scroll 300px further to watch MIRAC rise over banner
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(300);

  const bannerMidScroll = await page.evaluate(() => {
    const banner = document.querySelector('.stacked-panel-banner');
    const mirac = document.querySelector('.stacked-panel-mirac');
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    return {
      bannerTop: banner.getBoundingClientRect().top,
      bannerStillPinned: Math.abs(banner.getBoundingClientRect().top - navH) < 2,
      bannerTransform: banner.style.transform,
      bannerFilter: banner.style.filter,
      miracTop: mirac.getBoundingClientRect().top
    };
  });
  console.log('Banner mid-scroll (MIRAC rising over banner):', bannerMidScroll);

  // Scroll until MIRAC completely covers banner and quality section enters
  await page.evaluate(() => {
    const quality = document.querySelector('#quality');
    quality.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  const afterMirac = await page.evaluate(() => {
    const banner = document.querySelector('.stacked-panel-banner');
    const quality = document.querySelector('#quality');
    const bannerRect = banner.getBoundingClientRect();
    const qualityRect = quality.getBoundingClientRect();
    return {
      bannerBottom: bannerRect.bottom,
      bannerOutOfView: bannerRect.bottom <= 0,
      qualityTop: qualityRect.top
    };
  });
  console.log('After MIRAC covered, banner unpinned with .mirac-stack:', afterMirac);

  // 3. Test Innovation Nav Link
  console.log('\nTesting Innovation Nav Link click...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll('a')).find(a => a.innerText.trim() === 'Innovation');
    if (link) link.click();
  });
  await page.waitForTimeout(1000);

  const innovationLanding = await page.evaluate(() => {
    const stack = document.querySelector('.mirac-stack');
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    const stackTop = stack.getBoundingClientRect().top;
    return {
      stackTop,
      navH,
      landedNearNav: Math.abs(stackTop - navH) < 20
    };
  });
  console.log('Innovation link landed near navbar:', innovationLanding);

  // 4. Test Mobile / Tablet Fallback (< 1024px)
  console.log('\nTesting 768x1024 tablet fallback...');
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(500);

  const tabletStyles = await page.evaluate(() => {
    const banner = document.querySelector('.stacked-panel-banner');
    const mirac = document.querySelector('.stacked-panel-mirac');
    return {
      bannerPosition: window.getComputedStyle(banner).position,
      miracPosition: window.getComputedStyle(mirac).position,
      miracBorderRadius: window.getComputedStyle(mirac).borderTopLeftRadius,
      bannerTransform: banner.style.transform || 'none'
    };
  });
  console.log('Tablet styles (<1024px):', tabletStyles);

  await browser.close();
  console.log('\n--- VERIFICATION FINISHED ---');
}

verify();

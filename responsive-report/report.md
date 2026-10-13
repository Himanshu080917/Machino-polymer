# Machino Polymers Responsive Audit & Remediation Report

Tested Routes:
- `/` (Home)
- `/about` (About Us)
- `/about/company-overview` (Company Overview)

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


## Responsive Audit Results: BEFORE

| Route | Viewport | Issue | Selector | Fix Applied |
|---|---|---|---|---|
| `/` | `320x568` | Horizontal overflow (375px vs 320px) [Offenders: div.flex (w:170px), button.bg-[#FF5500] (w:118px), button.p-2 (w:40px), svg (w:24px), div.absolute (w:1920px), div.relative (w:320px), img.w-full (w:320px), div.absolute (w:320px)]<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("High-purity polyolefins, engineered elas" 12px, "Custom macromolecular tailoring for supe" 12px) | `div.flex, button.bg-[#FF5500]` | Pending audit remediation |
| `/` | `360x740` | Horizontal overflow (375px vs 360px) [Offenders: div.flex (w:170px), button.p-2 (w:40px), svg (w:24px), div.absolute (w:2160px), div.relative (w:360px), img.w-full (w:360px), div.absolute (w:360px), div.absolute (w:360px)]<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("High-purity polyolefins, engineered elas" 12px, "Custom macromolecular tailoring for supe" 12px) | `div.flex, button.p-2` | Pending audit remediation |
| `/` | `390x844` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("High-purity polyolefins, engineered elas" 12px, "Custom macromolecular tailoring for supe" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/` | `414x896` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("High-purity polyolefins, engineered elas" 12px, "Custom macromolecular tailoring for supe" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/` | `430x932` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("High-purity polyolefins, engineered elas" 12px, "Custom macromolecular tailoring for supe" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/` | `768x1024` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/` | `820x1180` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/` | `1024x768` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/` | `1280x800` | Small tap targets (<44px): 10 items (a "About Us" 59x28, a "Company Overview" 124x28)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.absolute, div.relative` | Pending audit remediation |
| `/about` | `320x568` | Horizontal overflow (375px vs 320px) [Offenders: div.flex (w:170px), button.bg-[#FF5500] (w:118px), button.p-2 (w:40px), svg (w:24px), div.flex-1 (w:160px), div.text-xs (w:146px), div.flex-1 (w:160px), div.relative (w:64px)]<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("A global advanced materials and circular" 12px, "Company Overview" 12px) | `div.flex, button.bg-[#FF5500]` | Pending audit remediation |
| `/about` | `360x740` | Horizontal overflow (375px vs 360px) [Offenders: div.flex (w:170px), button.p-2 (w:40px), svg (w:24px), div.flex-1 (w:160px), div.flex-1 (w:160px), div.relative (w:64px), img.w-full (w:56px), div.text-xl (w:46px)]<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("A global advanced materials and circular" 12px, "Company Overview" 12px) | `div.flex, button.p-2` | Pending audit remediation |
| `/about` | `390x844` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("A global advanced materials and circular" 12px, "Company Overview" 12px) | `div.flex-1, div.relative` | Pending audit remediation |
| `/about` | `414x896` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("A global advanced materials and circular" 12px, "Company Overview" 12px) | `div.flex-1, div.relative` | Pending audit remediation |
| `/about` | `430x932` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("A global advanced materials and circular" 12px, "Company Overview" 12px) | `div.flex-1, div.relative` | Pending audit remediation |
| `/about` | `768x1024` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.hidden, div.flex-1` | Pending audit remediation |
| `/about` | `820x1180` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.flex-1, div.hidden` | Pending audit remediation |
| `/about` | `1024x768` | Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.hidden, div.flex-1` | Pending audit remediation |
| `/about` | `1280x800` | Small tap targets (<44px): 10 items (a "About Us" 59x28, a "Company Overview" 124x28)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `div.shrink-0, div.text-2xl` | Pending audit remediation |
| `/about/company-overview` | `320x568` | Horizontal overflow (375px vs 320px) [Offenders: div.flex (w:170px), button.bg-[#FF5500] (w:118px), button.p-2 (w:40px), svg (w:24px)]<br>Clipped text: 6 items ("Automotive", "Electrical & Electronics")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("Custom Formulations" 12px, "Consistent Quality" 12px) | `div.flex, button.bg-[#FF5500]` | Pending audit remediation |
| `/about/company-overview` | `360x740` | Horizontal overflow (375px vs 360px) [Offenders: div.flex (w:170px), button.p-2 (w:40px), svg (w:24px)]<br>Clipped text: 4 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("Custom Formulations" 12px, "Consistent Quality" 12px) | `div.flex, button.p-2` | Pending audit remediation |
| `/about/company-overview` | `390x844` | Clipped text: 4 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("Custom Formulations" 12px, "Consistent Quality" 12px) | `button.bg-[#FF5500], button.p-2` | Pending audit remediation |
| `/about/company-overview` | `414x896` | Clipped text: 4 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("Custom Formulations" 12px, "Consistent Quality" 12px) | `button.bg-[#FF5500], button.p-2` | Pending audit remediation |
| `/about/company-overview` | `430x932` | Clipped text: 3 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 8 items ("Custom Formulations" 12px, "Consistent Quality" 12px) | `button.bg-[#FF5500], button.p-2` | Pending audit remediation |
| `/about/company-overview` | `768x1024` | Clipped text: 3 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `button.bg-[#FF5500], button.p-2` | Pending audit remediation |
| `/about/company-overview` | `820x1180` | Clipped text: 2 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `button.bg-[#FF5500], button.p-2` | Pending audit remediation |
| `/about/company-overview` | `1024x768` | Clipped text: 6 items ("Automotive", "Electrical & Electronics")<br>Small tap targets (<44px): 10 items (button "CAPABILITIES" 118x33, button "Toggle Navigation" 40x40)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `button.bg-[#FF5500], button.p-2` | Pending audit remediation |
| `/about/company-overview` | `1280x800` | Clipped text: 4 items ("Electrical & Electronics", "Industrial Applications")<br>Small tap targets (<44px): 10 items (a "About Us" 59x28, a "Company Overview" 124x28)<br>Body text <14px: 1 items ("Plot No. 2, Sector 33, Delhi Jaipur High" 12px) | `a.text-sm, a.text-sm` | Pending audit remediation |




## Responsive Audit Results: AFTER

| Route | Viewport | Issue | Selector | Fix Applied |
|---|---|---|---|---|
| `/` | `320x568` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `360x740` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `390x844` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `414x896` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `430x932` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `768x1024` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `820x1180` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `1024x768` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/` | `1280x800` | None (Passed) | `div.absolute, div.relative` | Fixed & verified |
| `/about` | `320x568` | None (Passed) | `div.flex-1, div.relative` | Fixed & verified |
| `/about` | `360x740` | None (Passed) | `div.flex-1, div.text-xs` | Fixed & verified |
| `/about` | `390x844` | None (Passed) | `div.flex-1, div.relative` | Fixed & verified |
| `/about` | `414x896` | None (Passed) | `div.flex-1, div.relative` | Fixed & verified |
| `/about` | `430x932` | None (Passed) | `div.flex-1, div.relative` | Fixed & verified |
| `/about` | `768x1024` | None (Passed) | `div.hidden, div.flex-1` | Fixed & verified |
| `/about` | `820x1180` | None (Passed) | `div.flex-1, div.hidden` | Fixed & verified |
| `/about` | `1024x768` | None (Passed) | `div.hidden, div.flex-1` | Fixed & verified |
| `/about` | `1280x800` | None (Passed) | `div.hidden, div.text-2xl` | Fixed & verified |
| `/about/company-overview` | `320x568` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `360x740` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `390x844` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `414x896` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `430x932` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `768x1024` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `820x1180` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `1024x768` | None (Passed) | `-` | Fixed & verified |
| `/about/company-overview` | `1280x800` | None (Passed) | `-` | Fixed & verified |


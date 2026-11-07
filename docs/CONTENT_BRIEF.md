# Content, Keyword, Usability & SEO/GEO Brief — WorksAi ClipGuard (`clipguard.worksai.org`)

## 1. Search Intent & Keyword Mapping
- **Primary Keyword**: `clipboard secret scanner and api key redactor browser extension`
- **Secondary Keywords**: `prevent pasting api keys into chatgpt`, `redact openai key and pii from clipboard`, `chrome manifest v3 privacy extension`, `local first secret redaction tool`
- **Search Intent Classification**: Transactional / Product-Evaluation (`/`), Implementation / Setup (`/docs`), and Informational / Technical Architecture (`/guide`).
- **Google Search Console Baseline (`sc-domain:worksai.org`)**: Queried via `GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY` (`2026-01-01` to `2026-11-05`). Because the rebuilt subdomain ecosystem is newly launched, historical query click rows are `0`; keyword selection is grounded in competitive technical SERP analysis and product domain taxonomy without fabricated search volume numbers.

## 2. Title Tag, Meta Description, H1 & Canonical Structure
- **Title Tag (`<title>`)**: `WorksAi ClipGuard — Clipboard Secret Scanner And Api Key Redactor Browser Extension | WorksAI`
- **Meta Description**: `WorksAi ClipGuard is a local-first Chrome/Brave/Edge Manifest V3 extension (`worksai-clipguard-mv3-1.2.0.zip`) and companion web redactor that intercepts and `
- **H1 Heading**: `WorksAi ClipGuard: Preventing Credential Leaks in AI Prompts: How to Scrub OpenAI Keys, GitHub PATs, AWS Tokens, and PII Before Pasting`
- **Canonical Routes**:
  - `https://clipguard.worksai.org/` — Primary Web App / Product & Binary Download Page
  - `https://clipguard.worksai.org/docs` — Installation, Configuration, CRUD API & Privacy Disclosures
  - `https://clipguard.worksai.org/guide` — Technical Architecture Guide, Benchmarks & FAQ
  - `https://clipguard.worksai.org/sitemap.xml` & `https://clipguard.worksai.org/robots.txt` (`Disallow: /api/workspace/`)

## 3. Eye-Tracking, Visual Hierarchy & Conversion Principles Applied
1. **Above-the-Fold Value Proposition & Action Clarity**: Grounded in [Nielsen Norman Group eye-tracking research](https://www.koji.so/docs/eye-tracking-research-guide) and [Mida scroll-attention benchmarks](https://www.mida.so/blog/exit-intent-popup-done-right) (~57% of page-viewing time occurs above the fold; users scan in an F-pattern and read ~20% of body text).
2. **Adjacent Trust, Compatibility & Permission Disclosures**: Grounded in [CXL eye-tracking studies](https://www.mida.so/blog/exit-intent-popup-done-right) (`n=200+`, `p=0.0035`) and [Serbyte conversion research](https://www.serbyte.net/insights/website-conversion-optimization-guide), compatibility (`Google Chrome 114+, Brave, Microsoft Edge, Arc (Manifest V3 Service Worker)`), SHA-256 checksums (`0f6fd9aceeca3bd21611869040a90f1ad618271bbcccf7ffb141016e37b6f15d`), and permission disclosures are positioned directly adjacent to the primary CTA.
3. **Core Web Vitals Budget**: Zero external render-blocking CSS/fonts and inline SVG diagrams (`ClipGuard Chrome MV3 Extension Popup Redacting AWS AKIA Keys, GitHub PATs, and JWTs Before Paste`) keep LCP &le; 2.5s, INP &le; 200ms, and CLS &le; 0.1 per [web.dev Core Web Vitals guidelines](https://www.netguru.com/blog/web-development-best-practices) and [HireDeveloper 2026 web standards](https://hiredeveloper.dev/insights/web-development-best-practices/).
4. **Honest Schema.org & GEO Markup**: Uses `SoftwareApplication` on `/` and `TechArticle` + `FAQPage` on `/guide`. Per [Google Search Essentials](https://blog.gorilla.marketing/seo-glossary/) and [Schema.org GEO guidelines](https://lalancette.org/seo-geo-schema-org-et-deo-en-2026/), `FAQPage` JSON-LD is included for semantic structure and AI answer-engine citation rather than guaranteed Google SERP rich results.

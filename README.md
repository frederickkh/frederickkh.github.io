# Frederick Research Portfolio v56

v56 is a premium academic-experience refinement. It preserves the editorial identity while making the research story easier to scan: evidence appears earlier, the current doctoral direction is framed carefully, academic documents are easier to access, and the visual system uses one restrained research-green accent.

## What changed in v56

- Added a Home evidence strip with report-backed project metrics.
- Added a Home Research Now section that separates current doctoral direction from completed results.
- Added a Research orientation row and Academic Documents Hub.
- Added `assets/css/v56-premium.css` as a final design layer for the deep-green accent, editorial spacing, navigation polish, focus states, responsive behavior, and reduced-motion support.
- Added `docs/DESIGN_NOTES_v56.md` with the Figma concept link and design rationale.
- Shortened the Home hero, featured-project description, recent-path heading, and teaching summaries so the landing page is faster to scan.
- Removed dead Command Palette / Focus Glossary CSS and stale related copy left from earlier versions.
- Renamed the remaining versioned accessibility binder to a final production name.
- Reorganized CSS into `assets/css/core.css` plus page-specific files: `assets/css/home.css`, `assets/css/research.css`, `assets/css/about.css`, and `assets/css/connect.css`. Each page now loads only `assets/css/core.css` plus its own page stylesheet.
- Added `buildDate` to `assets/js/site-config.js`. Footer freshness text and CV-preview metadata are generated from it instead of being manually maintained in JavaScript.
- `finalize_deployment.py` refreshes `buildDate` automatically when preparing a public deployment.
- Updated documentation so it reflects report-backed project visuals, conceptual previews, current avatar behavior, and the current deployment workflow.
- Re-ran mobile and accessibility checks after the cleanup.

## Main files

- `index.html` — Home
- `research.html` — Research & Projects
- `about.html` — About
- `connect.html` — Contact
- `assets/js/script.js` — shared interaction, bilingual content, project data, report/CV readers, avatar behavior
- `assets/css/core.css` — shared design system and shared components
- `assets/css/home.css` — Home-only styling
- `assets/css/research.css` — Research-only styling
- `assets/css/about.css` — About-only styling
- `assets/css/connect.css` — Connect-only styling
- `assets/js/site-config.js` — production URL, build date, academic profile URLs, analytics, project Code/Demo links

## Project evidence

Four selected projects use visual artifacts and PDFs from Frederick's actual course-project reports:

- Diffusion Models for X-ray Image Generation
- Evaluation of LLMs on Jailbreak & Adversarial Attacks
- Online Linear Programming & Resource Allocation
- RAG System for Internal Knowledge Management

Group-project credits are preserved. Where the reports do not specify an individual task split, the case study does not invent one.

`KnowYourBody` and `SmartBot` currently use clearly labeled conceptual UI previews because original application screenshots have not been supplied.

## CV files

- `documents/Frederick_Khasanto_CV_2026.pdf` — latest academic CV
- `documents/Frederick_Research_Profile.pdf` — one-page research profile

## Publications

The publication renderer in `assets/js/script.js` is ready, but the publications array is intentionally empty until real publication metadata is supplied. The section stays hidden while empty.

## Academic profile and project links

Google Scholar, ORCID, Code, and Demo links remain hidden until real URLs are added in `assets/js/site-config.js` or supplied during deployment. No placeholder account URLs are shown to visitors.

## Deployment

A public domain must be confirmed before publishing. Set it with:

```bash
python finalize_deployment.py https://your-real-domain.com
```

Optional Scholar and ORCID URLs can be passed at the same time. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Repository layout

- `index.html`, `research.html`, `about.html`, `connect.html`, and `404.html` — static pages and hosting entry points.
- `assets/css/` — shared and page-specific stylesheets.
- `assets/js/` — site behavior and deployment/content configuration.
- `assets/images/` and `assets/icons/` — photos, project visuals, social cards, and site icons.
- `documents/` — downloadable CV, research profile, and project reports. These files are public when deployed.
- `docs/` — project notes, deployment instructions, credits, QA notes, and the improvement review.
- `finalize_deployment.py`, `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, and `_headers` — deployment and site metadata.

This is a static site: it has no private server-side backend or admin panel. Edit the HTML, `assets/js/site-config.js`, and the content in `assets/js/script.js`; see [docs/IMPROVEMENT_REVIEW.md](docs/IMPROVEMENT_REVIEW.md) for a maintainability roadmap.

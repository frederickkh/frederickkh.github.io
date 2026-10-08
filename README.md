# Frederick Research Portfolio v56

v56 is a premium academic-experience refinement. It preserves the editorial identity while making the research story easier to scan: evidence appears earlier, the current doctoral direction is framed carefully, academic documents are easier to access, and the visual system uses one restrained research-green accent.

## What changed in v56

- Added a Home evidence strip with report-backed project metrics.
- Added a Home Research Now section that separates current doctoral direction from completed results.
- Added a Research orientation row and Academic Documents Hub.
- Added `v56-premium.css` as a final design layer for the deep-green accent, editorial spacing, navigation polish, focus states, responsive behavior, and reduced-motion support.
- Added `DESIGN_NOTES_v56.md` with the Figma concept link and design rationale.
- Shortened the Home hero, featured-project description, recent-path heading, and teaching summaries so the landing page is faster to scan.
- Removed dead Command Palette / Focus Glossary CSS and stale related copy left from earlier versions.
- Renamed the remaining versioned accessibility binder to a final production name.
- Reorganized CSS into `core.css` plus page-specific files: `home.css`, `research.css`, `about.css`, and `connect.css`. Each page now loads only `core.css` plus its own page stylesheet.
- Added `buildDate` to `site-config.js`. Footer freshness text and CV-preview metadata are generated from it instead of being manually maintained in JavaScript.
- `finalize_deployment.py` refreshes `buildDate` automatically when preparing a public deployment.
- Updated documentation so it reflects report-backed project visuals, conceptual previews, current avatar behavior, and the current deployment workflow.
- Re-ran mobile and accessibility checks after the cleanup.

## Main files

- `index.html` — Home
- `research.html` — Research & Projects
- `about.html` — About
- `connect.html` — Contact
- `script.js` — shared interaction, bilingual content, project data, report/CV readers, avatar behavior
- `core.css` — shared design system and shared components
- `home.css` — Home-only styling
- `research.css` — Research-only styling
- `about.css` — About-only styling
- `connect.css` — Connect-only styling
- `site-config.js` — production URL, build date, academic profile URLs, analytics, project Code/Demo links

## Project evidence

Four selected projects use visual artifacts and PDFs from Frederick's actual course-project reports:

- Diffusion Models for X-ray Image Generation
- Evaluation of LLMs on Jailbreak & Adversarial Attacks
- Online Linear Programming & Resource Allocation
- RAG System for Internal Knowledge Management

Group-project credits are preserved. Where the reports do not specify an individual task split, the case study does not invent one.

`KnowYourBody` and `SmartBot` currently use clearly labeled conceptual UI previews because original application screenshots have not been supplied.

## CV files

- `Frederick_Khasanto_CV_2026.pdf` — latest academic CV
- `Frederick_Research_Profile.pdf` — one-page research profile

## Publications

The publication renderer in `script.js` is ready, but the publications array is intentionally empty until real publication metadata is supplied. The section stays hidden while empty.

## Academic profile and project links

Google Scholar, ORCID, Code, and Demo links remain hidden until real URLs are added in `site-config.js` or supplied during deployment. No placeholder account URLs are shown to visitors.

## Deployment

A public domain has not been supplied, so the package intentionally keeps the production host unset. Before publishing, run:

```bash
python finalize_deployment.py https://your-real-domain.com
```

Optional Scholar and ORCID URLs can be passed at the same time. See `DEPLOYMENT.md`.


## Flat GitHub Pages package
This build is intentionally **fully flat**: all HTML, CSS, JavaScript, images, and project PDFs live in the repository root. Do not recreate `assets/`, `css/`, or `reports/` folders for this build. Upload all files directly to the repository root.

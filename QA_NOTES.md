# v47 QA notes

- Home-page copy was shortened in both English and Chinese translation data.
- JavaScript syntax checked with Node.
- `finalize_deployment.py` compiles successfully.
- CSS parses without syntax errors after the cleanup and page-specific split.
- Dead Command Palette / Focus Glossary selectors from earlier versions were removed.
- Every HTML page loads `core.css`; Home, Research, About, and Connect additionally load only their own page stylesheet.
- Duplicate HTML IDs checked.
- Local `href` / `src` references checked.
- Raster images retain intrinsic width/height attributes where used in HTML.
- Mobile QA targets 360–430px widths, including navigation, Research cards, case-study modal, About photos, Contact rows, timeline controls, floating avatar, footer, and back-to-top.
- Reduced-motion behavior remains available for avatar and motion-heavy interactions.
- Floating inner-page avatar still hides near the footer and supports keyboard-accessible quick navigation.
- Build freshness is driven by `site-config.js -> buildDate`; the deployment finalizer refreshes it automatically.
- Public domain, Google Scholar, ORCID, and project Code/Demo URLs remain intentionally blank until real values are provided.
- Group-project contribution wording continues to avoid inventing individual ownership where the source reports do not specify it.
- Static accessibility audit found no missing image alt text, iframe titles, button types, or accessible text for links after fixes.
- Static responsive layout checks at 360, 390, 430, 768, and 1024 CSS px show no page-level horizontal overflow on Home, Research, About, or Connect.

# Website improvement review

The current site is a static GitHub Pages portfolio. There is no application server, database, or private admin backend today. The items below focus on correctness, credibility, accessibility, performance, and making future edits safer.

## Fix before the next public deployment

1. **Confirm and unify the production domain.** `assets/js/site-config.js` currently points at `https://timothy1016.github.io/Frederick-Khasanto/`, while `sitemap.xml` still contains `YOUR-DOMAIN.example`. Confirm the intended public origin, then run `python finalize_deployment.py https://your-real-domain.com` from the repository root. Verify the canonical URLs, social-card URLs, `robots.txt`, and sitemap after the script runs.
2. **Review public personal information.** The site links to direct contact channels and makes the files in `documents/` publicly downloadable. Confirm that the WhatsApp number, email address, social profiles, CV, and project reports are all intended for unrestricted public access. A folder name does not make files private on static hosting.
3. **Recheck time-sensitive academic details.** Keep the degree dates, current institution/advisor, research direction, role descriptions, project metrics, and CV date consistent with current facts. The configuration's build date and some page copy can become stale independently.
4. **Complete project evidence.** Add verified repository/demo links where available; retain the current behavior that hides empty links. Keep conceptual previews clearly distinguished from screenshots of shipped software. Add publications only with complete, verifiable metadata.

## Improve editing and maintainability

1. **Separate content from interaction code.** `assets/js/script.js` currently combines translations, profile/project content, and UI behavior in one large file. Move editable profile, project, teaching, and bilingual copy into a small, validated content data file, and leave `script.js` responsible for rendering and interactions.
2. **Make HTML easier to review.** The page markup is densely formatted, with long sections and repeated navigation/footer structures. Apply a consistent formatter and extract shared page fragments or generate them from a small static-site build step to reduce accidental divergence.
3. **Make source-of-truth ownership explicit.** Document which file owns each fact (profile/contact in site content, external links in `assets/js/site-config.js`, downloads in `documents/`, and page structure in HTML). Validate local asset/document paths and required content before deployment.
4. **Keep the static publishing model until an editor is actually needed.** A CMS/admin panel requires authentication, content storage, and a publishing workflow. For simple edits, structured source data plus a build-time validator is lower-risk. If non-developers need to edit content, choose a Git-backed CMS or another managed CMS deliberately; do not expose a writable endpoint or credentials in this static repository.

## Frontend and delivery checks

- Test navigation, language switching, theme persistence, CV/report previews, and the 404 page on mobile and desktop after content or layout changes.
- Check keyboard-only navigation, visible focus, contrast in both themes, reduced-motion behavior, and accessible names for controls.
- Verify all local paths after moves, including social metadata, the web manifest, CSS image references, PDF links, and deployment-generated URLs.
- Optimize oversized images/PDFs where quality permits, and review cache rules whenever asset locations or filenames change.

## Suggested order

Confirm domain and public-data choices first; then verify academic content and project evidence. Next, extract the editable content data and add a local-link/content validation step. Consider a CMS only if the editing workflow still needs a browser-based interface.

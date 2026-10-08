# Final deployment

The package intentionally does not invent a public domain, Google Scholar profile, ORCID profile, or project repository/demo URLs.

## 1. Set the public domain

```bash
python finalize_deployment.py https://your-real-domain.com
```

Optional academic profile links can be set at the same time:

```bash
python finalize_deployment.py https://your-real-domain.com \
  --scholar https://scholar.google.com/citations?user=REAL_ID \
  --orcid https://orcid.org/REAL-ORCID
```

This updates canonical URLs, `og:url`, absolute social images, `robots.txt`, `sitemap.xml`, `site-config.js`, and the automatic build date shown by the portfolio.

## 2. Add real Code / Demo URLs

Edit `site-config.js` and fill only links that actually exist:

```js
projectLinks:{
  xray:{code:'',demo:''},
  llmsafety:{code:'',demo:''},
  optimization:{code:'',demo:''},
  rag:{code:'',demo:''},
  knowyourbody:{code:'',demo:''},
  smartbot:{code:'',demo:''}
}
```

Empty links remain hidden automatically.

## 3. Publish

Upload the folder to the chosen static host after running the finalizer.

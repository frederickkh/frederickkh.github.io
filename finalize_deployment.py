#!/usr/bin/env python3
from pathlib import Path
from datetime import date
import argparse,re
p=argparse.ArgumentParser(description='Finalize public URLs and academic profile links before deployment.')
p.add_argument('base_url',help='Public HTTPS origin, e.g. https://frederick.example')
p.add_argument('--scholar',default='',help='Optional Google Scholar profile URL')
p.add_argument('--orcid',default='',help='Optional ORCID profile URL')
a=p.parse_args(); base=a.base_url.rstrip('/')
if not base.startswith('https://'): raise SystemExit('Use a full HTTPS URL.')
root=Path(__file__).resolve().parent
cfg=root/'site-config.js'; text=cfg.read_text()
for key,val in [('productionBaseUrl',base),('scholarUrl',a.scholar),('orcidUrl',a.orcid),('buildDate',date.today().isoformat())]:
    text=re.sub(rf"{key}\s*:\s*'[^']*'",f"{key}:'{val}'",text,count=1)
cfg.write_text(text)
(root/'robots.txt').write_text(f'User-agent: *\nAllow: /\nSitemap: {base}/sitemap.xml\n')
urls=['','research.html','about.html','connect.html']
xml=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for u in urls: xml.append(f'  <url><loc>{base}/{u}</loc></url>')
xml.append('</urlset>'); (root/'sitemap.xml').write_text('\n'.join(xml)+'\n')
for name in ['index.html','research.html','about.html','connect.html']:
    q=root/name; s=q.read_text(); canonical=base+'/' if name=='index.html' else f'{base}/{name}'
    s=re.sub(r'<link href="[^"]*" id="canonicalLink" rel="canonical"\s*/?>',f'<link href="{canonical}" id="canonicalLink" rel="canonical"/>',s)
    if 'property="og:url"' in s: s=re.sub(r'<meta content="[^"]*" property="og:url"\s*/?>',f'<meta content="{canonical}" property="og:url"/>',s)
    else: s=s.replace('</head>',f'<meta content="{canonical}" property="og:url"/></head>')
    s=re.sub(r'<meta content="(assets/[^"]+)" property="og:image"\s*/?>',lambda m:f'<meta content="{base}/{m.group(1)}" property="og:image"/>',s)
    s=re.sub(r'<meta content="(assets/[^"]+)" name="twitter:image"\s*/?>',lambda m:f'<meta content="{base}/{m.group(1)}" name="twitter:image"/>',s)
    q.write_text(s)
print('Launch URLs finalized:',base)
if not a.scholar: print('Google Scholar left hidden (no URL supplied).')
if not a.orcid: print('ORCID left hidden (no URL supplied).')

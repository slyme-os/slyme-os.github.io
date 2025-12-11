# SLYME-OS Studio (GitHub Pages)

This is a GitHub Pages-ready static site for SLYME-OS with an "AI Studio / Drive" inspired layout and a hacker/terminal aesthetic.

What it contains:
- index.html — main dashboard (sidebar, cards, preview + terminal)
- assets/css/style.css — styles with neon-slime theme
- assets/js/main.js — client-side interactions (typing terminal, card preview, matrix background)
- 404.html — simple 404 page

Preview locally:
- Using Python 3:
  - python -m http.server 8000
  - open http://localhost:8000
- Or with npm:
  - npx http-server -p 8000

Install to your repo:
1. Copy the files into the repository root and the `assets/` folder.
2. Commit and push to your pages branch (often `main` or `gh-pages`):
   git add .
   git commit -m "Add SLYME-OS Studio site (AI Studio / Drive inspired)"
   git push origin main

Notes & next steps:
- Replace the Download ISO placeholders (buttons and alert messages) with your actual ISO or installer URL in index.html and/or assets/js/main.js.
- Update model/application URLs (e.g. http://localhost:11434) to match your actual runtime or local endpoints.
- Swap copy, logos, screenshots, and add docs pages under /docs if you want a full documentation site.
- If you want, I can prepare a branch and open a pull request into slyme-os/slyme-os.github.io with these files; tell me which branch name to use and whether you'd like me to commit directly to main or create a PR.

Enjoy — the site is designed to be pushed straight to GitHub Pages and to give a studio-like experience for local AI and privacy-first messaging.
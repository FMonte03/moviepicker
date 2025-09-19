# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Deployment to GitHub Pages

When deploying with Vite to GitHub Pages under a repository subpath (for example: `https://<user>.github.io/moviepicker/`), set the `base` option in `vite.config.js` to `'/moviepicker/'` so built assets reference the correct path.

This repo includes scripts to publish the pre-built `docs/` folder using `gh-pages`:

1. Build and deploy:

```powershell
npm run deploy
```

2. In your repository's GitHub Pages settings, ensure the site is served from the `gh-pages` branch (or from the `docs/` folder on `main` if you prefer). If the site tries to load `/src/index.jsx` (404), it's likely serving the unbuilt root `index.html` — switch the Pages source to the built output.

3. If you still see a 404 after deploying, clear the browser cache or test in a private window to rule out caching.

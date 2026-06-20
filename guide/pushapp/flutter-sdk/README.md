# PushApp SDK — HTML documentation

Static documentation site for the Flutter SDK (`mehery_sender`).

## Live URL

**Use this URL** (GitHub Pages project site):

**https://mehery-soccom.github.io/PushApp-Flutter/**

Do **not** use `docs.mehery.com/PushApp-Flutter/` — that path does not exist. The domain `docs.mehery.com` is the main [MeherY Documentation](https://docs.mehery.com/) site (Jekyll). If this repo has a **custom domain** set to `docs.mehery.com` in GitHub Pages settings, GitHub redirects `*.github.io/PushApp-Flutter/` to `docs.mehery.com/PushApp-Flutter/` and you get a 404.

### Fix the redirect (repo admin)

1. Open **PushApp-Flutter** → **Settings** → **Pages**
2. Under **Custom domain**, clear `docs.mehery.com` and save
3. Wait a few minutes for DNS/cache to update
4. Open **https://mehery-soccom.github.io/PushApp-Flutter/**

Optional: add a link from the main MeherY docs (`/guide/pushapp/`) to the GitHub Pages URL above.

## View locally

From the **repository root**:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080/docs/](http://localhost:8080/docs/) — loads markdown from disk. On GitHub Pages, markdown is fetched from `raw.githubusercontent.com`.

## GitHub Pages setup

- **Source:** Deploy from branch `main`, folder **`/docs`**
- **Custom domain:** leave empty (see above)
- Include **`.nojekyll`** so `_config` and assets are not processed by Jekyll

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Shell, sidebar, CDN scripts |
| `css/docs.css` | PushApp theme |
| `js/docs.js` | Markdown fetch, routing, syntax highlight |
| `assets/pushapp-logo.png` | Brand logo |
| `.nojekyll` | Disable Jekyll on GitHub Pages |

Content is loaded from the repo via GitHub raw URLs — edit markdown in the repo root and refresh the site.

## pub.dev

Set `documentation` in `pubspec.yaml` to:

`https://mehery-soccom.github.io/PushApp-Flutter/`

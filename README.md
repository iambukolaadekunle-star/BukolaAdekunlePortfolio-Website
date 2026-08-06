# Bukola Adekunle — Data Analyst Portfolio (v3)

5 pages: Home, About, Projects, Résumé, Contact. Navy is the dominant color
throughout; beige and gold are supporting/accent colors.

## Before hosting — fill these in

1. **Your bold photo (transparent PNG)** — once you have your background-removed
   cutout ready, add it to `images/profile-cutout.png`. Then in `index.html`,
   find this block in the hero:
   ```html
   <div class="photo-bold-wrap">
     <div class="photo-glow"></div>
     <div class="avatar-fallback">BA</div>
     <div class="photo-name">Bukola Adekunle</div>
   </div>
   ```
   Replace the `avatar-fallback` line with:
   ```html
   <img src="images/profile-cutout.png" class="photo-bold" alt="Bukola Adekunle">
   ```
   The gold glow and name badge stay — they're separate elements, already styled
   to sit behind/below the photo.

2. **Your intro video** — add it to `videos/intro.mp4` (must be a real `.mp4`
   file). It's already wired up in `index.html`'s video section.

3. **Email & LinkedIn** — in `contact.html`, replace `your.email@example.com`
   and the `href="#"` LinkedIn link with your real ones.

4. **More projects later** — open `projects.html`, find the
   `<!-- Placeholder for future projects -->` comment near the bottom of the
   case-study grid, and add new `.card.case-card` blocks above it (copy an
   existing one as a template).

## Design notes
- **Colors**: navy is the page background everywhere (nav, hero, footer, and
  alternating sections); beige is used only for card/panel surfaces so text
  stays readable; gold is the accent for buttons, numbers, and highlights.
- **Hero visuals**: a soft gradient plus a low-opacity decorative bar/line/donut
  chart graphic sit behind the text for visual interest — not meant to be
  read literally, just texture.
- **The "running query" animation** is no longer inside the hero (it used to
  make the page reflow as it typed). It's now a small fixed badge in the
  bottom-right corner of every page — since it's fixed-position, it floats
  over the page and can never push other content around.

## Folder structure
```
da-site/
├── index.html      (Home)
├── about.html
├── projects.html
├── resume.html
├── contact.html
├── css/styles.css
├── js/script.js     (nav, active-link highlight, floating query badge)
├── js/contact.js     (form validation)
├── images/           (put profile-cutout.png here)
├── videos/           (put intro.mp4 here)
└── assets/Bukola_Adekunle_Resume.pdf
```

## Hosting (GitHub Pages via GitHub Desktop — recommended)
1. Create a repo (e.g. `data-analyst-portfolio`).
2. In GitHub Desktop: File → New Repository → point it at this folder's contents → Publish (uncheck "private").
3. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. Live at: `https://<your-username>.github.io/data-analyst-portfolio/`

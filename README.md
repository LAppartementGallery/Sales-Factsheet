# L'Appartement — Sales Factsheet

Print-ready A4 template for the **single-work sales factsheet** L'Appartement
(Geneva) sends to a buyer ahead of the invoice. One work per document: the work
image and commercial fiche on page 1, provenance and current location on page 2,
plus optional image pages.

It is a clean fork of the L'Advisory editorial system — the same austere
foundation (Inter, pure black on white, hierarchy from type and space, no icons
or decoration) with one brand flourish: the gold L'Appartement lockup on page 1.

---

## Quick start

1. Open `index.html` in any modern browser.
2. **File → Print → Save as PDF.** Choose A4, margins **None**, and enable
   "Background graphics". The result is a print-perfect factsheet.

No build step, no dependencies. It is plain HTML + CSS.

---

## Create a new factsheet

1. Copy `index.html` to a new file, e.g. `factsheets/artist-title.html`
   (keep the relative paths to `styles.css`, `assets/`, and `fonts/` correct).
2. **Page 1 — fiche.** Edit the six fields in `.fs-fiche`:
   artist · *title, year* · medium · dimensions (cm) · dimensions (in) ·
   `Price (excl. VAT): 000’000 CUR`. Prices use the Swiss apostrophe
   separator (`400’000 USD`, `257’125 GBP`).
3. **Images.** Replace each grey `.fs-placeholder` block with
   `<div class="fs-figure"><img src="path/to/work.jpg" alt="…"></div>`.
   Use high-resolution photographs (min. 2000 px on the long edge). 2D works
   detoured to white; 3D works keep their studio background.
4. **Page 2.** Edit the `Provenance` entries (institutions wrapped in
   `<strong>`) and the `Current Location of the Artwork` line.
5. **More image pages.** Duplicate a `.page` section and drop in placeholders
   or images. Every page keeps the footer; the gold logo stays on page 1 only.

---

## Structure

```
index.html        ← the factsheet template (sample: Danielle McKinney)
styles.css        ← print-first A4 stylesheet + brand tokens
assets/
  logo-gold.svg   ← L'Appartement lockup in gold (#ae956a)
fonts/
  InterVariable.woff2
  IvyMode-Regular.ttf
```

---

## Brand rules

- **Format** — A4 portrait, 210 × 297 mm, 18 mm editorial margin.
- **Type** — Inter for everything (variable, loaded locally).
- **Colour** — `#010101` text on `#ffffff`. Gold `#ae956a` for the page-1
  lockup only.
- **Footer** — appears on every page, centred at the bottom:
  > L'APPARTEMENT BY THEA MONTAUTI d'HARCOURT LYGINOS
  > Rue Pierre Fatio 5, 1204 Geneva, Switzerland · M : thea@lappartement-geneve.com
  > P : +41 79 655 16 99 · WEB : www.lappartement-geneve.com
  > IG : lappartement_art_gallery
- **No** gradients, icons, emoji, rounded cards, or borders used as decoration.

---

## Publish to GitHub

From the unzipped folder:

```bash
git init
git add .
git commit -m "L'Appartement sales factsheet template"
git branch -M main
git remote add origin https://github.com/<your-account>/<repo-name>.git
git push -u origin main
```

---

## License

© L'Appartement — Gallery & Advisory. All rights reserved. The gallery name,
logo, and contact details are brand assets and are not licensed for reuse. See
`LICENSE`.

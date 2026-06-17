# L'Appartement — Sales Factsheet Design System

Design system for **L'Appartement — Gallery & Advisory** (Geneva), scoped to the
**single-work Sales Factsheet**: the print-ready A4 PDF the gallery sends to a
buyer ahead of the invoice. One artwork per document, never multiple.

It is a **deliberately tiny** system. One font (Inter), two colours (black on
white) plus one gold brand flourish, no icons, no decoration, no rounded cards.
Hierarchy comes from type + space only. White space is part of the design.

---

## The factsheet

A factsheet is a short A4 portrait document:

- **Page 1 — Work + fiche.** The gold L'Appartement lockup (this page only),
  the work image (HD), then the fiche: artist / *title, year* / medium /
  dimensions (cm + in) / price. Price uses the Swiss apostrophe separator
  (`400'000 USD`).
- **Page 2 — Provenance + location.** `Provenance` (gallery / institution names
  set bold) and `Current Location of the Artwork`. Text and an optional
  supporting image are left-aligned to the margin.
- **Further pages — additional views.** One image per page, centred. Duplicate
  the page-3 section for each extra view; delete it if there are none.
- **Every page** carries the gold gallery footer, centred at the bottom.

**Intake — what to collect per work:** artist, title, year, medium, dimensions
(cm + in), price + currency; ordered provenance (institutions bold); current
location; the HD main image plus any supporting views (each its own page).

---

## Templates

### Sales Factsheet — `templates/sales-factsheet/`

The factsheet is a Design Component (`SalesFactsheet.dc.html`) that pulls the
font, colours and tokens from this design system via `ds-base.js`;
factsheet-only page geometry, the gold lockup, placeholders and print rules live
in `factsheet.css`. To produce a real factsheet: replace the placeholder text
and swap the grey image placeholders for `<img>` tags, then **File → Print →
Save as PDF** (A4, margins None, "Background graphics" on).

---

## Sources used to build this kit

Built from the public reference repos under the
[LAppartementGallery](https://github.com/LAppartementGallery) org. Explore them
to build richer, more faithful designs against this brand:

- **Sales Factsheet** (primary source) —
  <https://github.com/LAppartementGallery/Sales-Factsheet>
  The print-ready A4 single-work factsheet — `styles.css`, `InterVariable.woff2`,
  the gold L'Appartement lockup, the Danielle McKinney sample, and the embedded
  design-system folder this project was imported from.
- **L'Advisory presentation pipeline** —
  <https://github.com/LAppartementGallery/L-Advisory>
  The gallery's broader editorial advisory system (multi-page collector
  presentations). The factsheet is a clean fork of its austere foundation.

Other repos under the same org (`Previews`, `CD-Factsheet`, `Factsheet`,
`Template-L-Advisory`, `L-Advisory-v2/V3`) are earlier/parallel projects.

---

## Index — what's in this folder

```
README.md                   ← you are here
SKILL.md                    ← Claude / Agent Skill entry point
styles.css                  ← global entry stylesheet (one @import)
colors_and_type.css         ← CSS vars + semantic type classes
fonts/                      ← InterVariable.woff2
assets/logos/               ← lappartement-gold.svg (page-1 lockup),
                              lappartement.svg (black wordmark)
preview/                    ← Design System cards (Type, Colors, Spacing,
                              Components, Brand)
templates/sales-factsheet/  ← the Sales Factsheet Design Component
```

---

## Brand context

**L'Appartement Gallery** is a Geneva fine-art gallery. The works on a factsheet
are not necessarily the gallery's own holdings — they are sourced selections
proposed to a specific collector for a specific work. The voice and typography
reflect that: this is a commercial document for a literate collector, set with
the restraint of an auction-catalogue entry.

---

## Content fundamentals

The voice is **editorial, third-person, factual**. Never marketing copy, never
"you", never imperatives. It reads like a catalogue entry or a museum wall label.

- **Voice**: third person, declarative. No "we", no "you", no "discover",
  no "explore", no "insights".
- **Tone**: measured, considered, slightly formal. Specific facts beat
  adjectives — "Acrylic on canvas, 61 × 45.7 cm" not "a striking work".
- **Casing**: sentence case for the fiche (artist line, title). ALL CAPS is
  reserved for the footer org line only. Page-2 headings (`Provenance`,
  `Current Location of the Artwork`) are sentence case, set in Inter Light at
  the artist-line size — never a wide-tracked uppercase label.
- **Numerals**: dimensions in cm and inches both given. Prices written with the
  Swiss apostrophe thousands separator and currency at the end: `400'000 USD`,
  `257'125 GBP`. Always prefixed `Price (excl. VAT):`.
- **Italics**: the work title on the fiche (`*Tell Me More*, 2021`) and any
  caption.
- **Bold**: only institution / gallery names inside provenance and location
  entries. Bold is a hierarchy marker, not an emphasis marker.
- **Dashes**: em dash (—) for editorial pauses, en dash (–) for ranges, never a
  hyphen-minus. Spell out "and"; avoid "&" in body text.
- **Emoji**: never. Forbidden by the system.
- **Forbidden vocabulary**: "Insights", "Discover", "Explore", "Unlock",
  "Curated", "Journey", "Story". If a line could appear on a marketing landing
  page, rewrite it.

---

## Visual foundations

### Type

- **Inter** does everything — display and body. Variable, SIL OFL licensed
  (free for any use), loaded locally so print and screen match. The upstream
  system accepts Helvetica Neue LT Pro / Inter Display as licensed substitutes;
  never Helvetica direct (Adobe license is not redistributable).
- Hierarchy is created by **size + weight + space** only. The fiche is almost
  entirely **Inter Light (300)**; only the **price line** and **footer org**
  step up to **Medium (500)**.
- No second typeface anywhere. (The upstream multi-page presentation used an
  ornamental serif for giant quote marks — the factsheet has no quote page, so
  it carries none of that.)

### Color

The palette is the whole system, and it is small.

| Token        | Hex       | Use                                       |
| ------------ | --------- | ----------------------------------------- |
| `--fs-black` | `#010101` | All text and titles                       |
| `--fs-white` | `#ffffff` | Page background                           |
| `--fs-gold`  | `#ae956a` | L'Appartement lockup (page 1) + footer    |

Plus three placeholder greys (`#e9e7e3` fill, `#9a948b` text, `#d3cfc8` border)
used only for the grey image placeholders shown until a real photograph is
dropped in. There is **no accent colour** and no per-document palette.

### Imagery

- **2D works**: detoured to pure white. Frame kept if it is part of the work.
- **3D works** (sculptures, objects): retain the original neutral studio
  background — do not detour to white, it kills the spatial reading.
- **Resolution**: HD photographs, min. 2000 px on the long edge.
- **Color cast**: warm-neutral. Avoid bright web saturation; the document goes
  to print.
- **Page 1** holds the main work image, capped to ~100 mm wide / 140 mm tall and
  centred above the fiche. Additional views get their own centred image page
  (up to 150 mm wide).

### Spacing & layout

- **Format**: A4 portrait, 210 × 297 mm.
- **Margin**: a uniform **18 mm** editorial margin on every page.
- **Footer band**: **26 mm** reserved at the bottom of every page for the gold
  gallery footer.
- **No page numbers**, no running header.
- **Grid**: visual, not enforced — consistent margins + object centring rather
  than a numeric column grid.

### Borders, shadows, gradients, animation

- **None.** No gradients, no glassmorphism, no marketing drop shadows, no
  rounded-corner cards, no decorative dividers, no rules used as separators.
- The system is **print-first** — animations don't exist in the deliverable.
  In any on-screen recreation, keep transitions imperceptible (≤200 ms ease-out
  cross-fade). No bounces, slides, or parallax.

### Hover / press states

These don't exist in the print pipeline. The factsheet has no buttons. For any
screen recreation, hover does nothing (or at most a 1% page-background darken);
the type stays at `#010101`.

### Transparency, blur, capsules, protection gradients

- **Transparency**: never on text; imagery is opaque.
- **Blur**: never. **Capsules / pills**: never.
- **Protection gradients** under text on imagery: forbidden. Re-crop instead.

### Corner radii & cards

- **0** everywhere — square corners on images, blocks, page edges. The system is
  anti-card: a "card" is just an image at its natural proportions on white with
  type set below it. No border, no shadow, no radius, no fill.

---

## Iconography

**There is no icon system.** No icons, emoji, social glyphs, or unicode
pictograms appear anywhere. The only graphic mark is the gold L'Appartement
lockup (`assets/logos/lappartement-gold.svg`) on page 1; a black wordmark
(`assets/logos/lappartement.svg`) is kept as a brand asset. If a future page
genuinely needs a glyph, substitute the closest neutral mark from
[Lucide](https://lucide.dev) at 1.5 px stroke and **flag it for review** — this
is a system that says "no" by default.

---

## Caveats / things we don't know

- **Licensed display cuts**: the upstream prompt mentions Inter Display /
  Helvetica Neue LT Pro as the "true" display face. We ship plain Inter because
  it's redistributable. Swap the licensed cuts into `fonts/` and update
  `colors_and_type.css` if you have them.
- **Currency formatting**: the sample uses the Swiss apostrophe separator
  (`400'000`). The upstream README also shows an English comma form
  (`430,200 USD`) in some contexts — confirm the house style per document.

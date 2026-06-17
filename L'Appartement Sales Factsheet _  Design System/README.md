# L'Advisory Design System

Design system for **L'Appartement — Gallery & Advisory** (Geneva). L'Advisory
is the gallery's editorial advisory arm; this system defines the look of the
print-ready A4 PDF presentations that accompany every artwork proposal sent
to collectors.

It is a **deliberately tiny** system. Two fonts, two colors (plus one
artwork-derived accent per presentation), no icons, no decorations,
no rounded cards. Hierarchy comes from type + space + color, never from
boxes, borders, or shadows. White space is part of the design.

---

## Templates

### Sales Factsheet — `templates/sales-factsheet/`

The single-work document sent to a buyer before the invoice. One artwork per
file, never multiple.

- **Page 1** — gold L'Appartement lockup (this page only), the work image (HD),
  then the fiche: artist / *title, year* / medium / dimensions (cm + in) /
  price. Price uses the Swiss apostrophe separator (`400'000 USD`).
- **Page 2** — `Provenance` (gallery / institution names set bold) and
  `Current Location of the Artwork`. Text and an optional supporting image are
  left-aligned. Same type sizes as the page-1 fiche; subtitles a notch larger.
- **Further pages** — one image per page, centred. Duplicate the page-3 section
  for each extra view; delete it if there are none.
- **Every page** — the gold gallery footer, centred at the bottom.

The template is a Design Component (`SalesFactsheet.dc.html`) that pulls fonts,
colours and the logo from this design system via `ds-base.js`; factsheet-only
layout lives in `factsheet.css`. To produce a real factsheet: replace the
placeholder text and swap the grey image placeholders for `<img>` tags, then
print to A4 PDF.

**Intake — what to collect per work:** artist, title, year, medium, dimensions
(cm + in), price + currency; ordered provenance (institutions bold); current
location; the HD main image plus any supporting views (each its own page).

---

## Sources used to build this kit

This kit was reverse-engineered from the public reference repo:

- **L'Advisory presentation pipeline** —
  <https://github.com/LAppartementGallery/L-Advisory>
  Contains the canonical `print.css`, the `IvyMode-Regular.ttf` ornamental
  font, both logos (`ladvisory.svg`, `lappartement.svg`), the design-system
  docs and the Jean Arp / Poupée Borgne sample presentation that anchors the
  baseline.

Other repos under the same org (`CD-Factsheet`, `Factsheet`) were not pulled
in — they appear to be earlier/parallel factsheet projects. If you need them,
browse them directly on GitHub.

---

## Index — what's in this folder

```
README.md                   ← you are here
SKILL.md                    ← Claude / Agent Skill entry point
colors_and_type.css         ← CSS vars + semantic type classes
fonts/                      ← IvyMode-Regular.ttf
assets/logos/               ← ladvisory.svg, lappartement.svg
reference/                  ← original print.css from the upstream repo
sample/jean-arp/            ← the canonical baseline presentation
                              (assets + content .txt files)
preview/                    ← Design System cards (registered for review)
ui_kits/presentation/       ← React recreations of each page in the canonical
                              sequence — cover, biography, quote, work,
                              closeup, detail, notes, end. Plus index.html
                              showing the whole sequence as a click-through.
slides/                     ← Standalone HTML sample per page type. Each
                              renders A4 portrait scaled to fit a 16:9 card.
templates/                  ← Reusable starting points.
  sales-factsheet/          ← Single-work A4 Sales Factsheet (work + fiche,
                              provenance + location, optional image pages).
                              Gold L'Appartement lockup on page 1, gold gallery
                              footer on every page.
```

---

## Brand context

**L'Appartement Gallery** is a Geneva fine-art gallery. **L'Advisory** is the
advisory practice that surrounds it — sourcing works for collectors from
private collections and third parties. The presentations are not for the
gallery's own holdings; they are sourced selections proposed to a specific
collector for a specific work or set of works.

Every presentation follows the same canonical sequence:

1. **Cover** — full-bleed detail of the work, L'Advisory mark top centre,
   artist name bottom right (first name light, family name bold).
2. **Biography** — L'Appartement mark top left, artist lockup left, portrait
   wrapped by 3–4 bio paragraphs.
3. **Quote** — full accent-color page, oversized Ivy Mode quotation marks.
4. **Work + commercial sheet** — work centered, fiche bottom right (artist,
   title, year, medium, dimensions, optional price).
5. **Close-up / exhibition view** — detail of the work + italic caption.
6. **Provenance / Exhibitions / Literature** — three sections, institutions
   set bold.
7. **Note on Work** (optional) — justified paragraphs.
8. **End** — L'Advisory logo in beige `#cec2ba`, disclaimer in same beige.

Multi-work presentations repeat pages 4–7 per work and may insert a second
quote page between cycles for breathing room.

---

## Content fundamentals

The voice is **editorial, third-person, art-historical**. Never marketing
copy, never "you", never imperatives. It reads like an auction catalogue
entry or a museum wall label written for a literate collector.

- **Voice**: third person, declarative, present or past tense. No "we",
  no "you", no "discover", no "explore", no "insights".
- **Tone**: measured, considered, slightly formal. Specific historical
  facts beat adjectives. "Founding member of the Dada movement in Zurich
  during the 1910s" rather than "groundbreaking pioneer".
- **Casing**: title case for proper nouns and movement names. ALL CAPS
  reserved for: artist lockups, fiche headings (artist line + title line),
  section labels (PROVENANCE, EXHIBITIONS, LITERATURE), quote signature.
  Everything else is sentence case.
- **English**: British orthography is acceptable ("favour", "centred").
  Be consistent within a presentation.
- **Numerals**: dimensions cm and inches both given. Prices written
  `430,200 USD` (English thousands separator, currency at the end).
- **Italics**: artwork titles inside body text. Foreign-language terms
  (`*Poupée borgne*`, `*human concretions*`). Closeup captions are wholly
  italic.
- **Bold**: only on the first "Artist Name (years)" run in the biography,
  and only on institution / gallery names inside provenance / exhibition /
  literature entries. Bold is a hierarchy marker, not an emphasis marker.
- **Dashes**: em dash (—) for editorial pauses, en dash (–) for ranges
  (`1886–1966`), never a hyphen-minus. Avoid "&" in body text; spell out
  "and".
- **Emoji**: never. Forbidden by the system.
- **Filler vocabulary forbidden**: "Insights", "Discover", "Explore",
  "Unlock", "Curated", "Journey", "Vibe", "Story". If a sentence reads
  like it could appear on a marketing landing page, rewrite it.

### Examples (verbatim from the baseline)

- Biography opener: *"Jean Arp (1886–1966), also known as Hans Arp, was a
  pioneering French-German artist whose work played a central role in the
  development of Dada and Surrealism."*
- Closeup caption: *"The present work is the only unique stone version of
  Poupée borgne of this scale. A bronze edition of three plus one artist's
  proof was cast in the late 1960s–early 1970s..."*
- Disclaimer: *"The artworks presented in this presentation are not owned by
  L'Appartement – Gallery & Advisory. The gallery does not hold exclusivity
  over them; this selection of artworks is sourced from a third party,
  including private collections and other professional art entities."*

---

## Visual foundations

### Type

- **Inter** does both display and body. Geometric, SIL OFL licensed (free
  for any use). The upstream repo also accepts Helvetica Neue LT Pro or
  Inter Display as substitutes — never Forma DJR, never Helvetica direct
  (Adobe license is not redistributable).
- **Ivy Mode** is used *only* for the giant `"` quotation marks on the
  quote page. Loaded as a local `@font-face` from `fonts/IvyMode-Regular.ttf`.
- Hierarchy is created by three levers only: **size + weight + spacing**.
  Never via borders, framed boxes, drop shadows, or background tints.

### Color

The palette is intentionally austere.

| Token            | Hex       | Use                              |
| ---------------- | --------- | -------------------------------- |
| `--la-black`     | `#010101` | All body text, all titles, lockups |
| `--la-white`     | `#ffffff` | Page background                  |
| `--la-cover-fb`  | `#d8d6d2` | Fallback while cover image loads |
| `--la-beige`     | `#cec2ba` | End-page logo + disclaimer text  |
| `--la-grey-caption` | `#888888` | Exhibition-view caption only  |

Plus one **accent color** per presentation, injected via
`--accent-color` and `--accent-text-color`. The accent must be **derived
from the dominant tones of the artwork** — never picked arbitrarily —
and desaturated 15–25% before use. Light accents pair with `#010101`
text; dark accents pair with an off-white like `#f5f1ea`. The accent
appears on **one page only**: the quote page.

### Imagery

- **2D works**: detoured to pure white. Frame kept if it is part of the
  work.
- **3D works** (sculptures, objects): retain the original neutral studio
  background. Do not detour to white — it kills the spatial reading.
- **Cover**: full-bleed detail or full view of the main work. Crops must
  not destroy the motif's legibility.
- **Color cast**: warm-neutral. The Arp baseline is near-monochrome
  granite on a soft cool-grey ground — that's the temperature target.
  Avoid bright web saturation; documents go to print.
- **Proportional scaling across works**: a 200×150 cm painting must
  visually dominate a 30×40 cm work *by a small margin* (10–30 px) when
  they appear in the same presentation. Don't fill the page systematically.
- **Artist portraits**: kept as-is, often historical B&W, never colour-graded.

### Spacing & layout

- **Format**: A4 portrait, 210 × 297 mm.
- **Editorial margins**: ~12 mm baseline; most pages use 14–18 mm.
- **Text wrap**: 25 px inner padding around floated objects (portrait,
  artist name lockup wraps at 30 px).
- **Body text**: justified with last line flush left (`text-align: justify`,
  flag-left allowed for titles + captions).
- **No page numbers**, no running footer.
- **Headers** appear only on biography (L'Appartement top-left) and work
  pages (L'Appartement top-left). The L'Advisory mark appears only on the
  cover (centered top) and the end page (centered, beige).
- **Grid**: visual, not enforced. The system relies on consistent margins
  + object centering rather than a numeric column grid.

### Borders, shadows, gradients, animation

- **None of the above.** No gradients, no glassmorphism, no marketing drop
  shadows, no rounded-corner cards, no decorative dividers, no lines used as
  separators.
- The system is **print-first**, so animations don't exist in the canonical
  deliverable. When recreating this look on screen (e.g. for the UI kit's
  click-through), keep transitions imperceptible: 200ms ease-out cross-fade
  is the most you should ever do. No bounces, no slides, no parallax.

### Hover / press states

These don't exist in the print pipeline. For screen recreations:

- **Hover**: nothing visible, or a 1% darken of the page background. Never a
  color shift on the type itself — the type is `#010101` and stays there.
- **Press**: nothing. The system has no buttons.

### Use of transparency, blur, capsules, protection gradients

- **Transparency**: never on text. Imagery is opaque.
- **Blur**: never.
- **Capsules / pill shapes**: never.
- **Protection gradients** under text on imagery: forbidden. If the cover
  image fights the artist lockup, choose a different crop or use the
  fallback background `#d8d6d2`. Don't gradient-protect.

### Corner radii

- **0** everywhere. Square corners on images, blocks, page boundaries.

### Cards

The system is anti-card. A "card" here is just: an image at its natural
proportions, set on white, with type below it set with proper spacing. No
border, no shadow, no radius, no fill.

---

## Iconography

**There is no icon system.** None of the pages contain icons, emoji, social
glyphs, or unicode pictograms. The only graphic marks are:

- `assets/logos/lappartement.svg` — L'Appartement wordmark, used at top-left
  of biography and work pages.
- `assets/logos/ladvisory.svg` — L'Advisory wordmark, used centered at top
  of the cover and centered on the end page.
- Both logos are recolored at build time by the upstream Python script,
  which strips any embedded `<style>` and applies a uniform `fill=` to all
  paths. In this kit, we use `currentColor` via a small SVG wrapper so the
  same source file can render black on the cover and beige `#cec2ba` on the
  end page.
- The only ornamental glyphs are the giant `"` open / close quotation marks
  on the quote page, set in Ivy Mode at 140pt.

If a future page genuinely needs a glyph (e.g. an arrow on a back-cover
contents page), substitute the closest neutral mark from
**[Lucide](https://lucide.dev)** at 1.5px stroke, but **flag the addition
for review** — this is a system that says "no" by default.

---

## Caveats / things we don't know

- **Multi-work presentations**: the upstream system supports them by
  repeating pages 4–7. We've modelled the structure but haven't built a
  multi-work sample.
- **Real Inter Display weights**: the upstream prompt mentions Inter Display
  / Helvetica Neue LT Pro as the "true" display face. We use plain Inter
  via Google Fonts because it's redistributable. If you have access to the
  licensed display cuts, swap them in `fonts/` and update `colors_and_type.css`.
- **Accent palette library**: the workflow doc mentions building a
  `palettes.md` over time. Not seeded here.

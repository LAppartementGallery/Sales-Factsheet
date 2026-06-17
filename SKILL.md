---
name: lappartement-factsheet-design
description: Use this skill to generate well-branded interfaces and assets for L'Appartement Gallery's single-work Sales Factsheet — the print-ready A4 PDF sent to a buyer ahead of the invoice. Contains essential design guidelines, colours, type, fonts, the gold lockup, and the factsheet template for prototyping editorial fine-art documents.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

This skill captures the **Sales Factsheet** system used by L'Appartement Gallery (Geneva) for the single-work document sent to a buyer ahead of the invoice. It is deliberately tiny: one font (Inter), black on white, one gold brand flourish, no icons, no decoration. One artwork per document, never multiple.

If creating visual artifacts (a factsheet, a mock, a throwaway prototype), copy assets out of `assets/` and `fonts/`, start from `templates/sales-factsheet/`, and create static HTML files for the user to view. Print to A4 PDF (margins None, background graphics on) for the real deliverable.

If working on production code, copy assets and read the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask what they want to build, gather the intake fields (artist, title, year, medium, dimensions in cm + in, price + currency, provenance with institutions bold, current location, the HD work image + any extra views), and act as an expert editorial designer who outputs HTML artifacts _or_ production code.

## Quick reference

- **Format**: A4 portrait, 210 × 297 mm. Uniform 18 mm margin. 26 mm reserved footer band.
- **Type**: Inter for everything — Light (300) for the fiche and entries, Medium (500) for the price line and footer org. No second typeface.
- **Colour**: `#010101` text on `#ffffff`. Gold `#ae956a` for the page-1 lockup and the gallery footer only. No accent colour.
- **Document**: Page 1 — gold lockup + work image + fiche (artist / *title, year* / medium / dimensions cm + in / price). Page 2 — Provenance (institutions bold) + Current Location. Further pages — one centred image each. Gold footer on every page.
- **Price**: Swiss apostrophe separator, currency at the end, e.g. `Price (excl. VAT): 400'000 USD`.
- **Anti-slop**: no gradients, no icons, no emoji, no rounded cards, no borders, no second typeface, one work per file, no page numbers, no protection gradients.

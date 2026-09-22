# Populate the Directory page with the brand list

## Scope
- Replace the "Coming Soon" placeholder on /directory with a real, searchable brand directory containing the 11 brands provided.
- Keep the existing centered header ("Directory" title, gold divider, subheading), search bar, and filter pill styling exactly as they are.
- Keep the "New" badge with gold shimmer next to Directory in the nav (already in place).

## Data
- Add the 11 brands (BySimran, Kaju Studios, Amrapali, Kavya Potluri, Shahi Qala, Sabyasachi, Misho Designs, Amama, Outhouse Jewellery, Baka, Bhavya Ramesh) as a typed data file `src/data/brands.ts` with name, location, category (Based in India / Diaspora Brand), jewelry types, description, and website URL.
- Rewrite the descriptions to remove every "—" (em dash) per the project rule, keeping the meaning intact.
- Websites link out (target _blank, rel noopener) to the given domains.

## Page changes (src/routes/directory.tsx)
- Filter pills: add "Fine Jewelry" to the existing list (All, Based in India, Diaspora Brand, Traditional, Contemporary, Bridal, Fine Jewelry). Category filters match the brand's category; style filters match its jewelry-type tags.
- Search filters by brand name or jewelry type (case-insensitive), combined with the active pill filter.
- Card grid in 3 columns (2 on tablet, 1 on mobile), left-aligned content inside cards:
  - Logo placeholder strip at the top (~80px, warm cream #E8D8B0) with a centered square logo placeholder.
  - Brand name as heading, category badge (Diaspora / India) at top right.
  - Location in small uppercase gold text (.label-gold style).
  - Short description in the body font.
  - Jewelry type tags as small gold pills.
  - "Visit website" link in gold with an arrow icon.
- Remove the "Coming Soon" diamond section as the default view; show it (or a short text empty state) only when a search or filter returns no results.
- Update the subheading so it no longer says "launching soon" (it is live now), e.g. keep "A curated space celebrating jewelry makers across India and its diaspora."

## Styling
- Use only existing semantic tokens (--ivory, --gold, --gold-border, --ink, --text-secondary, --text-muted) and fonts (font-display, font-serif) so the page matches the rest of the site. No em dashes anywhere in user-facing text.

## Verification
- Build passes; check /directory in the preview at desktop and mobile widths.
- Confirm search ("kundan" by type, "Sabyasachi" by name), each filter pill, combined search + filter, the empty state, and that website links open correctly.

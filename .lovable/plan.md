# Apply the Jewels of India design system

## Scope
- Replace the current cream, gold, border, and text colors with the supplied palette across every existing page, popup, map control, card, and loading/splash state.
- Use Masakali for display and hero text, with Philosopher for headings and body copy.
- Standardize small labels to uppercase 10px type, 2px letter spacing, and the gold accent.
- Preserve all current content, layouts, navigation, animations, and behavior.

## Implementation
- Define reusable semantic color and typography tokens in the global stylesheet, including appropriate fallbacks for the Masakali display font.
- Load Philosopher through the document head and connect the existing `font-serif` / `font-sans` usage to the new typography system to minimize markup changes.
- Replace remaining hardcoded legacy colors in page backgrounds, the interactive map, image states, cards, borders, and diamond animation with the new tokens.
- Normalize visible label classes where they currently use larger sizes or wider letter spacing.

## Verification
- Check the homepage, Directory, one state extension page, and an open state popup on desktop and mobile widths.
- Confirm readable contrast, font loading, preserved interactions, and no layout overlap.

# HRG design system

- Reading: a premium clinic consultation site for prospective patients, used on mobile and desktop; light and roomy.
- Palette: client-owned Porcelain `#F5F1E8`, Forest Ink `#23382F`, and Antique Brass `#B49A6C`.
- Colour command: not generated; the project brief explicitly fixes the three brand values. Tonal variants use `color-mix()` from those tokens.
- Porcelain is the editorial ground, Forest Ink is text and the philosophy/footer flood, and Brass is reserved for rules and selected emphasis.
- Mode: light only. The warm editorial identity and clinical photography are designed and measured for this ground.
- Display family: Cormorant Garamond, because the brand brief specifies its calligraphic editorial character.
- UI family: DM Sans, because the brand brief specifies a quiet, legible counterpoint for controls and body copy.
- Type scale: 11–20px UI/body, 28–40px tertiary display, 46–116px section/hero display using fluid `clamp()`.
- Spacing: 4px base; 8–12px inside groups, 20–48px between controls/content, 84–152px between sections.
- Radius: 0 throughout. Crisp edges suit the Swiss-editorial direction and avoid decorative card styling.
- Icons: Lucide, 1.5px stroke, used only for navigation direction and close/menu controls.
- Motion: 120–240ms for control feedback and 300–560ms for the single hero handoff; transform/opacity only.
- Reduced motion: slides become brief fades and CSS removes incidental movement.
- Photography: original AI-generated demo editorial imagery, pending replacement or approval before launch.
- Exception: Oxfords discourages cream grounds and the selected fonts as generic defaults; both are explicit client-brief requirements here.

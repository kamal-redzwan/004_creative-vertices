# Creative Vertices Design System (DESIGN.md)

## Brand Identity & Direction
- **Product**: Creative Vertices, a code-driven digital template storefront powered by Astro v7, Tailwind CSS v4, and EmDash CMS.
- **Audience**: Frontend engineers, design technologists, independent studios, and SaaS founders who evaluate templates by source architecture, DOM weight, and typographic rigor.
- **Visual Language**: Cloudflare technical minimalism merged with GetAstroThemes navigation, JustStart.now catalog filtering, and XocoThemes conversion structure.
- **Dial**: `ENERGY 2 / RHYTHM 3 / MOTION 2`

## Color Palette (2 Core Neutrals + 1 Deliberate Accent)
- **Dark Surface (Default)**: `#0A0B0E` primary canvas, `#111318` elevated panel surface, `#181B22` interactive hover surface, `#F5F6F8` stark primary text (18.9:1 on `#0A0B0E`), `#A3AAB8` secondary text (8.4:1 on `#0A0B0E`).
- **Light Surface (Theme Toggle)**: `#F7F6F2` warm technical paper canvas, `#EFECE6` panel surface, `#0E1015` ink primary text (17.5:1 on `#F7F6F2`), `#454B57` secondary text (7.8:1 on `#F7F6F2`).
- **Signature Vibrant Accent**: `#FF5500` (International Signal Orange) in dark mode (5.12:1 against `#0A0B0E` for large/UI graphics, `#FF6A1A` 5.95:1 on `#0A0B0E` for accent text, `#111318` text on `#FF6A1A` solid buttons at 6.45:1) and `#C83E00` in light mode (5.44:1 on `#F7F6F2`).

## Typography
- **Geometric Sans-Serif**: `'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif` (self-hosted system-safe stack with geometric proportions for crisp technical headlines and dense UI metadata).
- **Tabular / Technical Monospace**: `'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace` (strictly for template counts, prices, page counts, schema keys, and version identifiers).

## One-Line Purpose Record (R-31)
- **Color Palette**: High-contrast charcoal/white with a single signal-orange vertex accent focuses visual attention on interactive coordinates, active filter states, and primary checkout actions without decorative gradients.
- **Continuous Dashed Container Borders**: Vertical dashed structural rails (`border-l border-r border-dashed`) establish a continuous blueprint coordinate frame that binds the header, storefront split-grid, and conversion sections into one unified architectural column.
- **Corner Vertex Square on Cards**: Every template, benefit, and bundle card carries a 7x7px solid vertex square intersecting its top-right corner to visually echo vertex geometry and mark interactive or structural boundaries.
- **Sticky Glassmorphism Navbar (Dose = 1)**: `backdrop-blur-md` is applied exclusively to `NavBar.astro` so scrolling catalog cards remain subtly legible beneath the persistent header without adding blur anywhere else on the page.
- **25% / 75% Storefront Split & Mixed 2-Col / 3-Col Grid**: The left 25% rail keeps PRICE and INDUSTRY taxonomy filters and live tabular counts stationary while the 75% main grid gives flagship featured templates 2-column visual prominence above 3-column catalog rows.
- **Asymmetric Section Rhythm (RHYTHM 3)**: Sections progress from a technical specification hero, to a 25/75 interactive catalog, to an asymmetric 4-column architectural proof matrix, to a full-width high-contrast bundle schematic banner, and finally a 2-column split FAQ accordion.
- **Snappy Hover & Height Transitions (MOTION 2)**: Card hover transforms (`-translate-y-0.5` and corner vertex scale) provide immediate spatial feedback on selectable items, while the `<cv-faq>` custom element animates accordion height cleanly and respects `prefers-reduced-motion`.

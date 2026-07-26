# VECTORS 2026 — Design System (Tech Brutalist)

A high-contrast, technical grid-based design system tailored for **VECTORS 2026**, a premium tech/design conference.

---

## 🎨 Palette (Chalk & Safety Orange)

- **Canvas Background**: `bg-zinc-100` / `#F4F4F5` (Chalk Gray)
- **Surfaces (Cards/Modals)**: `bg-white` / `#FFFFFF` (Pristine Contrast)
- **Vivid Accent**: `bg-orange-500` / `#F97316` (Safety Orange)
- **Accent Glow**: `rgba(249, 115, 22, 0.08)` (Subtle orange hover glow)
- **Text Primary**: `text-zinc-900` / `#09090B` (Slate Black)
- **Text Secondary/Muted**: `text-zinc-500` / `#71717A` (Muted Zinc)
- **Lines/Borders**: `border-zinc-200` / `#E4E4E7` (Thin layout grids)

---

## ✍️ Typography

- **Headings & Event Brand**: `Outfit` (Google Fonts) — a confident, geometric sans-serif with tight tracking and a modern presence.
- **Body & Technical Data**: `Inter` or `Geist` — neutral, clean, and highly legible, allowing data grids and details to read with maximum clarity.

### Type Scale
- **Display (Hero Headline)**: `text-5xl sm:text-7xl lg:text-8xl` (font-extrabold, tracking-tight, uppercase)
- **H1/H2 (Sections)**: `text-3xl sm:text-4xl lg:text-5xl` (font-bold, tracking-tight, uppercase)
- **H3 (Cards)**: `text-lg sm:text-xl` (font-semibold, tracking-snug, uppercase)
- **Body Text**: `text-sm` (font-normal, leading-relaxed, text-zinc-600)
- **Muted/Monospace Labels**: `text-xs font-mono tracking-widest` (for eyebrows, timestamps, and tags)

---

## 📐 Spacing & Grid System

- **Layout Structure**: Visible grid borders (`border-zinc-200`) and tabular dividing lines.
- **Section Padding**: `py-36` (Double standard padding to maintain maximum whitespace and breathing room).
- **Margins & Gap**: `gap-8` (Breathable grids), `gap-16` (Large grid divisions).
- **Cards**: Minimal border radius (`rounded-lg` / `8px`) with soft, low-opacity shadows (`shadow-sm`) or simple 1px borders instead of heavy dropshadows.

---

## ✨ Micro-Animations & Motion

- **State-Free React Interactions**: Mouse tilts and coordinate mappings are updated directly in Refs to prevent React re-renders.
- **Hover Transitions**: `transition-all duration-300 ease-out` with subtle scaling (`hover-scale` at `1.02` max) and boundary highlighting.
- **GSAP Reveal**: Subtly staggered entries using `useGSAP` (`opacity: 0, y: 16` -> `opacity: 1, y: 0`).

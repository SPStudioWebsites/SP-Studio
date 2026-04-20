# Agent Rules

This document defines the operating rules for any agent (human or AI) contributing to this project. It must be read and respected before any code is written.

---

## Goal

- Build a modern, high-converting website for a small creative web agency.
- The site must feel personal, cinematic, minimal, and professional.
- The site exists to generate client inquiries from small businesses, local companies, and creatives.
- Visual polish is important, but conversion is the primary success metric.

---

## Stack

- Next.js (App Router)
- React (functional components and hooks only)
- Tailwind CSS (utility classes only — no inline styles, no CSS modules)
- TypeScript only
- No additional UI libraries unless explicitly approved

---

## Code Rules

- No inline styles (`style={{}}`) — ever.
- No hardcoded hex values outside `tailwind.config.ts`.
- No hardcoded design values if they can be defined in the Tailwind theme (spacing, radius, colors, typography, shadows, z-index).
- All components must be modular and single-responsibility.
- Props must be typed with TypeScript interfaces.
- No logic inside JSX — extract logic to variables, hooks, or helpers.
- Keep components clean, readable, and production-ready.
- Prefer composition over configuration. Small, focused components over large, flag-driven ones.

---

## Architecture Rules

- `src/app/` — route-level files, layouts, metadata, and page composition.
- `src/components/layout/` — structural wrappers (Navbar, Footer, PageWrapper).
- `src/components/sections/` — full-page sections (Hero, Services, About, CTA, Portfolio, Process, Contact).
- `src/components/ui/` — atomic reusable elements (Button, Badge, Card, Icon, Container, SectionHeading).
- `src/lib/` — pure helper functions, constants, and non-UI utilities.
- `src/types/` — shared TypeScript types and interfaces.
- `public/` — optimized static assets only.

A component lives in exactly one place. Section-scoped subcomponents stay inside the section folder; anything reused across sections moves into `ui/`.

---

## Design Direction

- Clean, minimal, cinematic aesthetic.
- Generous whitespace — never cramped.
- Typography-first hierarchy.
- Strong visual rhythm and spacing.
- Subtle motion only (fade, slide, scale).
- No flashy, bouncy, or overly decorative effects.
- Mobile-first responsive design.

---

## Performance Rules

- Follow Next.js best practices for performance (server components by default, client components only when needed).
- Optimize images before adding them to `/public`.
- Use `next/image` for all non-decorative images.
- Avoid unnecessary re-renders — memoize only when measurable.
- Keep the bundle lean — no heavy dependencies for simple tasks.
- Lazy-load non-critical UI below the fold.

---

## Process Rules

- Before writing any component, Stitch planning must be complete for that component.
- Maintain the following planning documents at all times:
  - `stitch/components-plan.md`
  - `stitch/layout-plan.md`
  - `stitch/design-decisions.md`
  - `next-steps/build-plan.md`
- Every new section must map to an entry in `stitch/components-plan.md`.
- Design decisions must be resolved in `stitch/design-decisions.md` before implementation.
- Build order must follow `next-steps/build-plan.md`.

---

## UX / Business Rules

- The site must be conversion-focused, not just visually impressive.
- Each section must support one of: clarity, trust, or inquiry generation.
- Calls to action must be clear, specific, and placed at natural decision points.
- Copy structure must be simple, direct, and easy for non-technical clients to understand.
- Accessibility matters: semantic HTML, sufficient contrast, keyboard navigation, focus states.

---

## Important

- If something is unclear in the design, choose the simplest professional solution.
- Do not invent extra features unless they improve clarity or conversion.
- After completing setup and planning, stop and wait for further instructions.

# SP Studio 3

A modern, cinematic, conversion-focused website for a small creative web agency. Designed to feel personal, minimal, and professional — and to generate client inquiries from small businesses, local companies, and creatives.

---

## Business Goal

The site exists to turn interest into inquiries. Every section supports one of three outcomes:

1. **Clarity** — the visitor immediately understands what the studio offers.
2. **Trust** — the visitor believes the studio can deliver.
3. **Inquiry** — the visitor has a clear, low-friction way to reach out.

Visual craft is in service of those outcomes, not a substitute for them.

---

## Stack

- **Next.js** (App Router)
- **React** (functional components + hooks)
- **Tailwind CSS** (utility-first)
- **TypeScript**

No CSS modules, no inline styles, no additional UI libraries unless explicitly approved.

---

## Development Rules

- No inline styles.
- No hardcoded hex values outside `tailwind.config.ts`.
- No hardcoded design tokens that belong in the Tailwind theme.
- Components must be modular, single-responsibility, and typed with TypeScript interfaces.
- No logic inside JSX — extract to variables, hooks, or helpers.
- Mobile-first responsive design.
- Semantic HTML and accessible interactions by default.

See `agent.md` for the full rule set.

---

## Workflow

1. Plan in `stitch/` before implementing.
2. Resolve open design questions in `stitch/design-decisions.md`.
3. Map each section to an entry in `stitch/components-plan.md`.
4. Follow the phased order in `next-steps/build-plan.md`.
5. Implement. Review. Ship.

Planning is not optional — no component gets built without a Stitch entry.

---

## Setup Commands

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check
npm run typecheck

# production build
npm run build

# start the production server
npm start
```

The dev server runs at `http://localhost:3000`.

---

## Project Structure

```
project-root/
├── agent.md                      # rules every contributor must follow
├── README.md                     # this file
├── stitch/                       # planning docs (pre-implementation)
│   ├── components-plan.md
│   ├── layout-plan.md
│   └── design-decisions.md
├── next-steps/
│   └── build-plan.md             # phased implementation order
├── public/                       # static assets
│   ├── images/
│   └── icons/
└── src/
    ├── app/                      # routes, layouts, metadata
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   ├── layout/               # Navbar, Footer, PageWrapper
    │   ├── sections/             # Hero, Services, About, CTA, Portfolio, Process, Contact
    │   └── ui/                   # Button, Badge, Card, Icon, Container, SectionHeading
    ├── lib/                      # helpers, constants, non-UI utilities
    └── types/                    # shared TypeScript types
```

---

## Folder Responsibilities

- **`src/app/`** — routing, layouts, metadata, and top-level page composition only. No UI primitives.
- **`src/components/layout/`** — persistent structural wrappers used across pages.
- **`src/components/sections/`** — full-width page sections composed from UI primitives.
- **`src/components/ui/`** — atomic, reusable building blocks with no business logic.
- **`src/lib/`** — pure functions, constants, and utilities. No React code.
- **`src/types/`** — shared interfaces and type aliases.
- **`public/`** — optimized static assets, served as-is.

---

## Planning Documents

- **`stitch/components-plan.md`** — every section and component, its purpose, its subcomponents, and its expected inputs.
- **`stitch/layout-plan.md`** — page structure, section order, navigation, and responsive strategy.
- **`stitch/design-decisions.md`** — typography, spacing, color, buttons, motion, and visual identity.
- **`next-steps/build-plan.md`** — phased build order from scaffolding to launch.

---

## Design Direction

Clean, minimal, and cinematic. Typography-first hierarchy, generous whitespace, and a restrained motion language (fade, slide, scale — no bounce, no flourish). Mobile-first, responsive, and accessible.

---

## UX Principles

- Every section earns its place by supporting clarity, trust, or conversion.
- Calls to action are specific, visible, and placed at natural decision points.
- Copy is direct and written for non-technical clients.
- Navigation is simple and predictable.
- Performance is a feature — fast pages convert better.

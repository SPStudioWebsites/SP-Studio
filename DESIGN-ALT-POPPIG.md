# Design — Alt-Design-Poppig

Alternatives Design für SP Studio, Branch `Alt-Design-Poppig`.
Gegenentwurf zur cream/charcoal-Variante (siehe `DESIGN.md`).
Richtung: **modern, jung, frisch, verspielt, hochwertig** — Linear/Stripe-Pricing-Ästhetik trifft auf Hot-Pink-Akzente.

---

## 1. Grundhaltung

- **Dark-Mode als Basis**, Hot-Pink als Signalfarbe, Violet als Sekundäraccent.
- **Pro und fancy**, aber verspielt — nicht kindisch, nicht Neon-Overload.
- Viel Bewegung, aber gezielt: Interaktion belohnt, Ruheflächen bleiben ruhig.
- Gradient-Highlights (pink → violet) als wiederkehrendes Motiv.
- Cards leicht **3D-tilted** (perspective + rotate), wie aufgespannt im Raum.

## 2. Farbsystem

| Token | Hex | Einsatz |
|---|---|---|
| `bg` | `#0a0a0a` | Seiten-Background (fast schwarz, leicht warmgetönt) |
| `bg-elev` | `#141414` | Cards, Panels, erhöhte Flächen |
| `bg-subtle` | `#1a1a1a` | Hover-Flächen, Inputs |
| `pink` | `#ff2d8f` | Primäre Signalfarbe, CTAs, Featured-Card |
| `pink-soft` | `#ff6bb0` | Text-Highlights, Hover-States |
| `violet` | `#8b5cf6` | Sekundärakzent, Checkmarks, Badges |
| `white` | `#fafafa` | Primärtext auf dark |
| `muted` | `#8a8a8a` | Sekundärtext |
| `line` | `rgba(255,255,255,0.08)` | Borders, Dividers |
| `line-strong` | `rgba(255,255,255,0.14)` | Hover-Borders |

**Gradients:**
- `gradient-pink`: `linear-gradient(135deg, #ff2d8f 0%, #8b5cf6 100%)`
- `gradient-glow`: radial soft-pink spotlight für Cursor-Effekt

## 3. Typografie

- **Font:** Inter bleibt — aber deutlich fetter (700–800) für Display.
- **Display:** 72–96 px, weight 800, tracking `-2px`, line-height `0.98`.
- **Section-H:** 48–56 px, weight 700, tracking `-1.2px`.
- **Body:** 16–17 px, weight 400, `text-white/80`.
- **Eyebrow-Pills:** 11 px uppercase, tracking `0.14em`, auf `bg-subtle` mit pink-border.
- Deutsch bleibt, Ton frecher/direkter als Original.

## 4. Motion-Prinzipien

- **Ease:** `cubic-bezier(0.22, 1, 0.36, 1)` (weiche Deceleration) — konsistent.
- **Durations:** 300–600 ms für Hover, 800–1200 ms für Section-Reveal.
- **Spring-Parameter:** `stiffness: 80, damping: 22` für Scroll-Progression.
- `prefers-reduced-motion` respektieren — harte Fallbacks überall.

### Interaktions-Bausteine

- **Magnetic-Buttons:** Cursor zieht Button leicht an (±8 px), auf Release snapt zurück.
- **Cursor-Glow:** radialer soft-pink Spot folgt Maus auf Dark-Flächen (mix-blend-mode: screen).
- **3D-Tilt:** Cards neigen sich 6–10° auf Maushover (`perspective: 1000px`).
- **Scroll-linked Gradients:** Hero-Background-Position shift mit `scrollYProgress`.
- **Marquee:** Auto-Scroll bei Trust-Logos, unendlich Loop, pausiert auf Hover.
- **Hover-Reveal-Glow:** Pills/Badges bekommen pink outer-glow on hover.

## 5. Hero — Spezifikation

**Layout:** 2-Col Desktop — Text links, iPad-Mockup rechts. Mobile gestapelt.

**Linke Spalte:**
- Eyebrow-Pill mit Puls-Dot: "Neue Projekte ab Juni 2026"
- H1 (800, 72 px): Websites, die wirklich Kunden gewinnen. — Gradient auf zweiten Teil.
- Sub-Copy in `text-white/70`
- Zwei CTAs: Primary (pink) + Ghost (outline-white/20)
- Trust-Row in `text-white/50`

**Rechte Spalte — iPad-Mockup:**
- **Orientierung:** Portrait (hochkant), wirkt eleganter.
- **Device-Frame:** dunkles Aluminium-Feel, abgerundet (34 px), subtle border/shadow, innen Safe-Area-Rand.
- **Content-Viewport:** zeigt eine abstrakte generische Premium-Website:
  - Fake-Nav oben mit pulsierender URL-Bar
  - Hero-Block: große Skelett-Headline-Balken (variierende Breiten) + Image-Platzhalter
  - 3 Feature-Cards als Grid
  - Gallery/Image-Grid (4 Kacheln)
  - Footer-Balken
- **Inhalts-Stil:** Hell/clean (fast weiße BG innen) — das iPad leuchtet wie ein Fenster im Dark-Hero. Accent-Color innen bleibt pink/violet für Konsistenz.
- **Auto-Scroll:** Content scrollt von allein langsam durch (60–80 s Loop), pausiert ggf. auf Hover.
- **Device-Motion:**
  - Grundzustand: minimales Floating (y: ±10 px, 6 s loop)
  - Perspective-Tilt folgt Mausposition (parallax, max ±8°)
  - Leichte rotateZ (-2°) als Grundhaltung → fühlt sich lässig an
- **Glow:** pink-violet Blur hinter dem iPad, pulsiert dezent
- **Floating-Badges um das Device:** kleine Pills ("Next.js", "Figma", "Motion", "Performance 98/100") die unabhängig floaten, leichte Parallax auf Scroll

## 6. Komponenten-Baukasten

### Cards
- `bg-elev` mit 1 px `line`-border
- `rounded-2xl` (24 px)
- Innen: 24–32 px Padding
- Hover: `line-strong`-border + subtle pink-glow + 3D-Tilt
- Optional: gradient-pink als Featured-Card-BG (wie im Referenz-Pricing)
- Slight `rotateZ` (-2°/+2°) auf benachbarte Cards für Dynamik

### Buttons
- **Primary:** `bg-pink`, text black, shadow `0 0 40px rgba(255,45,143,0.4)`, hover lift + stärkerer glow.
- **Ghost:** `border-white/20`, text white, hover `border-white/40` + subtle bg-white/5.
- **Magnetic-Behavior:** beide Varianten.
- Rounded `rounded-xl` (12 px), bold weight.

### Pills/Badges
- `bg-bg-subtle`, `border-line`, 11 px uppercase
- Variant mit pink-accent: `border-pink/30`, `text-pink`, `bg-pink/5`
- Status-Dot variants: pink-puls, violet-puls, emerald-puls

### Section-Headings
- Eyebrow-Pill (pink-accent variant)
- H2 mit Gradient-Highlight auf Schlüsselwort
- Description in `text-white/60`

## 7. Sections — Übersetzungsplan

| Section | Poppig-Adaption |
|---|---|
| **Hero** | Wie oben spezifiziert |
| **Services** | Dark Cards, mittlere Featured-Card in `gradient-pink` (wie Referenz-Pricing). 3D-Tilt pro Card. Huge Step-Number glüht in pink. |
| **Portfolio** | ProjectShowcase bleibt, aber auf Dark. Hover-Preview bekommt pink-glow border. |
| **Process** | Timeline rail in `gradient-pink` statt charcoal. Dot-Fill pulsiert pink. Cards `bg-elev`. |
| **Testimonials** | Karussell mit Pink-Accent auf aktiver Card. |
| **FAQ** | Accordion mit pink-hover auf open-item. |
| **CTA/Contact** | Großes Gradient-Mesh-Background, Magnetic-CTA-Button. |
| **Navbar** | Glassmorphism (bg-bg/60 backdrop-blur), pink-dot-logo, mobile hamburger mit pink-line. |

## 8. Was NICHT gemacht werden soll

- Keine Neon-Überdosis — Pink als Fokus, nicht Flächendeckung.
- Keine Comic-Elemente, keine Emojis-als-Dekoration, keine Sticker-Look.
- Keine Animationen ohne Zweck (alles mit Interaktion verbunden oder scroll-getriggert).
- Keine Rundungen über 32 px — bleibt geschliffen, nicht bubble-haft.
- Keine Skelett-Loader-Shimmer-Overdose außer im iPad-Content.

## 9. Nachgelieferte Designelemente

### 9.1 Pricing-Blocks (21st.dev / educlopez)

Installiert unter [src/components/pricing-blocks.tsx](src/components/pricing-blocks.tsx).
Minimal-Referenz (nur 1 Card) — dient als **Bewegungs- und Card-Muster**, nicht als finales Pricing-Layout.

**Übernehmbare Patterns:**
- **Entrance-Animation:** `initial={{ scale: 0.9, opacity: 0 }}` → `animate={{ scale: 1, opacity: 1 }}` mit `transition={{ type: "spring", duration: 0.5 }}` — als Standard für alle Card-Reveals.
- **Hover-Lift:** `hover:scale-105` auf Cards (zusätzlich zum 3D-Tilt).
- **Card-Shell-Pattern:** flex-col, `rounded-lg`, `border`, `shadow-sm`, `px-8 py-6`, 320 px Breite als Baseline.
- **Price-Display:** große Zahl (`text-4xl font-extrabold`), direkt darunter Subtitel in `muted`.
- **Feature-List:** kompakte `space-y-1 text-xs`-Liste, links-aligned, mit Check-Prefix.
- **CTA-Button:** full-width, `rounded`, `font-semibold`, primary-bg, hover-opacity.

**Anpassungen nötig für unseren Look:**
- Shadcn-Tokens → Alt-Design-Tokens (`bg-primary` → `bg-pink`, `text-foreground` → `text-white` etc.)
- Emoji-Checks (✔️) → violet `<Check />` Lucide-Icon (konsistenter mit Referenz-Screenshot)
- Eine Karte → drei Karten (Starter / Pro Featured / Custom)
- Featured-Card zusätzlich: `gradient-pink`-BG, text-black, "Best Deal"-Pill oben, stärkere Elevation
- Nachbar-Cards mit leichtem `rotateZ` (-3°/+3°) für das Dribbble-Feeling

### 9.2 Offene Punkte

- Finaler Pink-Hue: `#ff2d8f` vs. `#ff3d9a` — im Build auf echtem Screen evaluieren.
- Body-Font-Alternative: Inter vs. Geist vs. Manrope — Geist könnte moderner wirken.
- Weitere nachgelieferte Designelemente hier ergänzen.

---

*Stand: 2026-04-20 · Branch `Alt-Design-Poppig`*

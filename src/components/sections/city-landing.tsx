import type { ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Grain } from "@/components/effects/grain";
import { GradientOrbs } from "@/components/effects/gradient-orbs";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Accordion } from "@/components/ui/accordion";
import { ArrowRight, Check, MapPin, Calendar, TrendingUp, BadgeEuro, ShieldCheck, Globe, Search, Clock, Sparkles } from "@/lib/icons";
import { brand } from "@/lib/content";
import { CityHeroVisual } from "@/components/sections/city-hero-visual";
import { ProcessSection } from "@/components/sections/process";
import { WhyMeSection } from "@/components/sections/why-me";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";

const cityNavLinks = [
  { label: "Warum lokal?", href: "#lokal-h" },
  { label: "Ablauf",       href: "#ablauf" },
  { label: "Leistungen",   href: "#leistungen" },
  { label: "Kontakt",      href: "#kontakt" },
] as const;

const featureCards = [
  { icon: TrendingUp, text: "Täglich neue Anfragen",       grad: "linear-gradient(135deg,#ff2d8f,#c026d3)" },
  { icon: Globe,       text: "Verkaufsstarke Webseite",    grad: "linear-gradient(135deg,#8b5cf6,#6d28d9)" },
  { icon: BadgeEuro,   text: "Mehr Buchungen. Mehr Umsatz.", grad: "linear-gradient(135deg,#ff2d8f,#8b5cf6)" },
  { icon: ShieldCheck, text: "0,0 Technik-Stress",          grad: "linear-gradient(135deg,#6d28d9,#8b5cf6)" },
] as const;

export interface CityLandingPageProps {
  city: string;
  slug: string;
  region?: string;
  heroSubtitle: string;
  pitchText: string;
  faq: readonly { q: string; a: string }[];
  cityBlock?: ReactNode;
  areaServedExtra?: { name: string }[];
}

export function CityLandingPage({ city, slug, region = "Unterfranken", heroSubtitle, pitchText, faq, cityBlock, areaServedExtra = [] }: CityLandingPageProps) {
  const benefits = [
    {
      icon: MapPin,
      title: "Lokale Kenntnis",
      desc: `Als regionaler Anbieter aus ${region} verstehe ich die ${city}er Märkte, lokale Suchgewohnheiten und wie deine Zielgruppe tickt. Auf Anfrage zeige ich dir gerne Webdesign-Referenzen aus der Region.`,
      grad: "linear-gradient(135deg,#ff2d8f,#c026d3)",
    },
    {
      icon: Calendar,
      title: "Schnelle Umsetzung",
      desc: "Kein Agentur-Bürokratie. Kein monatelanges Warten. Deine Website ist durchschnittlich in 14 Tagen fertig und online.",
      grad: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    },
    {
      icon: TrendingUp,
      title: "Mehr Anfragen durch SEO",
      desc: `Ich baue keine Seiten, die nur existieren. Sondern Seiten, die in ${city} gefunden werden und Anfragen generieren.`,
      grad: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
    },
  ];

  const checkList = [
    "Zentraler Ansprechpartner, kein Ticketsystem",
    "Individuelle Lösungen statt Baukasten",
    `Beratung in ${city} & Umgebung möglich`,
    "Fertig in durchschnittlich 14 Tagen",
    "Kein Lock-in. Dein Code gehört dir",
    "Festpreis ohne versteckte Kosten",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://schnell-sichtbar.de/#business",
        name: brand.name,
        url: `https://schnell-sichtbar.de/${slug}`,
        telephone: brand.phone,
        email: brand.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: brand.address.street,
          addressLocality: brand.address.city,
          postalCode: brand.address.zip,
          addressRegion: "Bayern",
          addressCountry: "DE",
        },
        areaServed: [
          { "@type": "City", name: city },
          { "@type": "AdministrativeArea", name: region },
          ...areaServedExtra.map((a) => ({ "@type": "City", name: a.name })),
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        description: `Webdesign ${city} – Professionelle Webseiten für lokale Betriebe in ${city} und Umgebung.`,
        priceRange: "€€",
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://schnell-sichtbar.de" },
          { "@type": "ListItem", position: 2, name: `Webdesign ${city}`, item: `https://schnell-sichtbar.de/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ScrollProgress />
      <Grain />
      <Navbar localLinks={cityNavLinks} logoHref="/" />

      <main id="main" className="relative">
        {/* ── Hero ── */}
        <section
          id="top"
          className="relative isolate overflow-hidden pt-28 pb-8 md:pt-36 md:pb-16"
          aria-label={`Webdesign ${city}`}
        >
          <GradientOrbs />
          <div aria-hidden className="absolute inset-0 grid-bg" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-12 lg:gap-4 lg:items-center">
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex hero-enter" style={{ animationDelay: "0ms" }}>
                <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full glass-pill px-3.5 py-1.5">
                  <span
                    aria-hidden
                    className="animate-shiny-text pointer-events-none absolute inset-0"
                    style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)" }}
                  />
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink" />
                  </span>
                  <span className="relative text-xs font-medium tracking-wide text-foreground/85">
                    Webagentur · Region {region}
                  </span>
                </div>
              </div>

              {/* H1 */}
              <h1
                className="mt-7 font-display font-semibold leading-[1] tracking-tight hero-enter text-[2.8rem] md:text-[clamp(2.4rem,7vw,5.5rem)]"
                style={{ animationDelay: "80ms" }}
              >
                <span className="block text-foreground">
                  Webdesign{" "}
                  <em className="font-display font-extrabold not-italic text-gradient pr-[0.05em]">
                    {city}.
                  </em>
                </span>
                <span className="block mt-2 text-foreground text-[1.9rem] md:text-[clamp(1.5rem,4vw,3rem)]">
                  Webseiten, die Kunden bringen.
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="mt-8 max-w-xl text-sm leading-relaxed text-muted md:text-lg hero-enter"
                style={{ animationDelay: "160ms" }}
              >
                {heroSubtitle}
              </p>

              {/* CTA */}
              <div className="mt-10 hero-enter" style={{ animationDelay: "240ms" }}>
                <ShinyButton
                  href="#kontakt"
                  size="lg"
                  className="shadow-[0_16px_60px_-8px_rgba(255,45,143,0.8)] hover:shadow-[0_22px_70px_-8px_rgba(255,45,143,1)] px-12 text-base font-semibold"
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </ShinyButton>
              </div>

              {/* Trust pills */}
              <div
                className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.07] pt-6 text-xs text-muted hero-enter"
                style={{ animationDelay: "300ms" }}
              >
                <span><span className="font-semibold text-foreground">ø 14 Tage</span> Lieferzeit</span>
                <span><span className="font-semibold text-foreground">Festpreis.</span> Keine Überraschungen</span>
                <span><span className="font-semibold text-foreground">Region</span> {city} & {region}</span>
              </div>

              {/* Feature grid — mobile only */}
              <div
                className="mt-10 grid grid-cols-2 gap-2.5 pb-16 md:pb-24 lg:hidden hero-enter"
                style={{ animationDelay: "360ms" }}
              >
                {featureCards.map(({ icon: Icon, text, grad }) => (
                  <div
                    key={text}
                    className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 glass-feature"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.06) 0%, transparent 60%)" }}
                    />
                    <span
                      className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl shadow-lg"
                      style={{ background: grad, boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}
                    >
                      <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                    </span>
                    <span className="relative text-xs font-medium leading-snug text-foreground/90">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — desktop only */}
            <div className="relative hidden lg:block lg:col-span-5">
              <div className="relative h-[480px] xl:h-[560px]">
                <CityHeroVisual city={city} slug={slug} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Warum lokal + Prozess + WhyMe ── */}
        <div
          className="relative"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 35% at 15% 15%, rgba(255,45,143,0.05) 0%, transparent 65%),
                radial-gradient(ellipse 60% 40% at 85% 75%, rgba(139,92,246,0.06) 0%, transparent 65%),
                radial-gradient(ellipse 90% 50% at 50% 50%, rgba(139,92,246,0.03) 0%, transparent 70%)
              `,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />

          {/* ── Warum lokal ── */}
          <section aria-labelledby="lokal-h" className="relative overflow-hidden py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-3xl text-center">
                <Reveal>
                  <Pill>Warum lokal?</Pill>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2
                    id="lokal-h"
                    className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
                  >
                    Webdesign aus{" "}
                    <em className="font-display font-extrabold not-italic text-gradient">der Region.</em>{" "}
                    Für die Region.
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg text-pretty">
                    Als Webdesigner aus {region} kenne ich die regionalen Märkte, Zielgruppen
                    und Suchgewohnheiten. Das macht den Unterschied zwischen einer Website, die
                    existiert, und einer, die gefunden wird.
                  </p>
                </Reveal>
              </div>

              {/* Benefit cards */}
              <div className="mt-14 grid gap-5 md:grid-cols-3">
                {benefits.map((b, i) => (
                  <Reveal key={b.title} delay={0.1 + i * 0.1}>
                    <GlassCard hover className="flex h-full flex-col gap-4 p-7">
                      <span
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                        style={{ background: b.grad, boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
                      >
                        <b.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                        {b.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted text-pretty">{b.desc}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>

              {/* Personal pitch */}
              <Reveal delay={0.3} className="mt-12">
                <div
                  className="relative overflow-hidden rounded-2xl p-8 md:p-10"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,45,143,0.12) 0%, transparent 60%)" }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,45,143,0.5) 50%, transparent)" }}
                  />
                  <div className="relative grid gap-8 md:grid-cols-2 md:gap-12 md:items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl"
                          style={{ boxShadow: "0 0 0 1.5px rgba(255,45,143,0.4), 0 4px 16px rgba(0,0,0,0.4)" }}
                        >
                          <Image
                            src="/Über-Mich.jpeg"
                            alt="Simon, Inhaber Schnell-Sichtbar.de"
                            fill
                            className="object-cover object-top"
                            sizes="48px"
                          />
                        </div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pink/70">
                          Lokal & persönlich
                        </p>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance">
                        Webdesign für {city}:{" "}
                        <em className="font-display font-extrabold not-italic text-gradient">
                          kein anonymes Studio.
                        </em>
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted text-pretty md:text-base">
                        {pitchText}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {checkList.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                          <span
                            className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                            style={{ background: "linear-gradient(135deg, #ff2d8f, #8b5cf6)" }}
                          >
                            <Check className="h-2.5 w-2.5 text-white" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── Warum moderne Webseite ── */}
          <section aria-labelledby="warum-modern-h" className="relative overflow-hidden py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-3xl text-center">
                <Reveal>
                  <Pill>Warum eine moderne Webseite?</Pill>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2
                    id="warum-modern-h"
                    className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
                  >
                    Eine moderne Webseite ist in {city}{" "}
                    <em className="font-display font-extrabold not-italic text-gradient">
                      kein Nice-to-have.
                    </em>{" "}
                    Sie ist ein Muss.
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg text-pretty">
                    Über 90 % aller Kaufentscheidungen beginnen heute bei Google. Wer in {city}{" "}
                    nicht auf den ersten Plätzen erscheint oder mit einer veralteten Webseite überzeugen
                    muss, verliert täglich Anfragen an die Konkurrenz – ohne es zu merken. Eine
                    professionelle Webseite mit responsive Design, sauberem Content Management System
                    und solider technischer Basis ist die Investition mit dem besten Hebel für lokale
                    Betriebe: sie arbeitet rund um die Uhr, kostet einmalig und bringt dauerhaft
                    neue Kunden.
                  </p>
                </Reveal>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-3">
                <Reveal delay={0.1}>
                  <GlassCard hover className="flex h-full flex-col gap-4 p-7">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg,#ff2d8f,#c026d3)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                      }}
                    >
                      <Search className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      Mehr Anfragen, weniger Werbebudget
                    </h3>
                    <p className="text-sm leading-relaxed text-muted text-pretty">
                      Wer in {city} bei Suchen wie „Friseur in der Nähe&quot;, „Restaurant {city}{" "}
                      Bewertungen&quot; oder „{city} Handwerker Notdienst&quot; oben steht, bekommt
                      Anfragen ohne dafür für jeden Klick zu bezahlen. Lokale SEO ist die
                      einzige Marketing-Investition, die sich nach 6–12 Monaten verselbstständigt:
                      einmal richtig aufgebaut, generiert deine Webseite dauerhaft Kunden – auch
                      nachts, am Wochenende und im Urlaub. Google-Ads kosten dich jeden Klick
                      neu. Deine eigene Sichtbarkeit gehört dir.
                    </p>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.2}>
                  <GlassCard hover className="flex h-full flex-col gap-4 p-7">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                      }}
                    >
                      <Clock className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      Deine Webseite verkauft, während du arbeitest
                    </h3>
                    <p className="text-sm leading-relaxed text-muted text-pretty">
                      Anstatt jeden Anruf selbst entgegenzunehmen, übernimmt die Webseite einen
                      Großteil der Vorqualifizierung: Online-Terminbuchung, Kontaktformular,
                      WhatsApp-Anbindung, Speisekarte, Preisliste, Anfahrt. Kunden in {city}{" "}
                      erwarten heute, dass sie sich um 23 Uhr informieren und buchen können –
                      ohne dass jemand zurückruft. Jede Stunde, in der dein Telefon nicht
                      klingelt, weil die Webseite die Antwort schon gegeben hat, ist gewonnene
                      Zeit – und gewonnener Umsatz, der sonst zur Konkurrenz gewandert wäre.
                    </p>
                  </GlassCard>
                </Reveal>

                <Reveal delay={0.3}>
                  <GlassCard hover className="flex h-full flex-col gap-4 p-7">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg,#ff2d8f,#8b5cf6)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                      }}
                    >
                      <Sparkles className="h-5 w-5 text-white" strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      Vertrauen vor dem ersten Kontakt
                    </h3>
                    <p className="text-sm leading-relaxed text-muted text-pretty">
                      Über 70 % aller Suchanfragen in {city} kommen vom Smartphone. Eine
                      veraltete, langsame oder auf dem Handy kaputte Webseite ist 2026 das
                      Erste, was potenzielle Kunden sehen – und oft auch das Letzte. Eine
                      moderne, schnelle und mobil optimierte Webseite mit responsive Webdesign
                      signalisiert technisches Know-how, Aktualität und Vertrauen. Sie ist
                      deine digitale Visitenkarte, deine Schaufensterscheibe und dein Verkäufer
                      in einem – 24/7 und ohne Krankheitstage. Ein gepflegter Auftritt
                      entscheidet, ob jemand anruft oder weiterklickt.
                    </p>
                  </GlassCard>
                </Reveal>
              </div>
            </div>
          </section>

          {cityBlock}

          {/* ── Ablauf ── */}
          <ProcessSection />

          {/* ── Warum ich ── */}
          <WhyMeSection />
        </div>

        {/* ── Pakete & Preise ── */}
        <ServicesSection />

        {/* ── Kontakt ── */}
        <ContactSection />

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-city-h" className="relative overflow-hidden py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <Pill>FAQ</Pill>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2
                    id="faq-city-h"
                    className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
                  >
                    Häufige Fragen.{" "}
                    <em className="font-display font-extrabold not-italic text-gradient">Klare</em>{" "}
                    Antworten.
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-5 text-base text-muted md:text-lg text-pretty">
                    Du hast Fragen zu Webdesign in {city}? Schreib uns, wir antworten
                    persönlich, nicht per Chatbot.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <a
                    href="#kontakt"
                    className="mt-8 inline-flex h-12 items-center gap-3 rounded-full glass px-5 text-sm font-medium text-foreground transition-all hover:border-pink/40 hover:bg-pink/[0.06] cursor-pointer group"
                  >
                    <MapPin className="h-4 w-4 text-pink" aria-hidden />
                    Frage stellen
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              </div>
              <Reveal delay={0.15} className="lg:col-span-7">
                <Accordion items={faq} />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

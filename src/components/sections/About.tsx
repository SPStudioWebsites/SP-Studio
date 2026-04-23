import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const STATS = [
  { value: "40+", label: "Websites gestaltet" },
  { value: "6 Wochen", label: "Durchschnittliche Launchzeit" },
  { value: "97%", label: "Zufriedenheitsquote" },
];

export function About() {
  return (
    <section id="studio" className="py-24 md:py-32">
      <Container className="grid gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <div
            className="overflow-hidden rounded-2xl border border-white/[0.08] backdrop-blur-sm"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3), 0 0 60px rgba(255,45,143,0.06)",
            }}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/studio-portrait.jpeg"
                alt="Simon — Gründer von SP Studio"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff2d8f]/30 bg-[#ff2d8f]/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#ff6bb0]">
              <span className="h-1 w-1 rounded-full bg-[#ff2d8f]" />
              Über SP Studio
            </span>
            <h2 className="mt-4 text-4xl md:text-section-h font-bold tracking-[-1.2px] text-white">
              Ein kleines Studio. Mit Haltung.
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-[1.5]">
              Wir sind ein Zwei-Personen-Studio aus Deutschland. Statt Massenware bauen wir Websites
              mit Ruhe, Sorgfalt und einem echten Gespür für kleine Unternehmen, lokale Betriebe und
              kreative Marken.
            </p>
            <p className="mt-4 text-white/50 leading-[1.5]">
              Unser Versprechen: Wir arbeiten mit wenigen Kundinnen und Kunden pro Quartal. Dadurch
              bekommen Sie unsere volle Aufmerksamkeit — und ein Ergebnis, das wirklich zu Ihrem
              Geschäft passt.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl md:text-4xl font-bold tracking-[-1.2px] text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-white/40">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <Button href="#kontakt">Projekt besprechen</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

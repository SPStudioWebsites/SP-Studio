import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { Quote } from "@/lib/icons";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="ueber-uns" aria-labelledby="ueber-uns-h" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Pill>{about.eyebrow}</Pill>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="ueber-uns-h"
                className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl text-balance"
              >
                Aus Haßfurt.{" "}
                <em className="not-italic text-[#1e5eff]">Für dich.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted md:text-lg text-pretty">
                {about.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <figure className="relative mt-10 rounded-3xl border border-border bg-white p-7">
                <Quote aria-hidden className="absolute -top-3 -left-2 h-10 w-10 text-[#1e5eff]/25" />
                <blockquote className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                  &bdquo;{about.quote}&ldquo;
                </blockquote>
              </figure>
            </Reveal>

            <Reveal delay={0.4}>
              <dl className="mt-10 grid grid-cols-2 gap-4">
                {about.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-white p-4 text-center">
                    <dt className="font-display text-2xl font-extrabold text-[#1e5eff] md:text-3xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/Über-Mich.jpeg"
                alt="Simon, Inhaber Schnell-Sichtbar.de"
                width={800}
                height={1000}
                className="w-full object-cover"
                style={{ maxHeight: "600px" }}
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

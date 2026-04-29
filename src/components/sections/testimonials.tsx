"use client";

import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { GlassCard } from "@/components/ui/glass-card";
import { Marquee } from "@/components/ui/marquee";
import { Quote, Star } from "@/lib/icons";

export function TestimonialsSection() {
  return (
    <section
      id="stimmen"
      aria-labelledby="stimmen-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,45,143,0.08),transparent)]"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill tone="warn">Beispiel-Stimmen · zur Veranschaulichung</Pill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="stimmen-h"
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
            >
              So{" "}
              <em className="font-display font-extrabold not-italic text-gradient">könnten</em>{" "}
              unsere Kund:innen klingen.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted md:text-base text-pretty">
              Realistisch formulierte Beispiele — keine echten Zitate, solange
              wir keine Freigaben aus laufenden Projekten haben.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <figure className="mx-auto mt-16 max-w-3xl">
            <GlassCard variant="elevated" className="relative p-8 md:p-12">
              <Quote className="absolute -top-4 left-8 h-10 w-10 text-pink/40" aria-hidden />
              <div className="flex items-center gap-1 text-pink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-pink" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed tracking-tight text-foreground md:text-3xl text-balance">
                &bdquo;{testimonials.featured.quote}&ldquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink to-violet text-sm font-semibold text-white">
                  {testimonials.featured.author.charAt(0)}
                </span>
                <span className="flex flex-col text-sm">
                  <span className="font-medium text-foreground">
                    {testimonials.featured.author}
                  </span>
                  <span className="text-muted">
                    {testimonials.featured.role} · {testimonials.featured.location}
                  </span>
                </span>
              </figcaption>
            </GlassCard>
          </figure>
        </Reveal>
      </div>

      <div className="mt-20 mask-fade-x">
        <Marquee className="[--duration:80s] [--gap:1.5rem] py-2" pauseOnHover>
          {testimonials.list.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
        <Marquee
          reverse
          className="mt-4 [--duration:90s] [--gap:1.5rem] py-2"
          pauseOnHover
        >
          {[...testimonials.list].reverse().map((t, i) => (
            <TestimonialCard key={`r-${i}`} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials.list)[number];
}) {
  return (
    <figure className="w-[340px] shrink-0 md:w-[400px]">
      <GlassCard variant="default" className="h-full p-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-pink/90 text-pink/90" aria-hidden />
          ))}
        </div>
        <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90 text-pretty">
          &bdquo;{t.quote}&ldquo;
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-2.5 border-t border-white/[0.06] pt-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink/80 to-violet/80 text-xs font-semibold text-white">
            {t.author.charAt(0)}
          </span>
          <span className="flex flex-col text-xs">
            <span className="font-medium text-foreground">{t.author}</span>
            <span className="text-muted">
              {t.role} · {t.location}
            </span>
          </span>
        </figcaption>
      </GlassCard>
    </figure>
  );
}

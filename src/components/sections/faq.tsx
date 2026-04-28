import { faq } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import { Accordion } from "@/components/ui/accordion";
import { Mail, ArrowRight } from "@/lib/icons";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Pill>FAQ</Pill>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="faq-h"
                className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl text-balance"
              >
                Häufige Fragen.{" "}
                <em className="font-serif italic font-normal text-gradient">Klare</em>{" "}
                Antworten.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-base text-muted md:text-lg text-pretty">
                Du hast eine Frage, die hier nicht steht? Schreib uns —
                wir antworten persönlich, nicht per Chatbot.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#kontakt"
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full glass px-5 text-sm font-medium text-foreground transition-all hover:border-pink/40 hover:bg-pink/[0.06] cursor-pointer group"
              >
                <Mail className="h-4 w-4 text-pink" aria-hidden />
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
  );
}

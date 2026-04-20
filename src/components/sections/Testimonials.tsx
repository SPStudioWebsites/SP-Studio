import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

interface Quote {
  quote: string;
  author: string;
  role: string;
}

const QUOTES: Quote[] = [
  {
    quote:
      "Seit dem Launch unserer neuen Website kommen deutlich mehr qualifizierte Anfragen rein. Alles fühlt sich professionell und ruhig an.",
    author: "Lena Brügger",
    role: "Inhaberin · Brügger Bau",
  },
  {
    quote:
      "Unaufgeregt, klar und unglaublich sorgfältig. Das Studio hat verstanden, worum es bei uns geht.",
    author: "Tobias Reif",
    role: "Atelier Reif",
  },
  {
    quote:
      "Endlich eine Website, die zu uns passt. Gäste sagen uns beim Eintreten, dass sie uns online sofort wiedererkannt haben.",
    author: "Maria Sandner",
    role: "Café Norden",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Stimmen"
            title="Was Kundinnen und Kunden sagen."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.author} delay={i * 0.08}>
              <Card className="h-full">
                <p className="text-lg leading-[1.5] text-charcoal">“{q.quote}”</p>
                <div className="mt-8 border-t border-line pt-4">
                  <p className="text-sm font-medium">{q.author}</p>
                  <p className="text-sm text-muted">{q.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

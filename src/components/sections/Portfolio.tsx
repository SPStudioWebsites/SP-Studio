import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Project {
  title: string;
  category: string;
  image: string;
}

const PROJECTS: Project[] = [
  { title: "Café Norden", category: "Gastronomie · Hamburg", image: "/images/work-cafe.jpeg" },
  { title: "Atelier Reif", category: "Kreativstudio · München", image: "/images/work-atelier.jpeg" },
  { title: "Brügger Bau", category: "Handwerk · Bremen", image: "/images/work-brugger.jpeg" },
  { title: "Meridian Yoga", category: "Studio · Köln", image: "/images/work-yoga.jpeg" },
];

export function Portfolio() {
  return (
    <section id="arbeiten" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ausgewählte Arbeiten"
            title="Ein kleiner Auszug aus unserem Studio."
            description="Jedes Projekt ist eigenständig entworfen — nichts von der Stange, alles auf die Menschen dahinter zugeschnitten."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-xl border border-line bg-cream transition-colors duration-500 ease-soft hover:border-charcoal-40">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Projekt: ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.4px]">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted">{project.category}</p>
                  </div>
                  <span className="text-sm text-muted">Fallstudie →</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

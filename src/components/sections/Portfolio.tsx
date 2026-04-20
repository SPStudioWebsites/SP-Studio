import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectShowcase, type ShowcaseProject } from "@/components/ui/project-showcase";

const PROJECTS: ShowcaseProject[] = [
  {
    title: "Café Norden",
    description: "Gastronomie · Hamburg — warme Markenpräsenz mit Online-Reservierung.",
    year: "2025",
    link: "#",
    image: "/images/work-cafe.jpeg",
  },
  {
    title: "Atelier Reif",
    description: "Kreativstudio · München — Portfolio-Site mit redaktionellem CMS.",
    year: "2025",
    link: "#",
    image: "/images/work-atelier.jpeg",
  },
  {
    title: "Brügger Bau",
    description: "Handwerk · Bremen — Leistungsseite und Anfrage-Funnel.",
    year: "2024",
    link: "#",
    image: "/images/work-brugger.jpeg",
  },
  {
    title: "Meridian Yoga",
    description: "Studio · Köln — Kursplan, Mitgliedschaften, Buchungssystem.",
    year: "2024",
    link: "#",
    image: "/images/work-yoga.jpeg",
  },
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

        <Reveal delay={0.1}>
          <div className="mt-14 max-w-3xl">
            <ProjectShowcase projects={PROJECTS} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

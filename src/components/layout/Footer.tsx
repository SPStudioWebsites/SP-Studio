import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <Container className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Link href="#top" className="text-lg font-semibold">
            SP Studio
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted leading-[1.5]">
            Webdesign- und Entwicklungsstudio aus Deutschland. Wir bauen Websites, die verkaufen —
            ruhig, schnell, zeitlos.
          </p>
        </div>

        <div>
          <p className="text-sm text-muted">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#leistungen" className="hover:underline">Leistungen</a></li>
            <li><a href="#arbeiten" className="hover:underline">Arbeiten</a></li>
            <li><a href="#prozess" className="hover:underline">Prozess</a></li>
            <li><a href="#kontakt" className="hover:underline">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-muted">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:hallo@spstudio.de" className="hover:underline">hallo@spstudio.de</a></li>
            <li><a href="#" className="hover:underline">Impressum</a></li>
            <li><a href="#" className="hover:underline">Datenschutz</a></li>
          </ul>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="text-xs text-muted">© {new Date().getFullYear()} SP Studio. Alle Rechte vorbehalten.</p>
      </Container>
    </footer>
  );
}

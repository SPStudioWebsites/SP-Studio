import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] mt-24">
      <Container className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Link href="#top" className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff2d8f] shadow-[0_0_8px_rgba(255,45,143,0.7)]" />
            </span>
            SP <span className="font-medium text-white/50">Studio</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/40 leading-[1.5]">
            Webdesign- und Entwicklungsstudio aus Deutschland. Wir bauen Websites, die verkaufen —
            ruhig, schnell, zeitlos.
          </p>
        </div>

        <div>
          <p className="text-sm text-white/30 uppercase tracking-[0.10em]">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#leistungen" className="text-white/50 transition-colors duration-200 hover:text-white">Leistungen</a></li>
            <li><a href="#arbeiten" className="text-white/50 transition-colors duration-200 hover:text-white">Arbeiten</a></li>
            <li><a href="#prozess" className="text-white/50 transition-colors duration-200 hover:text-white">Prozess</a></li>
            <li><a href="#kontakt" className="text-white/50 transition-colors duration-200 hover:text-white">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm text-white/30 uppercase tracking-[0.10em]">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:hallo@spstudio.de" className="text-white/50 transition-colors duration-200 hover:text-[#ff6bb0]">hallo@spstudio.de</a></li>
            <li><a href="#" className="text-white/50 transition-colors duration-200 hover:text-white">Impressum</a></li>
            <li><a href="#" className="text-white/50 transition-colors duration-200 hover:text-white">Datenschutz</a></li>
          </ul>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="text-xs text-white/20">© {new Date().getFullYear()} SP Studio. Alle Rechte vorbehalten.</p>
      </Container>
    </footer>
  );
}

import { Footer } from "@/components/layout/footer";
import { DotPattern } from "@/components/ui/dot-pattern";
import { DankeContent } from "./danke-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfrage eingegangen — Schnell-Sichtbar.de",
  robots: { index: false },
};

export default function DankePage() {
  return (
    <>
      {/* Fixed — stays put while content scrolls for 3-D depth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <DotPattern className="opacity-[0.10] text-white" width={24} height={24} />
      </div>
      <DankeContent />
      <Footer />
    </>
  );
}

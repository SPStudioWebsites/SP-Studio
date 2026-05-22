import fs from "fs";
import path from "path";

// Auto-discovers all webdesign-* pages and reads their title from metadata.
// Add a new src/app/webdesign-[city]/page.tsx → it appears in the footer automatically.
export function getRegionLinks(): { label: string; href: string }[] {
  const appDir = path.join(process.cwd(), "src/app");
  const entries = fs.readdirSync(appDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory() && e.name.startsWith("webdesign-"))
    .map((e) => {
      const slug = e.name;
      const pageFile = path.join(appDir, slug, "page.tsx");
      let label = slug;

      if (fs.existsSync(pageFile)) {
        const content = fs.readFileSync(pageFile, "utf-8");
        const match = content.match(/title:\s*["']([^"']+)["']/);
        if (match) label = match[1];
      }

      return { label, href: `/${slug}` };
    })
    .sort((a, b) => a.label.localeCompare(b.label, "de"));
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: "https://schnell-sichtbar.de/sitemap.xml",
  };
}

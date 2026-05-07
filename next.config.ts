import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      { source: "/agb", destination: "/impressum", permanent: true },
      {
        source: "/blog/warum-dein-lokal-bei-google-unsichtbar-ist",
        destination: "/blog/website-fuer-restaurants-und-cafes-in-hassfurt",
        permanent: true,
      },
    ];
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["motion"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
  },
});

export default withMDX(nextConfig);

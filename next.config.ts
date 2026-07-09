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
  images: {
    // Next.js 16 default-restricts the image optimizer to quality [75];
    // this codebase uses 75/80/85 via next/image `quality` props.
    qualities: [75, 80, 85],
  },
  experimental: {
    inlineCss: false,
    optimizePackageImports: ["motion"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
  },
});

export default withMDX(nextConfig);

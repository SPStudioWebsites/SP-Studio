import type { MDXComponents } from "mdx/types";

function BlogNote({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="my-8">
      {/* Blockquote-style box */}
      <div
        style={{
          background: "rgba(255, 45, 143, 0.04)",
          borderLeft: "2px solid #ff2d8f",
          padding: "1rem 1.25rem",
          borderRadius: "0 0.5rem 0.5rem 0",
        }}
      >
        <p className="m-0 leading-relaxed" style={{ color: "var(--muted-strong)" }}>
          {children}
        </p>
      </div>
      {/* Button below */}
      <div className="mt-4">
        <a
          href={href}
          className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(110deg, #ff2d8f 0%, #c026d3 50%, #8b5cf6 100%)",
            boxShadow: "0 6px 24px -6px rgba(255,45,143,0.55)",
            color: "#ffffff",
          }}
        >
          Mehr erfahren →
        </a>
      </div>
    </div>
  );
}

const components: MDXComponents = {
  BlogNote,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

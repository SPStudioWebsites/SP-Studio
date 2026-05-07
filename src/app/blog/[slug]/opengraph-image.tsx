import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const alt = "Schnell-Sichtbar.de Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function OgImage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const raw = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";
  const { data } = matter(raw);
  const title = (data.title as string | undefined) ?? "Blog";
  const description = (data.description as string | undefined) ?? "";

  const fontData = await fetch(
    "https://fonts.gstatic.com/s/bricolagegrotesque/v10/3y9U6as8bTXq_nANBjzKo3IeZx8z6up8BvtByz6mvFQ7K107lw.woff2"
  )
    .then((r) => r.arrayBuffer())
    .catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: fontData ? "Bricolage" : "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #ff2d8f 0%, #8b5cf6 100%)",
          }}
        />

        {/* background glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* top: label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              background: "rgba(255,45,143,0.12)",
              border: "1px solid rgba(255,45,143,0.3)",
              borderRadius: 100,
              padding: "6px 18px",
              color: "#ff2d8f",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Blog
          </div>
          <div style={{ color: "#52525b", fontSize: 18, marginLeft: 8 }}>
            Schnell-Sichtbar.de
          </div>
        </div>

        {/* middle: title + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1, justifyContent: "center" }}>
          <div
            style={{
              color: "#f5f5f7",
              fontSize: title.length > 60 ? 44 : 54,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                color: "#a1a1aa",
                fontSize: 22,
                lineHeight: 1.5,
                maxWidth: 820,
              }}
            >
              {description.length > 120 ? description.slice(0, 120) + "…" : description}
            </div>
          ) : null}
        </div>

        {/* bottom: branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff2d8f",
            }}
          />
          <div style={{ color: "#f5f5f7", fontSize: 20, fontWeight: 600 }}>
            Schnell-Sichtbar.de
          </div>
          <div style={{ color: "#52525b", fontSize: 20 }}>·</div>
          <div style={{ color: "#52525b", fontSize: 20 }}>
            Webdesign für lokale Unternehmen
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Bricolage", data: fontData, style: "normal", weight: 700 }]
        : [],
    }
  );
}

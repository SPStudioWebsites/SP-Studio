import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f4ed",
        "cream-soft": "#fcfbf8",
        charcoal: "#1c1c1c",
        muted: "#5f5f5d",
        line: "#eceae4",
        "charcoal-40": "rgba(28,28,28,0.4)",
        "charcoal-04": "rgba(28,28,28,0.04)",
        "charcoal-03": "rgba(28,28,28,0.03)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        display: ["3.75rem", { lineHeight: "1.05", letterSpacing: "-1.5px" }],
        "section-h": ["3rem", { lineHeight: "1", letterSpacing: "-1.2px" }],
        "sub-h": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.9px" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "44": "11rem",
        "52": "13rem",
      },
      borderRadius: {
        pill: "9999px",
      },
      boxShadow: {
        inset: "rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px",
        focus: "rgba(0,0,0,0.1) 0px 4px 12px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

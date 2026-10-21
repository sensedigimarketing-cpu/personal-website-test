import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#F4F1EA",
        card: "#FFFFFF",
        brand: "#FFD400",
        electric: "#2F6BFF",
        neon: "#3DDC84",
        hotpink: "#FF6BB5",
        flame: "#FF7A3D",
        grape: "#B57BFF",
      },
      boxShadow: {
        "brutal-sm": "4px 4px 0 0 #000",
        brutal: "6px 6px 0 0 #000",
        "brutal-lg": "8px 8px 0 0 #000",
        "brutal-white": "6px 6px 0 0 #fff",
        "brutal-white-lg": "8px 8px 0 0 #fff",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "var(--font-noto)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-noto)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono-brutal)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        chapter: "1120px",
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;

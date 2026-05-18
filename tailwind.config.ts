import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#060914",
        panel: "#0b1020",
        panelSoft: "#10172a",
        cyanGlow: "#22d3ee",
        violetGlow: "#a78bfa",
        emeraldGlow: "#34d399",
        dangerGlow: "#fb7185"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at top left, rgba(34,211,238,.22), transparent 32%), radial-gradient(circle at top right, rgba(167,139,250,.18), transparent 35%), linear-gradient(180deg, #060914 0%, #080b16 42%, #050711 100%)"
      }
    }
  },
  plugins: []
};

export default config;

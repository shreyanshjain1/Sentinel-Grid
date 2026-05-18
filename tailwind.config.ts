import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: "#e24637",
        honey: "#f2b84b",
        ink: "#11110f",
        graphite: "#17130f"
      },
      boxShadow: {
        soft: "0 28px 80px rgba(0, 0, 0, 0.34)",
        honey: "0 18px 50px rgba(242, 184, 75, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;

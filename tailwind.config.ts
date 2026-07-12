import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eef4ff", 100: "#dbe6fb", 400: "#5b8def", 500: "#2f6df0",
          600: "#1d4ed8", 700: "#16409c", 800: "#102a52", 900: "#0a1a35",
        },
        gold: { 400: "#f0bd45", 500: "#e6a817", 600: "#c98f0e" },
        cream: "#f4f8ff",
        ink: "#0e1a30",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        floaty: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulse2: { "0%, 100%": { boxShadow: "0 0 0 0 rgba(230,168,23,0.5)" }, "50%": { boxShadow: "0 0 0 12px rgba(230,168,23,0)" } },
      },
      animation: { floaty: "floaty 6s ease-in-out infinite", pulse2: "pulse2 2.5s infinite" },
    },
  },
  plugins: [],
};

export default config;

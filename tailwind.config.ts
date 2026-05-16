import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B0C1F",
        navy2: "#11132D",
        cream: "#F2EFE6",
        cream2: "#E8E4D6",
        gold: "#C9A84A",
        gold2: "#B0913A",
        violet: "#5C4280",
        violet2: "#7A5BA0",
        red: "#E04D6C",
        green: "#4ADE80",
        text1: "rgba(242,239,230,0.95)",
        text2: "rgba(242,239,230,0.72)",
        text3: "rgba(242,239,230,0.5)",
        line: "rgba(242,239,230,0.12)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        sora: ["Sora", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 12px rgba(74,222,128,0.6)" },
          "50%": { opacity: "0.6", boxShadow: "0 0 20px rgba(74,222,128,0.9)" },
        },
        "subtle-fade": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "subtle-fade": "subtle-fade .6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 500: "#3B82F6", 700: "#1E3A8A" },
        slate: { 950: "#020617" },
      },
      boxShadow: {
        card: "0 10px 40px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config

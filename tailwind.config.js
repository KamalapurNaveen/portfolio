import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 30px 120px rgba(59, 130, 246, 0.18)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(59,130,246,0.24), transparent 38%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.16), transparent 28%)",
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "white-bg": "var(--white-bg)",
        "black-fg": "var(--black-fg)",
        "black-bg": "var(--black-bg)",
        "white-fg": "var(--white-fg)",
      },
    },
  },
  plugins: [],
} satisfies Config;

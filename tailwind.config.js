/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        wide: {
          raw: `only screen and (max-height: 480px) and (max-width: 960px)`,
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/river-ripple-realistic.png')",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#38bdf8",
        light: "#7dd3fc",
        dark: "#0369a1",
      },
      secondary: {
        DEFAULT: "#4ade80",
        light: "#86efac",
        dark: "#15803d",
      },
      ltrGray: {
        DEFAULT: "#4b5563",
        light: "#6b7280",
        dark: "#111827",
      },
      error: {
        DEFAULT: "#ef4444",
        light: "#fef2f2",
        dark: "#b91c1c",
      },
    },
    fontFamily: {
      cursive: ["Satisfy", "cursive"],
      standard: ["Montserrat", "sans-serif"],
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
});

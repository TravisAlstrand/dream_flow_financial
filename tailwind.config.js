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
        "hero-bg-xs": "url('/images/hero-xs.jpg')",
        "hero-bg-sm": "url('/images/hero-sm.jpg')",
        "hero-bg-md": "url('/images/red-coat2.jpg')",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#000080",
        light: "#0202c9",
        dark: "#000030",
      },
      secondary: {
        DEFAULT: "#D9A802",
        light: "#ffc500",
        dark: "#a17c02",
      },
      ltrGray: {
        DEFAULT: "#111827",
        light: "#1d2840",
        dark: "#010203",
      },
      error: {
        DEFAULT: "#ef4444",
        light: "#fef2f2",
        dark: "#b91c1c",
      },
    },
    fontFamily: {
      heading: ["DM Serif Display", "cursive"],
      standard: ["Montserrat", "sans-serif"],
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
});

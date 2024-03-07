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
        "hero-bg-xs": "url('/images/heroBG-xs.jpg')",
        "hero-bg-sm": "url('/images/heroBG-sm.jpg')",
        "hero-bg-md": "url('/images/heroBG-md.jpg')",
        "hero-bg-lg": "url('/images/heroBG-lg.jpg')",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#000060",
        light: "#01018d",
        dark: "#000030",
      },
      secondary: {
        DEFAULT: "#6fffe9",
        light: "#befff5",
        dark: "#43c0ad",
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

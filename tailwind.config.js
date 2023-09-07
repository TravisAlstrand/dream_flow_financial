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
        "hero-bg": "url('trees.jpg')",
      },
    },
    fontFamily: {
      cursive: ["Sacramento", "cursive"],
      standard: ["Urbanist", "sans-serif"],
    },
    plugins: [require("@tailwindcss/forms")],
  },
});

const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        small: "14px", // Change this value to increase the font size
        medium: "16px", // Change this value to increase the font size
        large: "18px", // Change this value to increase the font size
        tiny: "12px", // Change this value to increase the font size
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
});

/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind/css")
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{s,jsx,ts,tsx}  "
  ],
  plugins: [nativewind()],
  theme: {
    extend: {},
  },
  plugins: [],
}


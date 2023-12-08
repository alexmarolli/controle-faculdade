/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'fundo':'#1C2B4C',
        'card': '#F0F0F0'
      }
    },
  },
  plugins: [],
}
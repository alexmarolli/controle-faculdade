/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   
  ],
  theme: {
    extend: {
      backgroundColor:{
        //'fundo': "URL('./public/teste.png')"
      }
    },
  },
  plugins: [],
}


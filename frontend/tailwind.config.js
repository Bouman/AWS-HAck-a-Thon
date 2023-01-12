/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        5: "5deg",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
      // backgroundImage: {
      //   wallpaper: "url('./src/assets/background-website.png')",
      // },
    },
  },
  plugins: [],
};

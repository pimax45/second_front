/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app.js",
    "./src/Header.js",
    "./src/Center.js",
    "./src/Connect_with_us.js",
    "./src/Menu.js",
  ],
  theme: {
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};

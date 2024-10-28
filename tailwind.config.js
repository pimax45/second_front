/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app.js",
    "./src/Components/Header.js",
    "./src/Components/Connect_with_us.js",
    "./src/Components/Menu.js",
    "./src/Components/Profile/My_posts.js",
    "./src/Components/Profile/Post.js",
    "./src/Components/Dialogs/Dialogs.jsx",
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

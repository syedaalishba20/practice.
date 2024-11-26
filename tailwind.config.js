/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
      heading: ['Roboto', 'sans-serif'],
      body: ['Open Sans', 'serif'],
    },
  },
  },
  plugins: [],
}
document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
});
document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("scale-100");
  menu.classList.toggle("opacity-100");
});

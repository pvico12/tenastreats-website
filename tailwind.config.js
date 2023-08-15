/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
    "./src/app/**/*.{html,ts}",
    "./src/app/home/**/*.{html,ts}",
    "./src/app/contact/**/*.{html,ts}",
    "./src/app/gallery/**/*.{html,ts}",
    "./src/app/order/**/*.{html,ts}",
    "./src/app/pricing/**/*.{html,ts}"
  ]},
  theme: {
    extend: {},
  },
  plugins: [],
}


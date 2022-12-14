/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Quicksand"],
        secondary: ["Montserrat"],
        tags: ["La Belle Aurore"],
        "tags-2": ["Caveat"],
      },
    },
  },
  plugins: [],
};

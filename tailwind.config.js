/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      fontSize: {
        xs: "0.5rem",
        sm: "0.7rem",
        base: "0.9rem",
        xl: "1.2rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // You might need to add other paths if you place components in other folders,
    // but these two cover the standard Next.js setup.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
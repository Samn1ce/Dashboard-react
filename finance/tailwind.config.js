/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tintDark': '#201F24',
        'icons': '#2D7979'
      },
      width: {
        '1/6': '35%'
      }
    },
  },
  plugins: [],
};

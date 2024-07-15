/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmFont: ['"DM Sans", sans-serif'],
        interFont: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};

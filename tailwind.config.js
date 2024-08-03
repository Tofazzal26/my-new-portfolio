/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmFont: ['"DM Sans", sans-serif'],
        interFont: ['"Inter", sans-serif'],
      },
      boxShadow: {
        navBar: " 0 4px 8px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};

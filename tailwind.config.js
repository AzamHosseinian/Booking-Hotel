/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir"],
      },
      colors: {
        primary: "#262630",
        secondary: "#1E8E29",
        alert: "#FF4500",
        danger: "#FF1632",
        line: "#E7E7E7",
        background: "#F8F8F8",
        bodyInputBg: "#F5F5F5",
        footerInputBg: "#343445",
      },
    },
  },
  plugins: [],
};

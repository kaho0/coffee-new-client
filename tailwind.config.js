import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ranch: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        formBg: "#F4F3F0",
        inputText: "rgba(27, 26, 26, 0.80)",
        buttonBg: "#D2B48C",
        borderCol: "#331A15",
      },
    },
  },
  plugins: [daisyui],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFB400", // Aapka primary color
        secondary: "#2A2A2A", // Aapka secondary color
        textGrey: "#666666", // grey color
        textWhite: "#FFFFFF", // White color
        headingGrey: "#2A2A2A", // heading color
      },
    },
  },
  plugins: [],
};

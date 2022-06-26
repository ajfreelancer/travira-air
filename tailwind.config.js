/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      th: "1000px",
      lg: "1200px",
      xl: "1336px",
    },
    colors: {
      darkblue: "#0E1035",
      lightblue: "#2f80ed",
      grayonwhite: "#666666",
      grayonblue: "#BDBBBB",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        '1144px': '1144px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};

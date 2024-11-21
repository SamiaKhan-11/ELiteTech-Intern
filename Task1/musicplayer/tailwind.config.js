/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        boxGradientStart: "#364562",
        boxGradientEnd: "#C96850",
      },
      animation: {
        rotate: "rotate 2s linear infinite",
        quiet: "quiet 1.2s ease-in-out infinite",
        normal: "normal 1.2s ease-in-out infinite",
        loud: "loud 1.2s ease-in-out infinite",
        marquee: "marquee 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotation: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(359deg)',
          },
        },
        quiet: {
          "25%": { transform: "scale(0.6)" },
          "50%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(0.8)" },
        },
        normal: {
          "25%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(0.6)" },
        },
        loud: {
          "25%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(1.2)" },
        },
      },
      spacing: {
        boxSize: "4px",
        gutter: "8px",
        full: "100%",
      },
      borderRadius: {
        box: "18px",
      },
      transformOrigin: {
        center: "center",
      },
    },
  },
  plugins: [],
};

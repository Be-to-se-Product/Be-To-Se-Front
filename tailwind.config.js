import scrollbar from "tailwind-scrollbar-hide";
import elements from "tw-elements-react/dist/plugin.cjs";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        vector: "url('./src/assets/vector.png')",
      },
      colors: {
        background: "#DDDDDD",
        black: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        orange: {
          principal: "#FCA622",
          menu: "#ffa500",
        },
        orange_opacity: {
          principal: "#F3C886",
        },
        stroke: {
          principal: "#C5D1E2",
        },
        white: {
          principal: "#FFFFFF",
        },
      },
    },
  },
  plugins: [scrollbar, elements],
};

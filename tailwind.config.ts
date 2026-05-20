import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f9fb",
          100: "#f0f4f8",
          200: "#d9e2ed",
          300: "#b3cce0",
          400: "#7da8cc",
          500: "#4a7fb8",
          600: "#325da3",
          700: "#244a86",
          800: "#1f3d6f",
          900: "#1a305b",
          950: "#0f1f3d",
        },
        accent: {
          50: "#fffbf0",
          100: "#fff5e0",
          200: "#ffe8b8",
          300: "#ffd887",
          400: "#ffb840",
          500: "#ff9d0c",
          600: "#e67e00",
          700: "#bf6100",
          800: "#8f4700",
          900: "#6b3200",
        },
        neutral: {
          50: "#fafbfc",
          100: "#f3f5f7",
          200: "#e5e9f0",
          300: "#d1d7e0",
          400: "#9ba5b8",
          500: "#6b7684",
          600: "#4a5568",
          700: "#34424f",
          800: "#202a34",
          900: "#0f1419",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Epilogue", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-down": "fadeDown 0.8s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

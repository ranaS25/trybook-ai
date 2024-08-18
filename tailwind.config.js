/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },

      colors: {
      

        primary: {
          light: "#4f46e5", // Light theme variant
          DEFAULT: "#6366f1", // Dark theme variant
        },
        secondary: {
          light: "#818cf8",
          DEFAULT: "#a5b4fc",
        },
        background: {
          light: "#ffffff",
          DEFAULT: "#0f172a",
        },
        text: {
          light: "#1f2937",
          DEFAULT: "#e2e8f0",
        },
        accent: {
          light: "#0ea5e9",
          DEFAULT: "#22d3ee",
        },
        codeBackground: {
          light: "#f3f4f6",
          DEFAULT: "#1e293b",
        },
        sectionBackground: {
          light: "#f9fafb",
          DEFAULT: "#1e293b",
        },
        border: {
          light: "#cbd5e1",
          DEFAULT: "#334155",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};


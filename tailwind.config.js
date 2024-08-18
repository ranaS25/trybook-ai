/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6366f1",
        secondaryColor: "#a5b4fc",
        backgroundColor: "#0f172a",
        textColor: "#e2e8f0",
        accentColor: "#22d3ee",
        codeBackground: "#1e293b",
        sectionBackground: "#1e293b",
        borderColor: "#334155",
      },
    },
  },
  plugins: [],
};


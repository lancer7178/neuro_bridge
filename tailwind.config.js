// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // لوحة هادئة بألوان محيطية دافئة
        primary: {
          DEFAULT: "#2F5D62", // Sage teal
          hover: "#23484D",
          dark: "#1A3033",
          light: "#DFEEE9",
          foreground: "#F7F9F8",
        },

        secondary: {
          DEFAULT: "#90A8C3", // Dusty blue
          hover: "#7A92AD",
          dark: "#5C6F86",
          light: "#E6EDF5",
          foreground: "#12212F",
        },

        accent: {
          DEFAULT: "#7BC6C4", // Seafoam
          hover: "#65B3B0",
          soft: "#E6F7F7",
          foreground: "#0E2C30",
        },

        muted: {
          DEFAULT: "#F5F7FA",
          darker: "#94A3B8",
          foreground: "#3F4C5D",
        },

        background: {
          DEFAULT: "#F9FBFD",
          dark: "#0F172A",
        },

        surface: "#FFFFFF",
        outline: "#D7DFE9",
        textlight: "#F8FAFC",
        glass: "rgba(255,255,255,0.65)",
        glassdark: "rgba(15,23,42,0.65)",
        overlay: "rgba(15,23,42,0.35)",

        destructive: {
          DEFAULT: "#F97070",
          hover: "#EF4444",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

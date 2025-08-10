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
        // ألوان رئيسية (أزرق بنفسجي)
        primary: {
          DEFAULT: "#6366F1", // Indigo 500
          hover: "#4F46E5",   // Indigo 600
          dark: "#3730A3",    // Indigo 800
          light: "#E0E7FF",   // Indigo 100
          foreground: "#FFFFFF",
        },

        // ألوان ثانوية (بنفسجي فخم)
        secondary: {
          DEFAULT: "#8B5CF6", // Violet 500
          hover: "#7C3AED",   // Violet 600
          dark: "#5B21B6",    // Violet 800
          light: "#EDE9FE",   // Violet 100
          foreground: "#FFFFFF",
        },

        // ألوان مميزة (تركوازي / أزرق فاتح)
        accent: {
          DEFAULT: "#14B8A6", // Teal 500
          hover: "#0D9488",   // Teal 600
          soft: "#CCFBF1",    // Teal 100
          foreground: "#042F2E", // Teal Dark
        },

        // ألوان محايدة
        muted: {
          DEFAULT: "#F3F4F6", // Gray 100
          darker: "#9CA3AF",  // Gray 400
          foreground: "#374151", // Gray 700
        },

        // خلفيات
        background: {
          DEFAULT: "#FFFFFF", // أبيض
          dark: "#111827",    // Gray 900
        },

        // ألوان إضافية
        bgdark: "#1F2937",    // Gray 800
        textlight: "#F9FAFB", // Gray 50
        glass: "rgba(255,255,255,0.05)",
        glassdark: "rgba(0,0,0,0.1)",
        overlay: "rgba(0,0,0,0.4)",

        // ألوان التحذير
        destructive: {
          DEFAULT: "#F87171", // Red 400
          hover: "#EF4444",   // Red 500
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#08233F",
          blue: "#146EF5",
          orange: "#FF6A00",
          soft: "#F5F8FC",
          muted: "#5B6B7C",
          line: "#E6ECF3",
          black: "#061525",
          panel: "#0C243D",
          dark: "#061525",
          ink: "#040B14",
          mist: "#94A3B8",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          teal: "#14B8A6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wide: "1200px",
      },
      boxShadow: {
        product: "0 24px 60px -28px rgba(8,35,63,0.35)",
        glow: "0 0 60px -12px rgba(20,110,245,0.25)",
        lift: "0 20px 50px -20px rgba(8,35,63,0.3)",
        card: "0 4px 24px -4px rgba(8,35,63,0.12)",
        soft: "0 2px 12px -2px rgba(8,35,63,0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-delay": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "contact-map-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.92" },
        },
        "contact-map-line": {
          "0%": { strokeDashoffset: "48" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-delay": "float-delay 7s ease-in-out 1s infinite",
        "contact-map-pulse": "contact-map-pulse 5s ease-in-out infinite",
        "contact-map-line": "contact-map-line 14s linear infinite",
      },
    },
  },
  plugins: [],
};

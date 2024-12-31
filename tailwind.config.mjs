/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        BgPrimary: "#111112",
        BgSecondary: "#231E1E",
        transparent: 'transparent',
        current: 'currentColor',
      },
      screens: {
        screenPrimary: "1426px",
        "1360": "1360px",
      },
      fontFamily: {
        DM_Sans:['DM Sans', 'sans-serif'],
        Sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

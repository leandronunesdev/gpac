/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/routes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        red: "#ED1F34",
        gray: "#8D8D8D1A",
      },
    },
  },
  plugins: [],
};

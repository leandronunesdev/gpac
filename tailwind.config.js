/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/routes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        red: "#ED1F34",
        gray: "#8D8D8D1A",
        darkGray: "#222222",
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/images/background-section-topo-2.png')",
        "hero-gray-pattern":
          "url('/src/assets/images/background-section-top.png')",
        test: "url('/src/assets/images/test.jpg')",
      },
    },
  },
  plugins: [],
};

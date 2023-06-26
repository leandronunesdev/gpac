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
        gray: "#8D8D8D",
        darkGray: "#222222",
        blackTitle: "#202020",
      },
      backgroundImage: {
        "hero-pattern":
          "url('/src/assets/images/background-section-topo-2.png')",
        "hero-gray-pattern":
          "url('/src/assets/images/background-section-top.png')",
        about: "url('/src/assets/images/about-bg.svg')",
        hire: "url('/src/assets/images/hire.png')",
        contact: "url('/src/assets/images/contact.png')",
      },
    },
  },
  plugins: [],
};

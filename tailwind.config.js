/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-inter)", ...fontFamily.sans]
      // },
      colors: {
        "brand-purple": "#6851ff",
        "brand-purple-text": "#522FD4",
        "brand-purple-light": "#EDEBFF",
        "brand-ink": "#18171A",
      },
      boxShadow: {
        brand: "8 8px 48px rgba(24, 23, 26, .2)",
      },
    },
  },
  plugins: [],
};

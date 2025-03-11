/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure all components are scanned
  theme: {
    extend: {
      colors: {
        bluish: "#1C4670",
        orangish:"#FFA229" ,
        offwhitish:"#FAFAFA"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #FFF0DC 0%, #EDF6FF 67%, #FFFFFF 100%)",
        "hero-pattern": "url('/src/assets/pattern.png')", 
      },

    },
  },
  plugins: [],
};

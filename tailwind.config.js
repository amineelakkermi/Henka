const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      ...colors, // هذا يُضيف كل الألوان الافتراضية مثل blue, red, green إلخ
      textColor: "#A2A9B0",
      black1: "#101112"
      ,
      purple: {
        900: "#1C0F30",
        800: "#31135E",
        700: "#491D8B",
        600: "#6929C4",
        500: "#8A3FFC",
      },
   
    },
    fontFamily: {
      arabic: ['NeoSansArabic', 'sans-serif'],
      ghaith: ['GHAITHSANS', 'sans-serif'],
      handicrafts: ['TheYearofHandicrafts', 'sans-serif'],
      english: ['Poppins', 'sans-serif'],
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue : '#1E3F7C',
        primaryWhite : '#fff',
        primaryBlack : '#181818',
        primaryGreen : '#4BC157',
        para : '#535353'
      },
      boxShadow: {
        shadow : ' 3px 9px 17px rgba(103, 117, 128, 0.13)'
      },
    },
  },
  plugins: [],
}
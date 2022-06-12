module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8DCCDB'
      },
      backgroundImage: {
        'vector-wave': "url('/vector Wave.svg')",
      },
      maxWidth: {
        '760': '760px',
      }
    }
  },
  plugins: [],
}
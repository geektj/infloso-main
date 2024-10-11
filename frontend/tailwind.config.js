/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blue: '#0C2A92',
        green: '#3A5B22'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}


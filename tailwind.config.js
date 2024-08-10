/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        '2xs': '450px',
        
        
        
      },
      clipPath: {
        'right-50': 'polygon(0 0, calc(100% - 50px) 0, calc(100% - 50px) 100%, 0 100%)',
      },
      colors: {
        primaryColor: '#1B263B',
        secondaryColor1: '#778DA9',
        secondaryColor2: '#E0E1DD'
      },
      fontFamily: {
        lato: 'Lato',
        bebasNeue : 'Bebas Neue'

      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}


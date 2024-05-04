/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: "#010d78",
        mustardYellow: '#FFDB58',
        tomatoRed: '#FF574A',
        pumpkinOrange: '#FF7518',
        skyBlue: '#87CEEB',
        skyBlueHover: '#6CA4BC',
        lemonYellow: '#FEF250',
        secondaryColor: '#ffCC00',
        paragraphColor: 'c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717'
      },
      keyframes: {
        move: {
          "50%" : {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        "movingY" : 'move 2s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

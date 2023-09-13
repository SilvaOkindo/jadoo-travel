/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dark:'class',
    extend: {

      screens: {
        'xs': '475px'
      },


      'colors': {
        'primary-color': '#181E4B',
        'primary-color-2': '#5E6282'
      },

      'fontFamily': {
        'primary': ['Poppins']
      },

      boxShadow: {
        'box-shadow-1': '0px 20px 35px 0px rgba(241, 165, 1, 0.15)',
        'box-shadow-2': '0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)',
        'box-shadow-3': '0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)',
      },

      borderRadius: {
        'border-radius-1': '30px 0px 10px 0px',
      },


      animation: {
        "scale-up-tr": "scale-up-tr 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
      },

      keyframes: {
        "scale-up-tr": {
          "0%": {
            transform: "scale(0.5)",
            transformOrigin: "100% 0%",
          },

          "100%": {
            transform: "scale(1)",
            transformOrigin: "100% 0%"
          }
        }
      }

  


      
    },
  },
  plugins: [],
}



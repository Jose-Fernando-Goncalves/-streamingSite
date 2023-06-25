/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#F41B3B',
        'sucess': '#1EBC99',
        'secondary' : '#F9CC0D',
        'secondary-2': '#184F70',
        'bg': '#0A070B',
      },
      fontFamily: {
        'gilroy': ['gilroy']
      },
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
}


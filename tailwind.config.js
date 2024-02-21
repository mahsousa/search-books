/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      '12': '12px',
      '14':'14px',
      '24':'24px',
      '40': '40px',
      '64':'64px',
    },
    colors: {
      grey:'#252525',
      white: '#ffffff',
      greyWhite:'#ACB1BA'
    },
    width:{
      '200': '200px',
      '300': '300px',
      '500': '500px',
      '600': '600px',
    },
    height:{
      '200': '200px',
      '300': '300px',
      '500': '500px',
      '600': '600px',
    },
  },
  plugins: [],
}

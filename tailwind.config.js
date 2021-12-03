let colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./components/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

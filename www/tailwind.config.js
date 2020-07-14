module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './index.html'
  ],
  theme: {
    extend: {
      spacing: {
        '80': '20rem'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    borderRadius: ['responsive', 'first', 'last', 'hover', 'focus']
  },
  plugins: []
}
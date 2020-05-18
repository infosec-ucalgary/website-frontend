module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  },
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Lato'],
      'mono': ['FiraCode'],
    },
  },
  variants: {},
  plugins: [],
}

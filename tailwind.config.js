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
      'display': ['Trebuchet-MS'],
      'body': ['Open Sans', 'sans-serif'],
      'mono': ['FiraCode']
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

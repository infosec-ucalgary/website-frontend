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
      'exo2': ['"Exo 2"', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

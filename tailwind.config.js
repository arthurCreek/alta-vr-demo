module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'focus'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

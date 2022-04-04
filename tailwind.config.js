module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px'
      },
      colors: {
        'primary': '#4f46e5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
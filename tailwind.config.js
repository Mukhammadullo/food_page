/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'media': { max: '400px' }
      // => @media (max-width: 400px) { ... }
    }
  },
  plugins: [],
}


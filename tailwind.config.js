/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'soft-red': '#ec775f',
        'cyan': '#76b5bc',
        'dark-brown': '#382314',
        'medium-brown': '#93867b',
        'cream': '#f8e9dd',
        'very-pale-orange': '#fffaf5',
        'hover': '#382314',
      },
    },
  },
  plugins: [],
}
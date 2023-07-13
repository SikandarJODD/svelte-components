/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  daisyui: {
    themes: ["cmyk", "night", "cupcake"],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')]
};

module.exports = config;
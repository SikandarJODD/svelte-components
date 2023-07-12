/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  daisyui: {
    themes: ["winter", "night", "cupcake"],
  },
  plugins: [require('daisyui')]
};

module.exports = config;
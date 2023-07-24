/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  daisyui: {
    themes: [{
      cymk: {
        ...require("daisyui/src/theming/themes")["[data-theme=cmyk]"],
        "success": "#070826D8",
      },
      night: {
        ...require("daisyui/src/theming/themes")["[data-theme=night]"],
        "success": "white"
      }
    }],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')]
};

module.exports = config;
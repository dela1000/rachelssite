/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['EB Garamond', ...defaultTheme.fontFamily.serif],
        ysabeau: ['Ysabeau SC', ...defaultTheme.fontFamily.serif],
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [],
};

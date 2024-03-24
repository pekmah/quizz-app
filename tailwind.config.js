/** @type {import("tailwindcss").Config} */
const {COLORS} = require('./src/constants/Theme');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        light: COLORS.light,
        bg_light: COLORS.bg_light,
      },
      fontFamily: {
        'ojuju-bold': 'Ojuju-Bold',
        'ojuju-semibold': 'Ojuju-Semibold',
        sans: 'SourceSans3-Regular',
        'sans-medium': 'SourceSans3-Medium',
        'sans-light': 'SourceSans3-Light',
        'sans-bold': 'SourceSans3-Bold',
        'sans-semibold': 'SourceSans3-SemiBold',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'app-black': '#1A1A1A',
        'app-white': '#FFFFFF',
        'app-primary-dark': '#3C3A39',
        'app-background-grey': '#FCFCFC',
        'app-primary': '#6B6462',
        'app-primary-light': '#7D7D7D',
        'app-secondary': '#B0B0B0',
        'app-highlight-sale-light': '#E01931',
        'app-positive': '#0B9000',
      },
    },
  },
  plugins: [],
};

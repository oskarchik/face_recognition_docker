module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customColor: '#2cabbe',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    screens: {
      sm: '640px',
      //=@media (min-width: 648) { ...}
      md: '768px',
      //=@media (min-width: 768) { ...}

      lg: '1024px',
      //=@media (min-width: 1024) { ...}

      xl: '1536px',
      //=@media (min-width: 1536) { ...}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

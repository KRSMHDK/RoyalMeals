module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '90px': '90px',
        '94px': '94px',
        '130px': '130px',
        '150px': '150px',
        '195px': '195px',
        '220px': '220px',
        '250px': '250px',
        '300px': '300px',
        '533px': '533px',
      },
      height: {
        '90px': '90px',
        '141px': '141px',
        '150px': '150px',
        '195px': '195px',
        '225px': '225px',
        '300px': '300px',
        '330px': '330px',
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
        '600px': '600px',
      },
      fontFamily: {
        ssp: ['Source Sans Pro', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      colors: {
        header: '#032541',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        15: '15',
      },
      padding: {
        'p-60%': '60%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

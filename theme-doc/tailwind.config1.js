
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,tsx,ts}',
    './components/**/*.{html,js,jsx,tsx,ts}',
    './src/**/*.{html,js,jsx,tsx,ts}',
  ],
  mode: 'jit',
  important: true,
  preflight: false,
  theme: {
    extend: {
      colors: {
        'indigo': {
          '50': '#f6f5fc',
          '100': '#ecebfa',
          '200': '#d0cdf2',
          '300': '#b4afea',
          '400': '#7b74da',
          '500': '#4338ca',
          '600': '#3c32b6',
          '700': '#322a98',
          '800': '#282279',
          '900': '#211b63',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '32px',
              fontWeight: 600,
            },
            h2: {
              fontSize: '20px',
              fontWeight: 600,
              marginTop: '20px',
            },
            h3: {
              fontSize: '18px',
              fontWeight: 600,
            },
            code: {
              background_color: theme(
                'colors.gray.900',
              ),
              overflowWrap: 'break-word',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'a code': {
              background: theme('colors.gray.100'),
              color: theme('colors.primary.900'),
              padding: '4px 6px',
              transition: 'all .3s',
            },
            'a code:hover': {
              text_decoration: 'underline',
              background: theme('colors.primary.100'),
              color: theme('colors.blurple'),
            },
            'pre a': {
              backgroundColor: theme('colors.primary.100'),
              marginRight: 8,
            },
            'a': {
              transition: '.3s all',
              textDecoration: 'none',
              overflowWrap: 'break-word',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            '.scroll-margin-top a': {
              boxShadow: 'none',
            },
            'a strong': {
              color: theme('colors.primary.600'),
            },
            'a strong:hover': {
              textDecoration: 'underline',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

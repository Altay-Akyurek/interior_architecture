import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '200': '12.6875rem',
        '219': '13.6875rem',
        '266': '16.625rem',
        '277': '17.3125rem',
        '356': '22.25rem',
        '334': '20.875rem',
        '310': '19.375rem',
        '408': '25.5rem',
        '420': '26.25rem',
        '446': '27.875rem',
        '473': '29.5625rem',
        '550': '34.375rem',
        '585': '36.5625rem',
        '634': '39.625rem',
        '672': '42rem',
        '720': '45rem',
        '1200': '75rem',
        '1100': '68.75rem',
      },
      height: {
        '583': '36.4375rem',
        '650': '40.625rem',
      },
      width: {
        '183': '11.4375rem',
        '526': '32.875rem',
        '770': '48.125rem',
        '1/2': '30%',
        '1/4': '37%',
        '2/3': '63%',
        '2/2': '60%',
      },
      gap: {
        '30': '1.875rem',
        '13': '3.125rem',
      },
      boxShadow: {
        'light_shadwo': '0px 4px 17px 0px #0000000F',
        'plan_shadwo': '0 0rem 1.875rem rgba(24, 23, 23, 0.1)',
        'portfolio_box': '0px 20px 80px 0px rgba(104, 117, 141, 0.15)',
        darkmd:
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
      },
      borderRadius: {
        '14': '0.875rem',
      },
      transitionProperty: {
        'max-height': 'max-height',
        opacity: 'opacity',
        transform: 'transform',
        width: 'width',
        all: 'all',
      },
      transitionDuration: {
        '0': '0ms',
        '0.4s': '0.4s',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      zIndex: {
        '1': '1',
        '3': '3',
      },
      colors: {
        primary: '#1358D8',
        darkprimary: '#054ac8',
        lightPrimary: '#3187F4',
        secondary: '#102C46',
        SlateBlue: '#547593',
        AliceBlue: '#F3F9FD',
        LightApricot: '#F9C78F',
        border: '#233D55',
        BorderLine: '#CCD7E1',
        darkmode: '#021526',
        darklight: '#061B2E',
        darktext: '#7F8487',
        dark_border: '#224767',
        Cream: '#EEE8A9',
        LavenderBlue: '#DBE7FF',
        LightSoftBlue: '#DBE9F6',
        gray: '#ACBCCA',
      },
    },
  },
  plugins: [],
}
export default config


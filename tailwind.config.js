/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        slateblue: {
          100: '#4034ab',
          200: '#1237b4',
        },
        darkslategray: '#324054',
        'banner-red': '#ff472e',
        whitesmoke: {
          100: '#f5f5f5',
          200: '#ebebeb',
        },
        gainsboro: '#e5e5e5',
        gray: {
          100: '#8b8b8b',
          200: '#1e1b39',
          300: '#1a191b',
        },
        cornflowerblue: '#aeafff',
        ghostwhite: {
          100: '#f4f4fe',
          200: '#f5f2ff',
        },
        lavender: '#eee2f7',
        lightslategray: '#9291a5',
        limegreen: '#04ce00',
        black1: '#000',
        slategray: '#615e83',
        'gray-4': '#c9cfda',
        black: '#00072b',
        'offline-gray': '#d9d9d9',
      },
      spacing: {},
      fontFamily: {
        inter: 'Inter',
        sora: 'Sora',
        gotham: 'Gotham',
        'body-2': "'Open Sans'",
      },
      borderRadius: {
        '1981xl': '2000px',
        xl: '20px',
        '3xs': '10px',
        '21xl': '40px',
        '6981xl': '7000px',
        '263xl-3': '282.3px',
      },
    },
    fontSize: {
      xs: '12px',
      base: '16px',
      '5xl': '24px',
      sm: '14px',
      '61xl': '80px',
      '3xs': '10px',
      '5xs': '8px',
      '7xs': '6px',
      inherit: 'inherit',
    },
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  plugins: [nextui()],
  corePlugins: {
    preflight: false,
  },
};

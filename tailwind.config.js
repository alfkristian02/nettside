import { lightBlue } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site_background : '#ECE5DE',
        site_red : '#9D5364',
        cards_background : "#DFD2D0",
      }
    },
    fontFamily: {
    },
  },
  plugins: [],
}


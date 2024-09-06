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
        'lightBlue' : '#B1D4E0'
      }
    },
  },
  plugins: [],
}


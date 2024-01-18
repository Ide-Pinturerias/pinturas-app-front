/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        // primary: '#662c7b',
        // turquoise: '#00A491',
        // orange: '#E96827',
        // orangeAlt: '#E7976F',
        // orangeAlt1: '#FFDDA6',
        // secondary: '#535353',
        // tertiary: 'rgba(231, 231, 231, 0.40)',
        // quaternary: '#F0CF5D',
        // formBg: '#D9D9D9',
        // warning: '#ff0f0f',
        // white: '#f1f1f1',
        // warmWhite: '#FFFAED', // ##F7EEDD
        // seasalt: '#FAF8F5',
        // softWhite: '#F7F7F2',
        // complementaryWhite: '#EAEAE6',
        // focusedWhite: 'rgba(18,18,18,.14)',
        bg: '#FFFFFF', // '#F7EEDD'
        bgFocus: '#F5F5F5', // '#EDE4D3'
        primaryClear: '#FF6600',
        primaryVisible: '#FFFFA1',
        accentClear: '#00A491',
        duller: '#CCCCCC',
        clear: '#1D1F21',
        overlay: 'rgba(0,0,0,.5)'
      },
      padding: {
        // Debe ser usado en cada component "main" para dar espacio al header principal.
        whiteSpaceTop: '7rem 0 0 0'
      },
      boxShadow: {
        credentialsMenu: '2px 2px 2px #662c7b75;'
      }
    },
    fontFamily: {
      abc: ['Urbanist', 'sans-serif'],
      primary: 'Montserrat',
      heading: 'Gill Sans'
    }
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ]
}

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

    theme: {
        extend: {
            screens: {
                'xs': '576px'
            },
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
                // white: '#f1f1f1',
                // warmWhite: '#FFFAED', // ##F7EEDD
                // seasalt: '#FAF8F5',
                // softWhite: '#F7F7F2',
                // complementaryWhite: '#EAEAE6',
                // focusedWhite: 'rgba(18,18,18,.14)',
                warning: '#ff0f0f',
                bg: '#FFFFFF', // '#F7EEDD'
                bgFocus: '#F5F5F5', // '#EDE4D3'
                primaryClear: '#FF6600',
                primaryLight: '#FF8533',
                primaryAccesibility: '#e75e02',
                primaryDark: '#D45C00',
                primaryDull: '#FFDDA6',
                primaryVisible: '#FFFFA1',
                secondaryClear: '#FF3333',
                secondaryDull: '#FFCCCC',
                accentClear: '#00A491',
                hightlight: '#8B8B8B',
                duller: '#CCCCCC',
                clear: '#1D1F21',
                fadepa: "#4000cc",
                overlay: 'rgba(0,0,0,.5)'
            },
            fontSize: {
                'xs': '.8125rem', // 13px
                'sm': '.875rem', // 14px
                'md': '1rem', // 16px 
                'lg': '1.125rem', // 18px 
                'xl': '1.25rem', // 20px
                '2xl': '1.375rem', // 24px
                '3xl': '2.5rem', // 40px
                '4xl': '3.125rem',  // 50px
                '5xl': '3.75rem' // 60px
            },
            padding: {
                // Debe ser usado en cada component "main" para dar espacio al header principal.
                whiteSpaceTop: '7rem 0 0 0',
                sides: '0 3.5%'
            },
            margin: {
                sides: '0 3.5%'
            },
            boxShadow: {
                credentialsMenu: '2px 2px 2px #662c7b75;',
                main: '0px 3px 6px rgba(30,30,30,0.3)',
            },
            outlineColor: {
                focus: '#00A491'
            },
            outlineWidth: {
                focus: '2.5px'
            },
            outlineOffset: {
                focus: '1.7px'
            },
            maxWidth: {
                maxSc: '1480px'
            },
            minWidth: {
                minIn: '93%'
            },
            width: {
                maxIn: '93%'
            },
            transitionProperty: {
                focus: 'transform, background-color, box-shadow, opacity'
            },
            transitionTimingFunction: {
                ease: 'ease'
            }
        },
        fontFamily: {
            abc: ['Urbanist', 'sans-serif'],
            primary: ['Montserrat', 'sans-serif'],
            secondary: ['Nunito', 'sans-serif'],
            heading: ['Gill Sans', 'sans-serif']
        }
    },
    plugins: [
        require('tailwindcss-debug-screens')
    ]
}

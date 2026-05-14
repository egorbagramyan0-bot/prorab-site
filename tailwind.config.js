/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                stone: {
                    950: '#0C0A09',
                    900: '#1C1917',
                    800: '#292524',
                    700: '#44403C',
                    600: '#57534E',
                    500: '#78716C',
                    400: '#A8A29E',
                    300: '#D6D3D1',
                    200: '#E7E5E3',
                    100: '#F5F5F4',
                    50: '#FAFAF9',
                },
                gold: {
                    DEFAULT: '#CA8A04',
                    light: '#EAB308',
                    dark: '#A16207',
                    50: '#FEFCE8',
                    100: '#FEF9C3',
                    200: '#FDE68A',
                    300: '#FCD34D',
                    400: '#FBBF24',
                    500: '#EAB308',
                    600: '#CA8A04',
                    700: '#A16207',
                },
            },
            fontFamily: {
                heading: ['Cormorant', 'Georgia', 'serif'],
                body: ['Montserrat', 'sans-serif'],
            },
            animation: {
                'marquee': 'scroll-marquee 40s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
                'slide-up': 'slide-up 0.8s ease-out',
                'fade-in-up': 'fade-in-up 0.7s ease-out both',
            },
            keyframes: {
                'scroll-marquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}

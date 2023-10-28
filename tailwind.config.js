/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './component/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: ({ colors }) => ({
            ...colors,
            ...{

                primary: '#0000A5', 
                dark: '#2B2B2B',
                'custom-grey': '#0F1928',
                'custom-grey-2': '#6F757E',
                'custom-grey-3': '#9FA3A9',
                secondary: '#757584',
                danger: '#F04848',
                'danger-light': '#FFE3E3',
                success: '#23AC00',
                'success-light': '#D2FFCE',
                light: '#F9F9F9',
                warning: '#F3A218',
                'warning-light': '#FEF6E7'
            },
        }),
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
}

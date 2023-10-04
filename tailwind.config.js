/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        colors: ({ colors }) => ({
            ...colors,
            ...{
                primary: '#0000A5',
				dark: '#0F1928',
				secondary: '#757584',
				danger: '#F04848',
				success: '#23AC00'
            },
        }),
        extend: {},
    },
  plugins: [],
}


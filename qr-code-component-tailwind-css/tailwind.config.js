/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.{html,js}"],
    theme: {
        colors:{
            'light-gray': 'hsl(212, 45%, 89%)',
            'grayish-blue': 'hsl(220, 15%, 55%)',
            'dark-blue': 'hsl(218, 44%, 22%)',
            'white-bg': 'hsl(0, 0%, 100%)',
            'attribution': 'hsl(228, 45%, 44%)',
        },
        fontFamily: {
            'outfit': ['Outfit', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
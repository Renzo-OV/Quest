const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#303030',
            },
            fontFamily: {
                sans: ['var(--font-inter)', ...fontFamily.sans],
            },
            fontSize: {
                '4xl': '4.5rem', //72px (for banners)
                '2xl': '3rem', //48px (for h1)
                xl: '2.375rem', //38px (for h2)
                lg: '1.75rem', //28px (for h3 and banners)
                md: '1.375rem', //22px (for h3)
                base: '1rem', //16px (for h4 and default buttons)
                sm: '0.875rem', //14px (for small buttons)
                xs: '0.75rem', //12px
            },
            fontWeight: {
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 900,
            },
        },
    },
    plugins: [],
}

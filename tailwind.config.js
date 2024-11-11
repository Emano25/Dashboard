module.exports = {
    content: [
        './src/**/*.{html,js,php,style}',
    ],
    theme: {
        extend: {
            strokeWidth: {
                '2': '2px',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'platinum': '#E8E8E8',
        'silver': '#BFBFBF',
      },
      maxWidth: {
        '32': '8rem /* 128px */',
      },
    },
  },
  plugins: [],
}

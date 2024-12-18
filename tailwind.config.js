/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'infinite-scroll 25s linear infinite',
        // scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        // scroll: {
        //   '0%': { transform: 'translateX(100%)' },
        //   '100%': { transform: 'translateX(-100%)' },
        // },
      }
    },
    plugins: [],
  }
}

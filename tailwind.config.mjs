/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      color: {
        backgroundFenix: '#EFEFE2',
        yellowFenix: '#FEBC59',
        orangeFenix: '#FE914C',
        pinkFenix: '#E8B6D9',
        brand: '#FFDF56'
      }
    }
  },
  plugins: []
}

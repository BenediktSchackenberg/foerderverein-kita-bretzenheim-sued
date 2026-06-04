/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sunny: '#FBBF24',
        mint: '#6EE7B7',
        leaf: '#34D399',
        cream: '#FFFBEB',
        coral: '#FB7185',
        ink: '#1F2937',
      },
      fontFamily: {
        display: ['Quicksand', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-yellow': '0 20px 40px -10px rgba(251, 191, 36, 0.4)',
        'soft-mint': '0 20px 40px -10px rgba(110, 231, 183, 0.4)',
        'soft-coral': '0 20px 40px -10px rgba(251, 113, 133, 0.4)',
      },
    },
  },
  plugins: [],
};

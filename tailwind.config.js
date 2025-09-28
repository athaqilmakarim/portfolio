/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9EE',
        surface: '#DCCFC0',
        border: '#EEEEEE',
        primary: '#A2AF9B',
        text: '#1F2A2E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      boxShadow: {
        'custom-light': '0 1px 0 rgba(0,0,0,0.03)',
        'custom-hover': '0 6px 16px rgba(0,0,0,0.06)',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shine: 'shine 3s infinite linear',
      },
    },
  },
  plugins: [],
}

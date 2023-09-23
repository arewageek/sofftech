/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:{
          100: "#007BFF",
          200: '#333333',
          300: '#F5F7FA'
        },
        secondary: {
          100: '#4D94FF',
          200: '#D1D1D1',
          300: '#F5F7FA'
        },
        accent: {
          100: '#0056b3',
          200: '#00A6FF'
        },
        danger: '#FF5050',
        link: '#007BFF'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
        },
        gray: {
          100: '#e2e8f0',
          850: '#23272b',
          900: '#18181b',
        },
        blue: {
          950: '#0a1e42',
        },
        cyan: {
          400: '#38bdf8',
        },
        violet: {
          400: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      backgroundImage: {
        'futuristic-dark': 'linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'futuristic-light': 'linear-gradient(90deg, #fff 0%, #f8fafc 50%, #fff 100%)',
      },
      boxShadow: {
        glow: '0 0 16px 2px #38bdf8, 0 0 32px 4px #a78bfa',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0f',
          darker: '#050508',
          card: '#12121c',
          pink: '#ff2a85',
          cyan: '#00f0ff',
          purple: '#9d00ff',
          lime: '#39ff14',
          orange: '#ff6a00'
        }
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-cyan': 'glowCyan 3s ease-in-out infinite alternate',
        'glow-pink': 'glowPink 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowCyan: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(0, 240, 255, 0.8))' },
        },
        glowPink: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(255, 42, 133, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(255, 42, 133, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

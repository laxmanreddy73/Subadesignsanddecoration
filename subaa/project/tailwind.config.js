/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FDF2F2',
          100: '#FCE8E8',
          200: '#F8D7DA',
          300: '#F4C2C7',
          400: '#EFA1A9',
          500: '#E8818B',
          600: '#D95A67',
          700: '#C43E4F',
          800: '#A5303E',
          900: '#8A2632',
        },
        
        champagne: {
          50: '#FEFCF9',
          100: '#FDF8F0',
          200: '#F7E7CE',
          300: '#F1D6AC',
          400: '#E5B568',
          500: '#D99424',
          600: '#C38520',
          700: '#A2701B',
          800: '#825A16',
          900: '#6B4A12',
        },
        rosegold: {
          50: '#FDF5F5',
          100: '#FCEAEA',
          200: '#F6CBCB',
          300: '#F0ACAC',
          400: '#E8B4B8',
          500: '#D1A3A4',
          600: '#BC9294',
          700: '#9E7B7D',
          800: '#7F6264',
          900: '#675052',
        }
      },
      
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

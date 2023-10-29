import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
        white: '#FFFFFF',
        black: {
           DEFAULT: '#324567',
           100: '#5A719D',
        },
        primary: {
           DEFAULT: '#0536FF',
           100: '#2662FF',
           200: '#6EA0FF'
        },
        gray: {
           DEFAULT: '#7889A4',
           100: '#A1BCD2',
           200: '#E6EEFF'
        }
    }
  },
  plugins: [],
}
export default config

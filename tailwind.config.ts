import type { Config } from 'tailwindcss'

const config: Config = {
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
      backgroundColor: {
        'offwhite': "rgb(243, 235, 225)",
        'offwhite-darker': "rgb(226, 220, 205)"
      },
      transitionProperty: {
        "spacing": "margin",
        "visible": "visibility",
        "op": "opacity",
        "bg": "background-image"
      },
      boxShadow: {
        "insidecover": "inset 0 0 100vh rgba(0,0,0,0.3)",
        "insideline": "inset 0 0 0 2px #000",
        "blanketshadow": "0 0 5px rgba(0,0,0,0.3)"
      },
    },
  },
  plugins: [],
}
export default config

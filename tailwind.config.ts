import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        medina: {
          red: "#EF4553",
          blue: "#00ADBF",
          "blue-dark:": "#0E6973",
          black: "#261E15"
        }
      }
    },
  },
  plugins: [],
}
export default config

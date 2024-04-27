import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff6f61',
        'primary-light': '#ffa07a',
        'primary-dark': '#ff5733',
        'secondary': '#ff6e7f',
        'secondary-light': '#ffb6c1',
        'secondary-dark': '#e75480',
        'triary': '#90ee90',
        'triary-light': '#98fb98',
        'triary-dark': '#2e8b57',
        'dark-gray': '#444444'
      }
    },
  },
  plugins: [],
};
export default config;

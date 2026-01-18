export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0a1128',
        secondary: '#001f54',
        tertiary: '#fefcfb',
        quaternary: '#1282a2',
      },
    },
  },
  plugins: [],
}
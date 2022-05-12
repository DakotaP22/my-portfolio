module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: {
            50: '#8C8C8C',
            100: '#333333',
            200: '#252526',
            300: '#1E1E1E'
          },
          blue: '#007ACC',
          html_tag: '#569ed6',
          html_text: 'white'
        },
        light: {
          background: {
            50: '#ffffff',
            100: '#f3f3f3',
          },
          //blue: '#007ACC',
          html_tag: '#800000',
          html_text: 'black'
        },
        dark_primary: {
          50: '#8C8C8C',
          100: '#333333',
          200: '#252526',
          300: '#1E1E1E'
        },
        dark_blue: '#007ACC',
        dark_html_tag: '#569ed6',
        dark_html_text: '#9cdcfe',
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
}
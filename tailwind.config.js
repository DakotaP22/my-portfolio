/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: {
        light: "#333333",
        medium: "#252526",
        dark: "#1E1E1E",
      },
      blue: {
        DEFAULT: "#007ACC",
      },
    },
    extend: {
      gridTemplateColumns: {
        root_layout: "min-content 1fr",
        bottom_bar: "1fr min-content min-content",
      },
      gridTemplateRows: {
        root_layout: "1fr 25px",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};

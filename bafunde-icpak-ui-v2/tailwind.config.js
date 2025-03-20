/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // Enable dark mode by adding a 'dark' class to a parent element
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#e0b23a",
        dull: "#232323",
        blueCustom: "#0e2130", // Define the custom color with opacity
        paleBlue: "rgba(55, 73, 95, 0.4)",
        newerBlue: "rgba(55, 73, 95, 0.2)", // This will give it 70% opacity
        primary: 'rgba(255, 255, 255, 0.9)', // Text color for light mode
        background: 'rgba(19, 47, 69, 0.71)', // Background color for light mode
        dullWhite: 'rgb(240, 240, 240)',
        darkerDullWhite: 'rgb(210, 210, 210)',
        dullerWhite: 'rgb(220, 220, 220)',
 orangeGold: '#d7a809',
 dullGrey: '#E2E2E2',
 mutedBlack: '#1a1a1a',

        // Custom colors for dark mode
        darkBackground: '#0e2130', // Custom background for dark mode
        lightBackground: '#ffffff', // Custom background for light mode
        darkText: '#ffffff', // Text color for dark mode
        lightText: '#171717', // Text color for light mode
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // Font stack
      },
      fontSize: {
        base: '11px', // Base font size
      },
      lineHeight: {
        base: '16px', // Line height
      },
    },
  },
  plugins: [],
};

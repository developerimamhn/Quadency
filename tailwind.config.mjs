/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1620px', // Define a new breakpoint at 1620px
      },
      maxWidth: {
        '3xl': '1620px', // Add max-width for the container
      },
      container: {
        center: true, // Center the container
        padding: '1rem', // Add default padding
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

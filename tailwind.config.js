/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        forest: '#1c352d',
        sage: '#8fad88',
        palesage: '#f1f5f0',
        warmcream: '#FAF9F5',
        goldaccent: '#d1a153',
      },
    },
  },
  plugins: [],
};

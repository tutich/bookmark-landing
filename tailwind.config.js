/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "hsl(229, 8%, 60%)",
          200: "hsl(231, 69%, 60%)",
          300: "hsl(229, 31%, 21%)",
        },
        softRed: "hsl(0, 94%, 66%)",
      },
    },
  },
  plugins: [],
};

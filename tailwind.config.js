/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      display: ["group-hover"],
      screens: {
        sm: "240px", // Custom minimum width for small screens
        // You can keep or adjust the other breakpoints as needed
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
  safelist: [
    'no-scroll'
  ]
};

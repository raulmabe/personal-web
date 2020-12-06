module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00bab7",
        "secondary-blue": "#00747e",
        danger: "#DE7692",
        secondary: "#ffbe76",
        grayish: "#f6f8fa",
        dark: "#1b262c",
        "dark-darker": "#141D21",
        "dark-lighter": "#384146",
      },
    },
  },
  variants: {},
  plugins: [],
};

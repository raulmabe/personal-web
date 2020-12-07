module.exports = {
  purge: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      colors: {
        "primary-blue": "#14B0BB",
        /* "primary-blue": "#00bab7",*/
        "secondary-blue": "#517EC2",
        /* "secondary-blue": "#00747e", */
        danger: "#DE7692",
        "blue-dark": "#1B3B59",
        grayish: "#f6f8fa",
        dark: "#1b262c",
        "dark-darker": "#141D21",
        "dark-lighter": "#384146",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};

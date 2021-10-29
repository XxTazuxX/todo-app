module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      josefinSans: ['"Josefin Sans"'],
      qahiri: ["Qahiri"],
      lobster: ["Lobster"],
      raleway: ["Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

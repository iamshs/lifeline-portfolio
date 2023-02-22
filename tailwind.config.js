/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7dc45",

          secondary: "#e198e2",

          accent: "#f98ea9",

          neutral: "#263740",

          "base-100": "#F5F4F6",

          info: "#4EB1EF",

          success: "#44E4C7",

          warning: "#F8C75D",

          error: "#FC6993",
        },
      },
      {
        dark : "dark"
      }
    ],
  },
};

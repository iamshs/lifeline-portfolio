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
        myTheme: {
          primary: "#f43f5e",

          secondary: "#fca5a5",

          accent: "#5eead4",

          neutral: "#f5f5f4",

          "base-100": "#110E0E",

          info: "#a78bfa",

          success: "#1CCA6A",

          warning: "#fcd34d",

          error: "#dc2626",
        },
      },
    ],
  },
};

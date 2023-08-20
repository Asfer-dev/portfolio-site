/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary1: ["Open Sans", "sans-serif"],
        primary2: ["Raleway", "sans-serif"],
        secondary1: ["Dancing Script", "sans-serif"],
        secondary2: ["Comfortaa", "sans-serif"],
        secondary3: ["Sacramento", "sans-serif"],
        secondary4: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};

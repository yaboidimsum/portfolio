/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#11FC99",
        secondary: "#14213D",
        slate: "#8D99AE",
        white: "#EDF6F9",
        blue: "#0085FF",
        its_expo: "#E7DBC5",
        ukm_expo: "#00C2DE",
        udemy: "#CE76FF",
      },
    },
  },
  plugins: [],
};

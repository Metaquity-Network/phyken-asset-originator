/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorswhite: "#fff",
        primery100: "#6d58ba",
        "gray-coolgray500": "#6b7280",
        gainsboro: "#e5e7eb",
        aliceblue: "#ecf2fc",
        dodgerblue: "#4285f4",
        "gray-coolgray800": "#1f2937",
        slateblue: "#4034ab",
        whitesmoke: "#f2f2f2",
        darkgray: "#9f9f9f",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        sora: "Sora",
      },
      borderRadius: {
        "21xl": "40px",
        "16xl": "35px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

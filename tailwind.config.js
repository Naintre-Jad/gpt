module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        bluegray_900: "#262b35",
        blue_A701: "#0061ff",
        bluegray_700: "#424c5d",
        bluegray_50: "#eaecf0",
        black_900: "#000000",
        red_700: "#d03329",
        bluegray_300: "#9ea8ba",
        blue_A700: "#0a58ff",
        bluegray_200: "#bac1ce",
        bluegray_100: "#d6dae2",
        white_A700: "#ffffff",
        gray_50: "#f5f9ff",
      },
      borderRadius: { radius6: "6px", radius8: "8px", radius50: "50%" },
      fontFamily: { inter: "Inter", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

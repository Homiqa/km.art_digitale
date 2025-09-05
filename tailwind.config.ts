import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C5CE7",
          dark: "#5848d6",
          light: "#8f84ff"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;

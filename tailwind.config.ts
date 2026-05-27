import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f3faf5",
          100: "#dff3e6",
          200: "#bfe6cf",
          300: "#90d2ad",
          400: "#5bb683",
          500: "#359665",
          600: "#27794f",
          700: "#226141",
          800: "#1f4e37",
          900: "#1b402f"
        },
        warm: {
          50: "#fffaf2",
          100: "#f7edda",
          200: "#ecd9b8",
          500: "#b9823f",
          800: "#5c3d1d"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 78, 55, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;

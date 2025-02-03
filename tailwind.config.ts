import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#059991",
        secondary: "#00F9FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#18191F 0%, #00F9FF25 50%)",
      },
      fontFamily: {
        sans: ["var(--font-aeonik)"],
      },
    },
  },
  plugins: [],
};
export default config;

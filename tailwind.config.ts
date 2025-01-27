import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        keyboardCtrl: `0px 4px 0px ${colors.stone[300]}`
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        grotesk: ['var(--font-space-grotesk)'],
      },
      // Add your custom color here
      colors: {
        'brand-blue': '#3995c7',
      },
    },
  },
  plugins: [],
};
export default config;

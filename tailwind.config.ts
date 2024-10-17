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
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
      fontFamily:{
        aramis: ["var(--font-aramis)"],
        made:["var(--font-made)"],
        dahila:["var(--font-dahila)"],
        geistMono:["var(--font-geistMono)"],
        geistVF:["var(--font-geistVF)"],
        coolvetica:["var(--font-coolvetica)"]
      }
    },
  },
  plugins: [],
};
export default config;

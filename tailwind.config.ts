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
      backgroundImage: {
        bgGradient: "linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)",
        buttonGradient:
          "linear-gradient(239.78deg, #148DFB 4.19%, #002F88 91.75%)",
        textGradient:
          "linear-gradient(62.82deg, #07DEFD 0.95%, #1476FB 93.47%)",
      },
    },
  },
  plugins: [],
};
export default config;

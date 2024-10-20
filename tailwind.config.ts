import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: "var(--secondary)",
        ghost: "var(--ghost)",
        "light-accent": "var(--light-accent)",
        accent: "var(--accent)",
        "light-grey": "var-(--light-grey)",
        cream: "var(--cream)",
        blue: "var(--blue)",
        "dark-cream": "var(--dark-cream)",
      },
      backgroundImage: {
        bgGradient: "linear-gradient(180deg, #F5F7FA 0%, #FFFFFF 100%)",
        buttonGradient:
          "linear-gradient(239.78deg, #148DFB 4.19%, #002F88 91.75%)",
        buttonHoverGradient:
          "linear-gradient(62.82deg, rgba(7, 222, 253, 0.1) 0.95%, rgba(20, 118, 251, 0.1) 93.47%)",
        textGradient:
          "linear-gradient(62.82deg, #07DEFD 0.95%, #1476FB 93.47%)",
        titleGradient:
          "linear-gradient(239.78deg, #148DFB 4.19%, #002F88 91.75%)",
        heroPattern: "url('/assets/images/hero/clip-path.svg')",
        focusTabBg:
          "linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
        whyMozBg: "url('/assets/images/focus/why-moz-bg.svg')",
        heroGradient:
          "linear-gradient(239.78deg, #148DFB 4.19%, #002F88 91.75%)",
        whiteGradient:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 70.81%)",
        promoteTabEffect: "url('/assets/images/promote/bg-effect.png')",
        referencesHeroShape: "url('/assets/images/references-hero-shape.svg')",
        contactHeroShape: "url('/assets/images/contact-hero-shape.svg')",
      },
      boxShadow: {
        "promote-cards":
          "0px 32px 120px 0px #143B810A, 0px 6px 56px 0px #143B810A",
        "reference-card":
          "0px 32px 80px 0px #143B811A, 0px 6px 24px 0px #143B811A",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xlg: "32px",
        xl: "40px",
        "2xl": "48px",
      },
    },
  },
  plugins: [],
};
export default config;

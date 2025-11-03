import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bgDark: "hsl(0, 0%, 6%)",
        black: "hsl(0, 0%, 6%)",
        white: "hsl(0, 0%, 84%)",
        gold: {
          DEFAULT: "hsl(33, 23%, 16%)",
          50: "hsl(33, 23%, 16%)",
          100: "hsl(33, 23%, 20%)",
          200: "hsl(33, 23%, 25%)",
          300: "hsl(33, 23%, 30%)",
          400: "hsl(33, 30%, 40%)",
          500: "hsl(33, 40%, 50%)",
        },
        goldDark: "hsl(36, 15%, 19%)",
        blue: {
          DEFAULT: "hsl(33, 23%, 16%)",
          glow: "hsl(33, 30%, 25%)",
          50: "hsl(33, 23%, 16%)",
          100: "hsl(33, 23%, 20%)",
          200: "hsl(33, 23%, 25%)",
          300: "hsl(33, 23%, 30%)",
        },
        accent: "hsl(0, 0%, 84%)",
        border: "hsl(33, 23%, 16%, 0.2)",
        input: "hsl(33, 23%, 16%, 0.1)",
        ring: "hsl(33, 30%, 25%)",
        background: "hsl(0, 0%, 6%)",
        foreground: "hsl(0, 0%, 84%)",
        primary: {
          DEFAULT: "hsl(33, 23%, 16%)",
          foreground: "hsl(0, 0%, 84%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 84%, 0.05)",
          foreground: "hsl(0, 0%, 84%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84.2%, 60.2%)",
          foreground: "hsl(210, 20%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(33, 23%, 16%, 0.1)",
          foreground: "hsl(0, 0%, 84%, 0.65)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 6%)",
          foreground: "hsl(0, 0%, 84%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 10%)",
          foreground: "hsl(0, 0%, 84%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.25rem - 1px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px hsl(33, 30%, 25%, 0.3)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px hsl(33, 30%, 25%, 0.6)" },
        },
        "floating": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 hsl(33, 30%, 25%, 0.7)",
          },
          "50%": {
            opacity: "1",
            boxShadow: "0 0 0 10px hsl(33, 30%, 25%, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "floating": "floating 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config


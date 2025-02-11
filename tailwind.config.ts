import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        green: {
          500: "#24AE7C",
          600: "#0D2A1F",
        },
        blue: {
          500: "#79B5EC",
          600: "#152432",
        },
        red: {
          500: "#F37877",
          600: "#3E1716",
          700: "#F24E43",
        },
        light: {
          200: "#E8E9E9",
        },
        dark: {
          200: "#0D0F10",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4",
        },
        // Custom colors
        icecold: "#a0d2eb",
        freezepurple: "#e5eaf5",
        mediumpurple: "#d0bdf4",
        purplepain: "#8458B3",
        heavypurple: "#a28089",
        nightblue: "#2d545e",
        nightblueShadow: "#12343b",
        slategray: "#494d5f",
        darkgreen: "#164A41",
        charcoal: "#333333",
        deepblue: "#1a1a2e",
        midnightblack: "#000000",
        gunmetal: "#2a2d2f",
        onyx: "#353839",
        bluepopsicle: "#0f2862",
        frenchlaundryblue: "#3a4660",
        silverfox: "#d4d4dc",
        deepmattegrey: "#393f4d",
        darkslate: "#1d1e22",
        navyblue: "#00246B",
        darkindigo: "#1E2761",
        deepnavy: "#002C54",
        charcoalgrey: "#2A3132",
        // New custom colors
        navy: "#16123f",
        purpletingedgrey: "#283747",
        darkblue: "#12232E",
        shadowofdarkblue: "#203647",
        darkgrey: "#3F3F3F",
        browngrey: "#3C403D",
        purplebaseline: "#161748",
        bluewaterlowlight: "#39a0ca",
        mountainshadowblue: "#101357",
        purpleshadow: "#091f36",
        greyblueleaf: "#4f5f76",
        deepdarkblue: "#12123E",
        midnightblue2: "#000021",
        oceanblue: "#03346E",
        deepteal: "#064663",
        twilightblue: "#2D4263",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

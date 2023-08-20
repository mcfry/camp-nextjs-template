import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#401e23",
        accent: "#75af2e",
        tanbase: "#fef8f1"
      },
      screens: {
        xs: "450px"
      }
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=autumn]"],
          primary: "#401e23",
          accent: "#75af2e"
        }
      }
    ]
  },
  darkMode: "class",
  plugins: [require("daisyui")]
}
export default config

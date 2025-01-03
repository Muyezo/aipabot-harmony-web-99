import type { Config } from "tailwindcss";
import { animations } from "./src/styles/tailwind/animations";
import { colors } from "./src/styles/tailwind/colors";
import { container } from "./src/styles/tailwind/container";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container,
    extend: {
      colors,
      ...animations,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
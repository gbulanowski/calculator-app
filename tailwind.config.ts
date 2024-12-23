import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "number-hover": "hsla(205,80%,80%,60%)",
        "operator-hover": "hsla(205,80%,70%,100%)",
      },
      backgroundImage: {
        "container-gradient":
          "linear-gradient(130deg, hsla(225,33%,98%,90%) 0%, hsla(225,33%,98%,20%) 80%)",

        "number-gradient":
          "linear-gradient(130deg, hsla(225,100%,100%,60%) 0%, hsla(225,100%,100%,30%) 80%)",

        "operator-gradient":
          "linear-gradient(130deg, hsla(205,80%,60%,100%) 10%, hsla(205,90%,80%,30%) 80%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

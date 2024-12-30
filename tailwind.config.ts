import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      screens: {
        custom: "1100px",
      },

      keyframes: {
        fadeIn: {
          '0%' : { opacity: '0'},
          '100%' : {opacity: '100'},
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in forwards',
        fadeIn_long:'fadeIn 2.5s ease-in forwards',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },

      colors: {
        black: {
          DEFAULT: '#000'
        },

        secondary: {
          DEFAULT: '#505050',
          light: '#8f8f8f'
        },
      },

      fontFamily: {
        roobert: ['Roobert', 'sans-serif'],
      },

    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

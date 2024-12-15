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
      keyframes: {
        fadeIn: {
          '0%' : { opacity: '0'},
          '100%' : {opacity: '100'},
        },
      },
      
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in forwards',
        fadeIn_long:'fadeIn 2.5s ease-in forwards',
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

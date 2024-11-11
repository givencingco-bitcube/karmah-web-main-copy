import type { Config } from 'tailwindcss';
import { colorPaletteGen } from './src/lib/tailwind/color-palette-gen';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },

    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      primary: {
        DEFAULT: 'var(--saturn-orange-500)',
        foreground: 'var(--saturn-orange-500-foreground)',

        ...colorPaletteGen({
          color: 'saturn-orange',
          ranges: [200, 300, 400, 500, 600, 700, 800],
        }),
        ...colorPaletteGen({
          color: 'happy',
          ranges: [200, 300, 400, 500, 600, 700, 800],
        }),
        ...colorPaletteGen({
          color: 'leaf',
          ranges: [200, 300, 400, 500, 600, 700, 800],
        }),
        ...colorPaletteGen({
          color: 'stone',
          ranges: [300, 400, 500, 600, 700],
        }),
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',

        ...colorPaletteGen({
          color: 'saturn-orange-light',
          ranges: [200, 400, 500, 600, 800],
        }),
        ...colorPaletteGen({
          color: 'pink',
          ranges: [200, 400, 500, 600, 800],
        }),
        ...colorPaletteGen({
          color: 'lilac',
          ranges: [200, 400, 500, 600, 800],
        }),
        ...colorPaletteGen({
          color: 'aqua',
          ranges: [200, 400, 500, 600, 800],
        }),
        ...colorPaletteGen({
          color: 'sea',
          ranges: [200, 400, 500, 600, 800],
        }),
      },
      neutral: {
        0: 'white',
        900: 'black',
      },
      system: {
        ...colorPaletteGen({ color: 'red', ranges: [50, 500] }),
        ...colorPaletteGen({ color: 'orange', ranges: [500] }),
        ...colorPaletteGen({ color: 'yellow', ranges: [500] }),
        ...colorPaletteGen({ color: 'green', ranges: [50, 500] }),
        ...colorPaletteGen({ color: 'blue', ranges: [500] }),
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))',
      },
    },
    extend: {
      fontFamily: {
        antiqueOlive: ['var(--font-antique-oliver-black)'],
        inter: ['var(--font-inter'],
      },
      fontSize: {
        /* 125% */
        '7xl': ['4.76813rem', { lineHeight: '5.96063rem', fontWeight: 700 }],
        '6xl': ['3.8375rem', { lineHeight: '4.79688rem', fontWeight: 700 }],
        '5xl': ['3.99875rem', { lineHeight: ' 4.99844rem', fontWeight: 700 }],
        '4xl': ['2.44375rem', { lineHeight: ' 3.05469rem', fontWeight: 700 }],
        '3xl': ['1.95313rem', { lineHeight: ' 2.44141rem', fontWeight: 700 }],
        '2xl': ['1.5625rem', { lineHeight: ' 1.95313rem', fontWeight: 700 }],
        /* 100% */
        xl: ['1.25rem', { lineHeight: ' 1.25rem', fontWeight: 700 }],
        lg: ['1.125rem', { lineHeight: ' 1.125rem', fontWeight: 700 }],
        sm: ['1rem', { lineHeight: ' 1rem', fontWeight: 700 }],
      },
      boxShadow: {
        focus: '0 0 0 4px var(--blue-500-focus)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

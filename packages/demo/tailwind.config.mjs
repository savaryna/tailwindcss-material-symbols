import typography from '@tailwindcss/typography';
import materialSymbols from '@savaryna/tailwindcss-material-symbols';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    {
      pattern: /.*icon.*/,
      variants: [
        'hover',
        'focus',
        'group-hover',
        'peer-hover',
        'before',
        'after',
      ],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, materialSymbols],
};

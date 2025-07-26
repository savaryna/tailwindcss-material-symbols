// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://savaryna.github.io',
  base: 'tailwindcss-material-symbols',
  integrations: [tailwind()],
});

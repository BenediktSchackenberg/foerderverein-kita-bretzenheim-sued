// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://foerderverein-kita-bretzenheim-sued.de', // TODO: Echte Domain einsetzen, sobald gekauft
  output: 'static',
  integrations: [tailwind()],
});

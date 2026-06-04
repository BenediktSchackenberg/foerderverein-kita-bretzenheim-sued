// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Custom-Domain: https://fvmzkita.de (CNAME in public/)
const SITE = process.env.SITE || 'https://fvmzkita.de';
const BASE = process.env.BASE ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});

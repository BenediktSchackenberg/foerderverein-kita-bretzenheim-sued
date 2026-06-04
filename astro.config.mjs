// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Wenn die Site später unter eigener Domain läuft (z.B. foerderverein-kita-bretzenheim-sued.de),
// einfach SITE setzen und BASE entfernen (oder leer lassen).
// Aktuell deployed als Project Page unter www.schackenberg.com/foerderverein-kita-bretzenheim-sued/
const SITE = process.env.SITE || 'https://www.schackenberg.com';
const BASE = process.env.BASE ?? '/foerderverein-kita-bretzenheim-sued';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [tailwind()],
});

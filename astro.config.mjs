// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update this to your production domain.
export const SITE_URL = 'https://watsonsinteriors.com.au';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Inline all CSS into each page so styling never depends on a separate
    // file uploading correctly to shared hosting.
    inlineStylesheets: 'always',
    // Avoid the leading-underscore "_astro" dir — some shared-host file
    // managers/extractors skip underscore-prefixed folders.
    assets: 'assets',
  },
});

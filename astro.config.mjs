// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://chapeljuice.dev',
  
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Ensure static assets are copied correctly
  publicDir: 'public',
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  // SEO and performance optimizations
  compressHTML: true,
});
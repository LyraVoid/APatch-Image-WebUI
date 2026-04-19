// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lyravoid.github.io/',
  base: '/APatch-Image-WebUI/',
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/',
  define: {
    'process.env.SANITY_PROJECT_ID': JSON.stringify(process.env.SANITY_PROJECT_ID),
    'process.env.SANITY_DATASET': JSON.stringify(process.env.SANITY_DATASET),
    'process.env.SANITY_API_VERSION': JSON.stringify(process.env.SANITY_API_VERSION),
  },
})

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://template.josephxia.com',
    },
  },

  plugins: [tsconfigPaths(), react()],

  css: {
    modules: {
      hashPrefix: 'prefix',
    },

    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  //
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import { join } from 'path'
import mdx from 'vite-plugin-mdx'
import pages from 'vite-plugin-react-pages'

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      }
    }),
    mdx(),
    pages({
      pagesDir: join(__dirname, 'src/pages'),
    }),
  ],
})

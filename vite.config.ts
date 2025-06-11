import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const srcPath = path.resolve(__dirname, './src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: false,
    // proxy: {
    //   '/api': {
    //     target: 'https://homelife-m1g9.onrender.com',
    //     changeOrigin: true,
    //     rewrite: (p) => p.replace(/^\/api/, ''),
    //   },
    // },
  },
  resolve: {
    alias: {
      app: path.resolve(srcPath, 'app'),
      pages: path.resolve(srcPath, 'pages'),
      widgets: path.resolve(srcPath, 'widgets'),
      features: path.resolve(srcPath, 'features'),
      entities: path.resolve(srcPath, 'entities'),
      shared: path.resolve(srcPath, 'shared'),
    },
  },
})

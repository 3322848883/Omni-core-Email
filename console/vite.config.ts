/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { lingui } from '@lingui/vite-plugin'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { readFileSync } from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/console/',
  plugins: [
    react({
      babel: {
        plugins: ['@lingui/babel-plugin-lingui-macro'],
      },
    }),
    tailwindcss(),
    lingui(),
  ],
  server: {
    host: '0.0.0.0',
    port: 8088,
    allowedHosts: ['mail.omnicore.xin', '69.12.85.185', 'localhost'],
    proxy: {
      '/config.js': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/console/, '')
      },
      '/console/config.js': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/console/, '')
      },
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.tsx'],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/__tests__/setup.tsx']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    include: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      'react',
      'react-dom',
      'react-dom/client',
      'antd',
      '@ant-design/icons',
      '@tanstack/react-query',
      '@tanstack/react-router',
      'dayjs',
      'lodash',
      'lucide-react',
      '@tiptap/react',
      '@tiptap/starter-kit',
      '@xyflow/react',
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers'
    ]
  }
})

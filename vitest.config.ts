/* Copyright © Accounting Revolution System (ARS) Group and Affiliates:
   This deliverable is considered Developed Content. */

/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

const vitestConfig = defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
    }),
  ],
  test: {
    coverage: {
      enabled: false,
      exclude: ['src/**/**/index.ts'],
      include: ['src/atoms/**', 'src/molecules/**', 'src/organisms/**'],
      provider: 'v8',
      reporter: 'html',
    },
    css: true,
    environment: 'jsdom',
    globals: true,
    include: ['src/**/**/*.test.tsx'],
    reporters: ['html'],
    root: './',
    setupFiles: './setupTests.ts',
  },
})

export default mergeConfig(viteConfig, vitestConfig)

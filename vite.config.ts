import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import paths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [
    react(),
    paths(),
    dts({
      insertTypesEntry: true,
    }),
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
  build: {
    outDir: 'lib',
    lib: {
      entry: './src/index.ts',
      name: 'UIKit',
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      input: {
        index: './src/index.ts',
        atoms: './src/atoms/index.ts',
        molecules: './src/molecules/index.ts',
        organisms: './src/organisms/index.ts',
        hooks: './src/hooks/index.ts',
        utils: './src/utils/index.ts',
        tokens: './src/tokens/index.ts',
      },
      external: ['react', 'react-dom'],
      output: {
        dir: 'lib',
        manualChunks: undefined,
        entryFileNames: (chunkInfo) =>
          chunkInfo.name === 'index' ? 'index.js' : '[name]/index.js',
        chunkFileNames: 'shared/[name].js',
        assetFileNames: '[name].[ext]',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },

  publicDir: path.resolve(__dirname, './public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

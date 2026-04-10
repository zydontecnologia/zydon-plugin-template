import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import packageJson from './package.json';

const BASE_PATH = `/store/apps/${packageJson.name}`;

const commonPlugins = [react(), tsconfigPaths()];

const buildPlugin = (input: string, dir: string) => ({
  plugins: commonPlugins,
  build: {
    rollupOptions: {
      input,
      output: {
        dir,
        chunkFileNames: 'app.js',
        entryFileNames: 'app.js',
        assetFileNames: ({ name }) =>
          `app${name?.substring(name.lastIndexOf('.')) || ''}`,
      },
    },
  },
});

const appModes = {
  app: {
    input: './src/@app/_app.tsx',
    dir: 'dist/app',
  },
  checkout: {
    input: './src/@app-checkout/_app.tsx',
    dir: 'dist/app-checkout',
  },
  'checkout-partner': {
    input: './src/@app-checkout-partner/_app.tsx',
    dir: 'dist/app-checkout-partner',
  },
  'checkout-seller': {
    input: './src/@app-checkout-seller/_app.tsx',
    dir: 'dist/app-checkout-seller',
  },
  'new-order': {
    input: './src/@app-new-order/_app.tsx',
    dir: 'dist/app-new-order',
  },
  'new-order-partner': {
    input: './src/@app-new-order-partner/_app.tsx',
    dir: 'dist/app-new-order-partner',
  },
  'new-order-seller': {
    input: './src/@app-new-order-seller/_app.tsx',
    dir: 'dist/app-new-order-seller',
  },
  'product-detail': {
    input: './src/@app-product-detail/_app.tsx',
    dir: 'dist/app-product-detail',
  },
  'product-detail-actions': {
    input: './src/@app-product-detail-actions/_app.tsx',
    dir: 'dist/app-product-detail-actions',
  },
  'products-list': {
    input: './src/@app-products-list/_app.tsx',
    dir: 'dist/app-products-list',
  },
  'products-list-item': {
    input: './src/@app-products-list-item/_app.tsx',
    dir: 'dist/app-products-list-item',
  },
  screen: {
    input: './src/@app-screen/_app.tsx',
    dir: 'dist/app-screen',
  },
  search: {
    input: './src/@app-search/_app.tsx',
    dir: 'dist/app-search',
  },
  'product-search-results': {
    input: './src/@app-product-search-results/_app.tsx',
    dir: 'dist/app-product-search-results',
  },
  'order-delivery-card': {
    input: './src/@app-order-delivery-card/_app.tsx',
    dir: 'dist/app-order-delivery-card',
  },
};

export default defineConfig(({ mode }) => {
  if (mode in appModes) {
    const { input, dir } = appModes[mode as keyof typeof appModes];

    return buildPlugin(input, dir);
  }

  return {
    base: BASE_PATH,
    preview: {
      port: 4177,
      strictPort: true,
    },
    plugins: [
      ...commonPlugins,
      federation({
        name: 'configs',
        filename: 'remoteEntry.js',
        exposes: {
          './Configs': './src/@configs/Configs.tsx',
          './OrderDeliveryCard':
            './src/@configs/components/OrderDeliveryCard/index.tsx',
        },
        shared: [
          'react',
          'react-dom',
          '@mui/material/Tooltip',
          '@mui/material/Popper',
        ],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});

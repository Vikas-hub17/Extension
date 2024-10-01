import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default {
  modules: ['@wxt-dev/module-react'],
  entrypoints: {
    main: './entrypoints/App.tsx',
    contentScript: './entrypoints/contentScript.tsx',
  },
  outDir: './dist',
};


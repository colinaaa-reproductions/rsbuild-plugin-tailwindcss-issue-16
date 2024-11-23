import { defineConfig } from '@rsbuild/core';
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss'

export default defineConfig({
  plugins: [pluginTailwindCSS()],

  // Uncomment this to make build work
  // tools: {
  //   lightningcssLoader: false,
  // },
});

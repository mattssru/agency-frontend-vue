import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  transpileDependencies: true,
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});

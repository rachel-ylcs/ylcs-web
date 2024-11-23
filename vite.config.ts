import Preact from "@preact/preset-vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es6",
  },
  plugins: [UnoCSS(), Preact()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.yinlin.love/",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

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
        target: "http://49.235.151.78:1211/",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/public": {
        target: "http://49.235.151.78:1211/",
      },
    },
  },
});

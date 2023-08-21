import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      //   {
      //   template: {
      //     compilerOptions: {
      //       isCustomElement: (tag) => tag.includes("-"),
      //     },
      //   },
      // }
    ),
  ],
  // build: {
  //   lib: {
  //     entry: "./src/main.ce.ts",
  //     name: "rhyolitePack",
  //     fileName: "rhyolite-pack",
  //   },
  // },
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});

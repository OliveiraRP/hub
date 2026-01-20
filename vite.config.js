import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "ui"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  server: {
    host: "0.0.0.0",
  },
  optimizeDeps: {
    include: ["react-icons/tb"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
  },
});

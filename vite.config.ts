import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/", // Vercel serves from root, so this is fine
  build: {
    outDir: "dist",     // ✅ Vercel expects dist/
    emptyOutDir: true,  // clean before build
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// base: "./" でアセットの URL を相対パスに保つ。
// GitHub Pages が /portfolio/ 配下で配信するため、これが無いと本番で 404 になる
export default defineConfig({
  plugins: [react()],
  base: "./",
});

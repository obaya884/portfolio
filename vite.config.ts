import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// base: "./" keeps asset URLs relative so the build works from the
// /portfolio/ subpath GitHub Pages serves it under.
export default defineConfig({
  plugins: [react()],
  base: "./",
});

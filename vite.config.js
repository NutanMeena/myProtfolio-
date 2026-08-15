import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // During local dev, forward API calls to the standalone Express
      // server (npm run server) so `npm run dev:full` "just works".
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
    },
  },
});

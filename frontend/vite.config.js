import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      outDir: "build",
      assetsDir: "assets",
      emptyOutDir: true,
    },
    plugins: [react()],
    server: {
      host: true,
      strictPort: true,
      port: env.VITE_PORT || 3000      
    },
  };
});

// figure out why backend is not connecting with docker service name
// figure out how to create a docker compose setup for development that live loads changes

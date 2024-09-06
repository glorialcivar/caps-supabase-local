/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import path from "path";
import magicalSvg from "vite-plugin-magical-svg";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), magicalSvg({ target: "react" }), react()],
  resolve: {
    alias: {
      "/public": path.resolve(__dirname, "./public")
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [
      "./src/test/setupTestBeforeEnv.tsx",
      "./src/test/setupTests.tsx"
    ],
    exclude: ["./src/test/**/*.spec.ts"]
  }
});

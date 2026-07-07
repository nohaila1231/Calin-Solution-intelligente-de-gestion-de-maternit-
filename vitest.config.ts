/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",

    css: true,

    coverage: {
      provider: "v8",

      reporter: [
        "text",
        "html",
        "lcov"
      ],

      reportsDirectory: "./coverage",

      include: [
        "src/**/*.{ts,tsx}"
      ],

      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/**/*.test.tsx",
        "src/**/*.spec.tsx"
      ]
    }
  }
});
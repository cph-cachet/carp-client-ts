import path from "path";
import { loadEnv } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import CustomReporter from "./reporter";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const shouldLogOnSuccess = process.env.VITE_ENV === "DEV";

  return defineConfig({
    resolve: {
      alias: {
        "@/": path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [viteTsconfigPaths()],
    test: {
      coverage: {
        provider: "v8",
      },
      reporters: [new CustomReporter(shouldLogOnSuccess)],
      browser: {
        enabled: true,
        name: "chrome",
        headless: true,
      },
    },
    server: {
      proxy: {
        "/proxy": {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/proxy/, ""),
        },
        "/authProxy": {
          target: process.env.VITE_AUTH_BASE_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/authProxy/, ""),
        },
      },
    },
  });
};

import path from "path";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import CustomReporter from "./reporter";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const shouldLogOnSuccess = process.env.VITE_ENV === "DEV";

  return defineConfig({
    resolve: {
      alias: {
        "@/client": path.resolve(__dirname, "./src/client"),
        "@/shared": path.resolve(__dirname, "./src/shared"),
        "@/endpoints": path.resolve(__dirname, "./src/endpoints"),
        "@/test": path.resolve(__dirname, "./src/test"),
      },
    },
    // plugins: [tsConfigPaths()],
    test: {
      reporters: [new CustomReporter(shouldLogOnSuccess)],
      fileParallelism: false,
      maxConcurrency: 1,
      testTimeout: 20000,
      retry: 1,
      coverage: {
        reporter: ["json", "json-summary", "text", "html"],
        reportOnFailure: true,
        exclude: ["non_npm_dependencies", "node_modules", "src/test", "*.*js", "src/index.ts", "dist", "*.ts"],
        thresholds: {
          lines: 80,
          branches: 80,
          functions: 80,
          statements: 80
        }
      }
    },
  });
};

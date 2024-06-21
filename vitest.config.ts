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
      api: {
        middlewareMode: true,
      },
    },
  });
};

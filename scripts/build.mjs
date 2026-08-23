import { copyFileSync, existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";

rmSync("out", { recursive: true, force: true });
rmSync("dist", { recursive: true, force: true });
rmSync(".next", { recursive: true, force: true });

const nextCommand = process.platform === "win32" ? "next.cmd" : "next";
const result = spawnSync(nextCommand, ["build"], {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

// Vercel handles Next.js output directly. The packaging below is only for
// ChatGPT Sites, which expects a dist/client + dist/server layout.
if (process.env.VERCEL || !existsSync(".openai/hosting.json") || !existsSync("server/index.js")) {
  process.exit(0);
}

mkdirSync("dist", { recursive: true });
renameSync("out", "dist/client");
mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
copyFileSync("server/index.js", "dist/server/index.js");
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");

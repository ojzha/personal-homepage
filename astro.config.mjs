import { defineConfig } from "astro/config";

const githubRepository = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubRepo] = githubRepository?.split("/") ?? [];

export default defineConfig({
  output: "static",
  site: githubOwner ? `https://${githubOwner}.github.io` : undefined,
  base: githubRepo ? `/${githubRepo}` : "/"
});

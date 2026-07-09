import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const githubRepository = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubRepo] = githubRepository?.split("/") ?? [];
const siteOwner = githubOwner ?? "ojzha";
const siteRepo = githubRepo ?? "personal-homepage";

export default defineConfig({
  output: "static",
  site: `https://${siteOwner}.github.io`,
  base: `/${siteRepo}`,
  integrations: [sitemap()]
});

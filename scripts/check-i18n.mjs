import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const base = "/personal-homepage/";
const origin = "https://ojzha.github.io";

const pages = {
  home: { zh: "/", en: "/en/" },
  publications: { zh: "/publications/", en: "/en/publications/" },
  projects: { zh: "/projects/", en: "/en/projects/" },
  honors: { zh: "/honors/", en: "/en/honors/" },
  cv: { zh: "/cv/", en: "/en/cv/" }
};

const toPublicPath = (route) => `${base}${route.replace(/^\//, "")}`;
const toPublicUrl = (route) => `${origin}${toPublicPath(route)}`;
const toOutputPath = (route) =>
  route === "/" ? join(root, "dist", "index.html") : join(root, "dist", route, "index.html");

function read(path) {
  return readFileSync(path, "utf8");
}

function getAttribute(html, rel, attribute, value) {
  const links = [...html.matchAll(/<link\s+[^>]*>/g)].map((match) => match[0]);
  const target = links.find(
    (link) =>
      link.includes(`rel="${rel}"`) && (!attribute || link.includes(`${attribute}="${value}"`))
  );
  assert.ok(target, `Missing <link rel="${rel}"${attribute ? ` ${attribute}="${value}"` : ""}>`);
  return target.match(/href="([^"]+)"/)?.[1];
}

function getPrefixedIds(file, prefix) {
  return [...read(join(root, file)).matchAll(new RegExp(`id: "(${prefix}[^"]+)"`, "g"))].map(
    (match) => match[1]
  );
}

function assertUnique(ids, label, expectedCount) {
  assert.equal(ids.length, expectedCount, `${label} count should be ${expectedCount}`);
  assert.equal(new Set(ids).size, ids.length, `${label} IDs must be unique`);
}

const expectedUrls = [];

for (const [pageKey, routePair] of Object.entries(pages)) {
  for (const locale of ["zh", "en"]) {
    const route = routePair[locale];
    const outputPath = toOutputPath(route);
    assert.ok(existsSync(outputPath), `Missing built page: ${route}`);

    const html = read(outputPath);
    const expectedLanguage = locale === "zh" ? "zh-CN" : "en";
    assert.match(html, new RegExp(`<html lang="${expectedLanguage}">`), `Wrong lang on ${route}`);

    assert.equal(getAttribute(html, "canonical"), toPublicUrl(route), `Wrong canonical on ${route}`);
    assert.equal(
      getAttribute(html, "alternate", "hreflang", "zh-CN"),
      toPublicUrl(routePair.zh),
      `Wrong Chinese alternate on ${route}`
    );
    assert.equal(
      getAttribute(html, "alternate", "hreflang", "en"),
      toPublicUrl(routePair.en),
      `Wrong English alternate on ${route}`
    );
    assert.equal(
      getAttribute(html, "alternate", "hreflang", "x-default"),
      toPublicUrl(routePair.zh),
      `Wrong x-default on ${route}`
    );

    const targetLocale = locale === "zh" ? "en" : "zh";
    const switchTarget = toPublicPath(routePair[targetLocale]);
    const switchMatches = [...html.matchAll(/class="language-switch[^"]*"\s+href="([^"]+)"/g)].map(
      (match) => match[1]
    );
    assert.equal(switchMatches.length, 2, `Expected desktop and mobile language switches on ${route}`);
    assert.ok(switchMatches.every((href) => href === switchTarget), `Wrong language switch target on ${route}`);

    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const url = match[1];
      if (url.startsWith("/")) {
        assert.ok(url.startsWith(base), `Internal URL lacks GitHub Pages base on ${route}: ${url}`);
      }
    }

    expectedUrls.push(toPublicUrl(route));
  }
}

assertUnique(getPrefixedIds("src/data/publications.ts", "pub-"), "Publication", 14);
assertUnique(getPrefixedIds("src/data/projects.ts", "project-"), "Project", 5);
assertUnique(getPrefixedIds("src/data/certificates.ts", "certificate-"), "Certificate", 6);
assertUnique(getPrefixedIds("src/data/cv.ts", "patent-"), "Patent", 2);
assertUnique(getPrefixedIds("src/data/cv.ts", "copyright-"), "Software copyright", 4);
assertUnique(getPrefixedIds("src/data/cv.ts", "award-"), "Award", 5);

const publicationSource = read(join(root, "src/data/publications.ts"));
assert.equal((publicationSource.match(/export const publications/g) ?? []).length, 1, "Publication facts must have one source array");
assert.equal((publicationSource.match(/group: "firstAuthor"/g) ?? []).length, 4, "First-author count should be 4");
assert.equal((publicationSource.match(/group: "secondAuthor"/g) ?? []).length, 5, "Second-author count should be 5");
assert.equal((publicationSource.match(/group: "collaborative"/g) ?? []).length, 5, "Collaborative count should be 5");

const sourceFiles = [
  "src/layouts/Layout.astro",
  "src/components/PublicationCard.astro",
  "src/components/ProjectCard.astro",
  "src/pages/index.astro",
  "src/pages/publications.astro",
  "src/pages/projects.astro",
  "src/pages/honors.astro",
  "src/pages/cv.astro",
  "src/pages/en/index.astro",
  "src/pages/en/publications.astro",
  "src/pages/en/projects.astro",
  "src/pages/en/honors.astro",
  "src/pages/en/cv.astro"
];
for (const sourceFile of new Set(sourceFiles)) {
  assert.ok(!read(join(root, sourceFile)).includes(base), `Do not hard-code the GitHub Pages base in ${sourceFile}`);
}

const sitemap = read(join(root, "dist/sitemap-0.xml"));
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).sort();
assert.deepEqual(sitemapUrls, expectedUrls.sort(), "Sitemap must contain exactly the 10 bilingual page URLs");
assert.ok(!sitemap.includes("/blog/"), "Sitemap must not contain a blog route");
assert.ok(!existsSync(join(root, "dist/blog")), "Chinese blog output must not exist");
assert.ok(!existsSync(join(root, "dist/en/blog")), "English blog output must not exist");

for (const route of [pages.home.en, pages.honors.en, pages.cv.en]) {
  const html = read(toOutputPath(route));
  const pdfLinks = [...html.matchAll(/<a[^>]+href="([^"]+\.pdf)"[^>]*>([\s\S]*?)<\/a>/g)];
  assert.ok(pdfLinks.length > 0, `Missing English CV download link on ${route}`);
  for (const [, href, content] of pdfLinks) {
    assert.equal(href, `${base}files/GCX_resume_v5.pdf`, `Wrong English CV PDF on ${route}`);
    assert.match(content, /Download CV \(Chinese PDF\)/, `English PDF label is unclear on ${route}`);
  }
}

const englishHome = read(toOutputPath(pages.home.en));
const compactPublicationMatches = englishHome.match(/<article class="en-home-publication"/g) ?? [];
const interestMatches = englishHome.match(/class="en-home-interest-item"/g) ?? [];
assert.equal(compactPublicationMatches.length, 3, "English home should show exactly 3 compact publications");
assert.equal(interestMatches.length, 3, "English home should show exactly 3 primary research interests");

for (const publicationId of [
  "pub-pear-bruise-optical-properties",
  "pub-peach-dielectric-gan",
  "pub-u-msacnet-pear-defect-segmentation"
]) {
  assert.ok(
    englishHome.includes(`data-publication-id="${publicationId}"`),
    `English home is missing selected publication ${publicationId}`
  );
}

for (const [key, value, label] of [
  ["publications", "14", "Publications"],
  ["first-author", "4", "First-author Papers"],
  ["projects", "5", "Research Projects"]
]) {
  assert.match(
    englishHome,
    new RegExp(`data-metric="${key}"[\\s\\S]*?<strong>${value}<\\/strong>\\s*${label}`),
    `English home metric ${key} is missing or incorrect`
  );
}

assert.equal(
  (englishHome.match(/href="https:\/\/doi\.org\//g) ?? []).length,
  3,
  "English home selected publication titles should have 3 DOI links"
);
for (const removedClass of ["publication-item", "project-item", "stats-compact", "keyword-grid", "info-grid", "tagline"]) {
  assert.ok(
    !englishHome.includes(`class="${removedClass}`),
    `English home should not render the removed ${removedClass} block`
  );
}

for (const route of Object.values(pages).map((pair) => pair.en)) {
  const html = read(toOutputPath(route));
  assert.ok(!html.includes("985"), `English page should not explain Chinese university designations: ${route}`);
  assert.ok(!html.includes("211"), `English page should not explain Chinese university designations: ${route}`);
  assert.ok(!html.includes("Double First-Class"), `English page should not explain Chinese university designations: ${route}`);
}

console.log("Bilingual site checks passed: 10 routes, shared facts, simplified English home, SEO pairs, sitemap, and CV links.");

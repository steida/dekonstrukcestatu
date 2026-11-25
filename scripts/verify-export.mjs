import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(WEB_ROOT, "out");

const EXPECTED_FILES = [
  "index.html",
  "publikace.html",
  "blog.html",
  "blog/dekonstrukce-statu-vs-chytrejsi-dane.html",
  "blog/danime-praci-ale-majetek-temer-vubec.html",
  "blog/zjednodusovaci-a-komplikatori.html",
  "blog/zjednodusovaci-a-komplikatori/audit.html",
  "blog/zjednodusovaci-a-komplikatori/01-ramovani-a-alternativy.html",
  "blog/zjednodusovaci-a-komplikatori/02-zdaneni-prace.html",
  "blog/zjednodusovaci-a-komplikatori/03-zdaneni-spotreby.html",
  "blog/zjednodusovaci-a-komplikatori/04-zdaneni-majetku.html",
  "blog/zjednodusovaci-a-komplikatori/05-zdaneni-firem.html",
  "blog/zjednodusovaci-a-komplikatori/06-metodika-a-obskurantismus.html",
  "blog/fact-check-danovy-raj-evropy.html",
  "manifest.html",
  "o-autorovi.html",
  "media.html",
  "danova-reforma.html",
  "danova-reforma/doplneni.html",
  "danova-reforma/implementace-eu.html",
  "danova-reforma/vyzkum.html",
  "danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady.html",
  "danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie.html",
  "danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla.html",
  "danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty.html",
  "danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "rss.xml",
  "llms.txt",
  "llms-full.txt",
  "images/og-default.png",
  "images/og-pitva-paq.png",
  "images/og-danova-reforma.png",
  "images/og-srovnani-reforem.png",
  "images/og-irozhlas-prokop.png",
  "images/og-danovy-raj-evropy.png",
  "images/logo.png",
  "images/danova-reforma-header.webp",
  "images/daniel-steigerwald.jpg",
  "images/daniel-steigerwald-press.jpg",
  "images/daniel-triptych-1.webp",
  "images/daniel-triptych-2.webp",
  "images/daniel-triptych-3.webp",
  "images/qr-podpora.png",
  "kniha.webp",
  "apple-icon.png",
  "favicon.ico",
  "_headers",
  "_redirects",
];

const FORBIDDEN_INTERNAL_TOKENS = [
  // Legacy blog URL slugs
  "/blog/pitva-paq",
  "/blog/daniel-prokop-na-irozhlasu",
  // Local filesystem / dev server URLs
  "file://",
  "/Users/",
  "http://localhost",
  "http://127.0.0.1",
  // Broken curly-quote URL encoding
  "%E2%80%9C",
  "%E2%80%9D",
  // Raw source markdown / txt filenames (published docs only; generic .md regex checked below)
  "clanek-dane-x.md",
  "clanek-dane-doplneni.md",
  "clanek-pitva-paq-x.md",
  "clanek-srovnani-reforem.md",
  "clanek-irozhlas-prokop.md",
  "Chytrejsi_dane_2025-1.txt",
  "00-komplikatori-hlavni-pitva.md",
  "01-ramovani-a-alternativy.md",
  "02-zdaneni-prace.md",
  "03-zdaneni-spotreby.md",
  "04-zdaneni-majetku.md",
  "05-zdaneni-firem.md",
  "06-metodika-a-obskurantismus.md",
  "07-danovy-raj-evropy.md",
  "05-hr-mechanika-a-okrajove-pripady.md",
  "06-hr-praxe-ve-svete-a-historie.md",
  "07-hr-cesko-eu-a-makro-cisla.md",
  "08-hr-kritika-a-protiargumenty.md",
  "09-hr-dph-obchod-a-hacky.md",
];

const errors = [];

if (!fs.existsSync(OUT_DIR)) {
  console.error(`ERROR: Output directory does not exist: ${OUT_DIR}`);
  process.exit(1);
}

// 1. Check all expected files exist
for (const rel of EXPECTED_FILES) {
  const full = path.join(OUT_DIR, rel);
  if (!fs.existsSync(full)) {
    errors.push(`Missing expected output file: out/${rel}`);
  }
}

// Collect all HTML and text/xml files recursively in out/
function walkFiles(dir, extensions) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full, extensions));
    } else if (
      entry.isFile() &&
      extensions.some((ext) => entry.name.endsWith(ext))
    ) {
      results.push(full);
    }
  }
  return results;
}

function resolveInternalHref(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (clean === "" || clean === "/") {
    return fs.existsSync(path.join(OUT_DIR, "index.html"));
  }
  const rel = clean.replace(/^\/+/, "");
  const candidates = [
    path.join(OUT_DIR, rel),
    path.join(OUT_DIR, `${rel}.html`),
    path.join(OUT_DIR, rel, "index.html"),
  ];
  return candidates.some((c) => fs.existsSync(c));
}

const htmlFiles = walkFiles(OUT_DIR, [".html"]);
const textFiles = walkFiles(OUT_DIR, [".html", ".txt", ".xml"]);
let checkedLinkCount = 0;

// 2. Zero internal leaks across ALL HTML + TXT + XML files in out/
for (const filePath of textFiles) {
  const rel = path.relative(OUT_DIR, filePath);
  const content = fs.readFileSync(filePath, "utf8");
  const contentLower = content.toLowerCase();

  for (const token of FORBIDDEN_INTERNAL_TOKENS) {
    if (contentLower.includes(token.toLowerCase())) {
      errors.push(`Forbidden internal token "${token}" leaked into out/${rel}`);
    }
  }

  // Generic guard: zero local relative .md link targets in rendered HTML/TXT/XML
  if (/(?:href="[^"]*\.md(?:#[^"]*)?"|\]\([^)\s]*\.md(?:#[^)\s]*)?\))/i.test(content)) {
    errors.push(`Raw .md link leaked into out/${rel}`);
  }
}

// 3. Per-page link, SEO metadata, and KaTeX checks
for (const filePath of htmlFiles) {
  const rel = path.relative(OUT_DIR, filePath);
  const content = fs.readFileSync(filePath, "utf8");

  // 3a. Internal href="/..." links
  const hrefRegex = /\bhref="(\/[^"]*)"/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith("//")) continue;
    checkedLinkCount++;
    if (!resolveInternalHref(href)) {
      errors.push(`Broken internal link in out/${rel}: href="${href}"`);
    }
  }

  // 3b. Zero KaTeX error spans anywhere
  if (content.includes("katex-error")) {
    errors.push(`KaTeX error span found in out/${rel}`);
  }

  // 3c. SEO / OG / Twitter metadata checks on every non-404 page
  const isErrorPage = rel === "404.html" || rel === "_not-found.html";
  if (!isErrorPage) {
    if (!content.includes('<link rel="canonical"')) {
      errors.push(`Missing <link rel="canonical"> in out/${rel}`);
    }
    if (!content.includes('<meta property="og:image"')) {
      errors.push(`Missing <meta property="og:image"> in out/${rel}`);
    }
    const twitterTitleMatch = content.match(
      /<meta name="twitter:title" content="([^"]*)"/,
    );
    const ogTitleMatch = content.match(
      /<meta property="og:title" content="([^"]*)"/,
    );
    if (!twitterTitleMatch) {
      errors.push(`Missing <meta name="twitter:title"> in out/${rel}`);
    }
    if (!ogTitleMatch) {
      errors.push(`Missing <meta property="og:title"> in out/${rel}`);
    }
    if (rel !== "index.html") {
      if (ogTitleMatch && ogTitleMatch[1] === "Dekonstrukce státu") {
        errors.push(
          `Subpage out/${rel} inherited bare homepage og:title "Dekonstrukce státu"`,
        );
      }
      if (twitterTitleMatch && twitterTitleMatch[1] === "Dekonstrukce státu") {
        errors.push(
          `Subpage out/${rel} inherited bare homepage twitter:title "Dekonstrukce státu"`,
        );
      }
    }
  }
}

// 4. Verify USD currency values in 05-hr-mechanika are intact (not mangled into KaTeX)
const hr05Path = path.join(
  OUT_DIR,
  "danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady.html",
);
if (fs.existsSync(hr05Path)) {
  const hr05 = fs.readFileSync(hr05Path, "utf8");
  for (const expectedCurrency of ["6 200 USD", "16 500 USD", "9 500 USD", "25 500 USD"]) {
    if (!hr05.includes(expectedCurrency)) {
      errors.push(
        `Currency value "${expectedCurrency}" missing or mangled in out/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady.html`,
      );
    }
  }
  if (!hr05.includes("katex")) {
    errors.push(
      `Expected KaTeX math rendering missing in out/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady.html`,
    );
  }
}

// 5. Verify tables, quick-jump anchor in audit.html & no legacy /pitva-paq output
if (fs.existsSync(path.join(OUT_DIR, "pitva-paq.html"))) {
  errors.push(`Legacy out/pitva-paq.html should not exist`);
}
const pitvaPath = path.join(OUT_DIR, "blog/zjednodusovaci-a-komplikatori/audit.html");
if (fs.existsSync(pitvaPath)) {
  const pitva = fs.readFileSync(pitvaPath, "utf8");
  if (!pitva.includes('class="table-wrap"')) {
    errors.push(
      `Expected class="table-wrap" missing in out/blog/zjednodusovaci-a-komplikatori/audit.html`,
    );
  }
  const tableCount = (pitva.match(/<table[\s>]/g) || []).length;
  const wrapCount = (pitva.match(/class="table-wrap"/g) || []).length;
  if (tableCount === 0 || tableCount !== wrapCount) {
    errors.push(
      `Table wrap mismatch in out/blog/zjednodusovaci-a-komplikatori/audit.html: ${tableCount} tables vs ${wrapCount} wrappers`,
    );
  }
  if (!pitva.includes('id="katalog-12-chyb"')) {
    errors.push(
      `Missing id="katalog-12-chyb" anchor in out/blog/zjednodusovaci-a-komplikatori/audit.html`,
    );
  }
}

// 6. Verify Doplnění #1–#9 anchors in doplneni.html
const doplneniPath = path.join(OUT_DIR, "danova-reforma/doplneni.html");
if (fs.existsSync(doplneniPath)) {
  const doplneni = fs.readFileSync(doplneniPath, "utf8");
  for (let n = 1; n <= 9; n++) {
    if (!doplneni.includes(`id="${n}"`) || !doplneni.includes(`href="#${n}"`)) {
      errors.push(
        `Missing Doplnění #${n} anchor/link in out/danova-reforma/doplneni.html`,
      );
    }
  }
}

// 7. Verify /blog/zjednodusovaci-a-komplikatori links, clean prose & footer contact
const paqClanekPath = path.join(OUT_DIR, "blog/zjednodusovaci-a-komplikatori.html");
if (fs.existsSync(paqClanekPath)) {
  const paqClanek = fs.readFileSync(paqClanekPath, "utf8");
  if (!paqClanek.includes('href="/blog/zjednodusovaci-a-komplikatori/audit"')) {
    errors.push(
      `Missing link to /blog/zjednodusovaci-a-komplikatori/audit in out/blog/zjednodusovaci-a-komplikatori.html`,
    );
  }
  if (!paqClanek.includes('href="/danova-reforma"')) {
    errors.push(
      `Missing link to /danova-reforma in out/blog/zjednodusovaci-a-komplikatori.html`,
    );
  }
  if (!paqClanek.includes("mailto:daniel@steigerwald.cz")) {
    errors.push(
      `Missing footer contact mailto:daniel@steigerwald.cz in out/blog/zjednodusovaci-a-komplikatori.html`,
    );
  }
}

// 7b. Verify zero raw uncleaned @handles inside rendered article prose
for (const filePath of htmlFiles) {
  const rel = path.relative(OUT_DIR, filePath);
  const content = fs.readFileSync(filePath, "utf8");
  const proseMatch = content.match(/<div class="prose prose-ds"[\s\S]*?<\/div>/g);
  if (proseMatch) {
    const proseText = proseMatch.join(" ").replace(/<[^>]+>/g, " ");
    const rawHandles = proseText.match(/(?<![\w/.])@(?!steidacz\b)[A-Za-z0-9_]{3,15}\b/g);
    if (rawHandles) {
      errors.push(`Uncleaned raw @handle(s) ${rawHandles.join(", ")} in prose of out/${rel}`);
    }
  }
}

// 8. Verify contact email CTA on home page and in llms.txt + no duplicate title on /danova-reforma
const indexPath = path.join(OUT_DIR, "index.html");
if (fs.existsSync(indexPath)) {
  const indexHtml = fs.readFileSync(indexPath, "utf8");
  if (!indexHtml.includes("mailto:daniel@steigerwald.cz")) {
    errors.push(`Missing contact mailto:daniel@steigerwald.cz in out/index.html`);
  }
}
const danovaPath = path.join(OUT_DIR, "danova-reforma.html");
if (fs.existsSync(danovaPath)) {
  const danovaHtml = fs.readFileSync(danovaPath, "utf8");
  if (
    danovaHtml.includes(
      "<title>Daňová reforma podle Dekonstrukce státu | Dekonstrukce státu</title>",
    )
  ) {
    errors.push(`Duplicate "Dekonstrukce státu" in <title> on out/danova-reforma.html`);
  }
}
const llmsPath = path.join(OUT_DIR, "llms.txt");
if (fs.existsSync(llmsPath)) {
  const llmsTxt = fs.readFileSync(llmsPath, "utf8");
  if (!llmsTxt.includes("daniel@steigerwald.cz")) {
    errors.push(`Missing contact daniel@steigerwald.cz in out/llms.txt`);
  }
  if (!llmsTxt.includes("/blog/dekonstrukce-statu-vs-chytrejsi-dane")) {
    errors.push(`Missing /blog/dekonstrukce-statu-vs-chytrejsi-dane in out/llms.txt`);
  }
  if (!llmsTxt.includes("/blog/danime-praci-ale-majetek-temer-vubec")) {
    errors.push(`Missing /blog/danime-praci-ale-majetek-temer-vubec in out/llms.txt`);
  }
  if (!llmsTxt.includes("/blog/zjednodusovaci-a-komplikatori")) {
    errors.push(`Missing /blog/zjednodusovaci-a-komplikatori in out/llms.txt`);
  }
  if (!llmsTxt.includes("/blog/fact-check-danovy-raj-evropy")) {
    errors.push(`Missing /blog/fact-check-danovy-raj-evropy in out/llms.txt`);
  }
  if (!llmsTxt.includes("/danova-reforma/implementace-eu")) {
    errors.push(`Missing /danova-reforma/implementace-eu in out/llms.txt`);
  }
}
const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
  if (!sitemapXml.includes("/blog/dekonstrukce-statu-vs-chytrejsi-dane")) {
    errors.push(`Missing /blog/dekonstrukce-statu-vs-chytrejsi-dane in out/sitemap.xml`);
  }
  if (!sitemapXml.includes("/blog/danime-praci-ale-majetek-temer-vubec")) {
    errors.push(`Missing /blog/danime-praci-ale-majetek-temer-vubec in out/sitemap.xml`);
  }
  if (!sitemapXml.includes("/blog/zjednodusovaci-a-komplikatori")) {
    errors.push(`Missing /blog/zjednodusovaci-a-komplikatori in out/sitemap.xml`);
  }
  if (!sitemapXml.includes("/blog/fact-check-danovy-raj-evropy")) {
    errors.push(`Missing /blog/fact-check-danovy-raj-evropy in out/sitemap.xml`);
  }
  if (!sitemapXml.includes("/danova-reforma/implementace-eu")) {
    errors.push(`Missing /danova-reforma/implementace-eu in out/sitemap.xml`);
  }
}
const rssPath = path.join(OUT_DIR, "rss.xml");
if (fs.existsSync(rssPath)) {
  const rssXml = fs.readFileSync(rssPath, "utf8");
  if (!rssXml.includes("/blog/dekonstrukce-statu-vs-chytrejsi-dane")) {
    errors.push(`Missing /blog/dekonstrukce-statu-vs-chytrejsi-dane in out/rss.xml`);
  }
  if (!rssXml.includes("/blog/danime-praci-ale-majetek-temer-vubec")) {
    errors.push(`Missing /blog/danime-praci-ale-majetek-temer-vubec in out/rss.xml`);
  }
  if (!rssXml.includes("/blog/zjednodusovaci-a-komplikatori")) {
    errors.push(`Missing /blog/zjednodusovaci-a-komplikatori in out/rss.xml`);
  }
  if (!rssXml.includes("/blog/fact-check-danovy-raj-evropy")) {
    errors.push(`Missing /blog/fact-check-danovy-raj-evropy in out/rss.xml`);
  }
  if (!rssXml.includes("/danova-reforma/implementace-eu")) {
    errors.push(`Missing /danova-reforma/implementace-eu in out/rss.xml`);
  }
}

if (errors.length > 0) {
  console.error("VERIFY FAILED:");
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log(
  `VERIFY OK: ${EXPECTED_FILES.length} expected files present, ${htmlFiles.length} HTML pages (+ sitemap/robots/rss/llms) scanned, ${checkedLinkCount} internal links verified, ${FORBIDDEN_INTERNAL_TOKENS.length} forbidden leak/hygiene patterns checked (0 hits), canonical/OG/Twitter tags verified, 0 KaTeX errors, Doplnění #1–#9, /blog/zjednodusovaci-a-komplikatori, currency & table-wrap checks passed.`,
);

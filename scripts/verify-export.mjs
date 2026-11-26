import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(WEB_ROOT, "out");
const SITE_URL = "https://www.dekonstrukcestatu.cz";

const EXPECTED_FILES = [
  "index.html",
  "publikace.html",
  "blog.html",
  "blog/fact-check-svarcsystem.html",
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
  "images/og-svarcsystem.png",
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
  "01-archiv-a-grafy.md",
  "02-statistika-a-data.md",
  "03-pravo-a-eu.md",
  "04-ekonomie-a-svetonazor.md",
  "05-verifikace-a-verdikt.md",
  "paq-svarcsystem-text.txt",
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

function resolveInternalFile(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (clean === "" || clean === "/") {
    const idx = path.join(OUT_DIR, "index.html");
    return fs.existsSync(idx) ? idx : null;
  }
  const rel = clean.replace(/^\/+/, "");
  const candidates = [
    path.join(OUT_DIR, rel),
    path.join(OUT_DIR, `${rel}.html`),
    path.join(OUT_DIR, rel, "index.html"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

function normalizeUrl(url) {
  return url.replace(/\/+$/, "");
}

function expectedCanonicalForRel(rel) {
  if (rel === "index.html") return SITE_URL;
  return `${SITE_URL}/${rel.replace(/\.html$/, "")}`;
}

/**
 * Extract full inner HTML of every `<div class="prose prose-ds"...>...</div>`
 * using balanced div depth counting so nested `.table-wrap` divs never truncate the scan.
 */
function extractProseBlocks(html) {
  const blocks = [];
  const openRe = /<div\b[^>]*\bclass="[^"]*\bprose-ds\b[^"]*"[^>]*>/g;
  const tagRe = /<\/?div\b[^>]*>/gi;
  let openMatch;
  while ((openMatch = openRe.exec(html)) !== null) {
    const start = openMatch.index + openMatch[0].length;
    tagRe.lastIndex = start;
    let depth = 1;
    let end = html.length;
    let tagMatch;
    while ((tagMatch = tagRe.exec(html)) !== null) {
      if (tagMatch[0].startsWith("</")) {
        depth--;
        if (depth === 0) {
          end = tagMatch.index;
          break;
        }
      } else if (!tagMatch[0].endsWith("/>")) {
        depth++;
      }
    }
    blocks.push(html.slice(start, end));
    openRe.lastIndex = end;
  }
  return blocks;
}

const htmlFiles = walkFiles(OUT_DIR, [".html"]);
const textFiles = walkFiles(OUT_DIR, [".html", ".txt", ".xml"]);
let checkedLinkCount = 0;
let checkedFragmentCount = 0;
let checkedJsonLdCount = 0;

// Pre-index all element IDs per HTML file for fragment anchor validation
const htmlContents = new Map();
const htmlIds = new Map();
for (const filePath of htmlFiles) {
  const content = fs.readFileSync(filePath, "utf8");
  htmlContents.set(filePath, content);
  const ids = new Set();
  const idRe = /\bid="([^"]+)"/g;
  let m;
  while ((m = idRe.exec(content)) !== null) {
    ids.add(m[1]);
  }
  htmlIds.set(filePath, ids);
}

// 2. Zero internal leaks across ALL HTML + TXT + XML files in out/
for (const filePath of textFiles) {
  const rel = path.relative(OUT_DIR, filePath);
  const content = htmlContents.get(filePath) ?? fs.readFileSync(filePath, "utf8");
  const contentLower = content.toLowerCase();

  for (const token of FORBIDDEN_INTERNAL_TOKENS) {
    if (contentLower.includes(token.toLowerCase())) {
      errors.push(`Forbidden internal token "${token}" leaked into out/${rel}`);
    }
  }

  // Generic guard: zero local relative .md link targets in rendered HTML/TXT/XML
  if (
    /(?:href="[^"]*\.md(?:#[^"]*)?"|\]\([^)\s]*\.md(?:#[^)\s]*)?\))/i.test(
      content,
    )
  ) {
    errors.push(`Raw .md link leaked into out/${rel}`);
  }
}

// 3. Per-page link, fragment anchor, SEO metadata, JSON-LD, and KaTeX checks
for (const filePath of htmlFiles) {
  const rel = path.relative(OUT_DIR, filePath);
  const content = htmlContents.get(filePath);

  // 3a. Internal href="/..." and same-page href="#..." links + fragment verification
  const hrefRegex = /\bhref="((?:\/|#)[^"]*)"/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith("//") || href === "#") continue;

    if (href.startsWith("#")) {
      const frag = decodeURIComponent(href.slice(1));
      checkedFragmentCount++;
      if (!htmlIds.get(filePath).has(frag)) {
        errors.push(`Broken same-page fragment in out/${rel}: href="${href}"`);
      }
      continue;
    }

    checkedLinkCount++;
    const resolved = resolveInternalFile(href);
    if (!resolved) {
      errors.push(`Broken internal link in out/${rel}: href="${href}"`);
      continue;
    }

    const hashIdx = href.indexOf("#");
    if (hashIdx !== -1 && resolved.endsWith(".html")) {
      const frag = decodeURIComponent(href.slice(hashIdx + 1));
      if (frag) {
        checkedFragmentCount++;
        const targetIds = htmlIds.get(resolved);
        if (targetIds && !targetIds.has(frag)) {
          errors.push(
            `Broken internal fragment in out/${rel}: href="${href}" (missing id="${frag}" in out/${path.relative(OUT_DIR, resolved)})`,
          );
        }
      }
    }
  }

  // 3b. Zero KaTeX error spans and zero decomposed Czech diacritics in MathML
  if (content.includes("katex-error")) {
    errors.push(`KaTeX error span found in out/${rel}`);
  }
  if (content.includes('<mover accent="true"><mtext>')) {
    errors.push(
      `Decomposed KaTeX MathML accent (<mover accent="true"><mtext>) found in out/${rel}`,
    );
  }

  // 3c. Validate every JSON-LD script block parses cleanly
  const jsonLdRe =
    /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let ldMatch;
  while ((ldMatch = jsonLdRe.exec(content)) !== null) {
    checkedJsonLdCount++;
    try {
      JSON.parse(ldMatch[1]);
    } catch (err) {
      errors.push(
        `Invalid JSON-LD in out/${rel}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  // 3d. SEO / OG / Twitter / noindex metadata checks on every non-404 page
  const isErrorPage = rel === "404.html" || rel === "_not-found.html";
  if (!isErrorPage) {
    const expectedUrl = expectedCanonicalForRel(rel);
    const canonicalMatch = content.match(
      /<link rel="canonical" href="([^"]*)"/,
    );
    const ogUrlMatch = content.match(
      /<meta property="og:url" content="([^"]*)"/,
    );
    if (!canonicalMatch) {
      errors.push(`Missing <link rel="canonical"> in out/${rel}`);
    } else if (normalizeUrl(canonicalMatch[1]) !== normalizeUrl(expectedUrl)) {
      errors.push(
        `Canonical mismatch in out/${rel}: got "${canonicalMatch[1]}", expected "${expectedUrl}"`,
      );
    }
    if (!ogUrlMatch) {
      errors.push(`Missing <meta property="og:url"> in out/${rel}`);
    } else if (
      canonicalMatch &&
      normalizeUrl(ogUrlMatch[1]) !== normalizeUrl(canonicalMatch[1])
    ) {
      errors.push(
        `og:url (${ogUrlMatch[1]}) !== canonical (${canonicalMatch[1]}) in out/${rel}`,
      );
    }
    if (!content.includes('<meta property="og:image"')) {
      errors.push(`Missing <meta property="og:image"> in out/${rel}`);
    }
    if (!content.includes('<meta name="twitter:image:alt"')) {
      errors.push(`Missing <meta name="twitter:image:alt"> in out/${rel}`);
    }
    if (/<meta name="robots" content="[^"]*noindex/i.test(content)) {
      errors.push(`Unexpected noindex meta tag on indexable page out/${rel}`);
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
  const hr05 = htmlContents.get(hr05Path);
  for (const expectedCurrency of [
    "6 200 USD",
    "16 500 USD",
    "9 500 USD",
    "25 500 USD",
  ]) {
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
const pitvaPath = path.join(
  OUT_DIR,
  "blog/zjednodusovaci-a-komplikatori/audit.html",
);
if (fs.existsSync(pitvaPath)) {
  const pitva = htmlContents.get(pitvaPath);
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
  const doplneni = htmlContents.get(doplneniPath);
  for (let n = 1; n <= 9; n++) {
    if (!doplneni.includes(`id="${n}"`) || !doplneni.includes(`href="#${n}"`)) {
      errors.push(
        `Missing Doplnění #${n} anchor/link in out/danova-reforma/doplneni.html`,
      );
    }
  }
}

// 7. Verify /blog/zjednodusovaci-a-komplikatori links, clean prose & footer contact
const paqClanekPath = path.join(
  OUT_DIR,
  "blog/zjednodusovaci-a-komplikatori.html",
);
if (fs.existsSync(paqClanekPath)) {
  const paqClanek = htmlContents.get(paqClanekPath);
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

// 7b. Verify zero raw uncleaned @handles across 100% of rendered article prose
for (const filePath of htmlFiles) {
  const rel = path.relative(OUT_DIR, filePath);
  const content = htmlContents.get(filePath);
  const proseBlocks = extractProseBlocks(content);
  if (proseBlocks.length > 0) {
    const proseText = proseBlocks.join(" ").replace(/<[^>]+>/g, " ");
    const rawHandles = proseText.match(
      /(?<![\w/.])@(?!steidacz\b)[A-Za-z0-9_]{3,15}\b/g,
    );
    if (rawHandles) {
      errors.push(
        `Uncleaned raw @handle(s) ${rawHandles.join(", ")} in prose of out/${rel}`,
      );
    }
  }
}

// 8. Verify contact email CTA on home page, no duplicate title, llms.txt, sitemap 1:1, RSS, and _headers
const indexPath = path.join(OUT_DIR, "index.html");
if (fs.existsSync(indexPath)) {
  const indexHtml = htmlContents.get(indexPath);
  if (!indexHtml.includes("mailto:daniel@steigerwald.cz")) {
    errors.push(
      `Missing contact mailto:daniel@steigerwald.cz in out/index.html`,
    );
  }
}
const danovaPath = path.join(OUT_DIR, "danova-reforma.html");
if (fs.existsSync(danovaPath)) {
  const danovaHtml = htmlContents.get(danovaPath);
  if (
    danovaHtml.includes(
      "<title>Daňová reforma podle Dekonstrukce státu | Dekonstrukce státu</title>",
    )
  ) {
    errors.push(
      `Duplicate "Dekonstrukce státu" in <title> on out/danova-reforma.html`,
    );
  }
}
const llmsPath = path.join(OUT_DIR, "llms.txt");
if (fs.existsSync(llmsPath)) {
  const llmsTxt = fs.readFileSync(llmsPath, "utf8");
  for (const required of [
    "daniel@steigerwald.cz",
    "/blog/fact-check-svarcsystem",
    "/blog/dekonstrukce-statu-vs-chytrejsi-dane",
    "/blog/danime-praci-ale-majetek-temer-vubec",
    "/blog/zjednodusovaci-a-komplikatori",
    "/blog/fact-check-danovy-raj-evropy",
    "/danova-reforma/implementace-eu",
  ]) {
    if (!llmsTxt.includes(required)) {
      errors.push(`Missing ${required} in out/llms.txt`);
    }
  }
}

const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrls = new Set(
    [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
      normalizeUrl(m[1].trim()),
    ),
  );
  const expectedIndexableUrls = new Set(
    EXPECTED_FILES.filter(
      (rel) => rel.endsWith(".html") && rel !== "404.html",
    ).map((rel) => normalizeUrl(expectedCanonicalForRel(rel))),
  );
  for (const expectedUrl of expectedIndexableUrls) {
    if (!sitemapUrls.has(expectedUrl)) {
      errors.push(`Missing URL in out/sitemap.xml: ${expectedUrl}`);
    }
  }
  for (const actualUrl of sitemapUrls) {
    if (!expectedIndexableUrls.has(actualUrl)) {
      errors.push(`Unexpected extra URL in out/sitemap.xml: ${actualUrl}`);
    }
  }
}

const rssPath = path.join(OUT_DIR, "rss.xml");
if (fs.existsSync(rssPath)) {
  const rssXml = fs.readFileSync(rssPath, "utf8");
  if (!rssXml.includes("<rss ") || !rssXml.includes("<channel>")) {
    errors.push(`Invalid RSS root structure in out/rss.xml`);
  }
  const rssItems = rssXml.match(/<item>[\s\S]*?<\/item>/g) || [];
  if (rssItems.length < 10) {
    errors.push(`Too few <item> entries (${rssItems.length}) in out/rss.xml`);
  }
  for (const itemXml of rssItems) {
    for (const tag of ["title", "link", "guid", "pubDate", "description"]) {
      if (!new RegExp(`<${tag}\\b[^>]*>[^<]+</${tag}>`).test(itemXml)) {
        errors.push(`Missing <${tag}> in an RSS item in out/rss.xml`);
      }
    }
  }
  for (const required of [
    "/blog/fact-check-svarcsystem",
    "/blog/dekonstrukce-statu-vs-chytrejsi-dane",
    "/blog/danime-praci-ale-majetek-temer-vubec",
    "/blog/zjednodusovaci-a-komplikatori",
    "/blog/fact-check-danovy-raj-evropy",
    "/danova-reforma/implementace-eu",
  ]) {
    if (!rssXml.includes(required)) {
      errors.push(`Missing ${required} in out/rss.xml`);
    }
  }
}

const headersPath = path.join(OUT_DIR, "_headers");
if (fs.existsSync(headersPath)) {
  const headersTxt = fs.readFileSync(headersPath, "utf8");
  for (const required of [
    "/llms.txt",
    "/llms-full.txt",
    "/robots.txt",
    "Content-Type: text/plain; charset=utf-8",
    "! X-Robots-Tag",
  ]) {
    if (!headersTxt.includes(required)) {
      errors.push(`Missing "${required}" rule in out/_headers`);
    }
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
  `VERIFY OK: ${EXPECTED_FILES.length} expected files present, ${htmlFiles.length} HTML pages (+ sitemap/robots/rss/llms/_headers) scanned, ${checkedLinkCount} internal links & ${checkedFragmentCount} fragment anchors verified, ${checkedJsonLdCount} JSON-LD blocks valid, 0 forbidden leaks, 0 KaTeX errors/accents, full prose @handle scan passed.`,
);

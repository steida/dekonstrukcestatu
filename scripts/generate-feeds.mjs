import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://www.dekonstrukcestatu.cz";
const PAQ_PUBLIC_PDF =
  "https://www.paqresearch.cz/content/files/2025/10/Chytrejsi_dane_2025-1.pdf";

// Sanitize markdown for llms-full.txt (mirrors lib/markdown.ts hygiene rules)
const INTERNAL_LINE_RE = /^\s*\*?\s*\*{0,2}(?:Zpracoval|Autor auditu)\s*:/i;

const PUBLISHED_URL_MAP = {
  "clanek-dane-x.md": `${SITE_URL}/danova-reforma`,
  "clanek-dane-doplneni.md": `${SITE_URL}/danova-reforma/doplneni`,
  "clanek-srovnani-reforem.md": `${SITE_URL}/blog/dekonstrukce-statu-vs-chytrejsi-dane`,
  "clanek-irozhlas-prokop.md": `${SITE_URL}/blog/danime-praci-ale-majetek-temer-vubec`,
  "clanek-pitva-paq-x.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori`,
  "00-komplikatori-hlavni-pitva.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/audit`,
  "01-ramovani-a-alternativy.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/01-ramovani-a-alternativy`,
  "02-zdaneni-prace.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/02-zdaneni-prace`,
  "03-zdaneni-spotreby.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/03-zdaneni-spotreby`,
  "04-zdaneni-majetku.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/04-zdaneni-majetku`,
  "05-zdaneni-firem.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/05-zdaneni-firem`,
  "06-metodika-a-obskurantismus.md": `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/06-metodika-a-obskurantismus`,
  "07-danovy-raj-evropy.md": `${SITE_URL}/blog/fact-check-danovy-raj-evropy`,
  "05-hr-mechanika-a-okrajove-pripady.md": `${SITE_URL}/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady`,
  "06-hr-praxe-ve-svete-a-historie.md": `${SITE_URL}/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie`,
  "07-hr-cesko-eu-a-makro-cisla.md": `${SITE_URL}/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla`,
  "08-hr-kritika-a-protiargumenty.md": `${SITE_URL}/danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty`,
  "09-hr-dph-obchod-a-hacky.md": `${SITE_URL}/danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky`,
};

function sanitizeForLlmsFull(raw, docUrl) {
  let out = raw
    .split("\n")
    .filter((line) => !INTERNAL_LINE_RE.test(line))
    .join("\n");

  out = out.replace(
    /\[([^\]]+)\]\(file:\/\/([^)\s]+)\)/g,
    (_m, label, rawPath) => {
      const base = path.posix.basename(rawPath.replace(/#.*$/, ""));
      if (base in PUBLISHED_URL_MAP) {
        const cleanLabel = /\.(?:md|txt)$/i.test(label.replace(/^`|`$/g, ""))
          ? PUBLISHED_URL_MAP[base]
          : label;
        return `[${cleanLabel}](${PUBLISHED_URL_MAP[base]})`;
      }
      if (base === "Chytrejsi_dane_2025-1.pdf" || base === "Chytrejsi_dane_2025-1.txt") {
        return `[Chytřejší daně (PDF)](${PAQ_PUBLIC_PDF})`;
      }
      return label.replace(/^`|`$/g, "").replace(/\.(?:md|txt)$/i, "");
    },
  );

  out = out
    .replace(/file:\/\/\/[^\s)>\]]+/g, "")
    .replace(/`?Chytrejsi_dane_2025-1\.txt`?/g, `[Chytřejší daně (PDF)](${PAQ_PUBLIC_PDF})`)
    .replace(/`?clanek-dane-x\.md`?/g, `[Daňová reforma podle Dekonstrukce státu](${SITE_URL}/danova-reforma)`)
    .replace(/`?clanek-dane-doplneni\.md`?/g, `[Doplnění #1–#9](${SITE_URL}/danova-reforma/doplneni)`)
    .replace(/`?(?:research\/)?(?:paq-audit\/)?[0-9]{2}-[\w-]+\.md`?/g, (m) => {
      const base = path.posix.basename(m.replace(/`/g, ""));
      return PUBLISHED_URL_MAP[base] || base.replace(/\.md$/, "");
    })
    // Ensure all internal markdown links and bare #fragment anchors in standalone llms-full.txt are absolute URLs
    .replace(/\]\((\/[^)\s]*)\)/g, `](${SITE_URL}$1)`)
    .replace(/\]\((#[^)\s]+)\)/g, `](${docUrl}$1)`);

  return out.trim();
}

const LLMS_TXT = `# Dekonstrukce státu

> Nezávislý český think-tank Daniela Steigerwalda zaměřený na odstraňování složitosti státu, daňovou jednoduchost a institucionální reformy.

Web: ${SITE_URL}
Autor: Daniel Steigerwald — Programátor (Evolu) a zakladatel Dekonstrukce státu (${SITE_URL}/o-autorovi · https://x.com/steidacz)
Kontakt (podcasty, debaty, přednášky): daniel@steigerwald.cz
GitHub: https://github.com/steida/dekonstrukcestatu
RSS: ${SITE_URL}/rss.xml
Plný textový přehled: ${SITE_URL}/llms-full.txt

## Hlavní stránky

- [Úvod](${SITE_URL}): Představení think-tanku, výběr textů, rozhovory a podpora projektu.
- [Publikace](${SITE_URL}/publikace): Hlavní programové a výzkumné publikace (Daňová reforma, 5 studií Hall–Rabushka, Manifest).
- [Blog](${SITE_URL}/blog): Eseje, forenzní audity a fact-checky (Chytřejší daně, Daňový ráj Evropy).
- [O autorovi & Press Kit](${SITE_URL}/o-autorovi): Daniel Steigerwald — profil, témata pro debaty a podklady pro média.
- [Média, rozhovory a přednášky](${SITE_URL}/media): Výběr debat a přednášek k dekonstrukci státu, daním a demonopolizaci.
- [Manifest dekonstrukce státu (návrh)](${SITE_URL}/manifest): Základní esej o problému složitosti státu, jeho dekonstrukci a odpovědích v listárně.

## Blog — Srovnání

- [Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty](${SITE_URL}/blog/dekonstrukce-statu-vs-chytrejsi-dane): Férové tříminutové srovnání dvou pohlednic (Hall–Rabushka) a 224stránkové studie Chytřejší daně (PAQ Research, CVF a IDEA, 2025) — tabulka v 8 oblastech, shody i zásadní rozdíly.

## Pitva studie PAQ Research, CVF a IDEA Chytřejší daně (224 stran)

- [„Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)](${SITE_URL}/blog/danime-praci-ale-majetek-temer-vubec): 48 záznamů Daniela Prokopa v Českém rozhlase za 12 měsíců, pravidelný týdenní pořad bez oponenta a fact-check titulku a 9 klíčových výroků z rozhovoru na iROZHLASu (25. 11. 2026).
- [Zjednodušovači, komplikátoři a 224 stran Chytřejších daní (hlavní esej)](${SITE_URL}/blog/zjednodusovaci-a-komplikatori): Čtivý esej o zbytečné složitosti v daních, švech mezi kapitolami studie Chytřejší daně, černé skříňce modelů a férovém účtu, kde mají autoři pravdu.
- [Komplikátoři v praxi — hlavní forenzní syntéza (00)](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/audit): Kompletní šestikapitolová forenzní pitva studie Chytřejší daně (PAQ Research / CVF / IDEA, 2025) se všemi tabulkami, výpočty, katalogem 12 chyb, 15 klíčovými citacemi a rozcestníkem na 46 ověřených citací v kapitolových auditech.
  - [01 — Kapitola 1: Rámování, „komplikátorství“ a slepé uličky alternativ](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/01-ramovani-a-alternativy)
  - [02 — Kapitola 2: Zdanění práce](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/02-zdaneni-prace)
  - [03 — Kapitola 3: Zdanění spotřeby](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/03-zdaneni-spotreby)
  - [04 — Kapitola 4: Zdanění majetku](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/04-zdaneni-majetku)
  - [05 — Kapitola 5: Zdanění zisků firem](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/05-zdaneni-firem)
  - [06 — Kapitola 6: Metodika modelování, HDP a anatomie obskurantismu](${SITE_URL}/blog/zjednodusovaci-a-komplikatori/06-metodika-a-obskurantismus)
- [Fact-check studie PAQ Research „Daňový ráj Evropy“ (11/2026)](${SITE_URL}/blog/fact-check-danovy-raj-evropy): Datové a metodologické ověření listopadové studie PAQ Research (2026) debatované v DVTV — po započtení DPPO (4,46 % HDP, 5. nejvyšší výběr v EU) je Česko přesně na mediánu EU27 (5,62 % HDP) a i bez dočasné daně z neočekávaných zisků (~5,17 %) vybírá víc než všichni sousedé.

## Daňová reforma podle Dekonstrukce státu

- [Daňová reforma podle Dekonstrukce státu](${SITE_URL}/danova-reforma): Hlavní text — dvě pohlednice, dva parametry (X a Y %), systém podle modelu Hall–Rabushka Flat Tax a ankap okénko.
- [Doplnění #1–#9 k článku Daňová reforma](${SITE_URL}/danova-reforma/doplneni): Průběžný archiv zpřesnění a odpovědí na námitky z diskuse (ztráty z odpisů, OSVČ, dvě pohlednice, dividendy, 15% DPH v EU, pojišťovny, kapitálové výnosy a rodiny s dětmi).
- [Výzkum Hall–Rabushka (studie 01–05)](${SITE_URL}/danova-reforma/vyzkum): Pět hloubkových ekonomických, právních a historických studií k modelu Hall–Rabushka Flat Tax.
  - [01 — Přesná mechanika, okrajové případy a moderní varianty](${SITE_URL}/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady)
  - [02 — Praxe ve světě, historie a empirické lekce](${SITE_URL}/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie)
  - [03 — Česko, EU a makroekonomické propočty (2024–2026)](${SITE_URL}/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla)
  - [04 — Oponentní rozbor, nejsilnější verze kritiky a katalog 15 nejtvrdších námitek](${SITE_URL}/danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty)
  - [05 — DPH, mezinárodní obchod a 5 „hacků“ na DPH](${SITE_URL}/danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky)
- [Daňová reforma: Realistická implementace pro Česko v rámci EU (rozpracovaný návrh)](${SITE_URL}/danova-reforma/implementace-eu): Šest rozpracovaných okruhů pro realistické nasazení dvou pohlednic v rámci pravidel EU (jednotná 15% DPH s dobrovolným hotovostním režimem do 2 mil. EUR / ~50 mil. Kč, minimální spotřební daně a 0 % u energií domácností, přechodová pravidla, soulad s právem EU/SZDZ a pojistky proti lobbistům).
`;

fs.writeFileSync(path.join(WEB_ROOT, "public/llms.txt"), LLMS_TXT, "utf8");

// Generate public/llms-full.txt from sanitized flagship texts
const flagshipDocs = [
  {
    file: "content/blog/dekonstrukce-statu-vs-chytrejsi-dane.md",
    url: `${SITE_URL}/blog/dekonstrukce-statu-vs-chytrejsi-dane`,
    label: "Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty",
  },
  {
    file: "content/blog/danime-praci-ale-majetek-temer-vubec.md",
    url: `${SITE_URL}/blog/danime-praci-ale-majetek-temer-vubec`,
    label: "„Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)",
  },
  {
    file: "content/blog/zjednodusovaci-a-komplikatori/index.md",
    url: `${SITE_URL}/blog/zjednodusovaci-a-komplikatori`,
    label: "Hlavní esej — Pitva Chytřejších daní",
  },
  {
    file: "content/danova-reforma/index.md",
    url: `${SITE_URL}/danova-reforma`,
    label: "Hlavní návrh — Daňová reforma podle Dekonstrukce státu",
  },
  {
    file: "content/danova-reforma/doplneni.md",
    url: `${SITE_URL}/danova-reforma/doplneni`,
    label: "Doplnění #1–#9 k Daňové reformě",
  },
  {
    file: "content/blog/zjednodusovaci-a-komplikatori/audit.md",
    url: `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/audit`,
    label: "Kompletní šestikapitolová syntéza — Audit Chytřejších daní (PAQ, CVF, IDEA)",
  },
  {
    file: "content/blog/fact-check-danovy-raj-evropy.md",
    url: `${SITE_URL}/blog/fact-check-danovy-raj-evropy`,
    label: "Fact-check studie PAQ Research Daňový ráj Evropy (11/2026)",
  },
];

const fullSections = [
  `# Dekonstrukce státu — Plné znění hlavních textů (llms-full.txt)\n\nZdroj: ${SITE_URL}\nKompletní index (26 stránek): ${SITE_URL}/llms.txt\nAutor: Daniel Steigerwald (daniel@steigerwald.cz · https://x.com/steidacz)\n`,
];

for (const doc of flagshipDocs) {
  const abs = path.join(WEB_ROOT, doc.file);
  if (!fs.existsSync(abs)) {
    console.error(`ERROR: Flagship markdown not found: ${abs}`);
    process.exit(1);
  }
  const cleaned = sanitizeForLlmsFull(fs.readFileSync(abs, "utf8"), doc.url);
  fullSections.push(
    `\n---\n\n<!-- ${doc.label} | ${doc.url} -->\n\nURL: ${doc.url}\n\n${cleaned}\n`,
  );
}

fs.writeFileSync(
  path.join(WEB_ROOT, "public/llms-full.txt"),
  fullSections.join("\n"),
  "utf8",
);

// Generate valid RSS 2.0 feed (public/rss.xml)
function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const RSS_ITEMS = [
  {
    title: "Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty",
    url: `${SITE_URL}/blog/dekonstrukce-statu-vs-chytrejsi-dane`,
    pubDate: "Wed, 25 Nov 2026 23:00:00 +0100",
    description:
      "Férové tříminutové srovnání dvou pohlednic a 224 stran Chytřejších daní (PAQ Research, CVF a IDEA): tabulka v 8 oblastech, shody i zásadní rozdíly.",
  },
  {
    title: "„Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)",
    url: `${SITE_URL}/blog/danime-praci-ale-majetek-temer-vubec`,
    pubDate: "Wed, 25 Nov 2026 20:00:00 +0100",
    description:
      "48 záznamů Daniela Prokopa v Českém rozhlase za 12 měsíců, pravidelný týdenní pořad bez oponenta a fact-check titulku a 9 klíčových výroků z rozhovoru na iROZHLASu (25. 11. 2026).",
  },
  {
    title: "Fact-check studie PAQ Research „Daňový ráj Evropy“ (11/2026)",
    url: `${SITE_URL}/blog/fact-check-danovy-raj-evropy`,
    pubDate: "Wed, 25 Nov 2026 16:00:00 +0100",
    description:
      "Metodologické a datové ověření studie PAQ Research Daňový ráj Evropy (16. 11. 2026): po započtení DPPO (4,46 % HDP, 5. nejvyšší výběr v EU) leží ČR přesně na mediánu EU27 (5,62 % HDP) a i bez dočasné daně z neočekávaných zisků (~5,17 %) vybírá víc než všichni sousedé; 82,1 % rozdílu uváděného PAQ přitom tvoří složka Stock of capital (hlavně nižší daně z držby majetku domácností i firem a absence daní z převodu a dědění, 0,44 vs. 2,07 % HDP).",
  },
  {
    title: "Zjednodušovači, komplikátoři a 224 stran Chytřejších daní",
    url: `${SITE_URL}/blog/zjednodusovaci-a-komplikatori`,
    pubDate: "Wed, 25 Nov 2026 14:00:00 +0100",
    description:
      "Proč 224stránková studie PAQ Research, CVF a IDEA místo přestavby daňového systému od základů lepí přes třicet nových záplat, kde se kapitoly perou samy se sebou, co ukazuje černá skříňka modelů — a v čem mají autoři pravdu.",
  },
  {
    title:
      "Komplikátoři v praxi: kompletní šestikapitolová pitva Chytřejších daní",
    url: `${SITE_URL}/blog/zjednodusovaci-a-komplikatori/audit`,
    pubDate: "Wed, 25 Nov 2026 12:00:00 +0100",
    description:
      "Forenzní audit 224stránkové studie Chytřejší daně (PAQ Research / CVF / IDEA, 2025): všechny tabulky, výpočty, katalog 12 ověřených chyb a 15 klíčových citací (46 v kapitolových auditech).",
  },
  {
    title: "Daňová reforma: Realistická implementace pro Česko v rámci EU",
    url: `${SITE_URL}/danova-reforma/implementace-eu`,
    pubDate: "Wed, 25 Nov 2026 11:00:00 +0100",
    description:
      "Rozpracovaný návrh, jak převést dvě pohlednice (Hall–Rabushka) do praxe v EU: jednotná 15% DPH s hotovostním režimem, minima spotřebních daní (a 0 % u energií domácností) a pojistky.",
  },
  {
    title: "Doplnění #1–#9 k článku Daňová reforma podle Dekonstrukce státu",
    url: `${SITE_URL}/danova-reforma/doplneni`,
    pubDate: "Wed, 25 Nov 2026 10:00:00 +0100",
    description:
      "Průběžný archiv zpřesnění a odpovědí na praktické námitky z diskuse: přenos ztrát, OSVČ, dvě pohlednice, dividendy, vykuchaná 15% DPH v EU, pojišťovny, 0 % z kapitálových výnosů a rodiny s dětmi.",
  },
  {
    title: "Daňová reforma podle Dekonstrukce státu",
    url: `${SITE_URL}/danova-reforma`,
    pubDate: "Tue, 24 Nov 2026 14:00:00 +0100",
    description:
      "Dvě pohlednice, dva parametry (X a Y %). Jak by vypadal nejméně škodlivý daňový systém odolný vůči bipolární poruše státu — podle modelu Hall–Rabushka Flat Tax.",
  },
  {
    title: "Hloubkový výzkum Hall–Rabushka Flat Tax (studie 01–05)",
    url: `${SITE_URL}/danova-reforma/vyzkum`,
    pubDate: "Tue, 24 Nov 2026 12:00:00 +0100",
    description:
      "Pět odborných studií k modelu Hall–Rabushka Flat Tax: mechanika, světová praxe, makroekonomické propočty pro ČR v rámci EU, nejsilnější verze kritiky a audit 5 „hacků“ na DPH.",
  },
  {
    title: "Manifest dekonstrukce státu (návrh)",
    url: `${SITE_URL}/manifest`,
    pubDate: "Tue, 01 Sep 2020 12:00:00 +0200",
    description:
      "Základní text o problému složitosti státu, jeho postupné dekonstrukci a odpovědích v listárně.",
  },
];

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dekonstrukce státu</title>
    <link>${SITE_URL}</link>
    <description>Nezávislý think-tank Daniela Steigerwalda zaměřený na odstraňování složitosti státu, daňovou jednoduchost a forenzní analýzy.</description>
    <language>cs</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${RSS_ITEMS[0].pubDate}</lastBuildDate>
${RSS_ITEMS.map(
  (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`,
).join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(WEB_ROOT, "public/rss.xml"), rssXml, "utf8");

console.log(
  `Generated public/llms.txt, public/llms-full.txt (${flagshipDocs.length} flagship docs), and public/rss.xml from content/.`,
);

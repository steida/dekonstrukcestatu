export interface DocMeta {
  slug: string;
  code?: string;
  shortTitle: string;
  title: string;
  seoTitle?: string;
  description: string;
  filePath: string;
  url: string;
  date: string;
  isoDate: string;
  pages?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

export const SITE_URL = "https://www.dekonstrukcestatu.cz";

export const DANOVA_REFORMA_DOC: DocMeta = {
  slug: "danova-reforma",
  shortTitle: "Daňová reforma",
  title: "Daňová reforma podle Dekonstrukce státu",
  seoTitle: "Daňová reforma podle Dekonstrukce státu",
  description:
    "Dvě pohlednice, dva parametry (X a Y %). Jak by vypadal nejméně škodlivý daňový systém odolný vůči bipolární poruše státu — pro státisty i anarchisty.",
  filePath: "content/danova-reforma/index.md",
  url: "/danova-reforma",
  date: "24. 11. 2026",
  isoDate: "2026-11-24",
  ogImage: "/images/og-danova-reforma.png",
  ogImageAlt:
    "Daňová reforma podle Dekonstrukce státu — Pošlete finančáku pohlednici",
};

export const DOPLNENI_DOC: DocMeta = {
  slug: "doplneni",
  shortTitle: "Doplnění #1–#9",
  title: "Doplnění k článku „Daňová reforma podle Dekonstrukce státu“",
  seoTitle: "Doplnění #1–#9 k Daňové reformě",
  description:
    "Odpovědi na námitky z diskuse: přenos ztrát, OSVČ, dvě pohlednice, dividendy, 15% DPH v EU, pojišťovny, 0 % z kapitálových výnosů a rodiny s dětmi.",
  filePath: "content/danova-reforma/doplneni.md",
  url: "/danova-reforma/doplneni",
  date: "25. 11. 2026",
  isoDate: "2026-11-25",
  ogImage: "/images/og-danova-reforma.png",
  ogImageAlt: "Doplnění #1–#9 k článku Daňová reforma podle Dekonstrukce státu",
};

export const SROVNANI_REFOREM_DOC: DocMeta = {
  slug: "dekonstrukce-statu-vs-chytrejsi-dane",
  shortTitle: "Srovnání: dvě pohlednice vs. Chytřejší daně",
  title: "Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty",
  seoTitle: "Srovnání: dvě pohlednice vs. Chytřejší daně",
  description:
    "Férové tříminutové srovnání dvou pohlednic a 224 stran Chytřejších daní (PAQ Research, CVF a IDEA): tabulka v 8 oblastech, shody i zásadní rozdíly.",
  filePath: "content/blog/dekonstrukce-statu-vs-chytrejsi-dane.md",
  url: "/blog/dekonstrukce-statu-vs-chytrejsi-dane",
  date: "25. 11. 2026",
  isoDate: "2026-11-25",
  ogImage: "/images/og-srovnani-reforem.png",
  ogImageAlt:
    "Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty",
};

export const PITVA_PAQ_ESSAY: DocMeta = {
  slug: "zjednodusovaci-a-komplikatori",
  code: "Esej",
  shortTitle: "Zjednodušovači a komplikátoři",
  title: "Zjednodušovači, komplikátoři a 224 stran Chytřejších daní",
  seoTitle: "Zjednodušovači, komplikátoři a Chytřejší daně",
  description:
    "Proč 224stránková studie PAQ Research, CVF a IDEA místo zjednodušení od základů lepí přes třicet záplat, kde se kapitoly perou a v čem mají autoři pravdu.",
  filePath: "content/blog/zjednodusovaci-a-komplikatori/index.md",
  url: "/blog/zjednodusovaci-a-komplikatori",
  date: "25. 11. 2026",
  isoDate: "2026-11-25",
  ogImage: "/images/og-pitva-paq.png",
  ogImageAlt:
    "Zjednodušovači, komplikátoři a 224 stran Chytřejších daní — Forenzní audit studie PAQ Research, CVF a IDEA",
};

export const PITVA_PAQ_MAIN: DocMeta = {
  slug: "audit",
  code: "00",
  shortTitle: "Hlavní syntéza",
  title:
    "Komplikátoři v praxi: šestikapitolová pitva studie Chytřejší daně (PAQ Research, CVF a IDEA)",
  seoTitle: "Pitva Chytřejších daní (PAQ, CVF, IDEA)",
  description:
    "Forenzní audit 224stránkové studie Chytřejší daně (PAQ, CVF, IDEA): tabulky, výpočty, katalog 12 chyb, 15 klíčových citací (46 v kapitolových auditech) a srovnání se dvěma pohlednicemi.",
  filePath: "content/blog/zjednodusovaci-a-komplikatori/audit.md",
  url: "/blog/zjednodusovaci-a-komplikatori/audit",
  date: "25. 11. 2026",
  isoDate: "2026-11-25",
  pages: "224 stran studie",
  ogImage: "/images/og-pitva-paq.png",
  ogImageAlt:
    "Komplikátoři v praxi — Forenzní audit studie Chytřejší daně (PAQ Research, CVF a IDEA)",
};

export const PITVA_PAQ_CHAPTERS: DocMeta[] = [
  {
    slug: "01-ramovani-a-alternativy",
    code: "01",
    shortTitle: "Rámování a alternativy",
    title:
      "Kapitola 1: Rámování, „komplikátorství“ a slepé uličky alternativ",
    seoTitle: "Audit Chytřejších daní · Kap. 1: Rámování",
    description:
      "Audit úvodu a kapitoly 1 studie Chytřejší daně (str. 1–66): proč zjednodušení není cílem reformy, desítky nových mechanismů a tři mimodaňové záplaty.",
    filePath: "content/blog/zjednodusovaci-a-komplikatori/01-ramovani-a-alternativy.md",
    url: "/blog/zjednodusovaci-a-komplikatori/01-ramovani-a-alternativy",
    date: "25. 11. 2026",
    isoDate: "2026-11-25",
    pages: "str. 1–66",
    ogImage: "/images/og-pitva-paq.png",
    ogImageAlt:
      "Audit Chytřejších daní (PAQ, CVF, IDEA) — Kapitola 1: Rámování a alternativy",
  },
  {
    slug: "02-zdaneni-prace",
    code: "02",
    shortTitle: "Zdanění práce",
    title: "Kapitola 2: Zdanění práce",
    seoTitle: "Audit Chytřejších daní · Kap. 2: Práce",
    description:
      "Audit kapitoly 2 (str. 67–97): parametrické záplaty místo sloučení odvodů, přifouknutá elasticita práce a klam nominální čisté mzdy.",
    filePath: "content/blog/zjednodusovaci-a-komplikatori/02-zdaneni-prace.md",
    url: "/blog/zjednodusovaci-a-komplikatori/02-zdaneni-prace",
    date: "25. 11. 2026",
    isoDate: "2026-11-25",
    pages: "str. 67–97",
    ogImage: "/images/og-pitva-paq.png",
    ogImageAlt:
      "Audit Chytřejších daní (PAQ, CVF, IDEA) — Kapitola 2: Zdanění práce",
  },
  {
    slug: "03-zdaneni-spotreby",
    code: "03",
    shortTitle: "Zdanění spotřeby",
    title: "Kapitola 3: Zdanění spotřeby",
    seoTitle: "Audit Chytřejších daní · Kap. 3: Spotřeba",
    description:
      "Audit kapitoly 3 (str. 98–135): regresivní daně z hříchu, výchovné sociální inženýrství, EET a inflační šok přenesený na domácnosti.",
    filePath: "content/blog/zjednodusovaci-a-komplikatori/03-zdaneni-spotreby.md",
    url: "/blog/zjednodusovaci-a-komplikatori/03-zdaneni-spotreby",
    date: "25. 11. 2026",
    isoDate: "2026-11-25",
    pages: "str. 98–135",
    ogImage: "/images/og-pitva-paq.png",
    ogImageAlt:
      "Audit Chytřejších daní (PAQ, CVF, IDEA) — Kapitola 3: Zdanění spotřeby",
  },
  {
    slug: "04-zdaneni-majetku",
    code: "04",
    shortTitle: "Zdanění majetku",
    title: "Kapitola 4: Zdanění majetku",
    seoTitle: "Audit Chytřejších daní · Kap. 4: Majetek",
    description:
      "Audit kapitoly 4 (str. 136–182): cenové mapy pozemků, nelikvidita vlastníků, 8 cenových skupin katastrálních území, dědická daň, daň z bohatství a exit tax.",
    filePath: "content/blog/zjednodusovaci-a-komplikatori/04-zdaneni-majetku.md",
    url: "/blog/zjednodusovaci-a-komplikatori/04-zdaneni-majetku",
    date: "25. 11. 2026",
    isoDate: "2026-11-25",
    pages: "str. 136–182",
    ogImage: "/images/og-pitva-paq.png",
    ogImageAlt:
      "Audit Chytřejších daní (PAQ, CVF, IDEA) — Kapitola 4: Zdanění majetku",
  },
  {
    slug: "05-zdaneni-firem",
    code: "05",
    shortTitle: "Zdanění zisků firem",
    title: "Kapitola 5: Zdanění zisků firem",
    seoTitle: "Audit Chytřejších daní · Kap. 5: Firmy",
    description:
      "Audit kapitoly 5 (str. 183–202): dobrá obhajoba okamžitých odpisů zadušená byrokratickými výjimkami, stropy a etatistickým vybíráním vítězů.",
    filePath: "content/blog/zjednodusovaci-a-komplikatori/05-zdaneni-firem.md",
    url: "/blog/zjednodusovaci-a-komplikatori/05-zdaneni-firem",
    date: "25. 11. 2026",
    isoDate: "2026-11-25",
    pages: "str. 183–202",
    ogImage: "/images/og-pitva-paq.png",
    ogImageAlt:
      "Audit Chytřejších daní (PAQ, CVF, IDEA) — Kapitola 5: Zdanění zisků firem",
  },
  {
    slug: "06-metodika-a-obskurantismus",
    code: "06",
    shortTitle: "Metodika a obskurantismus",
    title:
      "Kapitola 6: Metodika modelování, HDP, časové testy a anatomie obskurantismu",
    seoTitle: "Audit Chytřejších daní · Kap. 6: Metodika",
    description:
      "Audit příloh (str. 203–222): černá skříňka Oxford Economics, arbitrární volby, časové testy a křížové ověření tvrdých čísel studie.",
    filePath: "content/blog/zjednodusovaci-a-komplikatori/06-metodika-a-obskurantismus.md",
    url: "/blog/zjednodusovaci-a-komplikatori/06-metodika-a-obskurantismus",
    date: "25. 11. 2026",
    isoDate: "2026-11-25",
    pages: "str. 203–222",
    ogImage: "/images/og-pitva-paq.png",
    ogImageAlt:
      "Audit Chytřejších daní (PAQ, CVF, IDEA) — Kapitola 6: Metodika a obskurantismus",
  },
];

export const PITVA_PAQ_DANOVY_RAJ: DocMeta = {
  slug: "fact-check-danovy-raj-evropy",
  code: "07",
  shortTitle: "Daňový ráj Evropy (11/2026)",
  title: "Fact-check studie PAQ Research „Daňový ráj Evropy“ (11/2026)",
  seoTitle: "Fact-check: Daňový ráj Evropy (PAQ 2026)",
  description:
    "Fact-check studie PAQ Research Daňový ráj Evropy (11/2026): s DPPO (4,46 % HDP, 5. nejvyšší výběr v EU) je ČR přesně na mediánu EU27 (5,62 % HDP); i bez dočasné daně z neočekávaných zisků (~5,17 %) je nad všemi sousedy.",
  filePath: "content/blog/fact-check-danovy-raj-evropy.md",
  url: "/blog/fact-check-danovy-raj-evropy",
  date: "25. 11. 2026",
  isoDate: "2026-11-25",
  pages: "Studie PAQ 11/2026",
  ogImage: "/images/og-danovy-raj-evropy.png",
  ogImageAlt: "Fact-check studie PAQ Research Daňový ráj Evropy (11/2026)",
};

export const PITVA_PAQ_IROZHLAS: DocMeta = {
  slug: "danime-praci-ale-majetek-temer-vubec",
  code: "08",
  shortTitle: "Fact-check iROZHLASu (11/2026)",
  title: "„Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)",
  seoTitle: "Fact-check iROZHLASu: Daníme práci a majetek?",
  description:
    "48 záznamů Daniela Prokopa v ČRo za 12 měsíců, pravidelný týdenní pořad bez oponenta a fact-check titulku a 9 klíčových výroků z rozhovoru na iROZHLASu (25. 11. 2026).",
  filePath: "content/blog/danime-praci-ale-majetek-temer-vubec.md",
  url: "/blog/danime-praci-ale-majetek-temer-vubec",
  date: "25. 11. 2026",
  isoDate: "2026-11-25",
  ogImage: "/images/og-irozhlas-prokop.png",
  ogImageAlt: "„Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)",
};

export const PITVA_PAQ_ALL: DocMeta[] = [
  PITVA_PAQ_ESSAY,
  PITVA_PAQ_MAIN,
  ...PITVA_PAQ_CHAPTERS,
  PITVA_PAQ_DANOVY_RAJ,
  PITVA_PAQ_IROZHLAS,
];

export const VYZKUM_HR_STUDIES: DocMeta[] = [
  {
    slug: "05-hr-mechanika-a-okrajove-pripady",
    code: "01",
    shortTitle: "Mechanika a okrajové případy",
    title:
      "Hall–Rabushka Flat Tax: Přesná mechanika, okrajové případy a moderní varianty",
    seoTitle: "Hall–Rabushka 01: Mechanika a okrajové případy",
    description:
      "Design R. Halla a A. Rabushky (1981–2007), neutralita Caryho Browna, přenos ztrát s úročením, benefity, penze a srovnání s X-Tax, DBCFT a estonskou DPT.",
    filePath: "content/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady.md",
    url: "/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady",
    date: "24. 11. 2026",
    isoDate: "2026-11-24",
    ogImage: "/images/og-danova-reforma.png",
    ogImageAlt: "Hall–Rabushka 01 — Přesná mechanika a okrajové případy",
  },
  {
    slug: "06-hr-praxe-ve-svete-a-historie",
    code: "02",
    shortTitle: "Praxe ve světě a historie",
    title:
      "Hall–Rabushka Flat Tax a příbuzné daňové reformy v reálném světě: historie, data a empirické lekce",
    seoTitle: "Hall–Rabushka 02: Praxe ve světě a historie",
    description:
      "Slovensko 2004, Estonsko 1994–2026, Pobaltí, britské Full Expensing, Česko 2008 a empirická literatura o investicích a compliance nákladech.",
    filePath: "content/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie.md",
    url: "/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie",
    date: "24. 11. 2026",
    isoDate: "2026-11-24",
    ogImage: "/images/og-danova-reforma.png",
    ogImageAlt: "Hall–Rabushka 02 — Praxe ve světě a historie",
  },
  {
    slug: "07-hr-cesko-eu-a-makro-cisla",
    code: "03",
    shortTitle: "Česko, EU a makročísla",
    title:
      "Hall–Rabushka Flat Tax v ČR a v EU: Makroekonomické propočty (2024–2026) a právní mantinely",
    seoTitle: "Hall–Rabushka 03: Česko, EU a makropropočty",
    description:
      "Makroekonomický propočet sazeb (X, Y %) pro 3bilionový český stát, 15% DPH, směrnice EU, OECD Pilíř 2, SZDZ, IRS Foreign Tax Credit a RUD.",
    filePath: "content/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla.md",
    url: "/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla",
    date: "24. 11. 2026",
    isoDate: "2026-11-24",
    ogImage: "/images/og-danova-reforma.png",
    ogImageAlt: "Hall–Rabushka 03 — Česko, EU a makroekonomické propočty",
  },
  {
    slug: "08-hr-kritika-a-protiargumenty",
    code: "04",
    shortTitle: "Kritika a protiargumenty",
    title:
      "Hall–Rabushka Flat Tax: Oponentní rozbor, nejsilnější verze kritiky a katalog 15 nejtvrdších námitek",
    seoTitle: "Hall–Rabushka 04: Kritika a 15 námitek",
    description:
      "Nejsilnější odborné námitky z ekonomické literatury, fiskální praxe, daňového práva i rakouské školy — 5 hlavních min a 15 nejtvrdších otázek.",
    filePath: "content/danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty.md",
    url: "/danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty",
    date: "24. 11. 2026",
    isoDate: "2026-11-24",
    ogImage: "/images/og-danova-reforma.png",
    ogImageAlt: "Hall–Rabushka 04 — Kritika a katalog 15 nejtvrdších námitek",
  },
  {
    slug: "09-hr-dph-obchod-a-hacky",
    code: "05",
    shortTitle: "DPH, obchod a 5 hacků",
    title:
      "Hall–Rabushka, DPH a mezinárodní obchod: Feldstein–Krugmanův test a 5 „hacků“ na DPH",
    seoTitle: "Hall–Rabushka 05: DPH, obchod a 5 hacků",
    description:
      "Feldstein–Krugmanův klam (Amazon vs. Alza, Škoda Auto), japonská lekce a audit 5 „hacků“ na DPH: proč v EU legálně projde jen „vykuchaná“ 15% DPH s hotovostním režimem.",
    filePath: "content/danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky.md",
    url: "/danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky",
    date: "24. 11. 2026",
    isoDate: "2026-11-24",
    ogImage: "/images/og-danova-reforma.png",
    ogImageAlt: "Hall–Rabushka 05 — DPH, mezinárodní obchod a 5 hacků na DPH",
  },
];

export function getPitvaChapter(slug: string): DocMeta | undefined {
  return PITVA_PAQ_CHAPTERS.find((doc) => doc.slug === slug);
}

export function getVyzkumStudy(slug: string): DocMeta | undefined {
  return VYZKUM_HR_STUDIES.find((doc) => doc.slug === slug);
}

export function getPrevNext(
  list: DocMeta[],
  currentUrl: string,
): { prev?: DocMeta; next?: DocMeta } {
  const index = list.findIndex((item) => item.url === currentUrl);
  if (index === -1) return {};
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index < list.length - 1 ? list[index + 1] : undefined,
  };
}

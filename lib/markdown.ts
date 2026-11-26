import fs from "node:fs";
import path from "node:path";
import type { Element, ElementContent, Root, Text } from "hast";
import { toString as hastToString } from "hast-util-to-string";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface RenderedMarkdown {
  html: string;
  toc: TocItem[];
  wordCount: number;
  readingMinutes: number;
}

export interface RenderOptions {
  linkifyXHandles?: boolean;
  customHeadingId?: (text: string, defaultId: string) => string;
}

const PAQ_PUBLIC_PDF =
  "https://www.paqresearch.cz/content/files/2025/10/Chytrejsi_dane_2025-1.pdf";

const PUBLISHED_FILE_META: Record<string, { url: string; label: string }> = {
  "clanek-dane-x.md": {
    url: "/danova-reforma",
    label: "Daňová reforma podle Dekonstrukce státu",
  },
  "clanek-dane-doplneni.md": {
    url: "/danova-reforma/doplneni",
    label: "Doplnění #1–#9 k Daňové reformě",
  },
  "clanek-srovnani-reforem.md": {
    url: "/blog/dekonstrukce-statu-vs-chytrejsi-dane",
    label: "Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty",
  },
  "clanek-irozhlas-prokop.md": {
    url: "/blog/danime-praci-ale-majetek-temer-vubec",
    label: "„Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)",
  },
  "clanek-pitva-paq-x.md": {
    url: "/blog/zjednodusovaci-a-komplikatori",
    label: "Zjednodušovači, komplikátoři a 224 stran Chytřejších daní",
  },
  "00-komplikatori-hlavni-pitva.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/audit",
    label: "Komplikátoři v praxi (hlavní syntéza)",
  },
  "01-ramovani-a-alternativy.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/01-ramovani-a-alternativy",
    label: "Kapitola 1: Rámování a alternativy",
  },
  "02-zdaneni-prace.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/02-zdaneni-prace",
    label: "Kapitola 2: Zdanění práce",
  },
  "03-zdaneni-spotreby.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/03-zdaneni-spotreby",
    label: "Kapitola 3: Zdanění spotřeby",
  },
  "04-zdaneni-majetku.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/04-zdaneni-majetku",
    label: "Kapitola 4: Zdanění majetku",
  },
  "05-zdaneni-firem.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/05-zdaneni-firem",
    label: "Kapitola 5: Zdanění zisků firem",
  },
  "06-metodika-a-obskurantismus.md": {
    url: "/blog/zjednodusovaci-a-komplikatori/06-metodika-a-obskurantismus",
    label: "Kapitola 6: Metodika a obskurantismus",
  },
  "07-danovy-raj-evropy.md": {
    url: "/blog/fact-check-danovy-raj-evropy",
    label: "Fact-check: Daňový ráj Evropy (11/2026)",
  },
  "05-hr-mechanika-a-okrajove-pripady.md": {
    url: "/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady",
    label: "studie Mechanika a okrajové případy",
  },
  "06-hr-praxe-ve-svete-a-historie.md": {
    url: "/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie",
    label: "studie Praxe ve světě a historie",
  },
  "07-hr-cesko-eu-a-makro-cisla.md": {
    url: "/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla",
    label: "studie Česko, EU a makroekonomické propočty",
  },
  "08-hr-kritika-a-protiargumenty.md": {
    url: "/danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty",
    label: "studie Kritika a protiargumenty",
  },
  "09-hr-dph-obchod-a-hacky.md": {
    url: "/danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky",
    label: "studie DPH, obchod a 5 hacků",
  },
};

const EDITORIAL_METADATA_LINE_REGEX =
  /^\s*\*?\s*\*{0,2}(?:Zpracoval|Autor auditu)\s*:/i;

function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\uFEFF?\s*#\s+[^\n]+\n+/, "");
}

function isRawFilenameLabel(label: string): boolean {
  const clean = label.replace(/^`|`$/g, "").trim();
  return /\.(?:md|txt|pdf)$/i.test(clean);
}

/**
 * Normalize editorial metadata lines and local source paths before rendering.
 */
function sanitizePublicMarkdown(markdown: string): string {
  // 1. Remove editorial metadata lines
  let out = markdown
    .split("\n")
    .filter((line) => !EDITORIAL_METADATA_LINE_REGEX.test(line))
    .join("\n");

  // 2. Clean redundant double .txt + .pdf source corpus line in 00-komplikatori
  out = out.replace(
    /Kompletní text \[Chytrejsi_dane_2025-1\.txt\]\([^)]+\) a originální PDF \[Chytrejsi_dane_2025-1\.pdf\]\([^)]+\)/g,
    `Originální publikace [Chytřejší daně (PDF, PAQ Research)](${PAQ_PUBLIC_PDF})`,
  );

  // Clean raw txt line-range prefix before Chytrejsi_dane link (e.g. "; řádky 7932–8760 v [...]")
  out = out.replace(
    /;\s*řádky\s+\d+[–-]\d+\s+v\s+\[`?Chytrejsi_dane_2025-1\.txt`?\]\([^)]+\)/g,
    ` v [${"Chytřejší daně (PDF)"}](${PAQ_PUBLIC_PDF})`,
  );

  // 3. Rewrite all markdown links pointing to file:///...
  out = out.replace(
    /\[([^\]]+)\]\(file:\/\/([^)\s]+)\)/g,
    (_match, label: string, rawPath: string) => {
      const cleanPath = rawPath.replace(/#.*$/, "");
      const basename = path.posix.basename(cleanPath);

      if (basename in PUBLISHED_FILE_META) {
        const meta = PUBLISHED_FILE_META[basename];
        const displayLabel = isRawFilenameLabel(label) ? meta.label : label;
        return `[${displayLabel}](${meta.url})`;
      }

      if (
        basename === "Chytrejsi_dane_2025-1.pdf" ||
        basename === "Chytrejsi_dane_2025-1.txt"
      ) {
        const displayLabel = isRawFilenameLabel(label)
          ? "Chytřejší daně (PDF)"
          : label;
        return `[${displayLabel}](${PAQ_PUBLIC_PDF})`;
      }

      // Any other local file reference: strip link and remove raw .md/.txt extension
      return isRawFilenameLabel(label)
        ? label.replace(/^`|`$/g, "").replace(/\.(?:md|txt)$/i, "")
        : label;
    },
  );

  // Defensive removal of any bare file:/// URLs
  out = out.replace(/file:\/\/\/[^\s)>\]]+/g, "");

  // Normalize canonical self-links to internal routes so they navigate in-tab
  // and get validated as internal links by verify-export.
  out = out.replace(
    /\]\(https?:\/\/(?:www\.)?dekonstrukcestatu\.cz(\/[^)\s]*)?\)/gi,
    (_m, relPath: string | undefined) => `](${relPath || "/"})`,
  );

  // 4. Clean remaining bare / backticked references to our working .md / .txt files
  //    Line-by-line so headings never receive nested links.
  out = out
    .split("\n")
    .map((line) => {
      const isHeading = /^#{1,6}\s/.test(line);

      // Clean raw Chytrejsi_dane_2025-1.txt mentions
      line = line.replace(
        /`?Chytrejsi_dane_2025-1\.txt`?/g,
        isHeading
          ? "Chytřejší daně (PDF)"
          : `[Chytřejší daně (PDF)](${PAQ_PUBLIC_PDF})`,
      );

      // Clean raw clanek-dane-x.md mentions (backticked or bare, not inside URLs)
      line = line.replace(
        /`clanek-dane-x\.md`|(?<![/\w-])clanek-dane-x\.md\b/g,
        isHeading
          ? "Daňová reforma podle Dekonstrukce státu"
          : "[Daňová reforma podle Dekonstrukce státu](/danova-reforma)",
      );

      // Clean raw research/06-hr-praxe-ve-svete-a-historie.md mentions
      line = line.replace(
        /`(?:research\/)?06-hr-praxe-ve-svete-a-historie\.md`/g,
        isHeading
          ? "studie Praxe ve světě a historie"
          : "[studie Praxe ve světě a historie](/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie)",
      );

      // Clean any remaining backticked published .md filenames
      for (const [filename, meta] of Object.entries(PUBLISHED_FILE_META)) {
        const escaped = filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(`\`(?:research/(?:paq-audit/)?)?${escaped}\``, "g");
        line = line.replace(
          re,
          isHeading ? meta.label : `[${meta.label}](${meta.url})`,
        );
      }

      return line;
    })
    .join("\n");

  // Prevent remark-gfm autolink from swallowing Czech closing quotes (https://...“)
  out = mapOutsideCode(out, (segment) =>
    segment.replace(
      /(?<!\(|\[)(https?:\/\/[^\s)<>„“”]+)([“”])/g,
      "[$1]($1)$2",
    ),
  );

  return out;
}

/**
 * Transform non-code segments of markdown while leaving fenced code blocks
 * and inline code spans completely untouched.
 */
function mapOutsideCode(
  markdown: string,
  fn: (segment: string) => string,
): string {
  const codePattern = /(```[\s\S]*?```|`[^`\n]+`)/g;
  const parts = markdown.split(codePattern);
  return parts
    .map((part, index) => (index % 2 === 1 ? part : fn(part)))
    .join("");
}

/**
 * Escape currency dollar signs ($6 200, $16 500, $544B) before remark-math so
 * monetary values are never misinterpreted as inline LaTeX math, while keeping
 * real math expressions ($5\,762{,}7...$, $19 / 1{,}08^6$, $100 \cdot (1-Y)$)
 * intact.
 */
function escapeCurrencyDollars(markdown: string): string {
  const currencyDollarRegex =
    /(?<!\\)(?<!\$)\$(?=\d{1,3}(?: \d{3})*(?:[.,]\d+)?(?:[BMK]\b)?(?=$|[\s,.;:!?)*<])(?!\s*[\\/*+\-=<>^_]))/g;

  return mapOutsideCode(markdown, (segment) =>
    segment.replace(currencyDollarRegex, "\\$"),
  );
}

const X_HANDLE_LABELS: Record<string, string> = {
  paq_research: "PAQ Research",
  idea_thinktank: "IDEA",
  petrvili: "Petr Vilím",
  petr_jansky: "Petr Janský",
  Daniel_Munich: "Daniel Münich",
};

function linkifyHandles(markdown: string): string {
  const mdLinkPattern = /(\[[^\]]*\]\([^)]*\))/g;
  return mapOutsideCode(markdown, (segment) =>
    segment
      .split(mdLinkPattern)
      .map((part, idx) =>
        idx % 2 === 1
          ? part
          : part.replace(
              /(?<![\w/.])@([A-Za-z0-9_]{2,15})\b/g,
              (_m, handle: string) => {
                const label = X_HANDLE_LABELS[handle] ?? `@${handle}`;
                return `[${label}](https://x.com/${handle})`;
              },
            ),
      )
      .join(""),
  );
}

function rehypeCustomHeadingIds(
  customHeadingId?: (text: string, defaultId: string) => string,
) {
  return () => (tree: Root) => {
    if (!customHeadingId) return;
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "h2" || node.tagName === "h3") {
        const currentId =
          typeof node.properties?.id === "string" ? node.properties.id : "";
        const text = hastToString(node).trim();
        const nextId = customHeadingId(text, currentId);
        if (nextId && nextId !== currentId) {
          node.properties = { ...node.properties, id: nextId };
        }
      }
    });
  };
}

function rehypeCollectToc(toc: TocItem[]) {
  return () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "h2" || node.tagName === "h3") {
        const id =
          typeof node.properties?.id === "string" ? node.properties.id : "";
        const text = hastToString(node).trim();
        if (id && text) {
          toc.push({
            id,
            text,
            level: node.tagName === "h2" ? 2 : 3,
          });
        }
      }
    });
  };
}

const KATEX_ACCENT_COMPOSE: Record<string, Record<string, string>> = {
  "ˊ": {
    a: "á",
    e: "é",
    ı: "í",
    i: "í",
    o: "ó",
    u: "ú",
    y: "ý",
    A: "Á",
    E: "É",
    I: "Í",
    O: "Ó",
    U: "Ú",
    Y: "Ý",
  },
  "´": {
    a: "á",
    e: "é",
    ı: "í",
    i: "í",
    o: "ó",
    u: "ú",
    y: "ý",
    A: "Á",
    E: "É",
    I: "Í",
    O: "Ó",
    U: "Ú",
    Y: "Ý",
  },
  "ˇ": {
    c: "č",
    d: "ď",
    e: "ě",
    n: "ň",
    r: "ř",
    s: "š",
    t: "ť",
    z: "ž",
    C: "Č",
    D: "Ď",
    E: "Ě",
    N: "Ň",
    R: "Ř",
    S: "Š",
    T: "Ť",
    Z: "Ž",
  },
  "˚": {
    u: "ů",
    U: "Ů",
  },
  "¨": {
    a: "ä",
    o: "ö",
    u: "ü",
    A: "Ä",
    O: "Ö",
    U: "Ü",
  },
};

function hasClass(node: Element, cls: string): boolean {
  const c = node.properties?.className;
  return Array.isArray(c) && c.includes(cls);
}

function isPlainMordSpan(node: ElementContent): node is Element {
  if (node.type !== "element" || node.tagName !== "span") return false;
  const cls = node.properties?.className;
  if (!Array.isArray(cls) || cls.length !== 1 || cls[0] !== "mord") return false;
  const keys = Object.keys(node.properties || {}).filter(
    (k) => k !== "className" && node.properties?.[k] !== undefined,
  );
  if (keys.length > 0) return false;
  return node.children.every((ch) => ch.type === "text");
}

function isPlainMtext(node: ElementContent): node is Element {
  if (node.type !== "element" || node.tagName !== "mtext") return false;
  const keys = Object.keys(node.properties || {}).filter(
    (k) => node.properties?.[k] !== undefined,
  );
  if (keys.length > 0) return false;
  return node.children.every((ch) => ch.type === "text");
}

function extractComposedFromKatexHtmlAccent(node: Element): string | null {
  let base = "";
  let accent = "";

  const walk = (el: Element, inAccentBody: boolean) => {
    const nextInAccentBody = inAccentBody || hasClass(el, "accent-body");
    for (const child of el.children) {
      if (child.type === "element") {
        if (child.tagName === "span" && hasClass(child, "pstrut")) continue;
        walk(child, nextInAccentBody);
      } else if (child.type === "text") {
        const val = child.value.trim();
        if (!val) continue;
        if (nextInAccentBody) {
          accent += val;
        } else {
          base += val;
        }
      }
    }
  };

  walk(node, false);
  return KATEX_ACCENT_COMPOSE[accent]?.[base] ?? null;
}

/**
 * Recompose KaTeX's decomposed Czech diacritics in both MathML (<mover accent="true">)
 * and HTML (.mord.text > .mord.accent) so screen readers and copy-paste receive
 * clean UTF-8 characters (č, ž, á, ř, š, ě, í, ů, ...) instead of split base+accent.
 */
function rehypeFixKatexCzechDiacritics() {
  return () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      // 1. MathML: replace <mover accent="true"><mtext>c</mtext><mo>ˇ</mo></mover> -> <mtext>č</mtext>
      if (node.children.length > 0) {
        let changedMathMl = false;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (
            child.type === "element" &&
            child.tagName === "mover" &&
            String(child.properties?.accent) === "true" &&
            child.children.length === 2 &&
            child.children[0].type === "element" &&
            child.children[0].tagName === "mtext" &&
            child.children[1].type === "element" &&
            child.children[1].tagName === "mo"
          ) {
            const base = hastToString(child.children[0]);
            const accent = hastToString(child.children[1]);
            const composed = KATEX_ACCENT_COMPOSE[accent]?.[base];
            if (composed) {
              node.children[i] = {
                type: "element",
                tagName: "mtext",
                properties: {},
                children: [{ type: "text", value: composed }],
              };
              changedMathMl = true;
            }
          }
        }
        if (changedMathMl) {
          const merged: ElementContent[] = [];
          for (const child of node.children) {
            const prev = merged[merged.length - 1];
            if (prev && isPlainMtext(prev) && isPlainMtext(child)) {
              prev.children = [
                {
                  type: "text",
                  value: hastToString(prev) + hastToString(child),
                },
              ];
            } else {
              merged.push(child);
            }
          }
          node.children = merged;
        }
      }

      // 2. Visual KaTeX HTML: inside <span class="mord text">, recompose <span class="mord accent">
      if (
        node.tagName === "span" &&
        hasClass(node, "mord") &&
        hasClass(node, "text")
      ) {
        let changedHtml = false;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (
            child.type === "element" &&
            child.tagName === "span" &&
            hasClass(child, "mord") &&
            hasClass(child, "accent")
          ) {
            const composed = extractComposedFromKatexHtmlAccent(child);
            if (composed) {
              node.children[i] = {
                type: "element",
                tagName: "span",
                properties: { className: ["mord"] },
                children: [{ type: "text", value: composed }],
              };
              changedHtml = true;
            }
          }
        }
        if (changedHtml) {
          const merged: ElementContent[] = [];
          for (const child of node.children) {
            const prev = merged[merged.length - 1];
            if (prev && isPlainMordSpan(prev) && isPlainMordSpan(child)) {
              prev.children = [
                {
                  type: "text",
                  value: hastToString(prev) + hastToString(child),
                },
              ];
            } else {
              merged.push(child);
            }
          }
          node.children = merged;
        }
      }
    });
  };
}

function makeUniqueRegionLabel(
  base: string,
  used: Map<string, number>,
): string {
  const count = (used.get(base) ?? 0) + 1;
  used.set(base, count);
  return count === 1 ? base : `${base} (${count})`;
}

/**
 * Make display math blocks (.katex-display) keyboard-scrollable regions with
 * unique contextual aria-labels (WCAG 2.1 SC 2.1.1).
 */
function rehypeAccessibleKatexDisplay() {
  return () => (tree: Root) => {
    let currentHeading = "";
    const usedLabels = new Map<string, number>();

    visit(tree, "element", (node: Element) => {
      if (
        node.tagName === "h2" ||
        node.tagName === "h3" ||
        node.tagName === "h4" ||
        node.tagName === "h5"
      ) {
        currentHeading = hastToString(node).trim();
        return;
      }

      if (hasClass(node, "katex-display")) {
        const base = currentHeading
          ? `Matematický vzorec: ${currentHeading}`
          : "Matematický vzorec";
        node.properties = {
          ...node.properties,
          tabIndex: 0,
          role: "region",
          ariaLabel: makeUniqueRegionLabel(base, usedLabels),
        };
      }
    });
  };
}

function rehypeWrapTables() {
  return () => (tree: Root) => {
    let currentHeading = "";
    const usedLabels = new Map<string, number>();

    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName === "h2" ||
        node.tagName === "h3" ||
        node.tagName === "h4" ||
        node.tagName === "h5"
      ) {
        currentHeading = hastToString(node).trim();
        return;
      }

      if (
        node.tagName === "table" &&
        parent &&
        typeof index === "number" &&
        !(
          parent.type === "element" &&
          parent.tagName === "div" &&
          Array.isArray(parent.properties?.className) &&
          parent.properties.className.includes("table-wrap")
        )
      ) {
        // Add scope="col" to all column headers inside <thead>
        const headerTexts: string[] = [];
        visit(node, "element", (cell: Element) => {
          if (cell.tagName === "thead") {
            visit(cell, "element", (th: Element) => {
              if (th.tagName === "th") {
                if (!th.properties?.scope) {
                  th.properties = { ...th.properties, scope: "col" };
                }
                const text = hastToString(th).trim();
                if (text && headerTexts.length < 2) {
                  headerTexts.push(text);
                }
              }
            });
          }
        });

        const contextName =
          currentHeading ||
          (headerTexts.length > 0 ? headerTexts.join(" / ") : "");
        const baseLabel = contextName ? `Tabulka: ${contextName}` : "Tabulka";

        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: {
            className: ["table-wrap"],
            tabIndex: 0,
            role: "region",
            ariaLabel: makeUniqueRegionLabel(baseLabel, usedLabels),
          },
          children: [node],
        };
        parent.children[index] = wrapper;
      }
    });
  };
}

const CZECH_DIACRITIC_RE = /[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/;

const CZECH_DISQUALIFYING_WORDS = new Set([
  "jako",
  "nebo",
  "ale",
  "tak",
  "jsou",
  "neni",
  "podle",
  "pro",
  "bez",
  "mezi",
  "nad",
  "pod",
  "pak",
  "jen",
  "ani",
  "kde",
  "kdy",
  "jak",
  "tedy",
  "tuto",
  "toto",
  "tato",
  "tyto",
  "toho",
  "tomu",
  "jeho",
  "jejich",
  "cesko",
  "dane",
  "stat",
  "firmy",
  "lidi",
  "mld",
  "tis",
  "kc",
  "na",
  "se",
  "za",
  "od",
  "po",
  "ve",
  "ke",
  "ze",
  "je",
  "pri",
  "str",
  "viz",
]);

const ENGLISH_FUNCTION_WORDS = new Set([
  "the",
  "and",
  "of",
  "that",
  "with",
  "from",
  "does",
  "not",
  "have",
  "has",
  "had",
  "which",
  "their",
  "would",
  "should",
  "could",
  "these",
  "those",
  "this",
  "are",
  "was",
  "were",
  "into",
  "between",
  "under",
  "without",
  "may",
  "can",
  "cannot",
  "will",
  "is",
  "for",
  "our",
  "they",
  "them",
  "its",
  "than",
  "more",
  "less",
  "most",
  "some",
  "such",
  "been",
  "only",
  "also",
  "because",
  "whether",
  "when",
  "where",
  "what",
  "how",
  "who",
  "why",
  "below",
  "above",
  "against",
  "through",
  "while",
  "before",
  "after",
  "during",
  "must",
  "might",
  "both",
  "each",
  "other",
  "very",
  "much",
  "but",
  "all",
  "any",
  "own",
  "same",
  "no",
  "or",
  "if",
  "as",
  "by",
  "in",
  "to",
  "on",
  "at",
  "be",
  "it",
  "we",
  "do",
  "an",
  "a",
]);

const ENGLISH_STRONG_WORDS = new Set([
  "the",
  "and",
  "of",
  "that",
  "with",
  "from",
  "does",
  "not",
  "have",
  "has",
  "had",
  "which",
  "their",
  "would",
  "should",
  "could",
  "these",
  "those",
  "this",
  "are",
  "was",
  "were",
  "into",
  "between",
  "under",
  "without",
  "may",
  "cannot",
  "will",
  "for",
  "our",
  "they",
  "them",
  "its",
  "than",
  "more",
  "less",
  "most",
  "some",
  "such",
  "been",
  "only",
  "also",
  "because",
  "whether",
  "when",
  "where",
  "what",
  "how",
  "who",
  "why",
  "below",
  "above",
  "against",
  "through",
  "while",
  "must",
  "might",
  "other",
]);

function isClearlyEnglish(
  text: string,
  minWords = 5,
  minStrongMatches = 2,
): boolean {
  const cleaned = text.trim();
  if (!cleaned || CZECH_DIACRITIC_RE.test(cleaned)) return false;

  const words = cleaned.toLowerCase().match(/\b[a-z]+(?:'[a-z]+)?\b/g) || [];
  if (words.length < minWords) return false;

  for (const w of words) {
    if (CZECH_DISQUALIFYING_WORDS.has(w)) return false;
  }

  let strongHits = 0;
  const distinctFn = new Set<string>();
  for (const w of words) {
    if (ENGLISH_FUNCTION_WORDS.has(w)) distinctFn.add(w);
    if (ENGLISH_STRONG_WORDS.has(w)) strongHits++;
  }

  return strongHits >= minStrongMatches && distinctFn.size >= minStrongMatches;
}

const INLINE_QUOTE_RE = /(„[^“\n]{18,}“|“[^”\n]{18,}”)/g;

/**
 * Conservatively mark unambiguous English blockquotes, italicized English quotes/titles,
 * and inline quoted English sentences with lang="en" (WCAG 2.1 SC 3.1.2).
 */
function rehypeEnglishLanguageParts() {
  return () => (tree: Root) => {
    const walk = (node: Root | Element, inEnglish: boolean) => {
      if (node.type === "element") {
        if (
          node.tagName === "code" ||
          node.tagName === "pre" ||
          hasClass(node, "katex")
        ) {
          return;
        }

        const existingLang =
          typeof node.properties?.lang === "string"
            ? node.properties.lang.toLowerCase()
            : "";
        if (existingLang.startsWith("en")) {
          return;
        }

        if (!inEnglish && node.tagName === "blockquote") {
          const text = hastToString(node);
          if (isClearlyEnglish(text, 6, 3)) {
            node.properties = { ...node.properties, lang: "en" };
            return;
          }
        }

        if (!inEnglish && node.tagName === "em") {
          const text = hastToString(node);
          if (isClearlyEnglish(text, 4, 2)) {
            node.properties = { ...node.properties, lang: "en" };
            return;
          }
        }
      }

      if (!("children" in node) || !Array.isArray(node.children)) return;

      const nextChildren: ElementContent[] = [];
      for (const child of node.children) {
        if (
          !inEnglish &&
          child.type === "text" &&
          node.type === "element" &&
          (node.tagName === "p" ||
            node.tagName === "li" ||
            node.tagName === "td" ||
            node.tagName === "blockquote") &&
          INLINE_QUOTE_RE.test(child.value)
        ) {
          INLINE_QUOTE_RE.lastIndex = 0;
          let lastIndex = 0;
          let matchedAny = false;
          let match: RegExpExecArray | null;
          while ((match = INLINE_QUOTE_RE.exec(child.value)) !== null) {
            const quoted = match[0];
            if (!isClearlyEnglish(quoted, 5, 2)) continue;
            matchedAny = true;
            if (match.index > lastIndex) {
              nextChildren.push({
                type: "text",
                value: child.value.slice(lastIndex, match.index),
              } as Text);
            }
            nextChildren.push({
              type: "element",
              tagName: "span",
              properties: { lang: "en" },
              children: [{ type: "text", value: quoted }],
            });
            lastIndex = match.index + quoted.length;
          }
          if (matchedAny) {
            if (lastIndex < child.value.length) {
              nextChildren.push({
                type: "text",
                value: child.value.slice(lastIndex),
              } as Text);
            }
            continue;
          }
        }

        if (child.type === "element") {
          walk(child, inEnglish);
        }
        nextChildren.push(child as ElementContent);
      }

      if (node.type === "element") {
        node.children = nextChildren;
      }
    };

    walk(tree, false);
  };
}

function rehypeExternalLinks() {
  return () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a") {
        const href = node.properties?.href;
        if (typeof href === "string" && /^https?:\/\//i.test(href)) {
          node.properties = {
            ...node.properties,
            target: "_blank",
            rel: ["noopener", "noreferrer"],
          };
          const alreadyHasHint = node.children.some(
            (child) =>
              child.type === "element" && hasClass(child, "sr-only"),
          );
          if (!alreadyHasHint) {
            node.children.push({
              type: "element",
              tagName: "span",
              properties: { className: ["sr-only"] },
              children: [{ type: "text", value: " (otevře se v novém okně)" }],
            });
          }
        }
      }
    });
  };
}

function prepareMarkdown(
  relativeFilePath: string,
  options: Pick<RenderOptions, "linkifyXHandles"> = {},
): { prepared: string; wordCount: number; readingMinutes: number } {
  const absolutePath = path.join(process.cwd(), relativeFilePath);
  const raw = fs.readFileSync(absolutePath, "utf8");

  let prepared = stripLeadingH1(raw);
  prepared = sanitizePublicMarkdown(prepared);
  if (options.linkifyXHandles) {
    prepared = linkifyHandles(prepared);
  }
  prepared = escapeCurrencyDollars(prepared);

  const plainWords = prepared
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    prepared,
    wordCount: plainWords,
    readingMinutes: Math.max(1, Math.round(plainWords / 210)),
  };
}

export function getMarkdownReadingMinutes(
  relativeFilePath: string,
  options: Pick<RenderOptions, "linkifyXHandles"> = {},
): number {
  return prepareMarkdown(relativeFilePath, options).readingMinutes;
}

export async function renderMarkdownFile(
  relativeFilePath: string,
  options: RenderOptions = {},
): Promise<RenderedMarkdown> {
  const { prepared, wordCount, readingMinutes } = prepareMarkdown(
    relativeFilePath,
    options,
  );

  const toc: TocItem[] = [];

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex, { strict: false, trust: false })
    .use(rehypeFixKatexCzechDiacritics())
    .use(rehypeSlug)
    .use(rehypeCustomHeadingIds(options.customHeadingId))
    .use(rehypeCollectToc(toc))
    .use(rehypeAccessibleKatexDisplay())
    .use(rehypeWrapTables())
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: {
        className: ["heading-anchor"],
        ariaHidden: "true",
        tabIndex: -1,
      },
      content: { type: "text", value: "#" },
    })
    .use(rehypeEnglishLanguageParts())
    .use(rehypeExternalLinks())
    .use(rehypeStringify)
    .process(prepared);

  return {
    html: String(file),
    toc,
    wordCount,
    readingMinutes,
  };
}

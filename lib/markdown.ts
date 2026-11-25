import fs from "node:fs";
import path from "node:path";
import type { Element, Root } from "hast";
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

function rehypeWrapTables() {
  return () => (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
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
        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: {
            className: ["table-wrap"],
            tabIndex: 0,
            role: "region",
            ariaLabel: "Tabulka",
          },
          children: [node],
        };
        parent.children[index] = wrapper;
      }
    });
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
        }
      }
    });
  };
}

export async function renderMarkdownFile(
  relativeFilePath: string,
  options: RenderOptions = {},
): Promise<RenderedMarkdown> {
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

  const toc: TocItem[] = [];

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex, { strict: false, trust: false })
    .use(rehypeSlug)
    .use(rehypeCustomHeadingIds(options.customHeadingId))
    .use(rehypeCollectToc(toc))
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: {
        className: ["heading-anchor"],
        ariaLabel: "Odkaz na tuto sekci",
      },
      content: { type: "text", value: "#" },
    })
    .use(rehypeWrapTables())
    .use(rehypeExternalLinks())
    .use(rehypeStringify)
    .process(prepared);

  return {
    html: String(file),
    toc,
    wordCount: plainWords,
    readingMinutes: Math.max(1, Math.round(plainWords / 210)),
  };
}

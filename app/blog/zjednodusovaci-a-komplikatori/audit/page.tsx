import type { Metadata } from "next";
import Link from "next/link";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPrevNext,
  PITVA_PAQ_ALL,
  PITVA_PAQ_ESSAY,
  PITVA_PAQ_MAIN,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: PITVA_PAQ_MAIN.url,
  title: PITVA_PAQ_MAIN.seoTitle,
  description: PITVA_PAQ_MAIN.description,
  type: "article",
  image: PITVA_PAQ_MAIN.ogImage,
  imageAlt: PITVA_PAQ_MAIN.ogImageAlt,
  publishedTime: PITVA_PAQ_MAIN.isoDate,
});

export default async function PitvaPaqAuditPage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    PITVA_PAQ_MAIN.filePath,
    {
      customHeadingId: (text, defaultId) => {
        if (/^4\.4\b/.test(text)) return "katalog-12-chyb";
        return defaultId;
      },
    },
  );
  const { prev, next } = getPrevNext(PITVA_PAQ_ALL, PITVA_PAQ_MAIN.url);

  const quickJumpBox = (
    <aside
      aria-label="Rychlá orientace v pitvě"
      className="no-print mb-6 space-y-1.5 rounded-[var(--radius)] border border-[var(--border)] border-l-4 border-l-[var(--accent)] bg-[var(--surface-elevated)] px-4 py-3.5 text-sm leading-relaxed text-[var(--ink-muted)]"
    >
      <p>
        <strong className="font-semibold text-[var(--ink)]">
          Hledáte čtivý přehled (cca 18 min)?
        </strong>{" "}
        <Link
          href="/blog/zjednodusovaci-a-komplikatori"
          className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          Zjednodušovači, komplikátoři a 224 stran Chytřejších daní →
        </Link>
      </p>
      <p>
        <strong className="font-semibold text-[var(--ink)]">
          Chcete rovnou důkazy?
        </strong>{" "}
        <a
          href="#katalog-12-chyb"
          className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          Přeskočit na katalog 12 ověřených chyb v PDF ↓
        </a>
      </p>
      <p>
        <strong className="font-semibold text-[var(--ink)]">
          Hledáte fact-check k debatě v DVTV?
        </strong>{" "}
        <Link
          href="/blog/fact-check-danovy-raj-evropy"
          className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          Fact-check: Daňový ráj Evropy (PAQ, 11/2026) →
        </Link>
      </p>
    </aside>
  );

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "ScholarlyArticle",
          url: PITVA_PAQ_MAIN.url,
          title: PITVA_PAQ_MAIN.title,
          description: PITVA_PAQ_MAIN.description,
          datePublished: PITVA_PAQ_MAIN.isoDate,
          image: PITVA_PAQ_MAIN.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: PITVA_PAQ_ESSAY.shortTitle, path: PITVA_PAQ_ESSAY.url },
            { name: "Hlavní forenzní syntéza", path: PITVA_PAQ_MAIN.url },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="pitva"
        seriesLabel="Blog · Chytřejší daně (PAQ, CVF a IDEA)"
        sidebarTitle="Fact-checky & pitvy"
        sidebarItems={PITVA_PAQ_ALL}
        currentDoc={PITVA_PAQ_MAIN}
        html={html}
        toc={toc}
        readingMinutes={readingMinutes}
        headerNotice={quickJumpBox}
        prev={prev}
        next={next}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFooterCta } from "@/components/ArticleFooterCta";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import { SROVNANI_REFOREM_DOC } from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: SROVNANI_REFOREM_DOC.url,
  title: SROVNANI_REFOREM_DOC.seoTitle,
  description: SROVNANI_REFOREM_DOC.description,
  type: "article",
  image: SROVNANI_REFOREM_DOC.ogImage,
  imageAlt: SROVNANI_REFOREM_DOC.ogImageAlt,
  publishedTime: SROVNANI_REFOREM_DOC.isoDate,
});

export default async function BlogSrovnaniReforemPage() {
  const { html, readingMinutes } = await renderMarkdownFile(
    SROVNANI_REFOREM_DOC.filePath,
    { linkifyXHandles: true },
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: SROVNANI_REFOREM_DOC.url,
          title: SROVNANI_REFOREM_DOC.title,
          description: SROVNANI_REFOREM_DOC.description,
          datePublished: SROVNANI_REFOREM_DOC.isoDate,
          image: SROVNANI_REFOREM_DOC.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: SROVNANI_REFOREM_DOC.title,
              path: SROVNANI_REFOREM_DOC.url,
            },
          ],
        })}
      />

      <article className="mx-auto max-w-3xl">
        <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[var(--ink-muted)] uppercase tabular-nums">
            <span className="font-semibold text-[var(--accent)]">
              Blog · Srovnání
            </span>
            <span aria-hidden="true">/</span>
            <span>{SROVNANI_REFOREM_DOC.date}</span>
            <span aria-hidden="true">/</span>
            <span>cca {readingMinutes} min čtení</span>
          </div>
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            {SROVNANI_REFOREM_DOC.title}
          </h1>
        </header>

        <div
          className="prose prose-ds"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <nav
          aria-label="Navigace mezi sekcemi"
          className="no-print mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-strong)] pt-6 text-sm"
        >
          <Link
            href="/blog"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            ← Zpět na blog
          </Link>
          <Link
            href="/danova-reforma"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Daňová reforma podle Dekonstrukce státu →
          </Link>
        </nav>

        <ArticleFooterCta />
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFooterCta } from "@/components/ArticleFooterCta";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import { TaxSubNav } from "@/components/TaxSubNav";
import { DOPLNENI_DOC } from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: DOPLNENI_DOC.url,
  title: DOPLNENI_DOC.seoTitle,
  description: DOPLNENI_DOC.description,
  type: "article",
  image: DOPLNENI_DOC.ogImage,
  imageAlt: DOPLNENI_DOC.ogImageAlt,
  publishedTime: DOPLNENI_DOC.publishedTime ?? DOPLNENI_DOC.isoDate,
  modifiedTime: DOPLNENI_DOC.modifiedIsoDate,
});

export default async function DoplneniPage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    DOPLNENI_DOC.filePath,
    {
      linkifyXHandles: true,
      customHeadingId: (text, defaultId) => {
        const match = text.match(/^Doplnění\s+#(\d+)/i);
        return match ? match[1] : defaultId;
      },
    },
  );

  const supplements = toc.filter((item) => item.level === 2);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: DOPLNENI_DOC.url,
          title: DOPLNENI_DOC.title,
          description: DOPLNENI_DOC.description,
          datePublished: DOPLNENI_DOC.publishedTime ?? DOPLNENI_DOC.isoDate,
          dateModified: DOPLNENI_DOC.modifiedIsoDate,
          image: DOPLNENI_DOC.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Daňová reforma", path: "/danova-reforma" },
            { name: "Doplnění #1–#9", path: "/danova-reforma/doplneni" },
          ],
        })}
      />

      <TaxSubNav active="doplneni" />

      <article className="mx-auto max-w-3xl">
        <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[var(--ink-muted)] uppercase tabular-nums">
            <span className="font-semibold text-[var(--accent)]">
              Doplnění #1–#9
            </span>
            <span aria-hidden="true">/</span>
            <span>
              Aktualizováno{" "}
              <time
                dateTime={DOPLNENI_DOC.modifiedIsoDate ?? DOPLNENI_DOC.isoDate}
              >
                {DOPLNENI_DOC.modifiedDate ?? DOPLNENI_DOC.date}
              </time>
            </span>
            <span aria-hidden="true">/</span>
            <span>cca {readingMinutes} min čtení</span>
          </div>
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
            {DOPLNENI_DOC.title}
          </h1>
        </header>

        {/* Quick-jump index #1..#9 */}
        {supplements.length > 0 && (
          <nav
            aria-label="Rychlý přehled doplnění"
            className="no-print mb-9 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]/70 p-5"
          >
            <p className="mb-3 font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
              Rychlý obsah (#1 až #{supplements.length})
            </p>
            <ol className="space-y-1 text-sm leading-snug">
              {supplements.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex min-h-7 items-baseline gap-2.5 py-1 text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="shrink-0 font-mono text-xs font-semibold text-[var(--accent)] tabular-nums group-hover:underline">
                      #{item.id}
                    </span>
                    <span>
                      {item.text.replace(/^Doplnění\s+#\d+\s*[—–-]\s*/i, "")}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className="prose prose-ds"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <nav
          aria-label="Navigace mezi sekcemi"
          className="no-print mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-strong)] pt-6 text-sm"
        >
          <Link
            href="/danova-reforma"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            ← Zpět na hlavní článek
          </Link>
          <Link
            href="/danova-reforma/vyzkum"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Hloubkový výzkum Hall–Rabushka (01–05) →
          </Link>
        </nav>

        <ArticleFooterCta />
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleFooterCta } from "@/components/ArticleFooterCta";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import { TableOfContents } from "@/components/TableOfContents";
import { TaxSubNav } from "@/components/TaxSubNav";
import { TwoPostcards } from "@/components/TwoPostcards";
import { DANOVA_REFORMA_DOC } from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: DANOVA_REFORMA_DOC.url,
  absoluteTitle: "Daňová reforma podle Dekonstrukce státu",
  description: DANOVA_REFORMA_DOC.description,
  type: "article",
  image: DANOVA_REFORMA_DOC.ogImage,
  imageAlt: DANOVA_REFORMA_DOC.ogImageAlt,
  publishedTime: DANOVA_REFORMA_DOC.publishedTime ?? DANOVA_REFORMA_DOC.isoDate,
  modifiedTime: DANOVA_REFORMA_DOC.modifiedIsoDate,
});

export default async function DanovaReformaPage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    DANOVA_REFORMA_DOC.filePath,
    { linkifyXHandles: true },
  );

  // Place TwoPostcards right after "Řešení na dvě pohlednice" (before "Ankap okénko"),
  // replacing the redundant <hr> between those two sections.
  const splitMatch = html.match(
    /(?:<hr\s*\/?>\s*)?(?=<h2\b[^>]*id="ankap-ok[eé]nko)/i,
  );
  const splitIndex = splitMatch?.index ?? -1;
  const htmlBefore = splitIndex > 0 ? html.slice(0, splitIndex) : html;
  const htmlAfter =
    splitIndex > 0 ? html.slice(splitIndex + (splitMatch?.[0].length ?? 0)) : "";

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: DANOVA_REFORMA_DOC.url,
          title: DANOVA_REFORMA_DOC.title,
          description: DANOVA_REFORMA_DOC.description,
          datePublished:
            DANOVA_REFORMA_DOC.publishedTime ?? DANOVA_REFORMA_DOC.isoDate,
          dateModified: DANOVA_REFORMA_DOC.modifiedIsoDate,
          image: DANOVA_REFORMA_DOC.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Daňová reforma", path: "/danova-reforma" },
          ],
        })}
      />

      <TaxSubNav active="clanek" />

      <div className="mb-8 overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)]">
        <Image
          src="/images/danova-reforma-header.webp"
          alt="Daňová reforma podle Dekonstrukce státu — Pošlete finančáku pohlednici"
          width={1600}
          height={640}
          priority
          className="block h-auto w-full"
        />
      </div>

      <article className="mx-auto max-w-3xl">
        <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[var(--ink-muted)] uppercase tabular-nums">
            <span className="font-semibold text-[var(--accent)]">
              Daňová reforma
            </span>
            <span aria-hidden="true">/</span>
            <span>Daniel Steigerwald</span>
            <span aria-hidden="true">/</span>
            <time dateTime={DANOVA_REFORMA_DOC.isoDate}>
              {DANOVA_REFORMA_DOC.date}
            </time>
            <span aria-hidden="true">/</span>
            <span>cca {readingMinutes} min čtení</span>
          </div>
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            {DANOVA_REFORMA_DOC.title}
          </h1>
        </header>

        <TableOfContents items={toc} label="Kapitoly článku" />

        <div
          className="prose prose-ds"
          dangerouslySetInnerHTML={{ __html: htmlBefore }}
        />

        <TwoPostcards />

        {htmlAfter && (
          <div
            className="prose prose-ds"
            dangerouslySetInnerHTML={{ __html: htmlAfter }}
          />
        )}

        <aside
          aria-label="Implementace v rámci EU"
          className="no-print mt-10 rounded-[var(--radius)] border border-[var(--border)] border-l-2 border-l-[var(--accent)] bg-[var(--surface)]/70 px-4 py-3.5 text-sm leading-relaxed text-[var(--ink-muted)]"
        >
          <strong className="font-semibold text-[var(--ink)]">
            A jak tohle provést v praxi uvnitř EU?
          </strong>{" "}
          Tento článek drží čisté první principy; praktický plán pro Česko
          (jednotná 15% DPH s dobrovolným hotovostním režimem do 50 mil. Kč,
          minimální spotřební daně, přechodová pravidla a pojistky proti
          lobbistům) najdete v rozpracovaném návrhu{" "}
          <Link
            href="/danova-reforma/implementace-eu"
            className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
          >
            Realistická implementace pro Česko v rámci EU{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </aside>

        {/* Continuation links */}
        <nav
          aria-label="Pokračujte hlouběji"
          className="no-print mt-12 border-t border-[var(--border-strong)] pt-8"
        >
          <p className="mb-4 font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            Pokračujte hlouběji
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/danova-reforma/doplneni"
              className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
            >
              <div className="font-mono text-xs text-[var(--accent)] uppercase">
                Doplnění #1–#9
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                Odpovědi na námitky z diskuse{" "}
                <span aria-hidden="true">→</span>
              </div>
            </Link>

            <Link
              href="/danova-reforma/vyzkum"
              className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
            >
              <div className="font-mono text-xs text-[var(--accent)] uppercase">
                5 podkladových studií
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                Výzkum Hall–Rabushka (01–05) <span aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </nav>

        <ArticleFooterCta />
      </article>
    </div>
  );
}

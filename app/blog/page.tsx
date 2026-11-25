import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  PITVA_PAQ_CHAPTERS,
  PITVA_PAQ_DANOVY_RAJ,
  PITVA_PAQ_ESSAY,
  PITVA_PAQ_IROZHLAS,
  PITVA_PAQ_MAIN,
  SITE_URL,
  SROVNANI_REFOREM_DOC,
} from "@/lib/documents";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Eseje, forenzní audity a fact-checky Dekonstrukce státu — včetně Chytřejších daní (PAQ, CVF, IDEA) a Daňového ráje Evropy PAQ Research.",
  image: "/images/og-default.png",
  imageAlt: "Blog — Dekonstrukce státu",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${SITE_URL}/blog`,
            },
          ],
        }}
      />

      <header className="mb-10 border-b-2 border-[var(--ink)] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            Eseje, audity a komentáře
          </p>
          <a
            href="/rss.xml"
            className="rounded-[var(--radius-sm)] border border-[var(--border-strong)] px-2.5 py-1 font-mono text-xs text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            RSS kanál
          </a>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)]">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
          Průběžné eseje, forenzní pitvy cizích studií a fact-checky k aktuálním
          návrhům. Hlavní programové a výzkumné texty najdete v sekci{" "}
          <Link
            href="/publikace"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
          >
            Publikace
          </Link>
          .
        </p>
      </header>

      <div className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
        {/* Post 1 (newest): Srovnání obou daňových reforem za tři minuty */}
        <article className="pb-8">
          <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
            <span className="text-[var(--ink-faint)]">
              {SROVNANI_REFOREM_DOC.date}
            </span>
            <span className="text-[var(--ink-faint)]">/</span>
            <span className="font-semibold text-[var(--accent)]">
              Srovnání
            </span>
          </div>
          <h2 className="max-w-3xl text-xl leading-snug font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
            <Link
              href={SROVNANI_REFOREM_DOC.url}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {SROVNANI_REFOREM_DOC.title}
            </Link>
          </h2>
          <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
            {SROVNANI_REFOREM_DOC.description}
          </p>
          <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
            <Link
              href={SROVNANI_REFOREM_DOC.url}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Číst srovnání →
            </Link>
            <Link
              href="/danova-reforma"
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Daňová reforma
            </Link>
            <Link
              href={PITVA_PAQ_ESSAY.url}
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Pitva Chytřejších daní
            </Link>
          </div>
        </article>

        {/* Post 2: Daniel Prokop na iROZHLASu */}
        <article className="py-8">
          <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
            <span className="text-[var(--ink-faint)]">
              {PITVA_PAQ_IROZHLAS.date}
            </span>
            <span className="text-[var(--ink-faint)]">/</span>
            <span className="font-semibold text-[var(--accent)]">
              Fact-check
            </span>
          </div>
          <h2 className="max-w-3xl text-xl leading-snug font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
            <Link
              href={PITVA_PAQ_IROZHLAS.url}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {PITVA_PAQ_IROZHLAS.title}
            </Link>
          </h2>
          <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
            {PITVA_PAQ_IROZHLAS.description}
          </p>
          <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
            <Link
              href={PITVA_PAQ_IROZHLAS.url}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Číst fact-check →
            </Link>
            <Link
              href={PITVA_PAQ_DANOVY_RAJ.url}
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Podkladový fact-check: Daňový ráj Evropy
            </Link>
          </div>
        </article>

        {/* Post 3: Audit Chytřejších daní (PAQ, CVF, IDEA) + 6-chapter audit */}
        <article className="py-8">
          <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
            <span className="text-[var(--ink-faint)]">
              {PITVA_PAQ_ESSAY.date}
            </span>
            <span className="text-[var(--ink-faint)]">/</span>
            <span className="font-semibold text-[var(--accent)]">
              Esej &amp; forenzní audit
            </span>
          </div>
          <h2 className="max-w-3xl text-xl leading-snug font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
            <Link
              href={PITVA_PAQ_ESSAY.url}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {PITVA_PAQ_ESSAY.title}
            </Link>
          </h2>
          <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
            {PITVA_PAQ_ESSAY.description}
          </p>
          <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
            <Link
              href={PITVA_PAQ_ESSAY.url}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Číst esej →
            </Link>
            <Link
              href={PITVA_PAQ_MAIN.url}
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Hlavní forenzní syntéza (00)
            </Link>
            <Link
              href={`${PITVA_PAQ_MAIN.url}#katalog-12-chyb`}
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              Katalog 12 ověřených chyb
            </Link>
          </div>

          <div className="mt-5">
            <p className="mb-2.5 font-mono text-[0.7rem] font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
              Podkladový audit po kapitolách (01–06)
            </p>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {PITVA_PAQ_CHAPTERS.map((chapter) => (
                <li key={chapter.url}>
                  <Link
                    href={chapter.url}
                    className="group flex items-baseline justify-between gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] px-3.5 py-2.5 text-sm transition-colors hover:border-[var(--accent)]"
                  >
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs font-semibold text-[var(--accent)] tabular-nums">
                        {chapter.code}
                      </span>
                      <span className="font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                        {chapter.shortTitle}
                      </span>
                    </span>
                    {chapter.pages && (
                      <span className="shrink-0 font-mono text-[0.7rem] text-[var(--ink-faint)] tabular-nums">
                        {chapter.pages}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Post 2: Fact-check Daňový ráj Evropy (11/2026) */}
        <article className="py-7">
          <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
            <span className="text-[var(--ink-faint)]">
              {PITVA_PAQ_DANOVY_RAJ.date}
            </span>
            <span className="text-[var(--ink-faint)]">/</span>
            <span className="font-semibold text-[var(--ink-muted)]">
              Fact-check
            </span>
          </div>
          <h2 className="max-w-3xl text-xl leading-snug font-bold tracking-tight text-[var(--ink)]">
            <Link
              href={PITVA_PAQ_DANOVY_RAJ.url}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {PITVA_PAQ_DANOVY_RAJ.title}
            </Link>
          </h2>
          <p className="mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
            {PITVA_PAQ_DANOVY_RAJ.description}
          </p>
          <div className="mt-3 text-sm">
            <Link
              href={PITVA_PAQ_DANOVY_RAJ.url}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Číst fact-check →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

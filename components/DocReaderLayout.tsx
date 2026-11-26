import "katex/dist/katex.min.css";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import type { DocMeta } from "@/lib/documents";
import type { TocItem } from "@/lib/markdown";
import { ArticleFooterCta } from "./ArticleFooterCta";
import { TableOfContents } from "./TableOfContents";
import { type TaxSectionKey, TaxSubNav } from "./TaxSubNav";

interface DocReaderLayoutProps {
  sectionKey: TaxSectionKey | "pitva";
  seriesLabel: string;
  seriesIndexHref?: string;
  sidebarTitle: string;
  sidebarItems: DocMeta[];
  currentDoc: DocMeta;
  html: string;
  toc: TocItem[];
  readingMinutes: number;
  headerNotice?: ReactNode;
  prev?: DocMeta;
  next?: DocMeta;
}

export const DocReaderLayout: FC<DocReaderLayoutProps> = ({
  sectionKey,
  seriesLabel,
  seriesIndexHref,
  sidebarTitle,
  sidebarItems,
  currentDoc,
  html,
  toc,
  readingMinutes,
  headerNotice,
  prev,
  next,
}) => {
  const hasLeadEssay =
    sidebarItems.length > 1 && sidebarItems[0].code === "Esej";
  const essayItem = hasLeadEssay ? sidebarItems[0] : null;
  const remainingItems = hasLeadEssay ? sidebarItems.slice(1) : sidebarItems;
  const followupSlugs = new Set([
    "fact-check-danovy-raj-evropy",
    "danime-praci-ale-majetek-temer-vubec",
    "fact-check-svarcsystem",
  ]);
  const followupItems = hasLeadEssay
    ? remainingItems.filter((item) => followupSlugs.has(item.slug))
    : [];
  const numberedItems =
    followupItems.length > 0
      ? remainingItems.filter((item) => !followupSlugs.has(item.slug))
      : remainingItems;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      {sectionKey !== "pitva" && <TaxSubNav active={sectionKey} />}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[15.5rem_minmax(0,1fr)]">
        {/* Desktop sticky sidebar */}
        <aside
          aria-label={`Postranní panel: ${sidebarTitle}`}
          className="no-print hidden lg:block"
        >
          <div className="sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto pr-1">
            <div className="mb-3 flex items-center justify-between border-b border-[var(--border-strong)] pb-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
                {sidebarTitle}
              </span>
              {seriesIndexHref && (
                <Link
                  href={seriesIndexHref}
                  className="font-mono text-xs text-[var(--accent)] hover:underline focus-visible:outline-offset-[-2px]"
                >
                  Přehled
                </Link>
              )}
            </div>

            <nav aria-label={sidebarTitle}>
              {essayItem && (
                <div className="mb-3 border-b border-[var(--border)] pb-3">
                  <p
                    id="sidebar-group-essay"
                    className="mb-1.5 px-3 font-mono text-[0.6875rem] font-semibold tracking-wider text-[var(--ink-faint)] uppercase"
                  >
                    Hlavní esej
                  </p>
                  <ul aria-labelledby="sidebar-group-essay">
                    <li>
                      <Link
                        href={essayItem.url}
                        aria-current={
                          essayItem.url === currentDoc.url ? "page" : undefined
                        }
                        className={
                          essayItem.url === currentDoc.url
                            ? "block border-l-2 border-[var(--accent)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                            : "block border-l-2 border-transparent px-3 py-2 text-sm text-[var(--ink-muted)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]/50 hover:text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                        }
                      >
                        {essayItem.shortTitle}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {essayItem && (
                <p
                  id="sidebar-group-audit"
                  className="mb-1.5 px-3 font-mono text-[0.6875rem] font-semibold tracking-wider text-[var(--ink-faint)] uppercase"
                >
                  Forenzní audit (00–06)
                </p>
              )}

              <ul
                aria-labelledby={essayItem ? "sidebar-group-audit" : undefined}
                className="space-y-1"
              >
                {numberedItems.map((item) => {
                  const isActive = item.url === currentDoc.url;
                  return (
                    <li key={item.url}>
                      <Link
                        href={item.url}
                        aria-current={isActive ? "page" : undefined}
                        className={
                          isActive
                            ? "flex items-start gap-2 border-l-2 border-[var(--accent)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                            : "flex items-start gap-2 border-l-2 border-transparent px-3 py-2 text-sm text-[var(--ink-muted)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]/50 hover:text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                        }
                      >
                        {item.code && (
                          <span
                            className={
                              isActive
                                ? "mt-0.5 w-6 shrink-0 font-mono text-xs font-semibold text-[var(--accent)] tabular-nums"
                                : "mt-0.5 w-6 shrink-0 font-mono text-xs text-[var(--ink-faint)] tabular-nums"
                            }
                          >
                            {item.code}
                          </span>
                        )}
                        <span className="leading-snug">{item.shortTitle}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {followupItems.length > 0 && (
                <div className="mt-3 border-t border-[var(--border)] pt-3">
                  <p
                    id="sidebar-group-followups"
                    className="mb-1.5 px-3 font-mono text-[0.6875rem] font-semibold tracking-wider text-[var(--ink-faint)] uppercase"
                  >
                    Navazující fact-checky
                  </p>
                  <ul
                    aria-labelledby="sidebar-group-followups"
                    className="space-y-1"
                  >
                    {followupItems.map((item) => {
                      const isActive = item.url === currentDoc.url;
                      return (
                        <li key={item.url}>
                          <Link
                            href={item.url}
                            aria-current={isActive ? "page" : undefined}
                            className={
                              isActive
                                ? "flex items-start gap-2 border-l-2 border-[var(--accent)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                                : "flex items-start gap-2 border-l-2 border-transparent px-3 py-2 text-sm text-[var(--ink-muted)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)]/50 hover:text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                            }
                          >
                            {item.code && (
                              <span
                                className={
                                  isActive
                                    ? "mt-0.5 w-6 shrink-0 font-mono text-xs font-semibold text-[var(--accent)] tabular-nums"
                                    : "mt-0.5 w-6 shrink-0 font-mono text-xs text-[var(--ink-faint)] tabular-nums"
                                }
                              >
                                {item.code}
                              </span>
                            )}
                            <span className="leading-snug">
                              {item.shortTitle}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </nav>
          </div>
        </aside>

        {/* Main reading column */}
        <div className="min-w-0">
          {/* Mobile zero-JS chapter switcher */}
          <details className="no-print group mb-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]/75 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-[var(--ink)] select-none [&::-webkit-details-marker]:hidden">
              <span className="flex min-w-0 items-center gap-2">
                <span className="shrink-0 font-mono text-xs tracking-wider text-[var(--accent)] uppercase">
                  {sidebarTitle}
                </span>
                <span aria-hidden="true" className="text-[var(--ink-muted)]">
                  ·
                </span>
                <span className="truncate font-normal text-[var(--ink-muted)]">
                  {currentDoc.code ? `${currentDoc.code} ` : ""}
                  {currentDoc.shortTitle}
                </span>
              </span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="h-4 w-4 shrink-0 text-[var(--ink-muted)] transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <nav
              aria-label={sidebarTitle}
              className="border-t border-[var(--border)] p-2"
            >
              {essayItem && (
                <div className="mb-2 border-b border-[var(--border)] pb-2">
                  <Link
                    href={essayItem.url}
                    aria-current={
                      essayItem.url === currentDoc.url ? "page" : undefined
                    }
                    className={
                      essayItem.url === currentDoc.url
                        ? "flex items-baseline gap-2.5 border-l-2 border-[var(--accent)] bg-[var(--bg)] px-3 py-2 text-sm font-semibold text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                        : "flex items-baseline gap-2.5 border-l-2 border-transparent px-3 py-2 text-sm text-[var(--ink-muted)] hover:bg-[var(--bg)]/60 hover:text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                    }
                  >
                    <span className="font-mono text-xs font-semibold text-[var(--accent)] uppercase">
                      Esej
                    </span>
                    <span>{essayItem.shortTitle}</span>
                  </Link>
                </div>
              )}
              <ul className="space-y-0.5">
                {numberedItems.map((item) => {
                  const isActive = item.url === currentDoc.url;
                  return (
                    <li key={item.url}>
                      <Link
                        href={item.url}
                        aria-current={isActive ? "page" : undefined}
                        className={
                          isActive
                            ? "flex items-baseline gap-2 border-l-2 border-[var(--accent)] bg-[var(--bg)] px-3 py-2 text-sm font-semibold text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                            : "flex items-baseline gap-2 border-l-2 border-transparent px-3 py-2 text-sm text-[var(--ink-muted)] hover:bg-[var(--bg)]/60 hover:text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                        }
                      >
                        {item.code && (
                          <span className="w-6 shrink-0 font-mono text-xs text-[var(--accent)] tabular-nums">
                            {item.code}
                          </span>
                        )}
                        <span>{item.shortTitle}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {followupItems.length > 0 && (
                <div className="mt-2 border-t border-[var(--border)] pt-2">
                  <p
                    id="mobile-group-followups"
                    className="px-3 pb-1 font-mono text-[0.6875rem] font-semibold tracking-wider text-[var(--ink-faint)] uppercase"
                  >
                    Navazující fact-checky
                  </p>
                  <ul
                    aria-labelledby="mobile-group-followups"
                    className="space-y-0.5"
                  >
                    {followupItems.map((item) => {
                      const isActive = item.url === currentDoc.url;
                      return (
                        <li key={item.url}>
                          <Link
                            href={item.url}
                            aria-current={isActive ? "page" : undefined}
                            className={
                              isActive
                                ? "flex items-baseline gap-2 border-l-2 border-[var(--accent)] bg-[var(--bg)] px-3 py-2 text-sm font-semibold text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                                : "flex items-baseline gap-2 border-l-2 border-transparent px-3 py-2 text-sm text-[var(--ink-muted)] hover:bg-[var(--bg)]/60 hover:text-[var(--ink)] focus-visible:outline-offset-[-2px]"
                            }
                          >
                            {item.code && (
                              <span className="w-6 shrink-0 font-mono text-xs text-[var(--accent)] tabular-nums">
                                {item.code}
                              </span>
                            )}
                            <span>{item.shortTitle}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </nav>
          </details>

          <article>
            <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[var(--ink-muted)] uppercase tabular-nums">
                <span className="font-semibold text-[var(--accent)]">
                  {currentDoc.code ? `${currentDoc.code} · ` : ""}
                  {seriesLabel}
                </span>
                {currentDoc.pages && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>{currentDoc.pages}</span>
                  </>
                )}
                <span aria-hidden="true">/</span>
                <time dateTime={currentDoc.isoDate}>{currentDoc.date}</time>
                <span aria-hidden="true">/</span>
                <span>cca {readingMinutes} min čtení</span>
              </div>

              <h1 className="text-2xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-3xl">
                {currentDoc.title}
              </h1>
            </header>

            {headerNotice}

            <TableOfContents items={toc} />

            <div
              className="prose prose-ds"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>

          {/* Bottom Prev / Next navigation */}
          {(prev || next) && (
            <nav
              aria-label="Navigace mezi kapitolami"
              className="no-print mt-14 grid grid-cols-1 gap-4 border-t border-[var(--border-strong)] pt-8 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  href={prev.url}
                  className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
                >
                  <div className="mb-1 font-mono text-xs text-[var(--ink-faint)] uppercase">
                    ← Předchozí
                  </div>
                  <div className="text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                    {prev.code ? `${prev.code} — ` : ""}
                    {prev.shortTitle}
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {next && (
                <Link
                  href={next.url}
                  className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-left transition-colors hover:border-[var(--accent)] sm:text-right"
                >
                  <div className="mb-1 font-mono text-xs text-[var(--ink-faint)] uppercase">
                    Další →
                  </div>
                  <div className="text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                    {next.code ? `${next.code} — ` : ""}
                    {next.shortTitle}
                  </div>
                </Link>
              )}
            </nav>
          )}

          <ArticleFooterCta />
        </div>
      </div>
    </div>
  );
};

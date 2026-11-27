import Link from "next/link";
import type { FC } from "react";

const LINK_CLASS =
  "inline-flex min-h-7 items-center py-1 transition-colors hover:text-[var(--accent)]";

export const SiteFooter: FC = () => (
  <footer className="no-print mt-20 border-t border-[var(--border-strong)] bg-[var(--surface)]/55">
    <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <Link href="/o-autorovi" className={`${LINK_CLASS} font-medium text-[var(--ink)]`}>
          Daniel Steigerwald
        </Link>
        <span aria-hidden="true" className="text-[var(--ink-faint)]">
          ·
        </span>
        <a
          href="https://creativecommons.org/licenses/by/4.0/deed.cs"
          target="_blank"
          rel="noopener noreferrer"
          className={`${LINK_CLASS} font-mono text-xs`}
        >
          CC BY 4.0
          <span className="sr-only"> (otevře se v novém okně)</span>
        </a>
      </div>

      <nav
        aria-label="Odkazy v patičce"
        className="flex flex-wrap items-center gap-x-5 gap-y-1"
      >
        <a
          href="https://x.com/steidacz"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          X (@steidacz)
          <span className="sr-only"> (otevře se v novém okně)</span>
        </a>
        <a
          href="https://github.com/steida/dekonstrukcestatu"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          GitHub
          <span className="sr-only"> (otevře se v novém okně)</span>
        </a>
        <a
          href="https://github.com/steida/dekonstrukcestatu/issues"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          Issues
          <span className="sr-only"> (otevře se v novém okně)</span>
        </a>
        <a
          href="/rss.xml"
          className={`${LINK_CLASS} min-w-7 justify-center px-1 font-mono text-xs`}
        >
          RSS
        </a>
      </nav>
    </div>
  </footer>
);

import Link from "next/link";
import type { FC } from "react";
import { LogoMark } from "./LogoMark";

const LINK_CLASS =
  "inline-flex min-h-7 items-center py-1 transition-colors hover:text-[var(--accent)]";
const MONO_LINK_CLASS =
  "inline-flex min-h-7 items-center py-1 font-mono text-xs transition-colors hover:text-[var(--accent)]";

export const SiteFooter: FC = () => (
  <footer className="no-print mt-20 border-t border-[var(--border-strong)] bg-[var(--surface)]/55">
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <LogoMark className="h-4 w-4 shrink-0 text-[var(--ink)]" />
          <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
            Dekonstrukce státu
          </span>
        </div>

        <nav
          aria-label="Odkazy v patičce"
          className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[var(--ink-muted)]"
        >
          <Link href="/publikace" className={LINK_CLASS}>
            Publikace
          </Link>
          <Link href="/blog" className={LINK_CLASS}>
            Blog
          </Link>
          <Link href="/media" className={LINK_CLASS}>
            Média
          </Link>
          <Link href="/o-autorovi" className={LINK_CLASS}>
            O autorovi
          </Link>
          <Link href="/#podpora" className={LINK_CLASS}>
            Podpora
          </Link>
          <a href="mailto:daniel@steigerwald.cz" className={MONO_LINK_CLASS}>
            daniel@steigerwald.cz
          </a>
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
          <a href="/rss.xml" className={MONO_LINK_CLASS}>
            RSS
          </a>
          <a href="/llms.txt" className={MONO_LINK_CLASS}>
            llms.txt
          </a>
        </nav>
      </div>
    </div>
  </footer>
);

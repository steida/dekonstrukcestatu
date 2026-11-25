import Link from "next/link";
import type { FC } from "react";
import { LogoMark } from "./LogoMark";

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
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)]"
        >
          <Link href="/publikace" className="transition-colors hover:text-[var(--accent)]">
            Publikace
          </Link>
          <Link href="/blog" className="transition-colors hover:text-[var(--accent)]">
            Blog
          </Link>
          <Link href="/media" className="transition-colors hover:text-[var(--accent)]">
            Média
          </Link>
          <Link href="/o-autorovi" className="transition-colors hover:text-[var(--accent)]">
            O autorovi
          </Link>
          <Link href="/#podpora" className="transition-colors hover:text-[var(--accent)]">
            Podpora
          </Link>
          <a
            href="mailto:daniel@steigerwald.cz"
            className="font-mono text-xs transition-colors hover:text-[var(--accent)]"
          >
            daniel@steigerwald.cz
          </a>
          <a
            href="https://x.com/steidacz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            X (@steidacz)
          </a>
          <a
            href="https://github.com/steida/dekonstrukcestatu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href="/rss.xml"
            className="font-mono text-xs transition-colors hover:text-[var(--accent)]"
          >
            RSS
          </a>
          <a
            href="/llms.txt"
            className="font-mono text-xs transition-colors hover:text-[var(--accent)]"
          >
            llms.txt
          </a>
        </nav>
      </div>
    </div>
  </footer>
);

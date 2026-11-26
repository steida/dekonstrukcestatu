import Link from "next/link";
import type { FC } from "react";

export const ArticleFooterCta: FC = () => (
  <aside
    aria-label="Připomínky, kontakt a podpora výzkumu"
    className="no-print mt-12 grid grid-cols-1 gap-4 border-t-2 border-[var(--ink)] pt-8 sm:grid-cols-2"
  >
    <div className="flex flex-col gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
          Připomínky, námitky a opravy
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">
          Našli jste chybu nebo máte námitku? Celý obsah webu je na GitHubu —
          otevřete issue.
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--border)] pt-3 text-xs sm:border-t-0 sm:pt-0">
        <a
          href="https://github.com/steida/dekonstrukcestatu/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-7 items-center py-1 font-semibold text-[var(--accent)] hover:underline"
        >
          Otevřít GitHub Issue <span aria-hidden="true">→</span>
          <span className="sr-only"> (otevře se v novém okně)</span>
        </a>
        <a
          href="https://github.com/steida/dekonstrukcestatu/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-7 items-center py-1 font-mono text-[var(--ink-muted)] underline decoration-[var(--ink-muted)] underline-offset-3 hover:text-[var(--ink)]"
        >
          Všechny issues
          <span className="sr-only"> (otevře se v novém okně)</span>
        </a>
      </div>
    </div>

    <div className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
      <div>
        <p className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
          Podcasty, debaty a přednášky
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
          Chcete mě pozvat do podcastu nebo uspořádat přednášku o dekonstrukci
          státu a daňové reformě?
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--border)] pt-3 text-xs">
        <a
          href="mailto:daniel@steigerwald.cz"
          className="inline-flex min-h-7 items-center py-1 font-mono font-semibold text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-3 hover:text-[var(--accent)]"
        >
          daniel@steigerwald.cz
        </a>
        <Link
          href="/o-autorovi"
          className="inline-flex min-h-7 items-center py-1 font-medium text-[var(--accent)] hover:underline"
        >
          O autorovi &amp; Press Kit <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>

    <div className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
      <div>
        <p className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
          Nezávislý výzkum bez peněz od státu
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
          Projekt vzniká bez jakýchkoli peněz od státu (dotací, veřejných grantů
          i zakázek). Podpořit ho můžete dobrovolným bankovním převodem.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--border)] pt-3 text-xs">
        <span className="font-mono font-semibold text-[var(--ink)] tabular-nums">
          1000701012/3030
        </span>
        <Link
          href="/#podpora"
          className="inline-flex min-h-7 items-center py-1 font-medium text-[var(--accent)] hover:underline"
        >
          QR Platba a údaje <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </aside>
);

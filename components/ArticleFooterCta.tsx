import Link from "next/link";
import type { FC } from "react";

export const ArticleFooterCta: FC = () => (
  <aside
    aria-label="Kontakt a podpora výzkumu"
    className="no-print mt-12 grid grid-cols-1 gap-4 border-t-2 border-[var(--ink)] pt-8 sm:grid-cols-2"
  >
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
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] pt-3 text-xs">
        <a
          href="mailto:daniel@steigerwald.cz"
          className="font-mono font-semibold text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-3 hover:text-[var(--accent)]"
        >
          daniel@steigerwald.cz
        </a>
        <Link
          href="/o-autorovi"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          O autorovi &amp; Press Kit →
        </Link>
      </div>
    </div>

    <div className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
      <div>
        <p className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
          Nezávislý výzkum bez dotací
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
          Projekt vzniká bez grantů a stranických peněz. Podpořit ho můžete
          dobrovolným bankovním převodem.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] pt-3 text-xs">
        <span className="font-mono font-semibold text-[var(--ink)] tabular-nums">
          1000701012/3030
        </span>
        <Link
          href="/#podpora"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          QR Platba a údaje →
        </Link>
      </div>
    </div>
  </aside>
);

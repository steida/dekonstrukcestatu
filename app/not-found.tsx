import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/404",
  title: "Stránka nenalezena",
  description: "Požadovaná stránka na webu Dekonstrukce státu nebyla nalezena.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
        Chyba 404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)]">
        Stránka nenalezena
      </h1>
      <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
        Požadovaná adresa na webu Dekonstrukce státu neexistuje nebo byla
        přesunuta.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
        >
          Zpět na úvod
        </Link>
        <Link
          href="/publikace"
          className="rounded-[var(--radius)] border border-[var(--border-strong)] px-4 py-2 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Publikace
        </Link>
        <Link
          href="/blog"
          className="rounded-[var(--radius)] border border-[var(--border-strong)] px-4 py-2 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}

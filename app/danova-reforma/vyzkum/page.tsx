import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { TaxSubNav } from "@/components/TaxSubNav";
import { SITE_URL, VYZKUM_HR_STUDIES } from "@/lib/documents";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/danova-reforma/vyzkum",
  title: "Výzkum Hall–Rabushka Flat Tax (01–05)",
  description:
    "Pět hloubkových ekonomických, právních a historických studií k modelu Hall–Rabushka Flat Tax v Česku, EU a světové praxi.",
  image: "/images/og-danova-reforma.png",
  imageAlt:
    "Daňová reforma podle Dekonstrukce státu — Pošlete finančáku pohlednici (Hall–Rabushka)",
});

export default function VyzkumIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Daňová reforma",
              item: `${SITE_URL}/danova-reforma`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Výzkum Hall–Rabushka",
              item: `${SITE_URL}/danova-reforma/vyzkum`,
            },
          ],
        }}
      />

      <TaxSubNav active="vyzkum" />

      <header className="mb-10 border-b-2 border-[var(--ink)] pb-6">
        <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
          Podkladové studie · 01–05
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)]">
          Hloubkový výzkum Hall–Rabushka Flat Tax
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
          Pět odborných studií, které jdou za rámec úvodního článku: přesná
          mechanika a okrajové případy, zkušenosti ze světa, makroekonomické
          propočty pro Českou republiku v rámci EU, nejsilnější verze kritiky a
          analýza DPH v mezinárodním obchodě.
        </p>
      </header>

      <ol className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
        {VYZKUM_HR_STUDIES.map((study) => (
          <li key={study.slug} className="py-6">
            <article className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <div className="shrink-0 font-mono text-2xl font-bold text-[var(--accent)] tabular-nums sm:w-12">
                {study.code}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl leading-snug font-bold tracking-tight text-[var(--ink)]">
                  <Link
                    href={study.url}
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    {study.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                  {study.description}
                </p>
                <div className="mt-3 flex items-center gap-4 text-sm">
                  <Link
                    href={study.url}
                    className="font-semibold text-[var(--accent)] hover:underline"
                  >
                    Číst studii →
                  </Link>
                  <time
                    dateTime={study.isoDate}
                    className="font-mono text-xs text-[var(--ink-faint)] tabular-nums"
                  >
                    {study.date}
                  </time>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

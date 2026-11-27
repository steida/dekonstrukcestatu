import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopyTextButton } from "@/components/CopyTextButton";
import { JsonLd, ORGANIZATION_LD } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/documents";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/podpora",
  title: "Podpora",
  description:
    "Podpořte nezávislý výzkum think-tanku Dekonstrukce státu. Fungujeme bez jakýchkoli státních dotací, grantů i zakázek — dobrovolný bankovní převod a QR Platba.",
  image: "/images/og-default.png",
  imageAlt: "Podpořte Dekonstrukci státu — 0 Kč ze státních peněz",
});

export default function PodporaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/podpora#webpage`,
              url: `${SITE_URL}/podpora`,
              name: "Podpořte Dekonstrukci státu",
              description:
                "Dobrovolná podpora nezávislého think-tanku Dekonstrukce státu bez jakýchkoli peněz od státu.",
              inLanguage: "cs-CZ",
            },
            ORGANIZATION_LD,
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Domů",
                  item: SITE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Podpora",
                  item: `${SITE_URL}/podpora`,
                },
              ],
            },
          ],
        }}
      />

      <div className="mx-auto max-w-3xl">
        <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
          <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            Dobrovolná podpora · 0 Kč od státu
          </p>
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Podpořte Dekonstrukci státu
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
            Dekonstrukce státu funguje bez jakýchkoli peněz od státu — bez
            dotací, veřejných grantů i státních zakázek. Pokud vám analýzy,
            fact-checky a návrhy reforem dávají smysl, můžete mou práci podpořit
            dobrovolným bankovním převodem.
          </p>
        </header>

        {/* Primary active payment card — immediately visible above the fold */}
        <section
          aria-labelledby="bankovni-prevod"
          className="rounded-[var(--radius)] border border-[var(--border)] border-t-2 border-t-[var(--ink)] bg-[var(--surface-elevated)] p-6 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div className="min-w-0 space-y-2.5">
              <h2
                id="bankovni-prevod"
                className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase"
              >
                Bankovní převod (CZK)
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl tabular-nums">
                  1000701012/3030
                </p>
                <CopyTextButton
                  text="1000701012/3030"
                  label="Zkopírovat účet"
                />
              </div>

              <dl className="space-y-1.5 pt-2 text-sm text-[var(--ink-muted)]">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-[var(--ink-faint)]">Majitel účtu:</dt>
                  <dd className="text-[var(--ink)]">
                    Daniel Steigerwald (soukromý účet)
                  </dd>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <dt className="text-[var(--ink-faint)]">IBAN:</dt>
                  <dd className="flex flex-wrap items-center gap-2 font-mono text-xs leading-5 text-[var(--ink)] tabular-nums">
                    <span>CZ36 3030 0000 0010 0070 1012</span>
                    <CopyTextButton
                      text="CZ36 3030 0000 0010 0070 1012"
                      label="Zkopírovat IBAN"
                    />
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-[var(--ink-faint)]">Poznámka:</dt>
                  <dd className="text-[var(--ink)]">Dekonstrukce státu</dd>
                </div>
              </dl>

              <p className="pt-1 font-mono text-xs text-[var(--ink-faint)]">
                Air Bank · QR Platba (SPAYD) · libovolná částka
              </p>
            </div>

            <div className="shrink-0 self-start rounded-[var(--radius)] border border-black/15 bg-white p-3 sm:self-center">
              <Image
                src="/images/qr-podpora.png"
                alt="QR Platba pro bankovní účet 1000701012/3030"
                width={184}
                height={184}
                priority
                className="block h-[184px] w-[184px]"
              />
            </div>
          </div>
        </section>

        {/* Transparency: what support enables */}
        <section
          aria-labelledby="na-co-podpora-jde"
          className="mt-10 border-t border-[var(--border)] pt-8"
        >
          <h2
            id="na-co-podpora-jde"
            className="text-lg font-bold tracking-tight text-[var(--ink)]"
          >
            Co vaše podpora umožňuje
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
            <li>
              Čas na hloubkový výzkum, ověřování primárních dat a psaní nových
              publikací i knihy.
            </li>
            <li>
              Otevřený web — všechny texty jsou veřejně dostupné pod licencí CC
              BY 4.0 na{" "}
              <a
                href="https://github.com/steida/dekonstrukcestatu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--ink)] underline decoration-[var(--ink-muted)] underline-offset-2 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                GitHubu <span aria-hidden="true">↗</span>
                <span className="sr-only"> (otevře se v novém okně)</span>
              </a>
              .
            </li>
            <li>Plnou nezávislost.</li>
          </ul>

          <p className="mt-6 text-sm text-[var(--ink-muted)]">
            Máte dotaz k podpoře nebo chcete probrat větší dar? Napište mi přímo
            na{" "}
            <a
              href="mailto:daniel@steigerwald.cz"
              className="font-mono font-semibold text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-3 hover:text-[var(--accent)]"
            >
              daniel@steigerwald.cz
            </a>
            .
          </p>
        </section>

        <nav
          aria-label="Navigace"
          className="no-print mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-strong)] pt-6 text-sm"
        >
          <Link
            href="/"
            className="inline-flex min-h-7 items-center gap-1 py-1 font-semibold text-[var(--accent)] hover:underline"
          >
            <span aria-hidden="true">←</span> Zpět na úvod
          </Link>
          <Link
            href="/publikace"
            className="inline-flex min-h-7 items-center gap-1 py-1 font-semibold text-[var(--accent)] hover:underline"
          >
            Publikace a výzkum <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

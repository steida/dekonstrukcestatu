import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopyTextButton } from "@/components/CopyTextButton";
import {
  AUTHOR_PERSON_LD,
  JsonLd,
  ORGANIZATION_LD,
  WEBSITE_LD,
} from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  absoluteTitle: "Dekonstrukce státu — Nezávislý think-tank Daniela Steigerwalda",
  description:
    "Nezávislý český think-tank zaměřený na odstraňování složitosti státu, daňovou reformu na dvě pohlednice a forenzní pitvu složitých daňových návrhů.",
  image: "/images/og-default.png",
  imageAlt: "Dekonstrukce státu — Nezávislý think-tank Daniela Steigerwalda",
});

const TOP_MEDIA = [
  {
    outlet: "DVTV",
    date: "23. 11. 2026",
    title:
      "Ostrý duel o daních: 30 miliard lze vybrat na nemovitostech, říká Vilím. Dopadne to na chudé, oponuje Steigerwald",
    href: "https://www.dvtv.cz/videos/ostry-duel-o-danich-30-miliard-lze-vybrat-na-nemovitostech-rika-vilim-dopadne-to-na-chude-oponuje-steigerwald",
    note: "Debata s Petrem Vilímem (PAQ Research).",
    extras: [
      {
        label: "YouTube Short",
        href: "https://www.youtube.com/shorts/GMK17Se8nHQ",
      },
    ],
  },
  {
    outlet: "CryptoByte 2025",
    date: "5. 6. 2025",
    title: "Daniel Steigerwald – Dekonstrukce státu",
    href: "https://www.youtube.com/watch?v=3HoOah2oke0",
    note: "Přednáška o složitosti státu a o tom, jak jej postupně zjednodušovat.",
    extras: [],
  },
  {
    outlet: "Kryptoplebs #1",
    date: "10. 3. 2025",
    title: "Stát nám nepatří a je třeba ho dekonstruovat",
    href: "https://www.youtube.com/watch?v=LgKVYDQW_OE",
    note: "Rozhovor s Janem Ebrem.",
    extras: [],
  },
  {
    outlet: "ChainCamp 2024",
    date: "24. 10. 2024",
    title: "Emigrace je možnost, ale není to řešení",
    href: "https://www.youtube.com/watch?v=gpHkdjt66J0",
    note: "Přednáška o tom, proč nestačí před složitým státem utéct.",
    extras: [],
  },
  {
    outlet: "BTC Prague 2024 Keynote (EN)",
    date: "21. 6. 2024",
    title: "Bitcoin: The End Game",
    href: "https://www.youtube.com/watch?v=PxHpruxr82Y",
    note: "Zdravé peníze a motivace státu.",
    extras: [],
  },
  {
    outlet: "Letní škola Občanského institutu",
    date: "zveřejněno 6. 2. 2022",
    title: "Demonopolizace",
    href: "https://www.youtube.com/watch?v=uAfFLU-WvJo",
    note: "Přednáška o demonopolizaci státních agend.",
    extras: [],
  },
] as const;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [ORGANIZATION_LD, AUTHOR_PERSON_LD, WEBSITE_LD],
        }}
      />

      {/* Compact editorial intro */}
      <section className="flex flex-col-reverse gap-7 border-b-2 border-[var(--ink)] pb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="min-w-0 max-w-2xl">
          <p className="mb-3 font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            Nezávislý think&#8209;tank
          </p>
          <h1 className="text-3xl leading-[1.15] font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Dekonstrukce státu
          </h1>
          <div className="mt-5 space-y-4 text-[1.0625rem] leading-[1.7] text-[var(--ink)]">
            <p>
              Máme problém. Ten problém je složitost státu. Stát se stal tak
              složitým, že je nemožné jej řídit prostřednictvím volebního
              procesu. Jeden hlas nemůže rozhodnout o téměř nekonečném množství
              otázek týkajících se státu.
            </p>
            <p className="text-[var(--ink-muted)]">
              Dekonstrukce státu je nezávislý think&#8209;tank pracující (nejen) na
              tomto problému.
            </p>
          </div>
          <p className="mt-5 text-sm leading-snug text-[var(--ink-muted)]">
            Založil a píše{" "}
            <strong className="font-semibold text-[var(--ink)]">
              Daniel Steigerwald
            </strong>
            {" — "}
            <Link
              href="/o-autorovi"
              className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
            >
              O autorovi &amp; Press Kit →
            </Link>
          </p>
        </div>

        <Link
          href="/o-autorovi"
          className="group shrink-0 self-start sm:self-center"
          aria-label="Daniel Steigerwald — O autorovi a Press Kit"
        >
          <Image
            src="/images/daniel-steigerwald.jpg"
            alt="Daniel Steigerwald — zakladatel think-tanku Dekonstrukce státu"
            width={224}
            height={224}
            priority
            className="h-36 w-36 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--ink)] object-cover transition-opacity group-hover:opacity-95 sm:h-48 sm:w-48 md:h-56 md:w-56"
          />
        </Link>
      </section>

      {/* Publikace — flagship pillars of Dekonstrukce státu */}
      <section id="publikace" className="py-12">
        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--ink)]">
              Publikace
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              Hlavní programové a výzkumné texty Dekonstrukce státu.
            </p>
          </div>
          <Link
            href="/publikace"
            className="shrink-0 font-mono text-xs font-medium tracking-wider text-[var(--accent)] uppercase hover:underline"
          >
            Všechny publikace →
          </Link>
        </div>

        <div className="space-y-5">
          {/* Flagship 1: Daňová reforma */}
          <article className="group overflow-hidden rounded-[var(--radius)] border border-[var(--border)] border-t-2 border-t-[var(--ink)] bg-[var(--surface-elevated)] transition-colors hover:border-[var(--border-strong)] hover:border-t-[var(--ink)]">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="mb-2.5 flex items-center gap-2.5 font-mono text-xs text-[var(--ink-faint)] uppercase tabular-nums">
                    <span className="font-semibold text-[var(--accent)]">
                      Publikace
                    </span>
                    <span>/</span>
                    <span>24. 11. 2026</span>
                  </div>
                  <h3 className="text-xl leading-snug font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
                    <Link
                      href="/danova-reforma"
                      className="transition-colors hover:text-[var(--accent)]"
                    >
                      Daňová reforma podle Dekonstrukce státu
                    </Link>
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
                    Dvě pohlednice, dva parametry (<strong>X</strong> a{" "}
                    <strong>Y %</strong>). Jak by vypadal nejméně škodlivý
                    daňový systém odolný vůči bipolární poruše státu — od modelu
                    Halla a Rabushky až po ankap okénko.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 border-t border-[var(--border)] pt-4 text-[0.8125rem]">
                  <Link
                    href="/danova-reforma"
                    className="font-semibold text-[var(--accent)] hover:underline"
                  >
                    Číst publikaci →
                  </Link>
                  <Link
                    href="/danova-reforma/doplneni"
                    className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    Doplnění #1–#9
                  </Link>
                  <Link
                    href="/danova-reforma/vyzkum"
                    className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    Studie (01–05)
                  </Link>
                  <Link
                    href="/danova-reforma/implementace-eu"
                    className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    Implementace v EU
                  </Link>
                </div>
              </div>

              <Link
                href="/danova-reforma"
                className="relative block min-h-[200px] overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] md:min-h-full md:border-t-0 md:border-l"
                aria-label="Otevřít publikaci Daňová reforma podle Dekonstrukce státu"
              >
                <Image
                  src="/images/danova-reforma-header.webp"
                  alt="Daňová reforma podle Dekonstrukce státu — Pošlete finančáku pohlednici"
                  width={1600}
                  height={640}
                  priority
                  className="block h-full w-full object-cover object-center md:absolute md:inset-0"
                />
              </Link>
            </div>
          </article>

          {/* Flagship 2: Manifest (understated draft status) */}
          <article className="flex flex-col justify-between gap-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 transition-colors hover:border-[var(--border-strong)] sm:flex-row sm:items-center sm:px-7">
            <div className="max-w-2xl">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-[var(--ink-faint)] uppercase">
                <span className="font-semibold text-[var(--ink-muted)]">
                  Základní program
                </span>
                <span>/</span>
                <span>Pracovní návrh</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[var(--ink)] sm:text-xl">
                <Link
                  href="/manifest"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  Manifest dekonstrukce státu
                </Link>
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                Proč se stát nedá řídit jedním volebním hlasem, komu stát
                doopravdy patří a jak jeho agendy postupně vrátit občanům.
              </p>
            </div>
            <Link
              href="/manifest"
              className="shrink-0 text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Číst manifest →
            </Link>
          </article>
        </div>
      </section>

      {/* Blog — lighter editorial stream for essays, audits & commentaries */}
      <section id="blog" className="border-t border-[var(--border)] py-12">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--ink)]">
              Blog
            </h2>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              Eseje, forenzní pitvy cizích studií a komentáře k aktuálním
              návrhům.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <Link
              href="/blog"
              className="font-mono text-xs font-medium tracking-wider text-[var(--accent)] uppercase hover:underline"
            >
              Vše na blogu →
            </Link>
            <a
              href="/rss.xml"
              className="font-mono text-xs font-medium tracking-wider text-[var(--ink-muted)] uppercase transition-colors hover:text-[var(--accent)]"
            >
              RSS
            </a>
          </div>
        </div>

        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          <li className="py-5">
            <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
              <span className="text-[var(--ink-faint)]">25. 11. 2026</span>
              <span className="text-[var(--ink-faint)]">/</span>
              <span className="font-semibold text-[var(--accent)]">
                Srovnání
              </span>
            </div>
            <h3 className="max-w-3xl text-lg leading-snug font-bold tracking-tight text-[var(--ink)]">
              <Link
                href="/blog/dekonstrukce-statu-vs-chytrejsi-dane"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Dekonstrukce státu vs. Chytřejší daně: srovnání za tři minuty
              </Link>
            </h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Férové tříminutové srovnání dvou pohlednic a 224 stran Chytřejších
              daní (PAQ Research, CVF a IDEA): tabulka v 8 oblastech, shody i
              zásadní rozdíly.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ink-muted)]">
              <Link
                href="/blog/dekonstrukce-statu-vs-chytrejsi-dane"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Číst srovnání →
              </Link>
              <Link
                href="/danova-reforma"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Daňová reforma
              </Link>
              <Link
                href="/blog/zjednodusovaci-a-komplikatori"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Pitva Chytřejších daní
              </Link>
            </div>
          </li>

          <li className="py-5">
            <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
              <span className="text-[var(--ink-faint)]">25. 11. 2026</span>
              <span className="text-[var(--ink-faint)]">/</span>
              <span className="font-semibold text-[var(--accent)]">
                Fact-check
              </span>
            </div>
            <h3 className="max-w-3xl text-lg leading-snug font-bold tracking-tight text-[var(--ink)]">
              <Link
                href="/blog/danime-praci-ale-majetek-temer-vubec"
                className="transition-colors hover:text-[var(--accent)]"
              >
                „Daníme práci, ale majetek téměř vůbec?“ (fact-check iROZHLASu)
              </Link>
            </h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              48 záznamů Daniela Prokopa v Českém rozhlase za 12 měsíců,
              pravidelný týdenní pořad bez oponenta a fact-check titulku a 9
              klíčových výroků z rozhovoru na iROZHLASu.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ink-muted)]">
              <Link
                href="/blog/danime-praci-ale-majetek-temer-vubec"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Číst fact-check →
              </Link>
              <Link
                href="/blog/fact-check-danovy-raj-evropy"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Podkladový fact-check
              </Link>
            </div>
          </li>

          <li className="py-5">
            <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
              <span className="text-[var(--ink-faint)]">25. 11. 2026</span>
              <span className="text-[var(--ink-faint)]">/</span>
              <span className="font-semibold text-[var(--accent)]">
                Esej &amp; audit
              </span>
            </div>
            <h3 className="max-w-3xl text-lg leading-snug font-bold tracking-tight text-[var(--ink)]">
              <Link
                href="/blog/zjednodusovaci-a-komplikatori"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Zjednodušovači, komplikátoři a 224 stran Chytřejších daní
              </Link>
            </h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Proč studie PAQ Research, CVF a IDEA místo přestavby starého
              daňového systému od základů lepí přes třicet nových záplat, kde se
              kapitoly perou samy se sebou — a v čem mají autoři pravdu.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ink-muted)]">
              <Link
                href="/blog/zjednodusovaci-a-komplikatori"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Číst esej →
              </Link>
              <Link
                href="/blog/zjednodusovaci-a-komplikatori/audit"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Forenzní audit (00–06)
              </Link>
              <Link
                href="/blog/zjednodusovaci-a-komplikatori/audit#katalog-12-chyb"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Katalog 12 ověřených chyb
              </Link>
            </div>
          </li>

          <li className="py-5">
            <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
              <span className="text-[var(--ink-faint)]">25. 11. 2026</span>
              <span className="text-[var(--ink-faint)]">/</span>
              <span className="font-semibold text-[var(--ink-muted)]">
                Fact-check
              </span>
            </div>
            <h3 className="max-w-3xl text-lg leading-snug font-bold tracking-tight text-[var(--ink)]">
              <Link
                href="/blog/fact-check-danovy-raj-evropy"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Fact-check studie PAQ Research „Daňový ráj Evropy“ (11/2026)
              </Link>
            </h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Ověření listopadové studie PAQ Research podle primárních dat
              Evropské komise, OECD a citovaných akademických studií: po
              započtení firemní daně (DPPO) leží Česko i v přezdaněné EU přesně
              na mediánu (5,62 % HDP) a i bez dočasné daně z neočekávaných zisků
              (~5,17 %) vybírá víc než všichni sousedé.
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ink-muted)]">
              <Link
                href="/blog/fact-check-danovy-raj-evropy"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Číst fact-check →
              </Link>
            </div>
          </li>
        </ul>
      </section>

      {/* Rozhovory a přednášky — Curated TOP 6 */}
      <section className="border-t border-[var(--border)] py-12">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-bold tracking-tight text-[var(--ink)]">
            Rozhovory a přednášky
          </h2>
          <Link
            href="/media"
            className="font-mono text-xs font-medium tracking-wider text-[var(--accent)] uppercase hover:underline"
          >
            Všechna vystoupení →
          </Link>
        </div>

        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {TOP_MEDIA.map((item) => (
            <li key={item.href} className="py-4">
              <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
                <span className="font-semibold text-[var(--accent)]">
                  {item.outlet}
                </span>
                <span className="text-[var(--ink-faint)]">/</span>
                <span className="text-[var(--ink-faint)]">{item.date}</span>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
              >
                {item.title} ↗
              </a>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {item.note}
                {item.extras.length > 0 && (
                  <>
                    {" "}
                    {item.extras.map((extra, idx) => (
                      <span key={extra.href}>
                        {idx > 0 && " · "}
                        <a
                          href={extra.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
                        >
                          {extra.label} ↗
                        </a>
                      </span>
                    ))}
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>

        {/* Kontakt — podcasty, debaty a přednášky */}
        <div
          id="kontakt"
          className="mt-8 flex flex-col justify-between gap-5 rounded-[var(--radius)] border border-[var(--border)] border-l-4 border-l-[var(--accent)] bg-[var(--surface-elevated)] p-6 sm:flex-row sm:items-center"
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
              Kontakt — podcasty a přednášky
            </p>
            <h3 className="mt-1.5 text-lg font-bold tracking-tight text-[var(--ink)]">
              Pozvání do podcastu nebo na přednášku
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
              Chcete mě pozvat do podcastu, na debatu nebo domluvit přednášku na
              téma dekonstrukce státu a daňové reformy? Napište mi přímo na{" "}
              <a
                href="mailto:daniel@steigerwald.cz"
                className="font-medium text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-3 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                daniel@steigerwald.cz
              </a>
              . Připravené okruhy a krátké bio najdete v{" "}
              <Link
                href="/o-autorovi"
                className="font-medium text-[var(--accent)] hover:underline"
              >
                Press Kitu
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <a
              href="mailto:daniel@steigerwald.cz"
              className="inline-flex items-center justify-center rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--ink)] px-4 py-2.5 font-mono text-xs font-semibold text-[var(--bg)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]"
            >
              daniel@steigerwald.cz
            </a>
            <a
              href="https://x.com/steidacz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              nebo @steidacz na X ↗
            </a>
          </div>
        </div>
      </section>

      {/* Kniha & odkazy */}
      <section className="border-t border-[var(--border)] py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <a
              href="https://www.startovac.cz/projekty/kniha-dekonstrukce-statu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 shrink-0 overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--surface)] transition-opacity hover:opacity-90"
            >
              <Image
                src="/kniha.webp"
                alt="Obálka knihy Dekonstrukce státu — Daniel Steigerwald"
                width={400}
                height={400}
                className="h-auto w-full object-cover"
              />
            </a>
            <div className="min-w-0">
              <p className="mb-1.5 font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                Kniha
              </p>
              <h2 className="text-xl font-bold tracking-tight text-[var(--ink)]">
                Kniha Dekonstrukce státu
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
                Rozpracovaný knižní projekt o složitosti státu a možnostech jeho
                postupné dekonstrukce — jednotlivé kapitoly a výzkumné podklady
                průběžně vycházejí otevřeně přímo tady na webu.
              </p>
              <p className="mt-3 text-sm">
                <a
                  href="https://www.startovac.cz/projekty/kniha-dekonstrukce-statu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold break-words text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
                >
                  startovac.cz/projekty/kniha-dekonstrukce-statu&#160;↗
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <p className="mb-1.5 font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
              Odkazy
            </p>
            <h2 className="text-xl font-bold tracking-tight text-[var(--ink)]">
              Sledovat a číst zdroje
            </h2>
            <ul className="mt-3 space-y-2.5 text-[0.9375rem]">
              <li>
                <a
                  href="https://x.com/steidacz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-3 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                >
                  x.com/steidacz ↗
                </a>
                <span className="ml-2 text-sm text-[var(--ink-muted)]">
                  — komentáře a diskuse
                </span>
              </li>
              <li>
                <a
                  href="https://github.com/steida/dekonstrukcestatu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-3 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                >
                  github.com/steida/dekonstrukcestatu ↗
                </a>
                <span className="ml-2 text-sm text-[var(--ink-muted)]">
                  — otevřené zdrojové texty
                </span>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-3 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                >
                  RSS kanál
                </a>
                <span className="ml-2 text-sm text-[var(--ink-muted)]">
                  — odběr nových textů
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Podpora (strictly bank transfer + QR Platba) */}
      <section id="podpora" className="border-t-2 border-[var(--ink)] pt-12">
        <div className="mb-6">
          <p className="mb-1.5 font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            Dobrovolná podpora
          </p>
          <h2 className="text-xl font-bold tracking-tight text-[var(--ink)]">
            Podpořte nezávislý výzkum
          </h2>
          <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
            Dekonstrukce státu funguje bez dotací, grantů i státních zakázek.
            Pokud vám texty a analýzy dávají smysl, můžete práci podpořit
            dobrovolným bankovním převodem.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="min-w-0 space-y-2">
            <p className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
              Bankovní účet (CZK)
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-2xl font-bold tracking-tight text-[var(--ink)] tabular-nums">
                1000701012/3030
              </p>
              <CopyTextButton text="1000701012/3030" label="Zkopírovat účet" />
            </div>
            <dl className="space-y-1.5 pt-1 text-sm text-[var(--ink-muted)]">
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
              Air Bank · QR Platba (SPAYD)
            </p>
          </div>
          <div className="shrink-0 self-start rounded-[var(--radius)] border border-black/15 bg-white p-2.5 sm:self-center">
            <Image
              src="/images/qr-podpora.png"
              alt="QR Platba pro bankovní účet 1000701012/3030"
              width={156}
              height={156}
              className="block h-[156px] w-[156px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

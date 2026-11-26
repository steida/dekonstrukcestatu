import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/documents";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/media",
  title: "Média, rozhovory a přednášky",
  description:
    "Vybrané debaty, rozhovory a konferenční přednášky Daniela Steigerwalda k dekonstrukci státu, daňové reformě, demonopolizaci a zdravým penězům.",
  image: "/images/og-default.png",
  imageAlt: "Média, rozhovory a přednášky — Dekonstrukce státu",
});

interface MediaEntry {
  outlet: string;
  date: string;
  dateIso: string;
  title: string;
  titleLang?: string;
  href: string;
  note?: string;
  extras?: { label: string; href: string }[];
}

const CURATED_MEDIA: MediaEntry[] = [
  {
    outlet: "DVTV",
    date: "23. 11. 2026",
    dateIso: "2026-11-23",
    title:
      "Ostrý duel o daních: 30 miliard lze vybrat na nemovitostech, říká Vilím. Dopadne to na chudé, oponuje Steigerwald",
    href: "https://www.dvtv.cz/videos/ostry-duel-o-danich-30-miliard-lze-vybrat-na-nemovitostech-rika-vilim-dopadne-to-na-chude-oponuje-steigerwald",
    note: "Duel s Petrem Vilímem (PAQ Research) o daních z nemovitostí a dvou pohlednicích.",
    extras: [
      {
        label: "YouTube Short",
        href: "https://www.youtube.com/shorts/GMK17Se8nHQ",
      },
    ],
  },
  {
    outlet: "CryptoByte 2025",
    date: "zveřejněno 5. 6. 2025",
    dateIso: "2025-06-05",
    title: "Daniel Steigerwald – Dekonstrukce státu",
    href: "https://www.youtube.com/watch?v=3HoOah2oke0",
    note: "Konferenční přednáška o složitosti státu a o tom, jak jej postupně dekonstruovat.",
  },
  {
    outlet: "Kryptoplebs #1",
    date: "10. 3. 2025",
    dateIso: "2025-03-10",
    title: "Stát nám nepatří a je třeba ho dekonstruovat",
    href: "https://www.youtube.com/watch?v=LgKVYDQW_OE",
    note: "Rozhovor s Janem Ebrem.",
  },
  {
    outlet: "ChainCamp 2024",
    date: "zveřejněno 24. 10. 2024",
    dateIso: "2024-10-24",
    title: "Emigrace je možnost, ale není to řešení",
    href: "https://www.youtube.com/watch?v=gpHkdjt66J0",
    note: "Proč útěk ze země neřeší příčinu složitosti státu.",
  },
  {
    outlet: "BTC Prague 2024 Keynote (EN)",
    date: "zveřejněno 21. 6. 2024",
    dateIso: "2024-06-21",
    title: "Bitcoin: The End Game",
    titleLang: "en",
    href: "https://www.youtube.com/watch?v=PxHpruxr82Y",
    note: "Hlavní přednáška o zdravých penězích a motivacích států.",
  },
  {
    outlet: "BTC Prague 2023 (CZ)",
    date: "zveřejněno 26. 7. 2023",
    dateIso: "2023-07-26",
    title: "Slabiny a rizika bitcoinu",
    href: "https://www.youtube.com/watch?v=45ympdflZjI",
    note: "Kritický pohled na limity a rizika Bitcoinu.",
  },
  {
    outlet: "Letní škola Občanského institutu",
    date: "zveřejněno 6. 2. 2022",
    dateIso: "2022-02-06",
    title: "Demonopolizace",
    href: "https://www.youtube.com/watch?v=uAfFLU-WvJo",
    note: "Přednáška o demonopolizaci státních agend.",
  },
  {
    outlet: "ChainCamp 2020",
    date: "zveřejněno 28. 9. 2020",
    dateIso: "2020-09-28",
    title: "Dekonstrukce státu",
    href: "https://www.youtube.com/watch?v=jclUOz9h4rc",
    note: "Úvodní přednáška představující myšlenku dekonstrukce státu.",
  },
];

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Domů", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Média",
              item: `${SITE_URL}/media`,
            },
          ],
        }}
      />

      <header className="mb-10 border-b-2 border-[var(--ink)] pb-6">
        <p className="mb-2 font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
          Vybraná vystoupení · {CURATED_MEDIA.length} záznamů
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Média, rozhovory a přednášky
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
          Výběr debat, rozhovorů a přednášek k tématům Dekonstrukce státu —
          složitost státu, daňová jednoduchost, demonopolizace a zdravé peníze.
        </p>
      </header>

      <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {CURATED_MEDIA.map((item, index) => (
          <li
            key={item.href}
            className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="w-8 shrink-0 font-mono text-sm font-bold text-[var(--accent)] tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs uppercase tabular-nums">
                <span className="font-semibold text-[var(--accent)]">
                  {item.outlet}
                </span>
                <span aria-hidden="true" className="text-[var(--ink-faint)]">
                  /
                </span>
                <time dateTime={item.dateIso} className="text-[var(--ink-faint)]">
                  {item.date}
                </time>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
              >
                <span lang={item.titleLang}>{item.title}</span>{" "}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (otevře se v novém okně)</span>
              </a>
              {(item.note || (item.extras && item.extras.length > 0)) && (
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  {item.note}
                  {item.extras && item.extras.length > 0 && (
                    <>
                      {item.note ? " " : ""}
                      {item.extras.map((extra, idx) => (
                        <span key={extra.href}>
                          {idx > 0 && " · "}
                          <a
                            href={extra.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
                          >
                            {extra.label} <span aria-hidden="true">↗</span>
                            <span className="sr-only">
                              {" "}
                              (otevře se v novém okně)
                            </span>
                          </a>
                        </span>
                      ))}
                    </>
                  )}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Bottom Speaker / Press CTA */}
      <aside
        aria-label="Pozvání do médií a na přednášky"
        className="mt-12 flex flex-col justify-between gap-5 rounded-[var(--radius)] border border-[var(--border)] border-l-4 border-l-[var(--accent)] bg-[var(--surface-elevated)] p-6 sm:flex-row sm:items-center"
      >
        <div className="max-w-xl">
          <p className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            Pozvání do médií a na přednášky
          </p>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-[var(--ink-muted)]">
            Chcete mě pozvat do podcastu, na debatu nebo na přednášku? Napište
            mi přímo na{" "}
            <a
              href="mailto:daniel@steigerwald.cz"
              className="font-mono font-semibold text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-3 hover:text-[var(--accent)]"
            >
              daniel@steigerwald.cz
            </a>{" "}
            nebo se podívejte na připravené okruhy a bio v{" "}
            <Link
              href="/o-autorovi"
              className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)] focus-visible:decoration-[var(--accent)]"
            >
              Press Kitu
            </Link>
            .
          </p>
        </div>
        <Link
          href="/o-autorovi"
          className="shrink-0 rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--ink)] px-4 py-2.5 font-mono text-xs font-semibold text-[var(--bg)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]"
        >
          O autorovi &amp; Press Kit →
        </Link>
      </aside>
    </div>
  );
}

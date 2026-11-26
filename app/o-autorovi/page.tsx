import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CopyTextButton } from "@/components/CopyTextButton";
import {
  AUTHOR_PERSON_LD,
  JsonLd,
  ORGANIZATION_LD,
} from "@/components/JsonLd";
import { SITE_URL } from "@/lib/documents";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/o-autorovi",
  title: "O autorovi & Press Kit — Daniel Steigerwald",
  description:
    "Daniel Steigerwald — zakladatel a autor nezávislého think-tanku Dekonstrukce státu a programátor Evolu. Podklady pro novináře, podcasty a pořadatele debat.",
  image: "/images/og-default.png",
  imageAlt: "Daniel Steigerwald — O autorovi a Press Kit | Dekonstrukce státu",
});

const SHORT_CAPTION_BIO =
  "Zakladatel a autor nezávislého think-tanku Dekonstrukce státu.";

const CONFERENCE_BIO =
  "Daniel Steigerwald je zakladatel a autor nezávislého think-tanku Dekonstrukce státu, zaměřeného na obnovu vlastnictví a zjednodušování státu. Vystudoval ekonomii a přes dvacet let působí jako programátor (mj. vyvíjí local-first platformu Evolu).";

const SPEAKING_TOPICS = [
  {
    code: "01",
    title: "Dekonstrukce státu a složitost veřejných financí",
    desc: "Proč jeden hlas za čtyři roky nemůže uřídit bilionový aparát a jak z něj ubírat vrstvu po vrstvě.",
  },
  {
    code: "02",
    title: "Daňová reforma na dvě pohlednice (Hall–Rabushka)",
    desc: "Jak nahradit pět set stran daňových zákonů dvěma parametry (X a Y %) a odhalit skutečnou cenovku státu.",
  },
  {
    code: "03",
    title: "Demonopolizace, zdravé peníze a motivace státu",
    desc: "Proč inflace a monopol moci pokřivují motivace politiků i občanů.",
  },
] as const;

const AUTHOR_TRIPTYCH = [
  {
    src: "/images/daniel-triptych-1.webp",
    alt: "Daniel Steigerwald v rozhovoru — úvod vysvětlování",
  },
  {
    src: "/images/daniel-triptych-2.webp",
    alt: "Daniel Steigerwald v rozhovoru — přesná pointa",
  },
  {
    src: "/images/daniel-triptych-3.webp",
    alt: "Daniel Steigerwald v rozhovoru — klidný závěr s úsměvem",
  },
] as const;

export default function OAutoroviPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": `${SITE_URL}/o-autorovi#profilepage`,
              url: `${SITE_URL}/o-autorovi`,
              name: "O autorovi & Press Kit — Daniel Steigerwald",
              inLanguage: "cs-CZ",
              mainEntity: { "@id": `${SITE_URL}/o-autorovi#daniel-steigerwald` },
            },
            AUTHOR_PERSON_LD,
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
                  name: "O autorovi",
                  item: `${SITE_URL}/o-autorovi`,
                },
              ],
            },
          ],
        }}
      />

      <header className="mb-10 border-b-2 border-[var(--ink)] pb-8">
        <div>
          <p className="mb-2.5 font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            O autorovi · Press &amp; Speaker Kit
          </p>
          <h1 className="max-w-3xl text-3xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Daniel Steigerwald
          </h1>
          <p className="mt-3 text-lg leading-relaxed font-medium text-[var(--ink-muted)]">
            Zakladatel a autor nezávislého think&#8209;tanku Dekonstrukce státu.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
          {AUTHOR_TRIPTYCH.map((panel) => (
            <div
              key={panel.src}
              className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--ink)]"
            >
              <Image
                src={panel.src}
                alt={panel.alt}
                width={1200}
                height={900}
                priority
                sizes="(max-width: 640px) 33vw, 360px"
                className="block aspect-[4/3] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </header>

      {/* Main narrative (1st person singular, strictly focused on Dekonstrukce státu) */}
      <section className="max-w-3xl space-y-4 text-[1.0625rem] leading-[1.72] text-[var(--ink)]">
        <p>
          <strong>Dekonstrukci státu</strong> jsem založil a píšu jako 100%
          nezávislý think&#8209;tank. Neberu žádné peníze od státu — žádné
          dotace, veřejné granty ani státní zakázky. Žiju z vlastní práce a
          dobrovolné podpory. Díky tomu si mohu dovolit pojmenovat zbytečnou
          složitost, nefunkční motivace a metodické chyby bez ohledu na to, z
          jakého politického tábora přicházejí.
        </p>
        <p>
          Vystudoval jsem ekonomii a více než dvacet let pracuji jako programátor.
          Dnes vyvíjím local-first open-source platformu{" "}
          <a
            href="https://www.evolu.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
          >
            Evolu&nbsp;↗
          </a>
          , kde uživatel svá data fyzicky vlastní bez závislosti na cloudu. Časem mi
          došlo, že moji práci v obou oborech spojuje jediná věc —{" "}
          <strong>obnova vlastnictví</strong>, tedy jak lidem vrátit to, co by mělo
          být jejich: <strong>peníze</strong> (Bitcoin),{" "}
          <strong>software a data</strong> (Evolu) a <strong>stát</strong>{" "}
          (Dekonstrukce státu). Ten dnes lidem nepatří, ačkoliv by podle Ústavy patřit měl.
        </p>
        <p>
          Vývoj softwaru mě naučil dvě tvrdé lekce. První: největším
          nepřítelem každého systému je zbytečná složitost. Každý řádek navíc
          zvyšuje cenu údržby a plodí chyby, které se navzájem násobí. Přesně totéž
          se stalo daňovým zákonům, potažmo celému státu — jen bez přirozené zpětné
          vazby, která by rozbitý systém donutila ke zjednodušení. Druhá: je obrovský
          rozdíl mezi krásnou teorií nebo technologickým demem a řešením, které
          škáluje ve velkém.
        </p>
        <p>
          Proto místo neškálovatelných utopií i dalších záplat na stovky stran
          hledám konkrétní, civilizované kroky: čím začít a jak složitost státu
          ubírat vrstvu po vrstvě — od{" "}
          <Link
            href="/danova-reforma"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
          >
            daňové reformy na dvě pohlednice
          </Link>{" "}
          přes{" "}
          <Link
            href="/blog/zjednodusovaci-a-komplikatori"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
          >
            forenzní pitvy komplikátorů
          </Link>{" "}
          až po postupnou dekonstrukci státních agend.
        </p>

        <aside
          aria-label="Zdroje, metodika a opravy"
          className="mt-8 rounded-[var(--radius)] border border-[var(--border)] border-l-2 border-l-[var(--accent)] bg-[var(--surface)]/65 p-5 text-sm leading-relaxed text-[var(--ink-muted)]"
        >
          <p className="mb-1.5 font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            Zdroje, metodika a opravy
          </p>
          <p>
            Všechny analýzy a fact-checky vycházejí z primárních PDF, dat
            Eurostatu / DG TAXUD, OECD a MF ČR; kompletní zdrojové texty jsou
            veřejně na{" "}
            <a
              href="https://github.com/steida/dekonstrukcestatu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-2 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              GitHubu ↗
            </a>
            . Najdete-li jakoukoli doloženou faktickou nebo početní chybu,
            napište na{" "}
            <a
              href="mailto:daniel@steigerwald.cz"
              className="font-mono font-semibold text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-2 hover:text-[var(--accent)]"
            >
              daniel@steigerwald.cz
            </a>{" "}
            — každou prokázanou chybu veřejně a bez vytáček opravím.
          </p>
        </aside>
      </section>

      {/* Press / Speaker Kit */}
      <section
        id="press-kit"
        className="mt-14 border-t-2 border-[var(--ink)] pt-10"
      >
        <p className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
          Press &amp; Speaker Kit
        </p>
        <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--ink)]">
          Pro novináře, podcasty a organizátory akcí
        </h2>
        <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
          Ozvěte se mi rovnou na{" "}
          <a
            href="mailto:daniel@steigerwald.cz"
            className="font-mono font-semibold text-[var(--ink)] underline decoration-[var(--accent)]/50 underline-offset-3 hover:text-[var(--accent)]"
          >
            daniel@steigerwald.cz
          </a>{" "}
          nebo přes{" "}
          <a
            href="https://x.com/steidacz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            @steidacz ↗
          </a>
          . Přehled vybraných debat a přednášek najdete v sekci{" "}
          <Link
            href="/media"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Média
          </Link>
          .
        </p>

        {/* 3 focused speaking topics */}
        <div className="mt-8">
          <h3 className="mb-4 font-mono text-xs font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            3 hlavní okruhy pro debaty, podcasty a přednášky
          </h3>
          <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {SPEAKING_TOPICS.map((topic) => (
              <li
                key={topic.code}
                className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:gap-5"
              >
                <span className="w-8 shrink-0 font-mono text-sm font-bold text-[var(--accent)] tabular-nums">
                  {topic.code}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[var(--ink)]">
                    {topic.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {topic.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Copyable bios */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
                  Jednořádkový titulek (TV / podcast)
                </span>
                <CopyTextButton text={SHORT_CAPTION_BIO} />
              </div>
              <p className="text-sm leading-relaxed text-[var(--ink)]">
                {SHORT_CAPTION_BIO}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
                  Krátké bio na konferenci (~30 slov)
                </span>
                <CopyTextButton text={CONFERENCE_BIO} />
              </div>
              <p className="text-sm leading-relaxed text-[var(--ink)]">
                {CONFERENCE_BIO}
              </p>
            </div>
          </div>
        </div>

        {/* Press photo download */}
        <div className="mt-8 flex flex-col gap-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/daniel-steigerwald.jpg"
              alt="Portrétní fotografie Daniela Steigerwalda pro média"
              width={80}
              height={80}
              className="h-18 w-18 shrink-0 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--ink)] object-cover"
            />
            <div>
              <span className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
                Portrétní fotografie (Press Kit)
              </span>
              <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
                Daniel Steigerwald — čtvercový portrét (1080 × 1080 px, JPG)
              </p>
              <p className="mt-0.5 text-xs text-[var(--ink-muted)]">
                Pro náhledy podcastů, programy konferencí a redakční použití.
              </p>
            </div>
          </div>
          <a
            href="/images/daniel-steigerwald-press.jpg"
            download="daniel-steigerwald.jpg"
            className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius)] border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 font-mono text-xs font-semibold tracking-wide text-[var(--bg)] transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)]"
          >
            Stáhnout JPG ↓
          </a>
        </div>

        {/* Direct contacts & links */}
        <div className="mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]/65 p-6">
          <h3 className="mb-3 font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
            Přímé kontakty a odkazy
          </h3>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2">
            <li>
              <span className="text-[var(--ink-faint)]">E-mail: </span>
              <a
                href="mailto:daniel@steigerwald.cz"
                className="font-mono font-semibold text-[var(--accent)] hover:underline"
              >
                daniel@steigerwald.cz
              </a>
            </li>
            <li>
              <span className="text-[var(--ink-faint)]">X (Twitter): </span>
              <a
                href="https://x.com/steidacz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--ink)] hover:text-[var(--accent)]"
              >
                x.com/steidacz ↗
              </a>
            </li>
            <li className="min-w-0">
              <span className="text-[var(--ink-faint)]">
                GitHub (Dekonstrukce státu):{" "}
              </span>
              <a
                href="https://github.com/steida/dekonstrukcestatu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium break-words text-[var(--ink)] hover:text-[var(--accent)]"
              >
                github.com/steida/dekonstrukcestatu ↗
              </a>
            </li>
            <li className="min-w-0">
              <span className="text-[var(--ink-faint)]">Kniha (Startovač): </span>
              <a
                href="https://www.startovac.cz/projekty/kniha-dekonstrukce-statu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium break-words text-[var(--ink)] hover:text-[var(--accent)]"
              >
                startovac.cz/projekty/kniha-dekonstrukce-statu ↗
              </a>
            </li>
            <li>
              <span className="text-[var(--ink-faint)]">
                Open-source projekt:{" "}
              </span>
              <a
                href="https://www.evolu.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--ink)] hover:text-[var(--accent)]"
              >
                evolu.dev ↗
              </a>
            </li>
            <li>
              <span className="text-[var(--ink-faint)]">Podpora výzkumu: </span>
              <Link
                href="/#podpora"
                className="font-mono font-medium text-[var(--ink)] hover:text-[var(--accent)] tabular-nums"
              >
                1000701012/3030 →
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

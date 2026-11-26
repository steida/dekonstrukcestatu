import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFooterCta } from "@/components/ArticleFooterCta";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import { TaxSubNav } from "@/components/TaxSubNav";
import { buildPageMetadata } from "@/lib/metadata";

const PAGE_URL = "/danova-reforma/implementace-eu";
const PAGE_TITLE = "Daňová reforma: Realistická implementace pro Česko v rámci EU";
const PAGE_DESC =
  "Rozpracovaný návrh, jak převést dvě pohlednice (Hall–Rabushka) do praxe v EU: jednotná 15% DPH s hotovostním režimem, minima spotřebních daní (a 0 % u energií domácností) a pojistky.";

export const metadata: Metadata = buildPageMetadata({
  path: PAGE_URL,
  title: "Daňová reforma: Implementace pro Česko v EU",
  description: PAGE_DESC,
  type: "article",
  image: "/images/og-danova-reforma.png",
  imageAlt: "Daňová reforma: Realistická implementace pro Česko v rámci EU",
  publishedTime: "2026-11-25",
});

const ROADMAP_ITEMS = [
  {
    code: "01",
    title: "Jednotná „vykuchaná“ 15% DPH + hotovostní režim",
    body: (
      <>
        Minimum povolené směrnicí EU (jediná sazba bez snížených a nulových
        sazeb — zůstanou jen povinná unijní osvobození, zejména bez nároku na
        odpočet dle čl. 132, 135 a 136 a s nárokem na odpočet u vývozu, dodání
        do jiného členského státu a mezinárodní dopravy dle čl. 146, 138 a 148,
        dále např. osvobození dovozu a diplomatická osvobození dle čl. 143 a
        151; osvobození malých podniků podle čl. 284 zůstává se stropem až
        85 000 EUR) a zavedení v ČR dosud nevyužitého dobrovolného hotovostního
        režimu (čl. 66 písm. b) směrnice) s odkladem odpočtu podle čl. 167a do
        obratu 2 mil. EUR (~50 mil. Kč; od 1. 1. 2025 bez konzultace s Výborem
        pro DPH podle směrnice 2020/285; viz{" "}
        <Link
          href="/danova-reforma/doplneni#6"
          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          Doplnění #6
        </Link>{" "}
        a{" "}
        <Link
          href="/danova-reforma/vyzkum/09-hr-dph-obchod-a-hacky"
          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          studii 05
        </Link>
        ).
      </>
    ),
  },
  {
    code: "02",
    title: "Spotřební daně na unijní minimum (a 0 % tam, kde to EU dovoluje)",
    body: (
      <>
        Stažení pohonných hmot, paliv a elektřiny mimo osvobozenou spotřebu
        domácností, tabáku, piva a lihovin na povinné unijní minimum; nulová
        sazba u vína (minimum EU 0 EUR/hl), u neharmonizovaných slazených nápojů
        a u elektřiny, zemního plynu, uhlí a pevných paliv pro domácnosti
        (čl. 15 odst. 1 písm. h) směrnice 2003/96/ES; u malých nezávislých
        pivovarů dovoluje čl. 4 směrnice 92/83/EHS sazbu až o 50 % pod
        standardní národní sazbou i pod minimem); žádné nové „daně z hříchu“
        (viz{" "}
        <Link
          href="/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla"
          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          studii 03
        </Link>
        ).
      </>
    ),
  },
  {
    code: "03",
    title: "Sloučení přímých daní a odvodů do dvou pohlednic",
    body: (
      <>
        Sloučení daní z příjmů (DPFO, DPPO) a sociálních i zdravotních odvodů do
        jednoho srozumitelného systému (<strong>X</strong> a{" "}
        <strong>Y %</strong>) při úplném zrušení majetkových daní. Vše v souladu
        s rozsudkem SDEU <em>Banca Popolare di Cremona</em> (C-475/03),
        nařízením EU 883/2004 (koordinace sociálního zabezpečení), nálezem ÚS
        Pl. ÚS 8/07 a čl. 31 Listiny; součástí je i přenastavení obecního
        rozpočtového určení daní (RUD) po zrušení daně z nemovitostí.
      </>
    ),
  },
  {
    code: "04",
    title: "Přechodová pravidla pro firmy, úvěry a finanční sektor",
    body: (
      <>
        Plynulý doběh starých odpisů a daňových ztrát, přechodové řešení
        stávajících úvěrů a zdanění úrokového rozpětí bank a finančního sektoru
        (viz{" "}
        <Link
          href="/danova-reforma/vyzkum/05-hr-mechanika-a-okrajove-pripady"
          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          studii 01
        </Link>
        ).
      </>
    ),
  },
  {
    code: "05",
    title: "Soulad s evropským právem a mezinárodními smlouvami",
    body: (
      <>
        Smlouvy o zamezení dvojího zdanění (SZDZ), směrnice o mateřských a
        dceřiných společnostech (PSD), směrnice ATAD, globální minimální daň
        (Pilíř 2) a zápočet daně v USA (IRC § 901, tj. 26 U.S.C. § 901; viz{" "}
        <Link
          href="/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla"
          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          studii 03
        </Link>
        ).
      </>
    ),
  },
  {
    code: "06",
    title: "Obrana reformy proti politikům a lobbistům",
    body: (
      <>
        Poučení z toho, jak politici po roce 2004 rozložili rovnou daň na
        Slovensku a jak lobbistické koalice v USA opakovaně zablokovaly čistou
        Flat Tax (viz{" "}
        <Link
          href="/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie"
          className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
        >
          studii 02
        </Link>
        ) — včetně ústavních pojistek a protijedů z dílny Dekonstrukce státu (
        <strong>asignační daně</strong> a{" "}
        <strong>financování politických stran přímo voliči</strong>).
      </>
    ),
  },
] as const;

export default function ImplementaceEuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: PAGE_URL,
          title: PAGE_TITLE,
          description: PAGE_DESC,
          datePublished: "2026-11-25",
          image: "/images/og-danova-reforma.png",
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Daňová reforma", path: "/danova-reforma" },
            { name: "Implementace v EU", path: PAGE_URL },
          ],
        })}
      />

      <TaxSubNav active="implementace" />

      <article className="mx-auto max-w-3xl">
        <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wider text-[var(--ink-muted)] uppercase tabular-nums">
            <span className="font-semibold text-[var(--accent)]">
              Rozpracovaný návrh · Implementace v praxi
            </span>
            <span aria-hidden="true">/</span>
            <span>Daniel Steigerwald</span>
            <span aria-hidden="true">/</span>
            <span>25. 11. 2026</span>
          </div>
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            {PAGE_TITLE}
          </h1>
        </header>

        <p className="text-[1.0625rem] leading-[1.72] text-[var(--ink)]">
          Hlavní text{" "}
          <Link
            href="/danova-reforma"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
          >
            Daňová reforma podle Dekonstrukce státu
          </Link>{" "}
          nechávám záměrně čistý — ukazuje první principy a návod, jak o daních
          přemýšlet bez nánosu politických kompromisů. Tady naopak rozpracovávám
          druhou, praktickou vrstvu: jak stejný princip převést do realistického
          návrhu pro dnešní Česko uvnitř pravidel Evropské unie, tak aby obstál
          před právníky, ministry financí i politiky a v rámci mezinárodních
          smluv. Unijní daňovou harmonizaci (povinnou DPH, spotřební daně, ATAD
          či Pilíř 2) přitom beru jen jako zvenčí vnucený právní mantinel,
          nikoli jako obhajobu DPH — cílem je vše povinné ořezat na nejnižší
          legální minimum.
        </p>

        <section className="mt-10">
          <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-[var(--border-strong)] pb-2">
            <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
              6 konkrétních okruhů, které rozpracovávám
            </h2>
            <span className="shrink-0 whitespace-nowrap font-mono text-xs text-[var(--ink-faint)] tabular-nums">
              01–06
            </span>
          </div>

          <ol className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
            {ROADMAP_ITEMS.map((item) => (
              <li
                key={item.code}
                className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:gap-5"
              >
                <span className="w-8 shrink-0 font-mono text-sm font-bold text-[var(--accent)] tabular-nums">
                  {item.code}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold tracking-tight text-[var(--ink)] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--ink-muted)]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Cross-navigation back to existing materials */}
        <aside className="no-print mt-12">
          <p className="mb-4 font-mono text-xs font-semibold tracking-wider text-[var(--ink-faint)] uppercase">
            Hotové podklady k tomuto návrhu
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/danova-reforma"
              className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
            >
              <div className="font-mono text-xs text-[var(--accent)] uppercase">
                První principy
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                ← Daňová reforma (dvě pohlednice)
              </div>
            </Link>

            <Link
              href="/danova-reforma/doplneni"
              className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
            >
              <div className="font-mono text-xs text-[var(--accent)] uppercase">
                Doplnění #1–#9
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                Zpřesnění a odpovědi z diskuse →
              </div>
            </Link>

            <Link
              href="/danova-reforma/vyzkum"
              className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
            >
              <div className="font-mono text-xs text-[var(--accent)] uppercase">
                Studie 01–05
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                Výzkum Hall–Rabushka →
              </div>
            </Link>
          </div>
        </aside>

        <ArticleFooterCta />
      </article>
    </div>
  );
}

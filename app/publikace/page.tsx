import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  DANOVA_REFORMA_DOC,
  DOPLNENI_DOC,
  SITE_URL,
  VYZKUM_HR_STUDIES,
} from "@/lib/documents";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/publikace",
  title: "Publikace",
  description:
    "Vlajkové publikace a výzkumné texty think-tanku Dekonstrukce státu: Daňová reforma na dvě pohlednice (včetně 5 podkladových studií) a Manifest.",
  image: "/images/og-default.png",
  imageAlt: "Publikace — Dekonstrukce státu",
});

export default function PublikacePage() {
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
              name: "Publikace",
              item: `${SITE_URL}/publikace`,
            },
          ],
        }}
      />

      <header className="mb-10 border-b-2 border-[var(--ink)] pb-6">
        <p className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
          Vlajkové publikace
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)]">
          Publikace
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">
          Hlavní programové a výzkumné texty Dekonstrukce státu — systematické
          návrhy, jak ubírat složitost státu. Kratší eseje, forenzní pitvy
          cizích studií a komentáře najdete na{" "}
          <Link
            href="/blog"
            className="font-medium text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-3 hover:decoration-[var(--accent)]"
          >
            Blogu
          </Link>
          .
        </p>
      </header>

      {/* Publikace 01: Daňová reforma */}
      <section className="mb-12">
        <div className="mb-4 flex items-baseline justify-between border-b border-[var(--border-strong)] pb-2">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            01 · Daňová reforma podle Dekonstrukce státu
          </h2>
          <span className="font-mono text-xs text-[var(--ink-faint)] tabular-nums">
            7 textů
          </span>
        </div>

        <div className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
          {[DANOVA_REFORMA_DOC, DOPLNENI_DOC].map((doc) => (
            <article key={doc.url} className="py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold tracking-tight text-[var(--ink)]">
                  <Link
                    href={doc.url}
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    {doc.title}
                  </Link>
                </h3>
                <span className="shrink-0 font-mono text-xs text-[var(--ink-faint)] tabular-nums">
                  {doc.date}
                </span>
              </div>
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
                {doc.description}
              </p>
            </article>
          ))}

          <div className="py-5">
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
                <Link
                  href="/danova-reforma/vyzkum"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  Hloubkový výzkum Hall–Rabushka Flat Tax (studie 01–05) →
                </Link>
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {VYZKUM_HR_STUDIES.map((study) => (
                <li key={study.url}>
                  <Link
                    href={study.url}
                    className="group flex items-baseline gap-2.5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-elevated)] px-3.5 py-2.5 text-sm transition-colors hover:border-[var(--accent)]"
                  >
                    <span className="font-mono text-xs font-semibold text-[var(--accent)] tabular-nums">
                      {study.code}
                    </span>
                    <span className="font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                      {study.shortTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Publikace 02: Manifest */}
      <section className="mb-12">
        <div className="mb-4 flex items-baseline justify-between border-b border-[var(--border-strong)] pb-2">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            02 · Základní programový text
          </h2>
          <span className="font-mono text-xs text-[var(--ink-faint)]">
            Pracovní návrh
          </span>
        </div>

        <article className="border-b border-[var(--border)] py-5">
          <h3 className="text-lg font-bold tracking-tight text-[var(--ink)]">
            <Link
              href="/manifest"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Manifest dekonstrukce státu
            </Link>
          </h3>
          <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
            Základní text o složitosti státu a rozdělení agend do menších částí
            vlastněných občany, včetně odpovědí na nejčastější námitky v
            listárně. Původní návrh brzy aktualizuji.
          </p>
        </article>
      </section>

      {/* Na čem pracuji dál */}
      <section id="pripravuji">
        <div className="mb-4 flex items-baseline justify-between border-b border-[var(--border-strong)] pb-2">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
            Připravuji (rozpracované okruhy)
          </h2>
          <span className="font-mono text-xs text-[var(--ink-faint)] tabular-nums">
            5 témat
          </span>
        </div>

        <ul className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
          <li className="py-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
                <Link
                  href="/danova-reforma/implementace-eu"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  Daňová reforma: Implementace pro Česko v rámci EU →
                </Link>
              </h3>
              <span className="shrink-0 font-mono text-xs font-semibold text-[var(--accent)] uppercase">
                Rozpracovaný návrh
              </span>
            </div>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Konkrétní právní a rozpočtová roadmapa: jednotná 15% DPH (s
              hotovostním režimem do 50 mil. Kč po konzultaci v EU), spotřební
              daně na unijním minimu, přechodová pravidla a pojistky proti
              lobbistům.
            </p>
          </li>

          <li className="py-4">
            <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
              Svobodné obce bez RUD a daně z nemovitostí
            </h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Dvě pohlednice + vlastní obecní sazba{" "}
              <code className="font-mono text-xs">Y_obec</code> bez
              přerozdělovacích dotací.
            </p>
          </li>

          <li className="py-4">
            <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
              Asignační daně
            </h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              <em>
                „Co kdybychom lidem dali na výběr, jestli 10 % jejich daní půjde
                na dotace, nebo na důchody?“
              </em>{" "}
              — přímý protijed na moc lobbistů.
            </p>
          </li>

          <li className="py-4">
            <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
              Financování politických stran přímo voliči
            </h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Státní příspěvek nedostávají strany, ale voliči — kdo chce, dá ho
              své straně; kdo nevolí, peníze si nechá.
            </p>
          </li>

          <li className="py-4">
            <h3 className="text-base font-bold tracking-tight text-[var(--ink)]">
              Manifest v2 &amp; jeho implementace
            </h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Aktualizace původního návrhu a rozpracování otevřených bodů.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

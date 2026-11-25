import type { FC } from "react";
import { PrintPostcardsButton } from "./PrintPostcardsButton";

export const TwoPostcards: FC = () => (
  <section
    aria-label="Celý daňový systém na dvě pohlednice"
    className="my-10 border-y-2 border-[var(--ink)] py-7"
  >
    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
      <div>
        <p className="font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
          Model Hall–Rabushka · 2 formuláře, 2 parametry (X a Y %)
        </p>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-[var(--ink)]">
          Celý daňový systém na dvě pohlednice
        </h2>
      </div>
      <PrintPostcardsButton />
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* Pohlednice 1 — Občané */}
      <div className="postcard-card flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border-strong)] border-l-4 border-l-[var(--accent)] bg-[var(--surface-elevated)] p-5">
        <div>
          <div className="mb-4 flex items-start justify-between gap-3 border-b border-[var(--border)] pb-3">
            <div>
              <p className="font-mono text-[0.7rem] font-semibold tracking-wider text-[var(--accent)] uppercase">
                Pohlednice 01 · Občané
              </p>
              <h3 className="mt-0.5 text-base font-bold tracking-tight text-[var(--ink)]">
                Mzdy a odměny
              </h3>
            </div>
            <div className="shrink-0 rounded-[var(--radius-sm)] border border-dashed border-[var(--border-strong)] px-2 py-1 text-right font-mono text-[0.6rem] leading-tight tracking-wider text-[var(--ink-faint)] uppercase">
              Finanční úřad
              <br />
              ČR
            </div>
          </div>

          <ol className="space-y-2.5 text-sm">
            <li className="flex items-baseline justify-between gap-3 border-b border-dotted border-[var(--border)] pb-1.5">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink-faint)]">
                  1.
                </span>
                Celkové mzdy a odměny za rok
              </span>
              <span className="shrink-0 font-mono text-xs text-[var(--ink-faint)] tabular-nums">
                Kč
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-3 border-b border-dotted border-[var(--border)] pb-1.5">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink-faint)]">
                  2.
                </span>
                Odpočet nezdanitelného minima <strong>X</strong> (příp. +
                {"\u00a0"}částka za každé dítě)
              </span>
              <span className="shrink-0 font-mono text-xs font-semibold text-[var(--ink)] tabular-nums">
                − X
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-3 pt-0.5 font-semibold">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--accent)]">
                  3.
                </span>
                Daň ze zbytku nad nulou (řádek 1 − řádek 2)
              </span>
              <span className="shrink-0 bg-[var(--accent)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--bg)] tabular-nums print:border print:border-black print:bg-transparent print:text-black">
                × Y %
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-5 rounded-[var(--radius-sm)] border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-3 py-2 font-mono text-[0.7rem] leading-snug text-[var(--ink)]">
          <strong className="text-[var(--accent)]">0 %:</strong> úspory · úroky
          · dividendy · akcie · Bitcoin · vlastní bydlení · dědictví
        </div>
      </div>

      {/* Pohlednice 2 — Firmy a OSVČ */}
      <div className="postcard-card flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border-strong)] border-l-4 border-l-[var(--ink)] bg-[var(--surface-elevated)] p-5">
        <div>
          <div className="mb-4 flex items-start justify-between gap-3 border-b border-[var(--border)] pb-3">
            <div>
              <p className="font-mono text-[0.7rem] font-semibold tracking-wider text-[var(--ink-muted)] uppercase">
                Pohlednice 02 · Firmy a OSVČ
              </p>
              <h3 className="mt-0.5 text-base font-bold tracking-tight text-[var(--ink)]">
                Podnikání (cash flow)
              </h3>
            </div>
            <div className="shrink-0 rounded-[var(--radius-sm)] border border-dashed border-[var(--border-strong)] px-2 py-1 text-right font-mono text-[0.6rem] leading-tight tracking-wider text-[var(--ink-faint)] uppercase">
              Finanční úřad
              <br />
              ČR
            </div>
          </div>

          <ol className="space-y-2 text-sm">
            <li className="flex items-baseline justify-between gap-3 border-b border-dotted border-[var(--border)] pb-1.5">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink-faint)]">
                  1.
                </span>
                Veškeré tržby
              </span>
              <span className="shrink-0 font-mono text-xs text-[var(--ink-faint)] tabular-nums">
                +
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-3 border-b border-dotted border-[var(--border)] pb-1.5">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink-faint)]">
                  2.
                </span>
                Mínus nákupy od jiných firem
              </span>
              <span className="shrink-0 font-mono text-xs text-[var(--ink)]">
                −
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-3 border-b border-dotted border-[var(--border)] pb-1.5">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink-faint)]">
                  3.
                </span>
                Mínus <strong>100 % investic</strong> hned první rok
              </span>
              <span className="shrink-0 font-mono text-xs text-[var(--ink)]">
                −
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-3 border-b border-dotted border-[var(--border)] pb-1.5">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink-faint)]">
                  4.
                </span>
                Mínus vyplacené mzdy a odměny
              </span>
              <span className="shrink-0 font-mono text-xs text-[var(--ink)]">
                −
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-3 pt-0.5 font-semibold">
              <span className="text-[var(--ink)]">
                <span className="mr-2 font-mono text-xs text-[var(--ink)]">
                  5.
                </span>
                Daň ze zbytku (stejná sazba jako na Pohlednici 1)
              </span>
              <span className="shrink-0 bg-[var(--ink)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--bg)] tabular-nums print:border print:border-black print:bg-transparent print:text-black">
                × Y %
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-[0.7rem] leading-snug text-[var(--ink-muted)]">
          Bez odpisových skupin · bez hotovostních vratek (karuselů) · bez
          švarcsystému
        </div>
      </div>
    </div>
  </section>
);

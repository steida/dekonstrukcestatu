"use client";

import Link from "next/link";
import { type FC, useEffect, useRef } from "react";

export type TaxSectionKey =
  | "clanek"
  | "doplneni"
  | "vyzkum"
  | "implementace";

const TABS: { key: TaxSectionKey; href: string; label: string }[] = [
  { key: "clanek", href: "/danova-reforma", label: "Daňová reforma" },
  { key: "doplneni", href: "/danova-reforma/doplneni", label: "Doplnění #1–#9" },
  {
    key: "vyzkum",
    href: "/danova-reforma/vyzkum",
    label: "Výzkum H–R (5)",
  },
  {
    key: "implementace",
    href: "/danova-reforma/implementace-eu",
    label: "Implementace v EU",
  },
];

export const TaxSubNav: FC<{ active: TaxSectionKey }> = ({ active }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const item = activeRef.current;
    if (!list || !item || list.scrollWidth <= list.clientWidth) return;

    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    if (itemRect.left < listRect.left) {
      list.scrollLeft += itemRect.left - listRect.left;
    } else if (itemRect.right > listRect.right) {
      list.scrollLeft += itemRect.right - listRect.right;
    }
  }, [active]);

  return (
    <nav
      aria-label="Sekce daňové reformy"
      className="no-print mb-8 border-b border-[var(--border)]"
    >
      <ul
        ref={listRef}
        className="-mb-px flex flex-nowrap gap-x-4 overflow-x-auto overscroll-x-contain whitespace-nowrap text-sm sm:gap-x-5"
      >
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <li key={tab.key}>
              <Link
                ref={isActive ? activeRef : undefined}
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "inline-block border-b-2 border-[var(--accent)] pb-2.5 font-semibold text-[var(--ink)]"
                    : "inline-block border-b-2 border-transparent pb-2.5 text-[var(--ink-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
                }
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

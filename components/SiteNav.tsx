"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const NAV_ITEMS = [
  {
    href: "/publikace",
    label: "Publikace",
    match: ["/publikace", "/danova-reforma", "/manifest"],
  },
  { href: "/blog", label: "Blog", match: ["/blog"] },
  { href: "/media", label: "Média", match: ["/media"] },
  { href: "/o-autorovi", label: "O autorovi", match: ["/o-autorovi"] },
  { href: "/#kontakt", label: "Kontakt", match: [] },
] as const;

export const SiteNav: FC<{ className?: string; linkClassName?: string }> = ({
  className,
  linkClassName,
}) => {
  const rawPathname = usePathname() || "/";
  const pathname =
    rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : rawPathname;

  return (
    <nav aria-label="Hlavní navigace" className={className}>
      {NAV_ITEMS.map((item) => {
        const isExact = pathname === item.href;
        const isActive =
          item.match.length > 0 &&
          item.match.some(
            (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
          );
        const baseClass = isActive
          ? "whitespace-nowrap font-semibold text-[var(--accent)] underline decoration-2 decoration-[var(--accent)] underline-offset-[6px] transition-colors"
          : "whitespace-nowrap font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]";
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isExact ? "page" : isActive ? "true" : undefined}
            className={linkClassName ? `${baseClass} ${linkClassName}` : baseClass}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

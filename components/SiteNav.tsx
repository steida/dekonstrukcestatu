"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const NAV_ITEMS = [
  { href: "/publikace", label: "Publikace", match: ["/publikace", "/danova-reforma", "/manifest"] },
  { href: "/blog", label: "Blog", match: ["/blog"] },
  { href: "/media", label: "Média", match: ["/media"] },
  { href: "/o-autorovi", label: "O autorovi", match: ["/o-autorovi"] },
  { href: "/#kontakt", label: "Kontakt", match: [] },
] as const;

export const SiteNav: FC<{ className?: string; linkClassName?: string }> = ({
  className,
  linkClassName,
}) => {
  const pathname = usePathname() || "/";

  return (
    <nav aria-label="Hlavní navigace" className={className}>
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.match.length > 0 &&
          item.match.some(
            (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
          );
        const baseClass = isActive
          ? "whitespace-nowrap font-semibold text-[var(--accent)] transition-colors"
          : "whitespace-nowrap font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]";
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={linkClassName ? `${baseClass} ${linkClassName}` : baseClass}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

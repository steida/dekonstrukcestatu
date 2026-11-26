import Link from "next/link";
import type { FC } from "react";
import { LogoMark } from "./LogoMark";
import { SiteNav } from "./SiteNav";
import { ThemeToggle } from "./ThemeToggle";

export const SiteHeader: FC = () => (
  <header className="no-print sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/94 backdrop-blur-sm">
    {/* Primary bar */}
    <div className="mx-auto flex h-13 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 md:h-14">
      <Link
        href="/"
        className="group flex shrink-0 items-center gap-2.5 text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
      >
        <LogoMark className="h-5 w-5 shrink-0 text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]" />
        <span className="text-sm font-semibold tracking-tight sm:text-base">
          Dekonstrukce státu
        </span>
      </Link>

      {/* Desktop navigation + theme toggle */}
      <div className="flex shrink-0 items-center gap-4">
        <SiteNav className="hidden items-center gap-5 text-sm md:flex" />
        <span
          className="hidden h-4 w-px bg-[var(--border)] md:block"
          aria-hidden="true"
        />
        <ThemeToggle />
      </div>
    </div>

    {/* Compact mobile navigation row (zero overflow on 360px–390px) */}
    <div className="border-t border-[var(--border)] md:hidden">
      <div className="mx-auto max-w-5xl overflow-x-auto overscroll-x-contain px-4 sm:px-6">
        <SiteNav
          className="flex items-center justify-between gap-3 py-0 text-[0.8125rem]"
          linkClassName="py-2"
        />
      </div>
    </div>
  </header>
);

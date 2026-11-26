"use client";

import { useTheme } from "next-themes";
import { type FC, useEffect, useState } from "react";

export const ThemeToggle: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const tooltip = !mounted
    ? "Přepnout světlý a tmavý režim"
    : isDark
      ? "Přepnout na světlý režim"
      : "Přepnout na tmavý režim";

  return (
    <button
      type="button"
      onClick={() => setTheme(otherTheme)}
      aria-label="Tmavý režim"
      aria-pressed={mounted ? isDark : undefined}
      title={tooltip}
      className="no-print inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-[var(--radius-sm)] border border-transparent text-[var(--ink-muted)] transition hover:border-[var(--border)] hover:bg-[var(--surface)] hover:text-[var(--ink)]"
    >
      {/* Sun icon shown in light mode */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px] dark:hidden"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      {/* Moon icon shown in dark mode */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-[18px] w-[18px] dark:block"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
};

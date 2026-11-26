"use client";

import { type FC, useEffect } from "react";

export const PrintPostcardsButton: FC = () => {
  useEffect(() => {
    return () => {
      document.body.removeAttribute("data-print-postcards");
    };
  }, []);

  const handlePrint = () => {
    document.body.setAttribute("data-print-postcards", "true");

    const cleanup = () => {
      document.body.removeAttribute("data-print-postcards");
    };

    window.addEventListener("afterprint", cleanup, { once: true });

    const mediaQuery = window.matchMedia?.("print");
    const onMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        cleanup();
        mediaQuery?.removeEventListener("change", onMediaChange);
      }
    };
    mediaQuery?.addEventListener?.("change", onMediaChange);

    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="no-print inline-flex cursor-pointer items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect width="12" height="8" x="6" y="14" />
      </svg>
      Vytisknout pohlednice
    </button>
  );
};

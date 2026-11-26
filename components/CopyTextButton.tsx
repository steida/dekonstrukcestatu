"use client";

import { type FC, useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

export const CopyTextButton: FC<{ text: string; label?: string }> = ({
  text,
  label = "Zkopírovat",
}) => {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const setTransientStatus = (next: CopyStatus) => {
    setStatus(next);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus("idle"), 2500);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setTransientStatus("copied");
        return;
      }
      throw new Error("Clipboard API unavailable");
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);
        setTransientStatus(ok ? "copied" : "error");
      } catch {
        setTransientStatus("error");
      }
    }
  };

  const statusAnnouncement =
    status === "copied"
      ? `${label}: zkopírováno do schránky.`
      : status === "error"
        ? `${label}: kopírování do schránky se nezdařilo.`
        : "";

  return (
    <span className="no-print inline-flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-7 cursor-pointer items-center rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[0.7rem] font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        {status === "copied" ? (
          <>
            Zkopírováno <span aria-hidden="true">✓</span>
          </>
        ) : status === "error" ? (
          "Nelze zkopírovat"
        ) : (
          label
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {statusAnnouncement}
      </span>
    </span>
  );
};

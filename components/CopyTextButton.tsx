"use client";

import { type FC, useState } from "react";

export const CopyTextButton: FC<{ text: string; label?: string }> = ({
  text,
  label = "Zkopírovat",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="no-print cursor-pointer rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[0.7rem] font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {copied ? "Zkopírováno ✓" : label}
    </button>
  );
};

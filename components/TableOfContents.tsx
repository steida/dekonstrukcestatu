import type { FC } from "react";
import type { TocItem } from "@/lib/markdown";

interface TocGroup {
  item: TocItem;
  children: TocItem[];
}

function groupTocItems(items: TocItem[]): TocGroup[] {
  const groups: TocGroup[] = [];
  for (const item of items) {
    if (item.level === 3 && groups.length > 0 && groups[groups.length - 1].item.level === 2) {
      groups[groups.length - 1].children.push(item);
    } else {
      groups.push({ item, children: [] });
    }
  }
  return groups;
}

export const TableOfContents: FC<{
  items: TocItem[];
  defaultOpen?: boolean;
  label?: string;
}> = ({ items, defaultOpen = false, label = "Obsah textu" }) => {
  if (items.length < 3) return null;

  const groups = groupTocItems(items);

  return (
    <details
      open={defaultOpen}
      className="toc-box no-print group mb-8 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]/65"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-[var(--ink)] select-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            {label}
          </span>
          <span className="font-mono text-xs font-normal text-[var(--ink-faint)] tabular-nums">
            <span aria-hidden="true">· </span>
            {items.length}
          </span>
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="h-4 w-4 text-[var(--ink-muted)] transition-transform group-open:rotate-180"
          aria-hidden="true"
        >
          <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <nav
        aria-label={label}
        className="border-t border-[var(--border)] px-4 py-3.5"
      >
        <ol className="space-y-1.5 leading-snug">
          {groups.map(({ item, children }) => (
            <li
              key={item.id}
              className={
                item.level === 3
                  ? "pl-4 text-[0.8125rem] text-[var(--ink-muted)]"
                  : "pt-0.5 text-sm font-medium text-[var(--ink)] first:pt-0"
              }
            >
              <a
                href={`#${item.id}`}
                className="inline-block py-0.5 transition-colors hover:text-[var(--accent)]"
              >
                {item.text}
              </a>
              {children.length > 0 && (
                <ol className="mt-1 space-y-1 pl-4">
                  {children.map((sub) => (
                    <li
                      key={sub.id}
                      className="text-[0.8125rem] font-normal text-[var(--ink-muted)]"
                    >
                      <a
                        href={`#${sub.id}`}
                        className="inline-block py-0.5 transition-colors hover:text-[var(--accent)]"
                      >
                        {sub.text}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
};

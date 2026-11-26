import type { Config } from "tailwindcss";

const typographyStyles: Config = {
  theme: {
    typography: () => ({
      DEFAULT: {
        css: {
          "--tw-prose-body": "var(--ink)",
          "--tw-prose-headings": "var(--ink)",
          "--tw-prose-lead": "var(--ink-muted)",
          "--tw-prose-links": "var(--accent)",
          "--tw-prose-bold": "var(--ink)",
          "--tw-prose-counters": "var(--ink-muted)",
          "--tw-prose-bullets": "var(--accent)",
          "--tw-prose-hr": "var(--border-strong)",
          "--tw-prose-quotes": "var(--ink)",
          "--tw-prose-quote-borders": "var(--accent)",
          "--tw-prose-captions": "var(--ink-muted)",
          "--tw-prose-code": "var(--ink)",
          "--tw-prose-pre-code": "var(--ink)",
          "--tw-prose-pre-bg": "var(--surface)",
          "--tw-prose-th-borders": "var(--border-strong)",
          "--tw-prose-td-borders": "var(--border)",

          maxWidth: "none",
          color: "var(--ink)",
          fontSize: "1.0625rem",
          lineHeight: "1.72",

          p: {
            marginTop: "1.15em",
            marginBottom: "1.15em",
          },

          h2: {
            color: "var(--ink)",
            fontWeight: "700",
            fontSize: "1.45rem",
            lineHeight: "1.28",
            letterSpacing: "-0.02em",
            marginTop: "2.6em",
            marginBottom: "0.75em",
            paddingBottom: "0.4em",
            borderBottom: "1px solid var(--border)",
          },

          h3: {
            color: "var(--ink)",
            fontWeight: "650",
            fontSize: "1.1875rem",
            lineHeight: "1.35",
            letterSpacing: "-0.015em",
            marginTop: "2em",
            marginBottom: "0.55em",
          },

          h4: {
            color: "var(--ink)",
            fontWeight: "650",
            fontSize: "1.05rem",
            lineHeight: "1.4",
            marginTop: "1.5em",
            marginBottom: "0.4em",
          },

          a: {
            color: "var(--accent)",
            textDecoration: "underline",
            textDecorationColor: "color-mix(in srgb, var(--accent) 42%, transparent)",
            textUnderlineOffset: "3px",
            textDecorationThickness: "1px",
            fontWeight: "500",
            transitionProperty: "color, text-decoration-color",
            transitionDuration: "150ms",
            "&:hover": {
              color: "var(--accent-hover)",
              textDecorationColor: "var(--accent-hover)",
            },
          },

          ":is(h2, h3, h4, h5) a": {
            color: "inherit",
            textDecoration: "none",
            fontWeight: "inherit",
          },

          strong: {
            color: "var(--ink)",
            fontWeight: "650",
          },

          "a strong": {
            color: "inherit",
          },

          blockquote: {
            fontStyle: "normal",
            fontWeight: "400",
            color: "var(--ink-muted)",
            borderLeftWidth: "2px",
            borderLeftColor: "var(--accent)",
            borderRadius: "0 var(--radius) var(--radius) 0",
            backgroundColor: "var(--surface)",
            marginTop: "1.5em",
            marginBottom: "1.5em",
            padding: "0.95rem 1.2rem",
            fontSize: "0.975rem",
            lineHeight: "1.65",
          },

          "blockquote p:first-of-type": {
            marginTop: "0",
          },
          "blockquote p:last-of-type": {
            marginBottom: "0",
          },
          "blockquote p:first-of-type::before": {
            content: "none",
          },
          "blockquote p:last-of-type::after": {
            content: "none",
          },

          ul: {
            marginTop: "1em",
            marginBottom: "1em",
            paddingLeft: "1.45rem",
            listStyleType: "square",
          },
          "ul > li::marker": {
            color: "var(--accent)",
          },
          ol: {
            marginTop: "1em",
            marginBottom: "1em",
            paddingLeft: "1.45rem",
            listStyleType: "decimal",
          },
          "ol > li::marker": {
            color: "var(--ink-muted)",
            fontVariantNumeric: "tabular-nums",
          },
          li: {
            marginTop: "0.4em",
            marginBottom: "0.4em",
          },
          "li > p": {
            marginTop: "0.45em",
            marginBottom: "0.45em",
          },

          hr: {
            borderColor: "var(--border-strong)",
            borderTopWidth: "1px",
            marginTop: "2.4em",
            marginBottom: "2.4em",
          },

          code: {
            color: "var(--ink)",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            padding: "0.1em 0.35em",
            fontSize: "0.86em",
            fontWeight: "450",
            fontVariantNumeric: "tabular-nums",
          },
          "code::before": {
            content: "none",
          },
          "code::after": {
            content: "none",
          },

          pre: {
            backgroundColor: "var(--surface)",
            color: "var(--ink)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "1rem 1.15rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            overflowX: "auto",
          },
          "pre code": {
            backgroundColor: "transparent",
            border: "none",
            padding: "0",
            fontSize: "inherit",
          },

          // Tables (wrapped in .table-wrap by rehype)
          table: {
            width: "100%",
            marginTop: "0",
            marginBottom: "0",
            borderCollapse: "collapse",
            fontSize: "0.888rem",
            lineHeight: "1.52",
            fontVariantNumeric: "tabular-nums",
          },
          thead: {
            backgroundColor: "var(--surface)",
            borderBottomWidth: "1px",
            borderBottomColor: "var(--border-strong)",
          },
          "thead th": {
            color: "var(--ink)",
            fontWeight: "650",
            textAlign: "left",
            verticalAlign: "bottom",
            padding: "0.65rem 0.85rem",
            whiteSpace: "nowrap",
          },
          "tbody tr": {
            borderBottomWidth: "1px",
            borderBottomColor: "var(--border)",
          },
          "tbody tr:last-child": {
            borderBottomWidth: "0",
          },
          "tbody td": {
            verticalAlign: "top",
            padding: "0.65rem 0.85rem",
            color: "var(--ink)",
          },

          "> :first-child": {
            marginTop: "0",
          },
          "> :last-child": {
            marginBottom: "0",
          },
        },
      },
    }),
  },
} satisfies Config;

export default typographyStyles;

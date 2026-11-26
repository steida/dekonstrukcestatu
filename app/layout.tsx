import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "@/components/Providers";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_URL } from "@/lib/documents";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dekonstrukce státu",
    template: "%s | Dekonstrukce státu",
  },
  description:
    "Nezávislý český think-tank Daniela Steigerwalda zaměřený na odstraňování složitosti státu, daňovou jednoduchost a srozumitelné institucionální reformy.",
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "Dekonstrukce státu (RSS)" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: "Dekonstrukce státu",
    title: "Dekonstrukce státu",
    description:
      "Nezávislý think-tank zaměřený na složitost státu, daňovou reformu na dvě pohlednice a forenzní audity složitých daňových návrhů.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Dekonstrukce státu — Nezávislý think-tank Daniela Steigerwalda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@steidacz",
    creator: "@steidacz",
    title: "Dekonstrukce státu",
    description:
      "Nezávislý think-tank zaměřený na odstraňování složitosti státu a daňovou jednoduchost.",
    images: ["/images/og-default.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col bg-[var(--bg)] text-[var(--ink)]">
        <a
          href="#main-content"
          className="sr-only top-0 left-0 focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--bg)]"
        >
          Přeskočit na obsah
        </a>
        <Providers>
          <SiteHeader />
          <main
            id="main-content"
            tabIndex={-1}
            className="w-full min-w-0 flex-1 focus:outline-none"
          >
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}

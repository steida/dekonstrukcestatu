import type { Metadata } from "next";
import { SITE_URL } from "./documents";

export interface PageMetadataInput {
  path: string;
  title?: string;
  absoluteTitle?: string;
  description: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  noIndex?: boolean;
}

const DEFAULT_OG_IMAGE = "/images/og-default.png";
const DEFAULT_OG_ALT = "Dekonstrukce státu — Nezávislý think-tank Daniela Steigerwalda";
const SITE_NAME = "Dekonstrukce státu";

export function buildPageMetadata({
  path,
  title,
  absoluteTitle,
  description,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_ALT,
  publishedTime,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = absoluteTitle
    ? absoluteTitle
    : title
      ? `${title} | ${SITE_NAME}`
      : SITE_NAME;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: {
      ...(noIndex ? {} : { canonical: canonicalPath }),
      types: {
        "application/rss+xml": [
          { url: "/rss.xml", title: "Dekonstrukce státu (RSS)" },
        ],
      },
    },
    ...(noIndex && canonicalPath !== "/404"
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
    openGraph: {
      type,
      locale: "cs_CZ",
      ...(noIndex
        ? {}
        : { url: `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}` }),
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            authors: ["Daniel Steigerwald"],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@steidacz",
      creator: "@steidacz",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

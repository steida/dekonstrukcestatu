import type { FC } from "react";
import { SITE_URL } from "@/lib/documents";

export const JsonLd: FC<{ data: Record<string, unknown> | Record<string, unknown>[] }> = ({
  data,
}) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

export const AUTHOR_PERSON_LD = {
  "@type": "Person",
  "@id": `${SITE_URL}/o-autorovi#daniel-steigerwald`,
  name: "Daniel Steigerwald",
  url: `${SITE_URL}/o-autorovi`,
  image: `${SITE_URL}/images/daniel-steigerwald.jpg`,
  email: "mailto:daniel@steigerwald.cz",
  jobTitle: "Programátor a zakladatel Dekonstrukce státu",
  sameAs: [
    "https://x.com/steidacz",
    "https://github.com/steida",
    "https://www.evolu.dev/",
  ],
};

export const ORGANIZATION_LD = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Dekonstrukce státu",
  description:
    "Nezávislý český think-tank Daniela Steigerwalda zaměřený na odstraňování složitosti státu, daňovou jednoduchost a institucionální reformy.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
    width: 512,
    height: 512,
  },
  founder: { "@id": `${SITE_URL}/o-autorovi#daniel-steigerwald` },
  sameAs: [
    "https://x.com/steidacz",
    "https://github.com/steida/dekonstrukcestatu",
  ],
};

export const WEBSITE_LD = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Dekonstrukce státu",
  inLanguage: "cs-CZ",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function buildArticleJsonLd({
  type = "Article",
  url,
  title,
  description,
  datePublished,
  image = "/images/og-default.png",
  breadcrumbs,
}: {
  type?: "Article" | "ScholarlyArticle";
  url: string;
  title: string;
  description: string;
  datePublished: string;
  image?: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        headline: title,
        description,
        url: `${SITE_URL}${url}`,
        datePublished,
        dateModified: datePublished,
        inLanguage: "cs-CZ",
        image: `${SITE_URL}${image}`,
        author: AUTHOR_PERSON_LD,
        publisher: ORGANIZATION_LD,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${url}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path === "/" ? "" : crumb.path}`,
        })),
      },
    ],
  };
}

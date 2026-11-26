import type { MetadataRoute } from "next";
import {
  DANOVA_REFORMA_DOC,
  DOPLNENI_DOC,
  PITVA_PAQ_CHAPTERS,
  PITVA_PAQ_DANOVY_RAJ,
  PITVA_PAQ_ESSAY,
  PITVA_PAQ_IROZHLAS,
  PITVA_PAQ_MAIN,
  SITE_URL,
  SROVNANI_REFOREM_DOC,
  VYZKUM_HR_STUDIES,
} from "@/lib/documents";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; lastModified: string; priority: number }[] =
    [
      { path: "", lastModified: "2026-11-26", priority: 1.0 },
      {
        path: DANOVA_REFORMA_DOC.url,
        lastModified:
          DANOVA_REFORMA_DOC.modifiedIsoDate ?? DANOVA_REFORMA_DOC.isoDate,
        priority: 0.95,
      },
      {
        path: DOPLNENI_DOC.url,
        lastModified: DOPLNENI_DOC.modifiedIsoDate ?? DOPLNENI_DOC.isoDate,
        priority: 0.9,
      },
      {
        path: "/danova-reforma/vyzkum",
        lastModified: "2026-11-26",
        priority: 0.85,
      },
      {
        path: "/danova-reforma/implementace-eu",
        lastModified: "2026-11-26",
        priority: 0.85,
      },
      {
        path: SROVNANI_REFOREM_DOC.url,
        lastModified:
          SROVNANI_REFOREM_DOC.modifiedIsoDate ?? SROVNANI_REFOREM_DOC.isoDate,
        priority: 0.95,
      },
      {
        path: PITVA_PAQ_IROZHLAS.url,
        lastModified:
          PITVA_PAQ_IROZHLAS.modifiedIsoDate ?? PITVA_PAQ_IROZHLAS.isoDate,
        priority: 0.95,
      },
      {
        path: PITVA_PAQ_ESSAY.url,
        lastModified:
          PITVA_PAQ_ESSAY.modifiedIsoDate ?? PITVA_PAQ_ESSAY.isoDate,
        priority: 0.95,
      },
      {
        path: PITVA_PAQ_DANOVY_RAJ.url,
        lastModified:
          PITVA_PAQ_DANOVY_RAJ.modifiedIsoDate ?? PITVA_PAQ_DANOVY_RAJ.isoDate,
        priority: 0.9,
      },
      {
        path: PITVA_PAQ_MAIN.url,
        lastModified: PITVA_PAQ_MAIN.modifiedIsoDate ?? PITVA_PAQ_MAIN.isoDate,
        priority: 0.95,
      },
      { path: "/publikace", lastModified: "2026-11-26", priority: 0.9 },
      { path: "/blog", lastModified: "2026-11-26", priority: 0.9 },
      { path: "/manifest", lastModified: "2020-09-01", priority: 0.8 },
      { path: "/o-autorovi", lastModified: "2026-11-26", priority: 0.8 },
      { path: "/media", lastModified: "2026-11-26", priority: 0.8 },
    ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((item) => ({
    url: `${SITE_URL}${item.path}`,
    lastModified: item.lastModified,
    priority: item.priority,
  }));

  for (const chapter of PITVA_PAQ_CHAPTERS) {
    entries.push({
      url: `${SITE_URL}${chapter.url}`,
      lastModified: chapter.modifiedIsoDate ?? chapter.isoDate,
      priority: 0.8,
    });
  }

  for (const study of VYZKUM_HR_STUDIES) {
    entries.push({
      url: `${SITE_URL}${study.url}`,
      lastModified: study.modifiedIsoDate ?? study.isoDate,
      priority: 0.8,
    });
  }

  return entries;
}

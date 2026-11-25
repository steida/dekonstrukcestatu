import type { MetadataRoute } from "next";
import {
  PITVA_PAQ_CHAPTERS,
  SITE_URL,
  VYZKUM_HR_STUDIES,
} from "@/lib/documents";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; lastModified: string; priority: number }[] =
    [
      { path: "", lastModified: "2026-11-25", priority: 1.0 },
      { path: "/danova-reforma", lastModified: "2026-11-24", priority: 0.95 },
      {
        path: "/danova-reforma/doplneni",
        lastModified: "2026-11-25",
        priority: 0.9,
      },
      {
        path: "/danova-reforma/vyzkum",
        lastModified: "2026-11-24",
        priority: 0.85,
      },
      {
        path: "/danova-reforma/implementace-eu",
        lastModified: "2026-11-25",
        priority: 0.85,
      },
      {
        path: "/blog/dekonstrukce-statu-vs-chytrejsi-dane",
        lastModified: "2026-11-25",
        priority: 0.95,
      },
      {
        path: "/blog/danime-praci-ale-majetek-temer-vubec",
        lastModified: "2026-11-25",
        priority: 0.95,
      },
      {
        path: "/blog/zjednodusovaci-a-komplikatori",
        lastModified: "2026-11-25",
        priority: 0.95,
      },
      {
        path: "/blog/fact-check-danovy-raj-evropy",
        lastModified: "2026-11-25",
        priority: 0.9,
      },
      {
        path: "/blog/zjednodusovaci-a-komplikatori/audit",
        lastModified: "2026-11-25",
        priority: 0.95,
      },
      { path: "/publikace", lastModified: "2026-11-25", priority: 0.9 },
      { path: "/blog", lastModified: "2026-11-25", priority: 0.9 },
      { path: "/manifest", lastModified: "2020-09-01", priority: 0.8 },
      { path: "/o-autorovi", lastModified: "2026-11-25", priority: 0.8 },
      { path: "/media", lastModified: "2026-11-25", priority: 0.8 },
    ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((item) => ({
    url: `${SITE_URL}${item.path}`,
    lastModified: item.lastModified,
    priority: item.priority,
  }));

  for (const chapter of PITVA_PAQ_CHAPTERS) {
    entries.push({
      url: `${SITE_URL}${chapter.url}`,
      lastModified: chapter.isoDate,
      priority: 0.8,
    });
  }

  for (const study of VYZKUM_HR_STUDIES) {
    entries.push({
      url: `${SITE_URL}${study.url}`,
      lastModified: study.isoDate,
      priority: 0.8,
    });
  }

  return entries;
}

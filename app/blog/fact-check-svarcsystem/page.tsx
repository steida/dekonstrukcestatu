import type { Metadata } from "next";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPrevNext,
  PITVA_PAQ_ALL,
  PITVA_PAQ_SVARCSYSTEM,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: PITVA_PAQ_SVARCSYSTEM.url,
  title: PITVA_PAQ_SVARCSYSTEM.seoTitle,
  description: PITVA_PAQ_SVARCSYSTEM.description,
  type: "article",
  image: PITVA_PAQ_SVARCSYSTEM.ogImage,
  imageAlt: PITVA_PAQ_SVARCSYSTEM.ogImageAlt,
  publishedTime:
    PITVA_PAQ_SVARCSYSTEM.publishedTime ?? PITVA_PAQ_SVARCSYSTEM.isoDate,
  modifiedTime: PITVA_PAQ_SVARCSYSTEM.modifiedIsoDate,
});

export default async function BlogFactCheckSvarcsystemPage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    PITVA_PAQ_SVARCSYSTEM.filePath,
  );
  const { prev, next } = getPrevNext(PITVA_PAQ_ALL, PITVA_PAQ_SVARCSYSTEM.url);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "ScholarlyArticle",
          url: PITVA_PAQ_SVARCSYSTEM.url,
          title: PITVA_PAQ_SVARCSYSTEM.title,
          description: PITVA_PAQ_SVARCSYSTEM.description,
          datePublished:
            PITVA_PAQ_SVARCSYSTEM.publishedTime ??
            PITVA_PAQ_SVARCSYSTEM.isoDate,
          dateModified: PITVA_PAQ_SVARCSYSTEM.modifiedIsoDate,
          image: PITVA_PAQ_SVARCSYSTEM.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Fact-check: Švarcsystém (PAQ)",
              path: PITVA_PAQ_SVARCSYSTEM.url,
            },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="pitva"
        seriesLabel="Blog · Fact-check"
        sidebarTitle="Fact-checky & pitvy"
        sidebarItems={PITVA_PAQ_ALL}
        currentDoc={PITVA_PAQ_SVARCSYSTEM}
        html={html}
        toc={toc}
        readingMinutes={readingMinutes}
        prev={prev}
        next={next}
      />
    </>
  );
}

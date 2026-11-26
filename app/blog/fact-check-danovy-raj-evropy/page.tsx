import type { Metadata } from "next";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPrevNext,
  PITVA_PAQ_ALL,
  PITVA_PAQ_DANOVY_RAJ,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: PITVA_PAQ_DANOVY_RAJ.url,
  title: PITVA_PAQ_DANOVY_RAJ.seoTitle,
  description: PITVA_PAQ_DANOVY_RAJ.description,
  type: "article",
  image: PITVA_PAQ_DANOVY_RAJ.ogImage,
  imageAlt: PITVA_PAQ_DANOVY_RAJ.ogImageAlt,
  publishedTime:
    PITVA_PAQ_DANOVY_RAJ.publishedTime ?? PITVA_PAQ_DANOVY_RAJ.isoDate,
  modifiedTime: PITVA_PAQ_DANOVY_RAJ.modifiedIsoDate,
});

export default async function BlogPitvaPaqDanovyRajEvropyPage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    PITVA_PAQ_DANOVY_RAJ.filePath,
  );
  const { prev, next } = getPrevNext(PITVA_PAQ_ALL, PITVA_PAQ_DANOVY_RAJ.url);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "ScholarlyArticle",
          url: PITVA_PAQ_DANOVY_RAJ.url,
          title: PITVA_PAQ_DANOVY_RAJ.title,
          description: PITVA_PAQ_DANOVY_RAJ.description,
          datePublished:
            PITVA_PAQ_DANOVY_RAJ.publishedTime ?? PITVA_PAQ_DANOVY_RAJ.isoDate,
          dateModified: PITVA_PAQ_DANOVY_RAJ.modifiedIsoDate,
          image: PITVA_PAQ_DANOVY_RAJ.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Fact-check: Daňový ráj Evropy",
              path: PITVA_PAQ_DANOVY_RAJ.url,
            },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="pitva"
        seriesLabel="Blog · Fact-check"
        sidebarTitle="Fact-checky & pitvy"
        sidebarItems={PITVA_PAQ_ALL}
        currentDoc={PITVA_PAQ_DANOVY_RAJ}
        html={html}
        toc={toc}
        readingMinutes={readingMinutes}
        prev={prev}
        next={next}
      />
    </>
  );
}

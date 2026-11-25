import type { Metadata } from "next";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPrevNext,
  PITVA_PAQ_ALL,
  PITVA_PAQ_ESSAY,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: PITVA_PAQ_ESSAY.url,
  title: PITVA_PAQ_ESSAY.seoTitle,
  description: PITVA_PAQ_ESSAY.description,
  type: "article",
  image: PITVA_PAQ_ESSAY.ogImage,
  imageAlt: PITVA_PAQ_ESSAY.ogImageAlt,
  publishedTime: PITVA_PAQ_ESSAY.isoDate,
});

export default async function BlogPitvaPaqChytrejsiDanePage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    PITVA_PAQ_ESSAY.filePath,
    { linkifyXHandles: true },
  );
  const { prev, next } = getPrevNext(PITVA_PAQ_ALL, PITVA_PAQ_ESSAY.url);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: PITVA_PAQ_ESSAY.url,
          title: PITVA_PAQ_ESSAY.title,
          description: PITVA_PAQ_ESSAY.description,
          datePublished: PITVA_PAQ_ESSAY.isoDate,
          image: PITVA_PAQ_ESSAY.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: PITVA_PAQ_ESSAY.title,
              path: PITVA_PAQ_ESSAY.url,
            },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="pitva"
        seriesLabel="Blog · Chytřejší daně (PAQ, CVF a IDEA)"
        sidebarTitle="Fact-checky & pitvy"
        sidebarItems={PITVA_PAQ_ALL}
        currentDoc={PITVA_PAQ_ESSAY}
        html={html}
        toc={toc}
        readingMinutes={readingMinutes}
        prev={prev}
        next={next}
      />
    </>
  );
}

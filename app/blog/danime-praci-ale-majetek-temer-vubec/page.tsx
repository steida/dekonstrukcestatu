import type { Metadata } from "next";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPrevNext,
  PITVA_PAQ_ALL,
  PITVA_PAQ_IROZHLAS,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: PITVA_PAQ_IROZHLAS.url,
  title: PITVA_PAQ_IROZHLAS.seoTitle,
  description: PITVA_PAQ_IROZHLAS.description,
  type: "article",
  image: PITVA_PAQ_IROZHLAS.ogImage,
  imageAlt: PITVA_PAQ_IROZHLAS.ogImageAlt,
  publishedTime: PITVA_PAQ_IROZHLAS.isoDate,
});

export default async function BlogDanimePraciAleMajetekTemerVubecPage() {
  const { html, toc, readingMinutes } = await renderMarkdownFile(
    PITVA_PAQ_IROZHLAS.filePath,
    { linkifyXHandles: true },
  );
  const { prev, next } = getPrevNext(PITVA_PAQ_ALL, PITVA_PAQ_IROZHLAS.url);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: PITVA_PAQ_IROZHLAS.url,
          title: PITVA_PAQ_IROZHLAS.title,
          description: PITVA_PAQ_IROZHLAS.description,
          datePublished: PITVA_PAQ_IROZHLAS.isoDate,
          image: PITVA_PAQ_IROZHLAS.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: PITVA_PAQ_IROZHLAS.title,
              path: PITVA_PAQ_IROZHLAS.url,
            },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="pitva"
        seriesLabel="Blog · Fact-check"
        sidebarTitle="Fact-checky & pitvy"
        sidebarItems={PITVA_PAQ_ALL}
        currentDoc={PITVA_PAQ_IROZHLAS}
        html={html}
        toc={toc}
        readingMinutes={readingMinutes}
        prev={prev}
        next={next}
      />
    </>
  );
}

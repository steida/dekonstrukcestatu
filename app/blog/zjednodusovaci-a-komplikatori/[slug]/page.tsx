import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPitvaChapter,
  getPrevNext,
  PITVA_PAQ_ALL,
  PITVA_PAQ_CHAPTERS,
  PITVA_PAQ_ESSAY,
  PITVA_PAQ_MAIN,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return PITVA_PAQ_CHAPTERS.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getPitvaChapter(slug);
  if (!doc) return {};
  return buildPageMetadata({
    path: doc.url,
    title: doc.seoTitle ?? doc.title,
    description: doc.description,
    type: "article",
    image: doc.ogImage,
    imageAlt: doc.ogImageAlt,
    publishedTime: doc.isoDate,
  });
}

export default async function PitvaPaqChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getPitvaChapter(slug);
  if (!doc) notFound();

  const { html, toc, readingMinutes } = await renderMarkdownFile(doc.filePath);
  const { prev, next } = getPrevNext(PITVA_PAQ_ALL, doc.url);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "ScholarlyArticle",
          url: doc.url,
          title: doc.title,
          description: doc.description,
          datePublished: doc.isoDate,
          image: doc.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: PITVA_PAQ_ESSAY.shortTitle, path: PITVA_PAQ_ESSAY.url },
            { name: "Hlavní forenzní syntéza", path: PITVA_PAQ_MAIN.url },
            { name: `${doc.code} — ${doc.shortTitle}`, path: doc.url },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="pitva"
        seriesLabel="Blog · Chytřejší daně (PAQ, CVF a IDEA)"
        sidebarTitle="Fact-checky & pitvy"
        sidebarItems={PITVA_PAQ_ALL}
        currentDoc={doc}
        html={html}
        toc={toc}
        readingMinutes={readingMinutes}
        prev={prev}
        next={next}
      />
    </>
  );
}

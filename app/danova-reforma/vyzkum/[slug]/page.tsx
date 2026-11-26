import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocReaderLayout } from "@/components/DocReaderLayout";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import {
  getPrevNext,
  getVyzkumStudy,
  VYZKUM_HR_STUDIES,
} from "@/lib/documents";
import { renderMarkdownFile } from "@/lib/markdown";
import { buildPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return VYZKUM_HR_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getVyzkumStudy(slug);
  if (!doc) return {};
  return buildPageMetadata({
    path: doc.url,
    title: doc.seoTitle ?? doc.title,
    description: doc.description,
    type: "article",
    image: doc.ogImage,
    imageAlt: doc.ogImageAlt,
    publishedTime: doc.publishedTime ?? doc.isoDate,
    modifiedTime: doc.modifiedIsoDate,
  });
}

export default async function VyzkumStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getVyzkumStudy(slug);
  if (!doc) notFound();

  const { html, toc, readingMinutes } = await renderMarkdownFile(doc.filePath);
  const { prev, next } = getPrevNext(VYZKUM_HR_STUDIES, doc.url);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          type: "ScholarlyArticle",
          url: doc.url,
          title: doc.title,
          description: doc.description,
          datePublished: doc.publishedTime ?? doc.isoDate,
          dateModified: doc.modifiedIsoDate,
          image: doc.ogImage,
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Daňová reforma", path: "/danova-reforma" },
            { name: "Výzkum Hall–Rabushka", path: "/danova-reforma/vyzkum" },
            { name: `${doc.code} — ${doc.shortTitle}`, path: doc.url },
          ],
        })}
      />
      <DocReaderLayout
        sectionKey="vyzkum"
        seriesLabel="Výzkum Hall–Rabushka"
        seriesIndexHref="/danova-reforma/vyzkum"
        sidebarTitle="Studie H–R"
        sidebarItems={VYZKUM_HR_STUDIES}
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

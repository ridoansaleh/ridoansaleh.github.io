import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFrame } from "../components/site-frame";
import type { Language } from "../components/language";

const languages: Language[] = ["en", "id", "ar"];
const languageLocales: Record<Language, string> = {
  en: "en_US",
  id: "id_ID",
  ar: "ar_AR",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Language)) notFound();

  return {
    alternates: {
      canonical: `/${lang}/`,
      languages: { en: "/en/", id: "/id/", ar: "/ar/" },
    },
    openGraph: { locale: languageLocales[lang as Language] },
  };
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!languages.includes(lang as Language)) notFound();

  return <SiteFrame language={lang as Language}>{children}</SiteFrame>;
}

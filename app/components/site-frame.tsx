"use client";

import { useEffect } from "react";
import Footer from "./footer";
import { LanguageProvider, type Language, useLanguage } from "./language";
import { Navbar } from "./nav";

function SiteContent({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);

  return (
    <main
      lang={language}
      dir={direction}
      className="flex min-w-0 flex-auto flex-col px-6 sm:px-4 md:px-6 mt-2 md:mt-6 w-full max-w-[768px]"
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export function SiteFrame({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Language;
}) {
  return (
    <LanguageProvider initialLanguage={language}>
      <SiteContent>{children}</SiteContent>
    </LanguageProvider>
  );
}

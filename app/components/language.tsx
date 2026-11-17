"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "id";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("language-preference");
    if (savedLanguage === "en" || savedLanguage === "id") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("language-preference", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "id" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      aria-label={
        language === "en"
          ? "Ganti bahasa ke Bahasa Indonesia"
          : "Switch language to English"
      }
      className="rounded-md px-2 py-1 text-xs font-semibold tracking-wide text-neutral-600 transition hover:bg-neutral-100 hover:text-blue-500 dark:text-neutral-300 dark:hover:bg-neutral-800"
    >
      {language === "en" ? "ID" : "EN"}
    </button>
  );
}

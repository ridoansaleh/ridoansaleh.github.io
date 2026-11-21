"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "en" | "id" | "ar";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
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
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const languageNames: Record<Language, string> = {
    en: "English",
    id: "Indonesia",
    ar: "العربية",
  };

  function navigateToLanguage(selectedLanguage: Language) {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const currentLanguage = pathSegments[0];
    if (
      currentLanguage === "en" ||
      currentLanguage === "id" ||
      currentLanguage === "ar"
    ) {
      pathSegments.shift();
    }

    const localizedPath = pathSegments.length
      ? `/${selectedLanguage}/${pathSegments.join("/")}/`
      : `/${selectedLanguage}/`;
    window.location.assign(
      `${localizedPath}${window.location.search}${window.location.hash}`,
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={language === "ar" ? "اللغة" : language === "id" ? "Bahasa" : "Language"}
        aria-expanded={isOpen}
        aria-controls="language-options"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-neutral-600 transition hover:bg-neutral-100 hover:text-blue-500 dark:text-neutral-300 dark:hover:bg-neutral-800"
      >
        <span>{languageNames[language]}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
        >
          <path
            d="m2.5 4.5 3.5 3 3.5-3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="language-options"
          aria-label={language === "ar" ? "اللغة" : language === "id" ? "Bahasa" : "Language"}
          className="absolute end-0 top-full z-50 mt-2 min-w-max overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
        >
          {(["en", "id", "ar"] as Language[]).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={language === option}
              onClick={() => navigateToLanguage(option)}
              className="block w-full rounded-md px-3 py-2 text-start text-xs text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {option === "id" ? "Bahasa Indonesia" : languageNames[option]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

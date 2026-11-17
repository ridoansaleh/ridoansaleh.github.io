"use client";

import { socialLinks } from "./config";
import { useLanguage } from "./components/language";
import { t } from "./translations";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST API",
  "PostgreSQL",
  "Git",
];

const xtremaxTechnologies = [
  "Next.js",
  "Directus",
  "Vue 2",
  "Vue 3",
  "Micro-Frontend",
  "REST API",
];

const doerscircleTechnologies = ["Nuxt", "Vue.js", "PostgreSQL", "Stripe"];

const aiaTechnologies = [
  "React",
  "Adobe Experience Manager",
  "Vue.js",
  "TypeScript",
  "Cordova",
  "Jira",
];

export default function Page() {
  const { language } = useLanguage();
  return (
    <>
      <img
        className="indonesia-map"
        src="/indonesia-map.jpg"
        alt=""
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-24">
      {/* Hero */}
      <section className="relative pt-20 sm:pt-28">
        <p className="mb-5 font-mono text-sm text-blue-500">{t(language, "greeting")}</p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I'm Ridoan Saleh.
          <span className="mt-2 block text-neutral-500">
            {t(language, "role")}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
          {t(language, "intro")}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={socialLinks.email}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {t(language, "getInTouch")}
          </a>

          <a
            href="#experience"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            {t(language, "viewExperience")}
          </a>
        </div>

        <div className="mt-12 flex items-center gap-5 text-sm text-neutral-500">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-500"
          >
            GitHub ↗
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-500"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <p className="mb-3 font-mono text-sm text-blue-500">{t(language, "aboutLabel")}</p>

        <h2 className="text-2xl font-semibold tracking-tight">
          {t(language, "aboutTitle")}
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-600 dark:text-neutral-400">
          {t(language, "aboutText")}
        </p>
      </section>

      {/* Tech Stack */}
      <section id="stack">
        <p className="mb-3 font-mono text-sm text-blue-500">{t(language, "stackLabel")}</p>

        <h2 className="text-2xl font-semibold tracking-tight">
          {t(language, "stackTitle")}
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section id="experience">
        <p className="mb-3 font-mono text-sm text-blue-500">
          {t(language, "workLabel")}
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          {t(language, "workTitle")}
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-600 dark:text-neutral-400">
          {t(language, "workIntro")}
        </p>

        {/* Xtremax - Featured Work */}
        <article className="mt-8 mb-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="border-b border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                {t(language, "current")}
              </span>

              <span className="font-mono text-xs text-neutral-500">
                Apr 2026 — Present
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight">
              Xtremax
            </h3>

            <p className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Senior Software Developer
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
              {t(language, "xtremaxSummary")}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <h4 className="text-sm font-semibold">{t(language, "contributions")}</h4>

            <ul className="mt-4 space-y-3">
              {t(language, "xtremaxItems").map((contribution) => (
                <li
                  key={contribution}
                  className="flex items-start gap-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400"
                >
                  <span className="shrink-0 leading-7 text-blue-500">▹</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                {t(language, "technologies")}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {xtremaxTechnologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* More Selected Work */}
        <details className="group flex flex-col">
          <summary className="order-2 flex cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900 [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{t(language, "showMore")}</span>

            <span className="hidden group-open:inline">{t(language, "showLess")}</span>

            <span className="transition-transform group-open:rotate-180">
              ↓
            </span>
          </summary>

          <div className="order-1 mb-6 space-y-6">
            {/* Doerscircle */}
            <article className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <div className="border-b border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                    {t(language, "professional")}
                  </span>

                  <span className="font-mono text-xs text-neutral-500">
                    Nov 2022 — Jan 2025
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  Doerscircle
                </h3>

                <p className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Senior Full-Stack JavaScript Developer
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
                  {t(language, "doerscircleSummary")}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="text-sm font-semibold">{t(language, "contributions")}</h4>

                <ul className="mt-4 space-y-3">
                  {t(language, "doerscircleItems").map((contribution) => (
                    <li
                      key={contribution}
                      className="flex items-start gap-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="shrink-0 leading-7 text-blue-500">
                        ▹
                      </span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                    {t(language, "technologies")}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {doerscircleTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* AIA Singapore */}
            <article className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <div className="border-b border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                    {t(language, "professional")}
                  </span>

                  <span className="font-mono text-xs text-neutral-500">
                    Oct 2019 — Nov 2022
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                  AIA Singapore
                </h3>

                <p className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Senior Frontend Developer
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-400">
                  {t(language, "aiaSummary")}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="text-sm font-semibold">{t(language, "contributions")}</h4>

                <ul className="mt-4 space-y-3">
                  {t(language, "aiaItems").map((contribution) => (
                    <li
                      key={contribution}
                      className="flex items-start gap-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="shrink-0 leading-7 text-blue-500">
                        ▹
                      </span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                    {t(language, "technologies")}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {aiaTechnologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </details>
      </section>

      {/* Contact */}
      <section id="contact">
        <p className="mb-3 font-mono text-sm text-blue-500">{t(language, "contactLabel")}</p>

        <h2 className="text-2xl font-semibold tracking-tight">
          {t(language, "contactTitle")}
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-600 dark:text-neutral-400">
          {t(language, "contactText")}
        </p>

        <a
          href={socialLinks.email}
          className="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition hover:text-blue-500"
        >
          {socialLinks.email.replace("mailto:", "")} ↗
        </a>
      </section>
      </div>
    </>
  );
}

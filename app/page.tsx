import { socialLinks } from "./config";

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

const xtremaxContributions = [
  "Developed Upload and Download APIs to support authenticated download links in email attachments.",
  "Migrated two micro-frontend applications from Vue 2 to Vue 3.",
  "Developed ROOTs 3.0 using Next.js and Directus.",
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

const doerscircleContributions = [
  "Implemented the revamped user dashboard.",
  "Developed Team Account features, enabling users to create teams, invite and manage members, and assign or remove solutions.",
  "Developed the referral feature.",
  "Revamped the onboarding flow, including signup, login, email verification, and survey pages.",
  "Identified and fixed bugs to improve application reliability.",
  "Collaborated with UI/UX Designers and the Tech Lead to deliver new features.",
  "Provided technical support and guidance to team members during development and debugging.",
];

const aiaContributions = [
  "Developed ClaimsEZ, a web application built with React on top of Adobe Experience Manager (AEM).",
  "Designed and structured the ClaimsEZ project architecture to improve scalability and maintainability.",
  "Developed iPosX, a hybrid Point of Sales application using Vue.js, TypeScript, and Cordova.",
  "Implemented unit testing for the iPosX application.",
  "Created reusable UI components across React and Vue.js applications.",
  "Documented application workflows and processes in Jira.",
  "Collaborated with Product Managers, Backend Developers, and Frontend Developers to deliver new features.",
  "Mentored Junior Frontend Developers and conducted regular knowledge-sharing sessions.",
];

const aiaTechnologies = [
  "React",
  "Adobe Experience Manager",
  "Vue.js",
  "TypeScript",
  "Cordova",
  "Jira",
];

export default function Page() {
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
        <p className="mb-5 font-mono text-sm text-blue-500">Hello, world! 👋</p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I'm Ridoan Saleh.
          <span className="mt-2 block text-neutral-500">
            Full-Stack Developer
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
          I build modern web applications with thoughtful design, reliable
          architecture, and a focus on creating meaningful digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={socialLinks.email}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Get in touch ↗
          </a>

          <a
            href="#experience"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            View experience ↓
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
        <p className="mb-3 font-mono text-sm text-blue-500">01 / ABOUT</p>

        <h2 className="text-2xl font-semibold tracking-tight">
          A little about me
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-600 dark:text-neutral-400">
          I'm a developer passionate about building applications from the user
          interface to the server-side logic. I enjoy learning new technologies,
          solving problems, and turning ideas into working products.
        </p>
      </section>

      {/* Tech Stack */}
      <section id="stack">
        <p className="mb-3 font-mono text-sm text-blue-500">02 / TECH STACK</p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Tools I work with
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
          03 / SELECTED WORK
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Professional projects
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-600 dark:text-neutral-400">
          A selection of professional work, product features, and engineering
          contributions from my experience as a Software Developer.
        </p>

        {/* Xtremax - Featured Work */}
        <article className="mt-8 mb-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <div className="border-b border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                Current Experience
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
              Contributing to software development through API development,
              micro-frontend modernization, and building web applications with
              modern technologies.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <h4 className="text-sm font-semibold">Key Contributions</h4>

            <ul className="mt-4 space-y-3">
              {xtremaxContributions.map((contribution) => (
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
                Technologies
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
            <span className="group-open:hidden">Show More</span>

            <span className="hidden group-open:inline">Show Less</span>

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
                    Professional Experience
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
                  Contributed to the development and improvement of the
                  Doerscircle platform, focusing on user experience, team
                  collaboration features, onboarding, and product functionality.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="text-sm font-semibold">Key Contributions</h4>

                <ul className="mt-4 space-y-3">
                  {doerscircleContributions.map((contribution) => (
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
                    Technologies
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
                    Professional Experience
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
                  Worked on enterprise web and hybrid applications, contributing
                  to frontend architecture, reusable UI components, testing, and
                  cross-functional product development.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="text-sm font-semibold">Key Contributions</h4>

                <ul className="mt-4 space-y-3">
                  {aiaContributions.map((contribution) => (
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
                    Technologies
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
        <p className="mb-3 font-mono text-sm text-blue-500">04 / CONTACT</p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Let's build something together.
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-600 dark:text-neutral-400">
          Have an idea, a project, or an opportunity? I'd love to hear from you.
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

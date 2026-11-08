
import Link from "next/link";
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

export default function Page() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative pt-20 sm:pt-28">
        <p className="mb-5 font-mono text-sm text-blue-500">
          Hello, world! 👋
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I'm Ridoan Saleh.
          <span className="mt-2 block text-neutral-500">
            Full-Stack Developer
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
          I build modern web applications with thoughtful design,
          reliable architecture, and a focus on creating meaningful
          digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={socialLinks.email}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Get in touch ↗
          </a>

          <a
            href="#projects"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            View projects ↓
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
        <p className="mb-3 font-mono text-sm text-blue-500">
          01 / ABOUT
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          A little about me
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-600 dark:text-neutral-400">
          I'm a developer passionate about building applications
          from the user interface to the server-side logic.
          I enjoy learning new technologies, solving problems,
          and turning ideas into working products.
        </p>
      </section>

      {/* Tech Stack */}
      <section id="stack">
        <p className="mb-3 font-mono text-sm text-blue-500">
          02 / TECH STACK
        </p>

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

      {/* Projects */}
      <section id="projects">
        <p className="mb-3 font-mono text-sm text-blue-500">
          03 / PROJECTS
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Selected work
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-600 dark:text-neutral-400">
          A collection of projects that showcase my skills
          in frontend development, backend systems, and
          full-stack application development.
        </p>

        <div className="mt-6 rounded-xl border border-dashed border-neutral-300 p-6 dark:border-neutral-800">
          <p className="text-sm text-neutral-500">
            Projects coming soon.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <p className="mb-3 font-mono text-sm text-blue-500">
          04 / CONTACT
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Let's build something together.
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-neutral-600 dark:text-neutral-400">
          Have an idea, a project, or an opportunity?
          I'd love to hear from you.
        </p>

        <a
          href={socialLinks.email}
          className="mt-6 inline-block text-sm font-medium underline underline-offset-4 transition hover:text-blue-500"
        >
          {socialLinks.email.replace("mailto:", "")} ↗
        </a>
      </section>
    </div>
  );
}

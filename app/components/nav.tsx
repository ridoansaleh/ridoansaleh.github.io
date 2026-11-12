
"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 py-5 backdrop-blur-md dark:border-neutral-800/70 dark:bg-[#121212]/80">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0 text-lg font-semibold tracking-tight"
        >
          Ridoan<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-blue-500"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-l border-neutral-200 pl-4 dark:border-neutral-700">
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitch />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white px-6 py-4 shadow-lg dark:border-neutral-800 dark:bg-[#121212] md:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-neutral-100 py-3 text-sm text-neutral-600 transition-colors hover:text-blue-500 dark:border-neutral-800 dark:text-neutral-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

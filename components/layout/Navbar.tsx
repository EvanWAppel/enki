"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "/#hero" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

const externalLinks = [
  { label: "Projects", href: "/projects" },
  { label: "How I Work", href: "/how-i-work" },
  { label: "Writing", href: "/writing" },
  { label: "Fiction", href: "/fiction" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="site-container">
        <div className="flex items-center justify-between h-14">
          <a
            href="/#hero"
            className="brand font-semibold text-neutral-900 dark:text-white hover:text-accent transition-colors"
          >
            <span className="brand-mark" aria-hidden="true">ea</span>{siteConfig.name}
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                {label}
              </a>
            ))}
            {externalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-accent hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-line bg-paper">
          <nav aria-label="Mobile navigation" className="site-container py-3 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-accent px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                {label}
              </a>
            ))}
            {externalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-accent px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

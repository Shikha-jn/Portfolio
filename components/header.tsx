"use client";

import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/data";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // "Contact us" is shown as the header button, so drop the plain contact link from the list
  const links = navigation.filter((n) => n.href !== "#contact");

  return (
    <header className="portfolio-header sticky top-0 z-50 border-b border-line/70 bg-ink/85 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="brand-lockup group flex shrink-0 items-center gap-3">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="font-display text-base font-semibold tracking-[-.04em]">{profile.firstName}<span className="text-cyan">.</span></span>
          <span className="hidden border-l border-line pl-3 text-[10px] uppercase tracking-[.18em] text-muted lg:block">Product engineer</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.03] p-1 md:flex">
          {links.map((item, index) => (
            <a key={item.href} href={item.href} className="nav-link" data-index={`0${index + 1}`}>{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 text-[10px] uppercase tracking-[.16em] text-muted lg:flex"><span className="status-dot" /> Available</span>
          <a href="#contact" className="header-cta"><span>Start a project</span><span aria-hidden="true">↗</span></a>
        </div>
        <button
          type="button"
          className="menu-button inline-flex size-10 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-line bg-ink px-5 pb-4 pt-2 md:hidden"
        >
          {[...links, { href: "#contact", label: "Contact us" }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-3 text-lg last:border-b-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, META } from "@/lib/competition-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)]/92 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 group" aria-label="Fatih '21 — home">
            <img
              src="/fatih-logo-small.png"
              alt="Fatih '21 logo"
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover ring-1 ring-[var(--gold)]/50"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-base sm:text-lg text-[var(--navy)] font-semibold">
                ফাতিহ ’২১
              </span>
              <span className="text-[10px] sm:text-[11px] font-latin-display tracking-[0.18em] uppercase text-[var(--gold-deep)]">
                Fatih ’21
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group relative inline-flex items-center py-1"
                >
                  <span className="font-latin text-sm font-medium text-[var(--navy)] group-hover:text-[var(--gold-deep)] transition-colors">
                    {item.labelLatin}
                  </span>
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[var(--navy)] text-[var(--cream)] text-sm font-medium rounded-sm hover:bg-[var(--navy-deep)] transition-colors border border-[var(--gold)]/30"
            >
              নিবন্ধন করুন
            </a>
            <button
              className="lg:hidden p-2 -mr-2 text-[var(--navy)]"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[var(--cream)] border-t border-[var(--border)]">
          <ul className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-[var(--border)]/60 font-latin text-[var(--navy)] font-medium"
                >
                  {item.labelLatin}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-3 bg-[var(--navy)] text-[var(--cream)] text-sm font-medium rounded-sm border border-[var(--gold)]/30"
              >
                নিবন্ধন করুন
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import { NAV_ITEMS, META } from "@/lib/competition-data";

export function Footer() {
  const yearBn = String(new Date().getFullYear())
    .split("")
    .map((c) => "০১২৩৪৫৬৭৮৯"[Number(c)])
    .join("");

  return (
    <footer className="bg-[var(--navy-deep)] text-[var(--cream)]">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-70" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/fatih-logo-small.png"
                alt="Fatih '21 logo"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-[var(--gold)]/40"
              />
              <div className="leading-none">
                <p className="font-display text-xl text-[var(--cream)]">ফাতিহ ’২১</p>
                <p className="font-latin-display text-[11px] tracking-[0.18em] uppercase text-[var(--gold)] mt-1">
                  Fatih ’21
                </p>
              </div>
            </div>
            <p className="text-[var(--cream)]/70 text-sm leading-relaxed max-w-md">
              {META.orgTagline} — ঐতিহ্য, প্রজ্ঞা ও ভবিষ্যৎের সম্মুখের যাত্রায় একটি ধারাবাহিক
              উদ্যোগ।
            </p>
            <p className="font-latin-display italic text-xs text-[var(--gold-soft)] mt-3">
              {META.headline} · {META.headlineLatin}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="font-latin-display text-[10px] tracking-[0.18em] uppercase text-[var(--gold)] mb-4">
              Quick links
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors inline-flex items-center gap-2"
                  >
                    <span>{item.label}</span>
                    <span className="font-latin-display text-[10px] tracking-[0.12em] uppercase text-[var(--cream)]/40">
                      {item.labelLatin}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-latin-display text-[10px] tracking-[0.18em] uppercase text-[var(--gold)] mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${META.email}`}
                  className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors break-all"
                >
                  {META.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${META.phone.replace(/\s/g, "")}`}
                  className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors"
                >
                  {META.phone}
                </a>
              </li>
              <li className="text-[var(--cream)]/70 leading-relaxed">{META.venue}</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-[var(--gold)]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--cream)]/60 text-center sm:text-left">
            © {yearBn} ফাতিহ ’২১ · সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="font-latin-display text-[10px] tracking-[0.16em] uppercase text-[var(--gold)]/70">
            অতীত থেকে ভবিষ্যৎ
          </p>
        </div>
      </div>
    </footer>
  );
}

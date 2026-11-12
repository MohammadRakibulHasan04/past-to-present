"use client";

import { useState } from "react";
import { Megaphone, ChevronRight } from "lucide-react";
import { TRACKS, type TrackId } from "@/lib/competition-data";

function formatDate(iso: string) {
  // Returns { day, monthBn, year } — Bengali-style date label
  const d = new Date(iso);
  const monthsBn = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  const day = d.getDate();
  const month = monthsBn[d.getMonth()];
  const year = d.getFullYear();
  const yearBn = String(year)
    .split("")
    .map((c) => "০১২৩৪৫৬৭৮৯"[Number(c)])
    .join("");
  return { day: String(day).padStart(2, "0"), month, year: yearBn };
}

export function Announcements() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("quiz");
  const track = TRACKS.find((t) => t.id === activeTrack)!;
  // newest first
  const items = [...track.announcements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="announcements" className="relative py-20 sm:py-28 bg-geometric-light">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-4">ঘোষণা · Announcements</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-3">
              সর্বশেষ আপডেট
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm">
              প্রতিটি ট্র্যাকের আপডেট আলাদাভাবে প্রকাশিত হয়।
            </p>
          </div>

          {/* Track toggle — segmented control */}
          <div
            role="tablist"
            aria-label="Announcements track filter"
            className="inline-flex border border-[var(--border)] bg-white self-start md:self-end"
          >
            {TRACKS.map((t) => {
              const active = t.id === activeTrack;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTrack(t.id)}
                  className={`px-4 py-2 text-xs font-latin-display tracking-[0.14em] uppercase transition-colors ${
                    active
                      ? "bg-[var(--navy)] text-[var(--gold)]"
                      : "bg-transparent text-[var(--muted-foreground)] hover:text-[var(--navy)]"
                  }`}
                >
                  {t.type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Track heading strip */}
        <div className="flex items-center gap-4 mb-8 px-5 py-3 bg-[var(--navy)] text-[var(--cream)] rounded-sm">
          <span className="font-latin-display text-[var(--gold)] text-sm">{track.index}</span>
          <span className="font-display text-lg sm:text-xl">{track.heading}</span>
          <span className="hidden sm:inline text-[var(--cream)]/50 text-xs ml-auto font-latin-display italic">
            {track.headingLatin}
          </span>
        </div>

        {/* Announcement list */}
        <ol className="relative max-w-3xl mx-auto space-y-6">
          {items.map((a, idx) => {
            const d = formatDate(a.date);
            return (
              <li
                key={a.title}
                className="relative grid grid-cols-[auto_1fr] gap-5 sm:gap-7"
              >
                {/* Date block */}
                <div className="text-right pt-1">
                  <div className="inline-flex flex-col items-center px-3 py-2 border border-[var(--gold)]/40 bg-white min-w-[68px]">
                    <span className="font-latin-display text-2xl text-[var(--navy)] leading-none font-medium">
                      {d.day}
                    </span>
                    <span className="text-[10px] text-[var(--gold-deep)] mt-1 font-latin-display tracking-[0.1em] uppercase">
                      {d.month.slice(0, 4)}
                    </span>
                    <span className="text-[10px] text-[var(--muted-foreground)] font-latin-display">
                      {d.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <article className="card-paper p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)]">
                      <Megaphone className="h-3 w-3" />
                      {a.tag}
                    </span>
                    {idx === 0 && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] bg-[var(--gold-soft)]/50 px-2 py-0.5 border border-[var(--gold)]/40">
                        Latest
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-[var(--navy)] leading-snug mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[var(--ink)] leading-relaxed">{a.body}</p>
                </article>
              </li>
            );
          })}
        </ol>

        {/* Subscribe CTA */}
        <div className="mt-10 max-w-3xl mx-auto flex items-center justify-between gap-4 px-5 py-4 border border-dashed border-[var(--gold)]/50 bg-white/50">
          <div className="flex items-center gap-3">
            <ChevronRight className="h-4 w-4 text-[var(--gold-deep)]" />
            <p className="text-sm text-[var(--ink)]">
              নতুন ঘোষণা পেতে ইমেইল আপডেটের জন্য সাবস্ক্রাইব করুন।
            </p>
          </div>
          <a
            href="#register"
            className="shrink-0 text-xs font-latin-display tracking-[0.14em] uppercase text-[var(--navy)] hover:text-[var(--gold-deep)] underline underline-offset-4"
          >
            Subscribe →
          </a>
        </div>
      </div>
    </section>
  );
}

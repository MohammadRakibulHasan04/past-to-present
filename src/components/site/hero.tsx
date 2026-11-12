"use client";

import { ArrowUpRight } from "lucide-react";
import { TRACKS, META, type TrackId } from "@/lib/competition-data";

interface HeroProps {
  activeTrack?: TrackId;
  onSelectTrack?: (id: TrackId) => void;
}

export function Hero({ activeTrack = "quiz", onSelectTrack }: HeroProps) {
  return (
    <section
      id="top"
      className="relative bg-geometric text-[var(--cream)] overflow-hidden"
    >
      {/* Decorative top gold line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-70" />

      {/* Decorative outer border frame */}
      <div className="pointer-events-none absolute inset-6 sm:inset-10 border border-[var(--gold)]/15" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="h-px w-10 bg-[var(--gold)]/60" />
          <span className="font-latin-display tracking-[0.28em] uppercase text-[11px] sm:text-xs text-[var(--gold)]">
            Fatih ’21 presents
          </span>
          <span className="h-px w-10 bg-[var(--gold)]/60" />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src="/fatih-logo.png"
              alt="Fatih '21 emblem"
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover shadow-[0_0_60px_-12px_rgba(201,161,74,0.45)] ring-1 ring-[var(--gold)]/40"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-center text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl text-[var(--cream)] font-normal tracking-tight">
          {META.headline}
        </h1>

        {/* Latin subtitle */}
        <p className="mt-4 text-center font-latin-display italic text-base sm:text-xl text-[var(--gold-soft)]">
          {META.headlineLatin}
        </p>

        {/* Intro */}
        <p className="mt-7 mx-auto max-w-2xl text-center text-[var(--cream)]/85 text-sm sm:text-base leading-relaxed">
          {META.intro}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#track-tabs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-[var(--navy-deep)] text-sm font-semibold rounded-sm hover:bg-[var(--gold-soft)] transition-colors w-full sm:w-auto justify-center"
          >
            ট্র্যাক দেখুন
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[var(--cream)] text-sm font-medium rounded-sm border border-[var(--gold)]/50 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-colors w-full sm:w-auto justify-center"
          >
            নিবন্ধন করুন
          </a>
        </div>

        {/* Two-track preview */}
        <div className="mt-16 sm:mt-20 relative grid md:grid-cols-2 gap-6 md:gap-0 items-stretch">
          {TRACKS.map((track, i) => {
            const isSelected = activeTrack === track.id;
            return (
              <a
                key={track.id}
                href="#track-tabs"
                onClick={() => onSelectTrack?.(track.id)}
                className={`group block h-full px-6 sm:px-8 py-7 rounded-sm border transition-all ${
                  isSelected
                    ? "border-[var(--gold)]/60 bg-white/[0.06]"
                    : "border-[var(--gold)]/20 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[var(--gold)]/50"
                } ${i === 0 ? "md:mr-4" : "md:ml-4"}`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-latin-display text-[11px] tracking-[0.2em] uppercase text-[var(--gold)]">
                    Track {track.index} · {track.type}
                  </span>
                  {isSelected && (
                    <span className="font-latin-display text-[10px] tracking-[0.16em] uppercase text-[var(--gold)] border border-[var(--gold)]/40 px-2 py-0.5">
                      Selected
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl sm:text-[1.6rem] leading-snug text-[var(--cream)] mb-2">
                  {track.heading}
                </h3>
                <p className="text-[var(--cream)]/60 text-xs font-latin-display italic mb-4">
                  {track.headingLatin}
                </p>
                <p className="text-[var(--cream)]/70 text-sm leading-relaxed">
                  {track.tagline}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-[var(--gold-soft)]">
                  <span>{track.teamSize}</span>
                  <span className="font-latin-display tracking-wider uppercase text-[10px] group-hover:translate-x-1 transition-transform">
                    Open Track →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
    </section>
  );
}

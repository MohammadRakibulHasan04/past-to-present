"use client";

import { useState } from "react";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Tracks } from "@/components/site/tracks";
import { Timeline } from "@/components/site/timeline";
import { Resources } from "@/components/site/resources";
import { Announcements } from "@/components/site/announcements";
import { Register } from "@/components/site/register";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { TRACKS, type TrackId } from "@/lib/competition-data";

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("quiz");
  const currentTrack = TRACKS.find((t) => t.id === activeTrack)!;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <Navbar />
      <main className="flex-1">
        <Hero activeTrack={activeTrack} onSelectTrack={setActiveTrack} />

        {/* Track Tab Bar — placed directly below Hero and sticky below Navbar */}
        <div
          id="track-tabs"
          className="sticky top-16 sm:top-20 z-40 bg-[var(--cream)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-[0_8px_24px_-18px_rgba(18,42,77,0.22)] scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8 py-3 sm:py-4">
            <div
              role="tablist"
              aria-label="Select competition track"
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {TRACKS.map((t) => {
                const active = t.id === activeTrack;
                return (
                  <button
                    key={t.id}
                    id={`tab-${t.id}`}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setActiveTrack(t.id)}
                    className={`group relative text-left px-4 sm:px-6 py-3 sm:py-4 border transition-all overflow-hidden ${
                      active
                        ? "border-[var(--gold)] bg-[var(--navy)] text-[var(--cream)] shadow-[0_10px_28px_-16px_rgba(18,42,77,0.5)]"
                        : "border-[var(--border)] bg-white/80 text-[var(--navy)] hover:bg-white hover:border-[var(--gold)]/60"
                    }`}
                  >
                    {/* Top active gold indicator line */}
                    {active && (
                      <span className="absolute top-0 inset-x-0 h-0.5 bg-[var(--gold)]" />
                    )}

                    <div className="flex items-center gap-2 sm:gap-3 mb-1">
                      <span
                        className={`font-latin-display text-base sm:text-xl leading-none ${
                          active ? "text-[var(--gold)]" : "text-[var(--gold-deep)]"
                        }`}
                      >
                        {t.index}
                      </span>
                      <span
                        className={`font-latin-display text-[9px] sm:text-[10px] tracking-[0.2em] uppercase ${
                          active ? "text-[var(--gold-soft)]" : "text-[var(--muted-foreground)]"
                        }`}
                      >
                        {t.type}
                      </span>
                    </div>

                    <p
                      className={`font-display text-base sm:text-xl leading-snug truncate ${
                        active ? "text-[var(--cream)]" : "text-[var(--navy)]"
                      }`}
                    >
                      {t.heading}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Track Tab Panel — aggregates all sections for the selected track */}
        <div
          key={currentTrack.id}
          id={`panel-${currentTrack.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentTrack.id}`}
        >
          <About track={currentTrack} />
          <Tracks track={currentTrack} />
          <Timeline track={currentTrack} />
          <Resources track={currentTrack} />
          <Announcements track={currentTrack} />
          <Register track={currentTrack} />
          <Faq track={currentTrack} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

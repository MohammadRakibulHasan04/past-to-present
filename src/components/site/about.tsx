"use client";

import { META, type Track } from "@/lib/competition-data";

export function About({ track }: { track: Track }) {
  return (
    <section id="about" className="relative bg-geometric-light py-20 sm:py-28 scroll-mt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">পরিচিতি · About · Track {track.index}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-5">
              অতীত থেকে ভবিষ্যৎ —{" "}
              <span className="text-[var(--gold-deep)]">{track.heading}</span>
            </h2>
            <p className="font-latin-display italic text-[var(--muted-foreground)] text-sm">
              {track.headingLatin}
            </p>
          </div>

          <div className="md:col-span-7 space-y-5 text-[var(--ink)] text-[15px] leading-[1.85]">
            <p>
              <span className="font-display text-2xl text-[var(--navy)] float-left mr-2 leading-none mt-1">
                ‘
              </span>
              {META.orgName} {track.about.paragraphs[0]}
              <em className="text-[var(--gold-deep)] not-italic font-medium">
                {" "}
                {track.about.highlightQuote}
              </em>
            </p>
            <p>{track.about.paragraphs[1]}</p>
            <p className="text-[var(--muted-foreground)]">
              <span className="font-latin-display italic text-[var(--gold-deep)]">
                {track.about.introLatin}
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line my-14 sm:my-16" />

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {track.about.principles.map((p, i) => (
            <div
              key={p.bn}
              className="card-paper p-6 sm:p-7 relative overflow-hidden"
            >
              <span className="absolute -top-3 -right-3 font-latin-display text-7xl text-[var(--gold)]/15 select-none">
                0{i + 1}
              </span>
              <div className="relative">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-display text-2xl text-[var(--navy)]">{p.bn}</h3>
                  <span className="font-latin-display italic text-xs text-[var(--gold-deep)]">
                    {p.latin}
                  </span>
                </div>
                <p className="text-[var(--ink)] text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick facts strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)]">
          {track.about.quickFacts.map((f) => (
            <div key={f.k} className="bg-[var(--cream)] px-5 py-6 text-center sm:text-left">
              <p className="font-latin-display text-[10px] tracking-[0.18em] uppercase text-[var(--gold-deep)] mb-2">
                {f.kLatin}
              </p>
              <p className="font-display text-xl sm:text-2xl text-[var(--navy)] mb-1">{f.k}</p>
              <p className="font-display text-lg sm:text-xl text-[var(--navy)] font-semibold">
                {f.v}
              </p>
              <p className="font-latin-display text-[11px] italic text-[var(--muted-foreground)] mt-1">
                {f.vLatin}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

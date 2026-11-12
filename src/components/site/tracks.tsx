"use client";

import { Users, Award, FileText, ArrowRight, CheckSquare } from "lucide-react";
import { TRACKS } from "@/lib/competition-data";

export function Tracks() {
  return (
    <section id="tracks" className="relative py-20 sm:py-28 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow mb-4">ট্র্যাক · Tracks</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-4">
            দুটি ট্র্যাক, একটি ভাবনা
          </h2>
          <p className="font-latin-display italic text-[var(--muted-foreground)] text-sm mb-4">
            Two parallel tracks, one vision.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[var(--gold)]/50" />
            <span className="text-[var(--gold-deep)] text-xs">◆</span>
            <span className="h-px w-12 bg-[var(--gold)]/50" />
          </div>
        </div>

        {/* Track cards */}
        <div className="grid lg:grid-cols-2 gap-7 lg:gap-8">
          {TRACKS.map((track) => (
            <article
              key={track.id}
              className="card-paper relative overflow-hidden flex flex-col"
            >
              {/* Top accent bar with track index */}
              <div className="flex items-stretch border-b border-[var(--border)]">
                <div className="bg-[var(--navy)] text-[var(--cream)] px-5 py-3 flex items-center gap-3">
                  <span className="font-latin-display text-xs tracking-[0.2em] uppercase text-[var(--gold)]">
                    Track
                  </span>
                  <span className="font-latin-display text-2xl leading-none text-[var(--gold)]">
                    {track.index}
                  </span>
                </div>
                <div className="flex-1 px-5 py-3 flex items-center justify-between">
                  <span className="font-latin-display text-xs tracking-[0.2em] uppercase text-[var(--navy)] font-semibold">
                    {track.type}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {track.typeBn}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Heading */}
                <h3 className="font-display text-2xl sm:text-3xl text-[var(--navy)] leading-tight mb-1">
                  {track.heading}
                </h3>
                <p className="font-latin-display italic text-sm text-[var(--gold-deep)] mb-4">
                  {track.headingLatin}
                </p>

                {/* Tagline */}
                <p className="text-[var(--ink)] text-[15px] leading-relaxed border-l-2 border-[var(--gold)]/60 pl-4 mb-5">
                  {track.tagline}
                </p>

                {/* Description */}
                <p className="text-[var(--ink)] text-sm leading-[1.85] mb-6">
                  {track.description}
                </p>

                {/* Meta grid */}
                <dl className="grid grid-cols-2 gap-px bg-[var(--border)] mb-6">
                  <div className="bg-white px-4 py-3">
                    <dt className="flex items-center gap-1.5 text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] mb-1">
                      <Users className="h-3 w-3" /> Team
                    </dt>
                    <dd className="text-sm text-[var(--navy)] font-medium">{track.teamSize}</dd>
                  </div>
                  <div className="bg-white px-4 py-3">
                    <dt className="flex items-center gap-1.5 text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] mb-1">
                      <FileText className="h-3 w-3" /> Format
                    </dt>
                    <dd className="text-sm text-[var(--navy)] font-medium">
                      {track.timeline.length} দফা
                    </dd>
                  </div>
                </dl>

                {/* Format detail */}
                <div className="mb-6">
                  <p className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] mb-2">
                    ফরম্যাট · Format
                  </p>
                  <p className="text-[13px] text-[var(--ink)] leading-relaxed">{track.format}</p>
                </div>

                {/* Eligibility */}
                <div className="mb-6">
                  <p className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] mb-2">
                    যোগ্যতা · Eligibility
                  </p>
                  <p className="text-[13px] text-[var(--ink)] leading-relaxed">{track.eligibility}</p>
                </div>

                {/* Prizes */}
                <div className="mt-auto">
                  <p className="flex items-center gap-1.5 text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] mb-3">
                    <Award className="h-3 w-3" /> পুরস্কার · Prizes
                  </p>
                  <ul className="space-y-1.5">
                    {track.prizes.map((prize) => (
                      <li
                        key={prize.position}
                        className="flex items-baseline justify-between py-1.5 border-b border-dashed border-[var(--border)] last:border-0"
                      >
                        <span className="text-sm text-[var(--navy)] font-medium">
                          {prize.position}
                        </span>
                        <span className="text-xs text-[var(--ink)] font-latin-display tracking-wide">
                          {prize.amount}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer links */}
                <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-wrap gap-3">
                  <a
                    href={`#timeline`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--navy)] hover:text-[var(--gold-deep)] transition-colors"
                  >
                    সময়রেখা দেখুন
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <span className="text-[var(--border)]">·</span>
                  <a
                    href={`#resources`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--navy)] hover:text-[var(--gold-deep)] transition-colors"
                  >
                    রিসোর্স
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <span className="text-[var(--border)]">·</span>
                  <a
                    href={`#register`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold-deep)] hover:text-[var(--navy)] transition-colors"
                  >
                    নিবন্ধন
                    <CheckSquare className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

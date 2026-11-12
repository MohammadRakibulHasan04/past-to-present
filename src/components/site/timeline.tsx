"use client";

import { useState } from "react";
import { Clock, MapPin, Radio, CheckCircle2, CalendarDays } from "lucide-react";
import { TRACKS, type Milestone, type MilestoneStatus, type TrackId } from "@/lib/competition-data";

function StatusPill({ status }: { status: MilestoneStatus }) {
  if (status === "live") {
    return (
      <span className="status-pill text-[var(--gold-deep)] border-[var(--gold)] bg-[var(--gold-soft)]/40">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--gold-deep)] opacity-75 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--gold-deep)]" />
        </span>
        Live
      </span>
    );
  }
  if (status === "completed") {
    return (
      <span className="status-pill text-[var(--muted-foreground)] border-[var(--border)]">
        <CheckCircle2 className="h-3 w-3" />
        Completed
      </span>
    );
  }
  return (
    <span className="status-pill text-[var(--navy)] border-[var(--navy)]/30 bg-white">
      <Clock className="h-3 w-3" />
      Upcoming
    </span>
  );
}

function MilestoneRow({
  milestone,
  index,
  side,
}: {
  milestone: Milestone;
  index: number;
  side: "left" | "right";
}) {
  const card = (
    <>
      <div className="flex items-center gap-2 mb-2">
        <CalendarDays className="h-3.5 w-3.5 text-[var(--gold-deep)] shrink-0" />
        <time className="font-latin-display text-[11px] tracking-[0.16em] uppercase text-[var(--gold-deep)] font-medium">
          {milestone.dateLabel}
        </time>
        {milestone.time && (
          <span className="text-[11px] text-[var(--muted-foreground)]">· {milestone.time}</span>
        )}
      </div>

      <div className="card-paper p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-display text-lg sm:text-xl text-[var(--navy)] leading-snug">
            {milestone.title}
          </h4>
          <span className="timeline-num text-2xl text-[var(--gold)]/30 leading-none shrink-0 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="text-sm text-[var(--ink)] leading-relaxed mb-3">
          {milestone.description}
        </p>
        <div className="flex justify-start">
          <StatusPill status={milestone.status} />
        </div>
      </div>
    </>
  );

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-x-12">
      {/* Dot — centered on mobile line (left-2) and desktop center line (left-1/2) */}
      <span
        className="absolute left-2 md:left-1/2 top-2 md:top-4 -translate-x-1/2 flex items-center justify-center z-10"
        aria-hidden
      >
        <span className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-[var(--gold)] ring-2 md:ring-4 ring-[var(--cream)] flex items-center justify-center">
          <span className="hidden md:block h-1 w-1 rounded-full bg-[var(--navy-deep)]" />
        </span>
      </span>

      {/* Mobile: full-width card with left padding to clear the line + dot */}
      <div className="md:hidden pl-8">{card}</div>

      {/* Desktop: alternating columns */}
      <div className="hidden md:block">
        {side === "left" && card}
      </div>
      <div className="hidden md:block">
        {side === "right" && card}
      </div>
    </li>
  );
}

export function Timeline() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("quiz");
  const track = TRACKS.find((t) => t.id === activeTrack)!;
  const liveCount = track.timeline.filter((m) => m.status === "live").length;
  const completedCount = track.timeline.filter((m) => m.status === "completed").length;
  const progressPct = Math.round((completedCount / track.timeline.length) * 100);

  return (
    <section id="timeline" className="relative py-20 sm:py-28 bg-geometric-light">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="eyebrow mb-4">সময়রেখা · Timeline</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-3">
            প্রতিটি ধাপ, একটি নির্দিষ্ট সময়ে
          </h2>
          <p className="font-latin-display italic text-[var(--muted-foreground)] text-sm">
            Every milestone, on a defined date.
          </p>
        </div>

        {/* Track toggle */}
        <div className="mb-10">
          <div
            role="tablist"
            aria-label="Select competition track"
            className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto"
          >
            {TRACKS.map((t) => {
              const active = t.id === activeTrack;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTrack(t.id)}
                  className={`group text-left p-4 border transition-all ${
                    active
                      ? "border-[var(--gold)] bg-white shadow-[0_8px_24px_-16px_rgba(18,42,77,0.25)]"
                      : "border-[var(--border)] bg-white/40 hover:bg-white hover:border-[var(--gold)]/40"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`font-latin-display text-xl leading-none ${
                        active ? "text-[var(--gold-deep)]" : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      {t.index}
                    </span>
                    <span
                      className={`font-latin-display text-[10px] tracking-[0.2em] uppercase ${
                        active ? "text-[var(--gold-deep)]" : "text-[var(--muted-foreground)]"
                      }`}
                    >
                      {t.type}
                    </span>
                  </div>
                  <p
                    className={`font-display text-lg leading-tight ${
                      active ? "text-[var(--navy)]" : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {t.heading}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress strip */}
        <div className="max-w-3xl mx-auto mb-12 flex items-center gap-4">
          <span className="font-latin-display text-[10px] tracking-[0.18em] uppercase text-[var(--muted-foreground)] shrink-0">
            Progress
          </span>
          <div className="flex-1 h-1 bg-[var(--border)] relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-[var(--gold)] transition-all duration-700"
              style={{ width: `${Math.max(progressPct, 4)}%` }}
            />
          </div>
          <span className="font-latin-display text-xs text-[var(--navy)] font-medium tabular-nums">
            {completedCount}/{track.timeline.length}
          </span>
          {liveCount > 0 && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)]">
              <Radio className="h-3 w-3 animate-pulse" /> Live
            </span>
          )}
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line — mobile */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gold)]/30 via-[var(--gold)]/50 to-[var(--gold)]/30" />
          {/* Vertical line — desktop center */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-[var(--gold)]/30 via-[var(--gold)]/50 to-[var(--gold)]/30" />

          <ol className="space-y-8 md:space-y-10">
            {track.timeline.map((milestone, i) => (
              <MilestoneRow
                key={milestone.date + milestone.title}
                milestone={milestone}
                index={i}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ol>
        </div>

        {/* Venue note */}
        <div className="mt-14 max-w-3xl mx-auto flex items-start gap-3 px-4 py-4 border border-[var(--gold)]/30 bg-white/60 rounded-sm">
          <MapPin className="h-4 w-4 text-[var(--gold-deep)] mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold-deep)] mb-1">
              Venue · ভেন্যু
            </p>
            <p className="text-sm text-[var(--ink)]">
              সকল মঞ্চ আসর অনুষ্ঠিত হবে — Auditorium, Faculty of Business Studies, University of Dhaka
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

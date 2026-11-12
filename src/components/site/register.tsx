"use client";

import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { META, type Track } from "@/lib/competition-data";

export function Register({ track }: { track: Track }) {
  return (
    <section
      id="register"
      className="relative bg-geometric text-[var(--cream)] py-20 sm:py-28 overflow-hidden scroll-mt-32"
    >
      {/* Decorative outer frame */}
      <div className="pointer-events-none absolute inset-6 sm:inset-10 border border-[var(--gold)]/15" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-latin-display tracking-[0.28em] uppercase text-[11px] sm:text-xs text-[var(--gold)] mb-4">
            নিবন্ধন · Registration · Track {track.index}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--cream)] mb-3">
            আজই আপনার স্থান নিশ্চিত করুন
          </h2>
          <p className="font-latin-display italic text-[var(--gold-soft)] text-sm mb-5">
            Reserve your place today.
          </p>

          {/* Deadline callout */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--gold)]/40 bg-white/5">
            <Clock className="h-3.5 w-3.5 text-[var(--gold)]" />
            <span className="font-latin-display text-[11px] tracking-[0.18em] uppercase text-[var(--gold)]">
              Registration closes · {track.registrationClosesLabel}
            </span>
          </div>
        </div>

        {/* Single Track registration card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-6 sm:p-8 border border-[var(--gold)]/25 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[var(--gold)]/50 transition-all">
            {/* Track index watermark */}
            <span className="absolute -top-4 right-4 font-latin-display text-7xl text-[var(--gold)]/10 select-none">
              {track.index}
            </span>

            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-latin-display text-[11px] tracking-[0.2em] uppercase text-[var(--gold)]">
                  {track.type}
                </span>
                <span className="text-[var(--gold)]/40">·</span>
                <span className="text-xs text-[var(--cream)]/70">{track.typeBn}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--cream)] leading-snug mb-2">
                {track.heading}
              </h3>
              <p className="text-[var(--cream)]/60 text-xs font-latin-display italic mb-5">
                {track.headingLatin}
              </p>

              {/* Quick facts */}
              <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <dt className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold)]/70 mb-1">
                    Team
                  </dt>
                  <dd className="text-[var(--cream)]">{track.teamSize}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold)]/70 mb-1">
                    Fee
                  </dt>
                  <dd className="text-[var(--cream)]">{track.registrationFee}</dd>
                </div>
              </dl>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[var(--gold)] text-[var(--navy-deep)] text-sm font-semibold rounded-sm hover:bg-[var(--gold-soft)] transition-colors"
                >
                  নিবন্ধন করুন
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#resources"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-transparent text-[var(--cream)] text-sm font-medium rounded-sm border border-[var(--gold)]/40 hover:border-[var(--gold)] transition-colors"
                >
                  রিসোর্স দেখুন
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div id="contact" className="mt-14 grid sm:grid-cols-3 gap-px bg-[var(--gold)]/20">
          <a
            href={`mailto:${META.email}`}
            className="bg-[var(--navy-deep)]/60 px-5 py-5 hover:bg-[var(--navy-deep)] transition-colors flex items-start gap-3"
          >
            <Mail className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold)]/70 mb-1">
                Email
              </p>
              <p className="text-sm text-[var(--cream)] break-all">{META.email}</p>
            </div>
          </a>
          <a
            href={`tel:${META.phone.replace(/\s/g, "")}`}
            className="bg-[var(--navy-deep)]/60 px-5 py-5 hover:bg-[var(--navy-deep)] transition-colors flex items-start gap-3"
          >
            <Phone className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold)]/70 mb-1">
                Phone
              </p>
              <p className="text-sm text-[var(--cream)]">{META.phone}</p>
            </div>
          </a>
          <div className="bg-[var(--navy-deep)]/60 px-5 py-5 flex items-start gap-3">
            <MapPin className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-latin-display tracking-[0.16em] uppercase text-[var(--gold)]/70 mb-1">
                Venue
              </p>
              <p className="text-sm text-[var(--cream)] leading-snug">{META.venue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { FileText, FileSpreadsheet, Link as LinkIcon, Video, Download, ExternalLink } from "lucide-react";
import { TRACKS, type Resource, type TrackId } from "@/lib/competition-data";

function ResourceIcon({ type }: { type: Resource["type"] }) {
  if (type === "PDF") return <FileText className="h-5 w-5" />;
  if (type === "DOC") return <FileSpreadsheet className="h-5 w-5" />;
  if (type === "Video") return <Video className="h-5 w-5" />;
  return <LinkIcon className="h-5 w-5" />;
}

export function Resources() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("quiz");
  const track = TRACKS.find((t) => t.id === activeTrack)!;

  return (
    <section id="resources" className="relative py-20 sm:py-28 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-6 items-end mb-10">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">রিসোর্স · Resources</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-3">
              প্রস্তুতির উপকরণ
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm">
              প্রতিটি ট্র্যাকের জন্য নির্দিষ্ট সিলেবাস, কেইস ব্রিফ ও রেফারেন্স উপকরণ একত্রিত।
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="font-latin-display italic text-xs text-[var(--gold-deep)] text-right">
              Materials are released on the dates shown in the timeline.
            </p>
          </div>
        </div>

        {/* Track selector — pill style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TRACKS.map((t) => {
            const active = t.id === activeTrack;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 border text-sm transition-all ${
                  active
                    ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--cream)]"
                    : "border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--gold)]"
                }`}
              >
                <span
                  className={`font-latin-display text-xs ${
                    active ? "text-[var(--gold)]" : "text-[var(--gold-deep)]"
                  }`}
                >
                  {t.index}
                </span>
                <span className="font-medium">{t.heading}</span>
              </button>
            );
          })}
        </div>

        {/* Resource grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {track.resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="group card-paper p-5 flex flex-col h-full hover:border-[var(--gold)] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center h-10 w-10 bg-[var(--navy)]/5 text-[var(--navy)] group-hover:bg-[var(--gold)]/15 group-hover:text-[var(--gold-deep)] transition-colors">
                    <ResourceIcon type={resource.type} />
                  </span>
                </div>
                <span className="font-latin-display text-[10px] tracking-[0.16em] uppercase text-[var(--gold-deep)] border border-[var(--gold)]/40 px-2 py-0.5">
                  {resource.type}
                </span>
              </div>

              <h3 className="font-display text-lg text-[var(--navy)] leading-snug mb-2">
                {resource.title}
              </h3>
              <p className="text-[13px] text-[var(--ink)] leading-relaxed mb-4 flex-1">
                {resource.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                <span className="text-[11px] font-latin-display text-[var(--muted-foreground)] tracking-wide">
                  {resource.size ?? "External resource"}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-latin-display tracking-[0.14em] uppercase text-[var(--gold-deep)] group-hover:translate-x-0.5 transition-transform">
                  <Download className="h-3 w-3" />
                  {resource.type === "Link" || resource.type === "Video" ? (
                    <span className="inline-flex items-center gap-1">
                      Open <ExternalLink className="h-3 w-3" />
                    </span>
                  ) : (
                    "Download"
                  )}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-[var(--muted-foreground)] text-center max-w-2xl mx-auto leading-relaxed">
          সকল রিসোর্স শুধুমাত্র নিবন্ধিত অংশগ্রহণকারীদের জন্য। কোনো উপকরণ পাওয়া না গেলে{" "}
          <a href="#contact" className="text-[var(--gold-deep)] underline underline-offset-2">
            যোগাযোগ
          </a>{" "}
          করুন।
        </p>
      </div>
    </section>
  );
}

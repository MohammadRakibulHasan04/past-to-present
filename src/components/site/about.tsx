"use client";

import { META, TRACKS } from "@/lib/competition-data";

const PRINCIPLES = [
  {
    bn: "ঐতিহ্য",
    latin: "Heritage",
    body:
      "আমাদের অতীত শুধু স্মৃতি নয় — এটি একটি জীবন্ত পাঠ। ফাতহে মক্কার নীরব বিজয় থেকে শিক্ষা নেওয়া মূল্যবোধ আজও নেতৃত্ব ও ক্ষমার পাঠ দেয়।",
  },
  {
    bn: "প্রজ্ঞা",
    latin: "Wisdom",
    body:
      "ইসলামী অর্থ ব্যবস্থার রুপরেখা শুধু একটি তাত্ত্বিক কাঠামো নয় — এটি সমসাময়িক অর্থনৈতিক সমস্যা সমাধানের একটি বাস্তব পথ।",
  },
  {
    bn: "ভবিষ্যৎ",
    latin: "Future",
    body:
      "এই প্রতিযোগিতার লক্ষ্য — শিক্ষার্থীদের এমন একটি চিন্তাভাবনায় অভ্যস্ত করা, যা অতীত থেকে শিক্ষা নিয়ে ভবিষ্যতের সম্মুখের রুপরেখা গড়ে।",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-geometric-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">পরিচিতি · About</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-5">
              অতীত থেকে ভবিষ্যৎ —{" "}
              <span className="text-[var(--gold-deep)]">একটি সম্মুখের যাত্রা</span>
            </h2>
            <p className="font-latin-display italic text-[var(--muted-foreground)] text-sm">
              From the Past to the Future — a forward-looking journey.
            </p>
          </div>

          <div className="md:col-span-7 space-y-5 text-[var(--ink)] text-[15px] leading-[1.85]">
            <p>
              <span className="font-display text-2xl text-[var(--navy)] float-left mr-2 leading-none mt-1">
                ‘
              </span>
              {META.orgName} এর উদ্যোগে আয়োজিত এই প্রতিযোগিতা একটি বিশেষ ধারণার উপর দাঁড়িয়ে আছে —
              <em className="text-[var(--gold-deep)] not-italic font-medium">
                {" "}
                আমাদের অতীত শুধু স্মৃতি নয়, বরং ভবিষ্যৎ গড়ার একটি পাঠ।{" "}
              </em>
              ফাতহে মক্কার নীরব বিজয় থেকে শুরু করে ইসলামী অর্থ ব্যবস্থার সামগ্রিক রুপরেখা পর্যন্ত — দুটি
              ভিন্ন ট্র্যাক, একটি মূল ভাবনা।
            </p>
            <p>
              এই প্রতিযোগিতায় আমরা শিক্ষার্থীদের এমন একটি মঞ্চে এনে একত্রিত করছি, যেখানে তারা শুধু প্রতিযোগিতা
              করবেন না — বরং চিন্তা করবেন, গবেষণা করবেন এবং ভবিষ্যতের রুপরেখায় অবদান রাখবেন।
            </p>
            <p className="text-[var(--muted-foreground)]">
              <span className="font-latin-display italic text-[var(--gold-deep)]">
                {META.introLatin}
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line my-14 sm:my-16" />

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {PRINCIPLES.map((p, i) => (
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
          {[
            { k: "ট্র্যাক", kLatin: "Tracks", v: "২", vLatin: "Two parallel" },
            { k: "মোট পুরস্কার", kLatin: "Prize pool", v: "৳৮১,০০০+", vLatin: "In cash & crests" },
            { k: "নিবন্ধন শেষ", kLatin: "Reg. closes", v: "১ ডিসেম্বর", vLatin: "1 December" },
            { k: "চূড়ান্ত আসর", kLatin: "Final event", v: "২২–২৪ ডিসেম্বর", vLatin: "22–24 December" },
          ].map((f) => (
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

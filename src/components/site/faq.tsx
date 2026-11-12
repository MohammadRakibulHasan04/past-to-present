"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type Track } from "@/lib/competition-data";

export function Faq({ track }: { track: Track }) {
  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[var(--cream)] scroll-mt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">প্রশ্নোত্তর · FAQ · Track {track.index}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-tight text-[var(--navy)] mb-3">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="font-latin-display italic text-[var(--muted-foreground)] text-sm">
            Frequently asked questions for {track.heading}.
          </p>
        </div>

        <Accordion
          key={track.id}
          type="single"
          collapsible
          defaultValue="faq-0"
          className="w-full"
        >
          {track.faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-[var(--border)]"
            >
              <AccordionTrigger className="text-left py-5 hover:no-underline group">
                <span className="flex items-start gap-4">
                  <span className="font-latin-display text-sm text-[var(--gold-deep)] tracking-wide leading-snug mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base sm:text-lg text-[var(--navy)] leading-snug group-hover:text-[var(--gold-deep)] transition-colors">
                    {item.q}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-9 pb-5 text-[var(--ink)] text-sm leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <p className="mt-10 text-center text-sm text-[var(--muted-foreground)]">
          আরও প্রশ্ন থাকলে{" "}
          <a
            href="#contact"
            className="text-[var(--gold-deep)] underline underline-offset-4 hover:text-[var(--navy)]"
          >
            আমাদের সাথে যোগাযোগ
          </a>{" "}
          করুন।
        </p>
      </div>
    </section>
  );
}

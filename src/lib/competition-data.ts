// Centralized competition data — single source of truth for both tracks.
// Update dates, resources, and announcements here; the UI reflects changes.

export type TrackId = "quiz" | "case";

export type MilestoneStatus = "completed" | "live" | "upcoming";

export interface Milestone {
  date: string;        // ISO date
  dateLabel: string;   // human-readable Bengali/Latin
  time?: string;
  title: string;
  description: string;
  status: MilestoneStatus;
}

export interface Resource {
  title: string;
  type: "PDF" | "DOC" | "Link" | "Video";
  description: string;
  size?: string;
  href: string;
}

export interface Announcement {
  date: string;        // ISO date
  tag: string;
  title: string;
  body: string;
}

export interface PrizeTier {
  position: string;
  amount: string;
}

export interface Principle {
  bn: string;
  latin: string;
  body: string;
}

export interface QuickFact {
  k: string;
  kLatin: string;
  v: string;
  vLatin: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TrackAbout {
  paragraphs: [string, string];
  highlightQuote: string;
  introLatin: string;
  principles: Principle[];
  quickFacts: QuickFact[];
}

export interface Track {
  id: TrackId;
  index: string;            // "01" | "02"
  heading: string;          // Bengali heading
  headingLatin: string;     // Latin transliteration / translation
  type: string;             // QUIZ / CASE COMPETITION
  typeBn: string;
  tagline: string;
  description: string;
  format: string;
  eligibility: string;
  teamSize: string;
  registrationFee: string;
  registrationClosesLabel: string;
  prizes: PrizeTier[];
  timeline: Milestone[];
  resources: Resource[];
  announcements: Announcement[];
  about: TrackAbout;
  faqs: FaqItem[];
  accentHex: string;        // for the gold corner accent / progress
}

export const META = {
  orgName: "Fatih '21",
  orgTagline: "Knowledge · Heritage · Future",
  headline: "অতীত থেকে ভবিষ্যৎ",
  headlineLatin: "From the Past to the Future",
  intro:
    "একটি দ্বি-ট্র্যাক প্রতিযোগিতা — যেখানে আমরা অতীতের ঐতিহ্য থেকে শিক্ষা নিয়ে ভবিষ্যতের রুপরেখা গড়ি। ইসলামের দুটি গুরুত্বপূর্ণ দিক — একটি ঐতিহাসিক বিজয়, অন্যটি একটি সামগ্রিক অর্থনৈতিক রুপরেখা — এই প্রতিযোগিতায় এসে মিলিত হয়।",
  introLatin:
    "A two-track competition that draws from our heritage to chart the future. Two defining dimensions of Islam — a historic conquest and a holistic economic blueprint — converge on one stage.",
  registrationClosesOn: "2026-12-01",
  email: "fatih21.competition@gmail.com",
  phone: "+880 1700 000000",
  venue: "Auditorium, Faculty of Business Studies, University of Dhaka",
};

export const TRACKS: Track[] = [
  {
    id: "quiz",
    index: "01",
    heading: "ফাতহে মক্কা",
    headingLatin: "Fath-e Makkah · The Conquest of Mecca",
    type: "QUIZ",
    typeBn: "কুইজ প্রতিযোগিতা",
    tagline:
      "৮ম হিজরির সেই নীরব বিজয় — যে বিজয়ে রক্তপাত ছিল না, ছিল ক্ষমা, প্রজ্ঞা ও ঈমানের জয়।",
    description:
      "এই কুইজ ট্র্যাকে অংশগ্রহণকারীরা ফাতহে মক্কার ঐতিহাসিক, ভৌগোলিক, রাজনৈতিক ও আধ্যাত্মিক দিকগুলো নিয়ে প্রশ্নের মুখোমুখি হবেন। উদ্দেশ্য শুধু তথ্য মুখস্থ নয় — বরং সেই ঘটনাবলি থেকে নেতৃত্ব, কৌশল ও মূল্যবোধের শিক্ষা গ্রহণ করা।",
    format:
      "দুই দফায় আয়োজিত — প্রাথমিক লিখিত রাউন্ড ও মঞ্চ ফাইনাল। প্রাথমিক রাউন্ডে ৩০টি বহুনির্বাচনী ও সংক্ষিপ্ত প্রশ্ন; শীর্ষ ৮ দল ফাইনালে উঠবে।",
    eligibility:
      "মাধ্যমিক স্তরের উপরে পড়ুয়া যেকোনো শিক্ষার্থী অংশগ্রহণ করতে পারবেন। প্রতিটি প্রতিষ্ঠান থেকে সর্বোচ্চ দুটি দল অংশ নিতে পারবে।",
    teamSize: "৩ জনের দল",
    registrationFee: "৳ ৩০০ / দল",
    registrationClosesLabel: "28 November 2026",
    prizes: [
      { position: "চ্যাম্পিয়ন", amount: "৳ ১৫,০০০ + ক্রেস্ট" },
      { position: "রানার্স-আপ", amount: "৳ ১০,০০০ + ক্রেস্ট" },
      { position: "দ্বিতীয় রানার্স-আপ", amount: "৳ ৫,০০০ + ক্রেস্ট" },
    ],
    timeline: [
      {
        date: "2026-11-15",
        dateLabel: "১৫ নভেম্বর, ২০২৬",
        title: "নিবন্ধন শুরু",
        description: "অনলাইন ও আউটরিচ ডেস্কে নিবন্ধন আনুষ্ঠানিকভাবে উন্মুক্ত হয়।",
        status: "live",
      },
      {
        date: "2026-11-18",
        dateLabel: "১৮ নভেম্বর, ২০২৬",
        title: "সিলেবাস ও পড়ার তালিকা প্রকাশ",
        description: "কুইজের সম্ভাব্য ক্ষেত্র, রেফারেন্স বই ও সিলেবাস প্রকাশিত হয়।",
        status: "upcoming",
      },
      {
        date: "2026-11-28",
        dateLabel: "২৮ নভেম্বর, ২০২৬",
        title: "নিবন্ধন শেষ",
        description: "নিবন্ধনের চূড়ান্ত তারিখ; এর পরে কোনো ফর্ম গৃহীত হবে না।",
        status: "upcoming",
      },
      {
        date: "2026-12-05",
        dateLabel: "৫ ডিসেম্বর, ২০২৬",
        time: "সকাল ১০:০০",
        title: "প্রাথমিক রাউন্ড",
        description: "৩০ নম্বরের লিখিত যোগ্যতা পরীক্ষা; শীর্ষ ৮ দল ফাইনালে উত্তীর্ণ।",
        status: "upcoming",
      },
      {
        date: "2026-12-12",
        dateLabel: "১২ ডিসেম্বর, ২০২৬",
        time: "বিকাল ৩:০০",
        title: "মঞ্চ ফাইনাল",
        description: "চার দফার মঞ্চ কুইজ — বহুনির্বাচনী, দ্রুত-উত্তর, চিত্রভিত্তিক ও থিম রাউন্ড।",
        status: "upcoming",
      },
      {
        date: "2026-12-14",
        dateLabel: "১৪ ডিসেম্বর, ২০২৬",
        title: "ফলাফল ও পুরস্কার প্রদান",
        description: "বিজয়ীদের নাম ঘোষণা ও ক্রেস্ট প্রদান।",
        status: "upcoming",
      },
    ],
    resources: [
      {
        title: "কুইজ সিলেবাস ও ক্ষেত্রসমূহ",
        type: "PDF",
        description: "বিষয়বস্তুর বিস্তারিত ক্ষেত্র, ওজন ও প্রশ্ন প্যাটার্ন।",
        size: "320 KB",
        href: "#",
      },
      {
        title: "ফাতহে মক্কা — ঐতিহাসিক পটভূমি",
        type: "PDF",
        description: "হুদায়বিয়ার সন্ধি থেকে মক্কা বিজয় পর্যন্ত সময়রেখা।",
        size: "1.1 MB",
        href: "#",
      },
      {
        title: "রেফারেন্স গ্রন্থতালিকা",
        type: "PDF",
        description: "অররাহীক আল-মাগাজি, ইবনে হিশাম, সুনান গ্রন্থাদির নির্বাচিত অংশ।",
        size: "180 KB",
        href: "#",
      },
      {
        title: "নমুনা প্রশ্ন",
        type: "PDF",
        description: "বিগত আসরের নমুনা প্রশ্ন ও সমাধান।",
        size: "240 KB",
        href: "#",
      },
      {
        title: "নিয়মাবলি",
        type: "PDF",
        description: "প্রতিযোগিতার সকল নিয়ম, যাচাই প্রক্রিয়া ও আচরণবিধি।",
        size: "150 KB",
        href: "#",
      },
    ],
    announcements: [
      {
        date: "2026-11-12",
        tag: "Update",
        title: "কুইজ ট্র্যাকের আনুষ্ঠানিক উন্মোচন",
        body: "অতীত থেকে ভবিষ্যৎ প্রতিযোগিতার অংশ হিসেবে ফাতহে মক্কা কুইজ ট্র্যাক আজ থেকে আনুষ্ঠানিকভাবে উন্মুক্ত।",
      },
      {
        date: "2026-11-15",
        tag: "Registration",
        title: "নিবন্ধন চালু",
        body: "নিবন্ধন ফর্ম আজ থেকে পাওয়া যাচ্ছে। প্রতিটি দলে ৩ জন সদস্য থাকতে হবে।",
      },
      {
        date: "2026-11-18",
        tag: "Resource",
        title: "সিলেবাস প্রকাশিত",
        body: "কুইজের সম্ভাব্য ক্ষেত্র ও রেফারেন্স তালিকা রিসোর্স সেকশনে পাওয়া যাবে।",
      },
    ],
    about: {
      highlightQuote: "আমাদের অতীত শুধু স্মৃতি নয়, বরং ভবিষ্যৎ গড়ার একটি পাঠ।",
      paragraphs: [
        "এর উদ্যোগে আয়োজিত এই কুইজ ট্র্যাকটি একটি বিশেষ ধারণার উপর দাঁড়িয়ে আছে — ৮ম হিজরির ফাতহে মক্কার সেই রক্তপাতহীন বিজয় আমাদের নেতৃত্ব, কৌশল ও ক্ষমার যে শিক্ষা দেয়, তা আজও সমানভাবে প্রাসঙ্গিক।",
        "এই কুইজ প্রতিযোগিতায় আমরা শিক্ষার্থীদের এমন একটি মঞ্চে আমন্ত্রণ জানাচ্ছি, যেখানে তারা শুধু ঐতিহাসিক তথ্য স্মরণ করবেন না — বরং সেই ঘটনাপ্রবাহের গভীরতা, দূরদর্শিতা ও মানবিক মূল্যবোধ থেকে ভবিষ্যতের শিক্ষা গ্রহণ করবেন।",
      ],
      introLatin:
        "The Fath-e Makkah Quiz Track invites students to explore the historic, strategic, and spiritual dimensions of the Conquest of Mecca — drawing timeless lessons in leadership, mercy, and wisdom.",
      principles: [
        {
          bn: "ঐতিহ্য",
          latin: "Heritage",
          body: "আমাদের অতীত শুধু স্মৃতি নয় — এটি একটি জীবন্ত পাঠ। ফাতহে মক্কার নীরব বিজয় থেকে শিক্ষা নেওয়া মূল্যবোধ আজও নেতৃত্ব ও ক্ষমার শ্রেষ্ঠ পাঠ দেয়।",
        },
        {
          bn: "প্রজ্ঞা",
          latin: "Wisdom",
          body: "হুদায়বিয়ার সন্ধি থেকে শুরু করে মক্কা বিজয় পর্যন্ত প্রতিটি পদক্ষেপে নিহিত ছিল গভীর কৌশল, ধৈর্য ও দূরদর্শী প্রজ্ঞার শিক্ষা।",
        },
        {
          bn: "ভবিষ্যৎ",
          latin: "Future",
          body: "এই কুইজের লক্ষ্য — শিক্ষার্থীদের ইতিহাসের গভীর পাঠে অভ্যস্ত করা, যেন অতীতের সেই আদর্শিক শিক্ষা ভবিষ্যতের নৈতিক নেতৃত্বে রূপ নেয়।",
        },
      ],
      quickFacts: [
        { k: "দল গঠন", kLatin: "Team size", v: "৩ জন", vLatin: "Per team" },
        { k: "মোট পুরস্কার", kLatin: "Prize pool", v: "৳৩০,০০০+", vLatin: "In cash & crests" },
        { k: "নিবন্ধন শেষ", kLatin: "Reg. closes", v: "২৮ নভেম্বর", vLatin: "28 November" },
        { k: "চূড়ান্ত আসর", kLatin: "Final event", v: "১২–১৪ ডিসেম্বর", vLatin: "12–14 December" },
      ],
    },
    faqs: [
      {
        q: "কুইজ ট্র্যাকে কারা অংশগ্রহণ করতে পারবেন?",
        a: "মাধ্যমিক স্তরের উপরে পড়ুয়া যেকোনো শিক্ষার্থী (উচ্চ মাধ্যমিক, স্নাতক বা সমমান) ৩ জনের দল গঠন করে এই কুইজ ট্র্যাকে অংশগ্রহণ করতে পারবেন।",
      },
      {
        q: "কুইজ ট্র্যাকের নিবন্ধন ফি কত?",
        a: "কুইজ ট্র্যাকের জন্য প্রতি দল ৳৩০০ নিবন্ধন ফি নির্ধারিত। ফি bKash বা আউটরিচ ডেস্কে নগদে পরিশোধযোগ্য।",
      },
      {
        q: "ভিন্ন প্রতিষ্ঠানের শিক্ষার্থীদের নিয়ে কি দল গঠন করা যাবে?",
        a: "না। কুইজ ট্র্যাকে একই শিক্ষাপ্রতিষ্ঠানের শিক্ষার্থীদের নিয়ে ৩ জনের দল গঠন করতে হবে। প্রতিটি প্রতিষ্ঠান থেকে সর্বোচ্চ দুটি দল অংশ নিতে পারবে।",
      },
      {
        q: "কুইজের প্রশ্ন কোন কোন বিষয়ের উপর হবে?",
        a: "হুদায়বিয়ার সন্ধি থেকে শুরু করে ফাতহে মক্কার ঐতিহাসিক, ভৌগোলিক, রাজনৈতিক ও আধ্যাত্মিক প্রেক্ষাপট থেকে প্রশ্ন করা হবে। বিস্তারিত সিলেবাস ও রেফারেন্স গ্রন্থতালিকা রিসোর্স সেকশনে প্রকাশিত হবে।",
      },
      {
        q: "অংশগ্রহণকারী কি সনদপত্র পাবেন?",
        a: "হ্যাঁ। প্রতিটি অংশগ্রহণকারী দল (প্রাথমিক রাউন্ড সম্পন্ন করলে) অংশগ্রহণ সনদপত্র পাবেন। বিজয়ী ও ফাইনালিস্টদের জন্য আলাদা সনদপত্র ও ক্রেস্ট থাকবে।",
      },
      {
        q: "রিসোর্স কোথায় পাওয়া যাবে?",
        a: "কুইজ ট্র্যাকের জন্য নির্ধারিত সিলেবাস, ঐতিহাসিক পটভূমি ও নমুনা প্রশ্ন এই ট্যাবের রিসোর্স সেকশনে নির্দিষ্ট তারিখে প্রকাশিত হবে।",
      },
    ],
    accentHex: "#c9a14a",
  },
  {
    id: "case",
    index: "02",
    heading: "ইসলামী অর্থ ব্যবস্থার রুপরেখা",
    headingLatin: "Islamic Financial System — A Blueprint",
    type: "CASE COMPETITION",
    typeBn: "কেইস প্রতিযোগিতা",
    tagline:
      "রিবা-মুক্ত, আদল-ভিত্তিক, বাস্তব-অর্থনীতির একটি সম্মুখের রুপরেখা — যা ব্যক্তি থেকে রাষ্ট্র পর্যন্ত প্রযোজ্য।",
    description:
      "এই ট্র্যাকে অংশগ্রহণকারী দলগুলো একটি বাস্তব কেইস বা সমস্যা সমাধানের মাধ্যমে একটি সমন্বিত ইসলামী অর্থ ব্যবস্থার রুপরেখা তৈরি করবে। উদ্দেশ্য — শুধু তাত্ত্বিক আলোচনা নয়, বরং সমসাময়িক অর্থনৈতিক সমস্যা সমাধানে ইসলামী নীতির বাস্তব প্রয়োগ দেখানো।",
    format:
      "তিন দফায় আয়োজিত — কেইস ব্রিফ প্রকাশ, লিখিত সাবমিশন, এবং শীর্ষ ৬ দলের মধ্যে মঞ্চ উপস্থাপনা। প্রতিটি দল একটি সমন্বিত রুপরেখা দলিল জমা দেবে এবং নির্বাচিত দল মঞ্চে তা উপস্থাপন করবে।",
    eligibility:
      "স্নাতক ও স্নাতকোত্তর স্তরের শিক্ষার্থী, বিশেষত ব্যবসায় শিক্ষা, অর্থনীতি, ফিন্যান্স ও আইন বিভাগের শিক্ষার্থীদের জন্য উন্মুক্ত। আন্তঃবিভাগীয় দল গঠন উৎসাহিত।",
    teamSize: "৪–৫ জনের দল",
    registrationFee: "৳ ৫০০ / দল",
    registrationClosesLabel: "1 December 2026",
    prizes: [
      { position: "চ্যাম্পিয়ন", amount: "৳ ২৫,০০০ + ক্রেস্ট" },
      { position: "রানার্স-আপ", amount: "৳ ১৫,০০০ + ক্রেস্ট" },
      { position: "দ্বিতীয় রানার্স-আপ", amount: "৳ ৮,০০০ + ক্রেস্ট" },
      { position: "সেরা উপস্থাপনা", amount: "৳ ৩,০০০ + সার্টিফিকেট" },
    ],
    timeline: [
      {
        date: "2026-11-15",
        dateLabel: "১৫ নভেম্বর, ২০২৬",
        title: "নিবন্ধন শুরু",
        description: "অনলাইন ও আউটরিচ ডেস্কে দল গঠন ও নিবন্ধন শুরু।",
        status: "live",
      },
      {
        date: "2026-11-20",
        dateLabel: "২০ নভেম্বর, ২০২৬",
        title: "কেইস ব্রিফ প্রকাশ",
        description: "বাস্তব-ভিত্তিক কেইস, সমস্যা বিবরণ ও রুপরেখা প্রতিবেদনের কাঠামো প্রকাশিত।",
        status: "upcoming",
      },
      {
        date: "2026-11-22",
        dateLabel: "২২ নভেম্বর, ২০২৬",
        time: "সন্ধ্যা ৭:০০",
        title: "Q&A সেশন",
        description: "কেইস ব্রিফ নিয়ে প্রশ্নোত্তর ও ক্লারিফিকেশন সেশন (অনলাইন)।",
        status: "upcoming",
      },
      {
        date: "2026-12-01",
        dateLabel: "১ ডিসেম্বর, ২০২৬",
        title: "নিবন্ধন শেষ",
        description: "দল গঠন ও নিবন্ধনের চূড়ান্ত তারিখ।",
        status: "upcoming",
      },
      {
        date: "2026-12-15",
        dateLabel: "১৫ ডিসেম্বর, ২০২৬",
        time: "রাত ১১:৫৯",
        title: "লিখিত সাবমিশনের শেষ সময়",
        description: "সমন্বিত রুপরেখা দলিল PDF ফরম্যাটে জমা দিতে হবে।",
        status: "upcoming",
      },
      {
        date: "2026-12-18",
        dateLabel: "১৮ ডিসেম্বর, ২০২৬",
        title: "ফাইনালিস্ট ঘোষণা",
        description: "মূল্যায়নের পর শীর্ষ ৬ দলের নাম প্রকাশ।",
        status: "upcoming",
      },
      {
        date: "2026-12-22",
        dateLabel: "২২ ডিসেম্বর, ২০২৬",
        time: "সকাল ৯:৩০",
        title: "মঞ্চ উপস্থাপনা",
        description: "প্রতিটি ফাইনালিস্ট দল ১৫ মিনিট উপস্থাপনা + ১০ মিনিট প্রশ্নোত্তর।",
        status: "upcoming",
      },
      {
        date: "2026-12-24",
        dateLabel: "২৪ ডিসেম্বর, ২০২৬",
        title: "ফলাফল ও পুরস্কার প্রদান",
        description: "বিজয়ীদের নাম ঘোষণা ও পুরস্কার বিতরণ।",
        status: "upcoming",
      },
    ],
    resources: [
      {
        title: "কেইস ব্রিফ",
        type: "PDF",
        description: "সমসাময়িক অর্থনৈতিক সমস্যার বিবরণ ও প্রত্যাশিত ফলাফল।",
        size: "640 KB",
        href: "#",
      },
      {
        title: "রুপরেখা দলিলের কাঠামো",
        type: "DOC",
        description: "সাবমিশনের কাঠামো, পৃষ্ঠসংখ্যা ও মূল্যায়ন মাপকাঠি।",
        size: "200 KB",
        href: "#",
      },
      {
        title: "মূল্যায়ন রুব্রিক",
        type: "PDF",
        description: "বিচারকদের মূল্যায়নের মাপকাঠি — তাত্ত্বিক ভিত্তি, বাস্তবতা, উপস্থাপনা।",
        size: "180 KB",
        href: "#",
      },
      {
        title: "রেফারেন্স রিডিং",
        type: "PDF",
        description: "ইসলামী অর্থনীতির মৌলিক গ্রন্থ ও নির্বাচিত প্রবন্ধ।",
        size: "1.4 MB",
        href: "#",
      },
      {
        title: "উপস্থাপনা টেমপ্লেট",
        type: "DOC",
        description: "মঞ্চ উপস্থাপনার জন্য নির্দেশিত কাঠামো ও টেমপ্লেট।",
        size: "320 KB",
        href: "#",
      },
      {
        title: "Q&A সেশন রেকর্ডিং",
        type: "Video",
        description: "২২ নভেম্বরের ক্লারিফিকেশন সেশনের রেকর্ডিং।",
        href: "#",
      },
    ],
    announcements: [
      {
        date: "2026-11-12",
        tag: "Update",
        title: "কেইস ট্র্যাকের আনুষ্ঠানিক উন্মোচন",
        body: "ইসলামী অর্থ ব্যবস্থার রুপরেখা কেইস প্রতিযোগিতা আজ থেকে আনুষ্ঠানিকভাবে উন্মুক্ত।",
      },
      {
        date: "2026-11-15",
        tag: "Registration",
        title: "নিবন্ধন চালু",
        body: "৪–৫ জনের দল গঠন করে নিবন্ধন করা যাচ্ছে। আন্তঃবিভাগীয় দল গঠন উৎসাহিত।",
      },
      {
        date: "2026-11-20",
        tag: "Resource",
        title: "কেইস ব্রিফ প্রকাশিত",
        body: "মূল কেইস, সমস্যা বিবরণ ও রুপরেখা দলিলের কাঠামো রিসোর্স সেকশনে পাওয়া যাচ্ছে।",
      },
      {
        date: "2026-11-22",
        tag: "Event",
        title: "অনলাইন Q&A সেশন",
        body: "সন্ধ্যা ৭টায় অনলাইন ক্লারিফিকেশন সেশন; রেজিস্টার্ড দলগুলোর জন্য লিঙ্ক ইমেইলে পাঠানো হবে।",
      },
    ],
    about: {
      highlightQuote: "আমাদের অতীত শুধু স্মৃতি নয়, বরং ভবিষ্যৎ গড়ার একটি পাঠ।",
      paragraphs: [
        "এর উদ্যোগে আয়োজিত এই কেইস ট্র্যাকটি একটি বিশেষ ধারণার উপর দাঁড়িয়ে আছে — ইসলামের চিরন্তন অর্থনৈতিক ইনসাফ ও নীতিমালা থেকে শিক্ষা নিয়ে সমসাময়িক অর্থনৈতিক সংকটের বাস্তব ও কার্যকর সমাধান তৈরি করা।",
        "এই প্রতিযোগিতায় আমরা শিক্ষার্থীদের এমন একটি মঞ্চে একত্রিত করছি, যেখানে তারা শুধু তাত্ত্বিক আলোচনা করবেন না — বরং চিন্তা করবেন, গবেষণা করবেন এবং রিবা-মুক্ত ও কল্যাণমুখী ভবিষ্যৎ অর্থনীতির রুপরেখায় অবদান রাখবেন।",
      ],
      introLatin:
        "The Islamic Financial System Case Competition challenges teams to design a practical, justice-centered, riba-free economic blueprint addressing contemporary real-world financial challenges.",
      principles: [
        {
          bn: "ঐতিহ্য",
          latin: "Heritage",
          body: "ইসলামের অর্থনৈতিক দর্শন দাঁড়িয়ে আছে আদল (ন্যায়বিচার), আমানত ও সম্পদের সুষম বণ্টনের ঐতিহাসিক ভিত্তির উপর।",
        },
        {
          bn: "প্রজ্ঞা",
          latin: "Wisdom",
          body: "ইসলামী অর্থ ব্যবস্থার রুপরেখা শুধু একটি তাত্ত্বিক কাঠামো নয় — এটি সমসাময়িক অর্থনৈতিক সমস্যা সমাধানের একটি বাস্তব পথ।",
        },
        {
          bn: "ভবিষ্যৎ",
          latin: "Future",
          body: "এই প্রতিযোগিতার লক্ষ্য — শিক্ষার্থীদের এমন একটি গবেষণাধর্মী চিন্তাভাবনায় অভ্যস্ত করা, যা ভবিষ্যতের সম্মুখের অর্থনৈতিক রুপরেখা গড়ে।",
        },
      ],
      quickFacts: [
        { k: "দল গঠন", kLatin: "Team size", v: "৪–৫ জন", vLatin: "Per team" },
        { k: "মোট পুরস্কার", kLatin: "Prize pool", v: "৳৫১,০০০+", vLatin: "In cash & crests" },
        { k: "নিবন্ধন শেষ", kLatin: "Reg. closes", v: "১ ডিসেম্বর", vLatin: "1 December" },
        { k: "চূড়ান্ত আসর", kLatin: "Final event", v: "২২–২৪ ডিসেম্বর", vLatin: "22–24 December" },
      ],
    },
    faqs: [
      {
        q: "কেইস ট্র্যাকে কারা অংশগ্রহণ করতে পারবেন?",
        a: "স্নাতক ও স্নাতকোত্তর স্তরের শিক্ষার্থী, বিশেষত ব্যবসায় শিক্ষা, অর্থনীতি, ফিন্যান্স, আইন ও সংশ্লিষ্ট বিভাগের শিক্ষার্থীরা ৪–৫ জনের দল গঠন করে অংশগ্রহণ করতে পারবেন।",
      },
      {
        q: "কেইস ট্র্যাকের নিবন্ধন ফি কত?",
        a: "কেইস ট্র্যাকের জন্য প্রতি দল ৳৫০০ নিবন্ধন ফি নির্ধারিত। ফি bKash বা আউটরিচ ডেস্কে নগদে পরিশোধযোগ্য।",
      },
      {
        q: "আন্তঃবিভাগীয় দল গঠন করা যাবে কি?",
        a: "হ্যাঁ। কেইস ট্র্যাকে বহুমাত্রিক বিশ্লেষণের জন্য আন্তঃবিভাগীয় দল গঠন বিশেষভাবে উৎসাহিত ও অনুমোদিত।",
      },
      {
        q: "বিচারক কারা হবেন?",
        a: "কেইস ট্র্যাকের মূল্যায়ন সংশ্লিষ্ট বিষয়ে দক্ষ শিক্ষাবিদ, গবেষক ও অভিজ্ঞ পেশাদারদের নিয়ে গঠিত প্যানেল করবেন। বিচারকদের নাম ফাইনালের পূর্বে প্রকাশ করা হবে।",
      },
      {
        q: "অংশগ্রহণকারী কি সনদপত্র পাবেন?",
        a: "হ্যাঁ। প্রতিটি অংশগ্রহণকারী দল (লিখিত সাবমিশন সম্পন্ন করলে) অংশগ্রহণ সনদপত্র পাবেন। বিজয়ী ও ফাইনালিস্টদের জন্য আলাদা সনদপত্র ও ক্রেস্ট থাকবে।",
      },
      {
        q: "রিসোর্স কোথায় পাওয়া যাবে?",
        a: "কেইস ব্রিফ, রুপরেখা দলিলের কাঠামো, মূল্যায়ন রুব্রিক ও রেফারেন্স উপকরণ এই ট্যাবের রিসোর্স সেকশনে নির্দিষ্ট তারিখে প্রকাশিত হবে।",
      },
    ],
    accentHex: "#c9a14a",
  },
];

export const NAV_ITEMS = [
  { id: "about", label: "পরিচিতি", labelLatin: "About" },
  { id: "tracks", label: "ট্র্যাক", labelLatin: "Track" },
  { id: "timeline", label: "সময়রেখা", labelLatin: "Timeline" },
  { id: "resources", label: "রিসোর্স", labelLatin: "Resources" },
  { id: "announcements", label: "ঘোষণা", labelLatin: "Announcements" },
  { id: "faq", label: "প্রশ্নোত্তর", labelLatin: "FAQ" },
];

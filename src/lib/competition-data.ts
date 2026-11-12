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
  prizes: PrizeTier[];
  timeline: Milestone[];
  resources: Resource[];
  announcements: Announcement[];
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
    accentHex: "#c9a14a",
  },
];

export const FAQ = [
  {
    q: "একজন শিক্ষার্থী কি উভয় ট্র্যাকেই অংশ নিতে পারবেন?",
    a: "হ্যাঁ। যদি কুইজ ও কেইস প্রতিযোগিতার সময়সূচি একে অপরের সাথে সংঘাত না করে, তবে একজন শিক্ষার্থী উভয় ট্র্যাকে অংশগ্রহণ করতে পারবেন। তবে প্রতিটি ট্র্যাকে আলাদা নিবন্ধন প্রয়োজন।",
  },
  {
    q: "নিবন্ধন ফি কত?",
    a: "কুইজ ট্র্যাকের জন্য প্রতি দল ৳৩০০ এবং কেইস ট্র্যাকের জন্য প্রতি দল ৳৫০০ নিবন্ধন ফি। ফি bKash বা আউটরিচ ডেস্কে নগদে পরিশোধযোগ্য।",
  },
  {
    q: "আন্তঃবিভাগীয় দল গঠন করা যাবে কি?",
    a: "কেইস ট্র্যাকে আন্তঃবিভাগীয় দল গঠন উৎসাহিত ও অনুমোদিত। কুইজ ট্র্যাকে একই প্রতিষ্ঠানের শিক্ষার্থীদের নিয়ে দল গঠন করতে হবে।",
  },
  {
    q: "বিচারক কারা হবেন?",
    a: "উভয় ট্র্যাকের মূল্যায়ন সংশ্লিষ্ট বিষয়ে দক্ষ শিক্ষাবিদ, গবেষক ও অভিজ্ঞ পেশাদারদের নিয়ে গঠিত প্যানেল করবেন। বিচারকদের নাম ফাইনালের পূর্বে প্রকাশ করা হবে।",
  },
  {
    q: "অংশগ্রহণকারী কি সনদপত্র পাবেন?",
    a: "হ্যাঁ। প্রতিটি অংশগ্রহণকারী দল (প্রাথমিক রাউন্ড সম্পন্ন করলে) অংশগ্রহণ সনদপত্র পাবেন। বিজয়ী ও ফাইনালিস্টদের জন্য আলাদা সনদপত্র ও ক্রেস্ট থাকবে।",
  },
  {
    q: "রিসোর্স কোথায় পাওয়া যাবে?",
    a: "প্রতিটি ট্র্যাকের জন্য নির্ধারিত সিলেবাস, কেইস ব্রিফ ও রেফারেন্স উপকরণ ওয়েবসাইটের রিসোর্স সেকশনে ট্র্যাক-নির্দিষ্ট তারিখে প্রকাশিত হবে।",
  },
];

export const NAV_ITEMS = [
  { id: "about", label: "পরিচিতি", labelLatin: "About" },
  { id: "tracks", label: "ট্র্যাক", labelLatin: "Tracks" },
  { id: "timeline", label: "সময়রেখা", labelLatin: "Timeline" },
  { id: "resources", label: "রিসোর্স", labelLatin: "Resources" },
  { id: "announcements", label: "ঘোষণা", labelLatin: "Announcements" },
  { id: "faq", label: "প্রশ্নোত্তর", labelLatin: "FAQ" },
];

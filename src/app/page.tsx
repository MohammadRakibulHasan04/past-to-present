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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Resources />
        <Announcements />
        <Register />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

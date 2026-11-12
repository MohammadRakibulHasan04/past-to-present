import type { Metadata } from "next";
import { Inter, Playfair_Display, Hind_Siliguri, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tiroBangla = Tiro_Bangla({
  variable: "--font-tiro",
  subsets: ["bengali", "latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "অতীত থেকে ভবিষ্যৎ | Fatih '21 Competition",
  description:
    "Fatih '21 presents অতীত থেকে ভবিষ্যৎ — a two-track competition featuring the ফাতহে মক্কা Quiz and the ইসলামী অর্থ ব্যবস্থার রুপরেখা Case Competition.",
  keywords: [
    "Fatih 21",
    "অতীত থেকে ভবিষ্যৎ",
    "ফাতহে মক্কা",
    "ইসলামী অর্থ ব্যবস্থার রুপরেখা",
    "Quiz competition",
    "Case competition",
    "Bangladesh Islamic competition",
  ],
  authors: [{ name: "Fatih '21" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/fatih-logo-small.png",
  },
  openGraph: {
    title: "অতীত থেকে ভবিষ্যৎ — Fatih '21 Competition",
    description:
      "A two-track competition: ফাতহে মক্কা Quiz & ইসলামী অর্থ ব্যবস্থার রুপরেখা Case Competition.",
    siteName: "Fatih '21",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${hindSiliguri.variable} ${tiroBangla.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ade Ramdani Profiles",
  description:
    "Profil Ade Ramdani — IT Administrator yang mengelola infrastruktur IT dan berbagi tutorial, dokumentasi, serta proyek open source.",
  keywords: [
    "Ade Ramdani",
    "IT Administrator",
    "infrastruktur",
    "tutorial",
    "dokumentasi",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "Ade Ramdani" }],
  openGraph: {
    title: "Ade Ramdani Profiles",
    description:
      "Profil dan karya Ade Ramdani — proyek, tutorial, dan dokumentasi seputar infrastruktur dan web development.",
    url: "https://aderamdani.web.id",
    siteName: "Ade Ramdani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Ramdani Profiles",
    description:
      "Profil dan konten teknis dari Ade Ramdani — IT Administrator dan pembuat tutorial teknis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

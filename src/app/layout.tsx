import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Polyfill for broken localStorage in some server environments (like Bun + Next.js)
if (
  typeof globalThis !== "undefined" &&
  typeof globalThis.localStorage !== "undefined" &&
  typeof globalThis.localStorage.getItem !== "function"
) {
  try {
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: () => null,
        setItem: () => { },
        removeItem: () => { },
        clear: () => { },
        length: 0,
        key: () => null,
      },
      writable: true,
    });
  } catch (e) {
    console.error("Failed to patch localStorage:", e);
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ade Ramdani - Microsoft Excel Expert",
  description: "Professional Excel expert specializing in Excel Automation, Data Analysis, and Excel Training. Transform your data into actionable insights with MOS certified expert.",
  keywords: ["Ade Ramdani", "Excel Expert", "Microsoft Excel", "Excel Automation", "Data Analysis", "Excel Training", "MOS Certified", "VBA", "Power Query"],
  authors: [{ name: "Ade Ramdani" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Ade Ramdani - Microsoft Excel Expert",
    description: "Expert Excel Solutions for Your Business - Automate, Analyze, and Master Excel",
    url: "https://aderamdani.web.id",
    siteName: "Ade Ramdani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Ramdani - Microsoft Excel Expert",
    description: "Expert Excel Solutions for Your Business - Automate, Analyze, and Master Excel",
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

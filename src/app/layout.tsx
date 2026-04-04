import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";
import { SiteWrapper } from "@/components/site-wrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trovn — AI Consulting & Agency",
  description:
    "Trovn helps teams design, build, and operationalise AI solutions that create measurable business value. End-to-end AI services from strategy to deployment.",
  openGraph: {
    title: "Trovn — AI Consulting & Agency",
    description:
      "End-to-end AI services from strategy to deployment. Custom AI development, CRM solutions, and intelligent voice tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <SiteWrapper>
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
        </SiteWrapper>
      </body>
    </html>
  );
}

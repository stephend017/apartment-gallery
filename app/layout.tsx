import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  Edu_NSW_ACT_Cursive,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const edu_NSW_ACT_Hand_Cursive = Edu_NSW_ACT_Cursive({
  variable: "--font-edu-nsw-act-hand-cursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apartment Gallery",
  description: "The finest collection of art ever assembled in an apartment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} ${edu_NSW_ACT_Hand_Cursive.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

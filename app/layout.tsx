import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Wicus Buys — Developer",
  description: "Software Developer Portfolio",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "ASP.NET Developer",
    "Next.js Portfolio",
    "Tailwind CSS Expert",
    "Junior Developer Portfolio",
    "Wicus Buys Developer"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}

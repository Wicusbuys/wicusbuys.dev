import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <body
        id="root"
        className={`bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}

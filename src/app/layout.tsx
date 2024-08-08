import type { Metadata } from "next";
  import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://fiyd.tristangee.com'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Fremont Inspire Youth Foundation",
  metadataBase: new URL(baseUrl),
  description: "We help our younger generation by teaching Kindergarten students the material they need to know",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Fremont Inspire Youth Foundation",
    title: "Fremont Inspire Youth Foundation: teaching the next generation.",
    description: "We help our younger generation by teaching Kindergarten students the material they need to know",
    images: [
      {
        url: '/fyif.png',
        width: 1200,
        height: 630,
        alt: "Fremont Inspire Youth Foundation",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'relative w-screen flex justify-center flex-col items-center')}>
        <NavBar />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gutentype.vercel.app/"),
  title: { default: "Guten Type", template: `%s | Guten Type` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Guten Type",
    description: "",
    images: ["/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guten Type",
    description: "",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/logo.webp", 
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}

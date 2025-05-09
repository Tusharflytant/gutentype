import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Provider } from "@/helper/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://legalclaims.us//"),
  title: { default: "LegalClaims", template: `%s | LegalClaims` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "LegalClaims",
    description: "",
    images: ["/logo-legal.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LegalClaims",
    description: "",
    images: ["/logo-legal.png"],
  },
  icons: {
    icon: "/logo-legalfav.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Tag */}
      <Script
        id="google-tag-manager"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-477HKB4SY3"
      ></Script>
      <Script id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-477HKB4SY3');`}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>

  <Header />
        {children}
        <div className="h-20 bg-white">
          <Footer />
        </div>
        </Provider>
      
      </body>
    </html>
  );
}

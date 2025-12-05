import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KhakiConsult – China Product Sourcing & Import Service",
  description:
    "KhakiConsult offers top-tier China product sourcing, supplier vetting, quality control, shipping assistance, pricing negotiation and consultations. Import safely with trusted China sourcing experts.",
  keywords: [
    "China sourcing agent",
    "Product sourcing from China",
    "China supplier vetting",
    "Importing goods from China",
    "China sourcing company",
    "Quality inspection China",
    "China to Ghana shipping",
    "China wholesale sourcing",
    "Door to door shipping China",
    "KhakiConsult sourcing",
  ],
  authors: [{ name: "KhakiConsult" }],
  creator: "KhakiConsult",
  publisher: "KhakiConsult",
  openGraph: {
    title: "KhakiConsult – Trusted China Product Sourcing Experts",
    description:
      "Import from China with ease. Supplier vetting, sourcing design, pricing negotiation, quality control & shipping support — handled by a bilingual expert team with 10+ years experience.",
    url: "https://yourdomain.com",
    siteName: "KhakiConsult",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://yourdomain.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "KhakiConsult China Sourcing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KhakiConsult – Import From China Easily",
    description:
      "Sourcing agents that make importing fast, safe and transparent. Get supplier vetting, quality checks & shipment support.",
    images: ["https://yourdomain.com/twitter-banner.jpg"],
  },
  category: "International Trade & Product Sourcing",
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
        <Navbar />

        <main className="pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

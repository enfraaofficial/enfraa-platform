import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnFraa | Smart Billing, Invoicing & Finance Workflows",
  description: "Manage billing, invoices, analytics, reports, workflows, and business finances in one powerful platform. Built for modern startups and businesses scaling globally.",
  keywords: ["billing", "invoicing", "finance analytics", "business workflows", "fintech", "startup finance", "SaaS", "Enfraa"],
  authors: [{ name: "EnFraa team" }],
  openGraph: {
    title: "EnFraa | Smart Billing & Finance Workflows",
    description: "Manage billing, invoices, analytics, reports, workflows, and business finances in one powerful platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnFraa | Smart Billing & Finance Workflows",
    description: "Manage billing, invoices, analytics, reports, workflows, and business finances in one powerful platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased font-body bg-dark-bg text-white selection:bg-primary-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شام ماركت — بيع وشراء محلي في سوريا",
  description:
    "أول منصة محلية مخصصة للسوق السوري. بيع وشراء سيارات، عفش، موبايلات، عقارات، وظائف — مع ضمان وخدمة توصيل.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router loads this once in the root layout */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body className="font-body bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}

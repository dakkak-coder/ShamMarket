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
      <body className="font-body bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

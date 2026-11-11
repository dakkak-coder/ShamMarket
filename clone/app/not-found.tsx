import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-16 text-center">
        <p className="text-5xl mb-4" aria-hidden="true">
          🏺
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">الصفحة غير موجودة</h1>
        <p className="text-sm text-gray-500 mb-6">
          يمكن الإعلان انتهى أو الرابط غير صحيح.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-primary">
            الصفحة الرئيسية
          </Link>
          <Link href="/search" className="btn-ghost">
            تصفح الإعلانات
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

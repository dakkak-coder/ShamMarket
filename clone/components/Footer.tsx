import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="container py-8 grid gap-6 sm:grid-cols-3 text-sm">
        <div>
          <p className="font-bold text-damascus-blue-600">شام ماركت</p>
          <p className="mt-2 text-gray-500 leading-relaxed">
            بيع وشراء محلي في سوريا — بأمان وثقة.
          </p>
        </div>
        <nav aria-label="روابط السوق" className="flex flex-col gap-2 text-gray-600">
          <Link href="/search" className="hover:text-damascus-blue-600">
            تصفح الإعلانات
          </Link>
          <Link href="/new" className="hover:text-damascus-blue-600">
            نشر إعلان
          </Link>
          <Link href="/my" className="hover:text-damascus-blue-600">
            إعلاناتي
          </Link>
        </nav>
        <div className="text-gray-500 leading-relaxed">
          <p>دمشق · حلب · اللاذقية · طرطوس</p>
          <p className="mt-2 text-xs text-gray-400">
            نسخة تجريبية — البيانات محلية على جهازك.
          </p>
        </div>
      </div>
    </footer>
  );
}

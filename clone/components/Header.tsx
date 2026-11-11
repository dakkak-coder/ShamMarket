import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container flex flex-wrap items-center gap-3 py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="شام ماركت — الصفحة الرئيسية">
          <Image
            src="/logo.svg"
            alt="شام ماركت"
            width={40}
            height={40}
            className="rounded-lg"
            unoptimized
            priority
          />
          <span className="text-lg font-bold text-damascus-blue-600 hidden sm:inline-block">
            شام ماركت
          </span>
        </Link>

        <div className="flex-1 min-w-[180px] max-w-xl order-3 sm:order-none basis-full sm:basis-auto">
          <form action="/search" className="flex items-center bg-gray-100 rounded-lg px-3 py-2 gap-2">
            <label htmlFor="site-search" className="sr-only">
              ابحث في الإعلانات
            </label>
            <input
              id="site-search"
              type="search"
              name="q"
              placeholder="ابحث عن سيارة، هاتف، عفش..."
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
              dir="rtl"
            />
            <button type="submit" className="btn-primary !px-3 !py-1.5 !text-xs">
              بحث
            </button>
          </form>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2 shrink-0" aria-label="التنقل الرئيسي">
          <Link href="/new" className="btn-accent !px-3 sm:!px-4 !py-2">
            + نشر إعلان
          </Link>
          <Link href="/my" className="px-2 sm:px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
            إعلاناتي
          </Link>
          <Link href="/auth" className="px-2 sm:px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
            تسجيل دخول
          </Link>
        </nav>
      </div>
    </header>
  );
}

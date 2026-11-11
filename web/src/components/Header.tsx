import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container flex items-center gap-3 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.svg"
            alt="شام ماركت"
            width={40}
            height={40}
            className="rounded-lg"
            unoptimized
          />
          <span className="text-lg font-bold text-damascus-blue-600 hidden sm:inline-block">
            شام ماركت
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl">
          <form
            action="/search"
            className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 gap-2"
          >
            <input
              type="search"
              name="q"
              placeholder="ابحث عن سيارة، هاتف، عفش..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
              dir="rtl"
            />
            <button
              type="submit"
              className="btn-primary !px-3 !py-1.5 !text-xs"
            >
              بحث
            </button>
          </form>
        </div>

        {/* Actions */}
        <nav className="flex items-center gap-2 shrink-0">
          <Link
            href="/new"
            className="btn-accent !px-4 !py-2"
          >
            + نشر إعلان
          </Link>
          <Link
            href="/my"
            className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            إعلاناتي
          </Link>
          <Link
            href="/auth"
            className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            تسجيل دخول
          </Link>
        </nav>
      </div>
    </header>
  );
}

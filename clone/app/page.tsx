import Link from "next/link";
import { CategoryPills } from "../components/CategoryPills";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { allListings } from "../lib/repo";

export default function HomePage() {
  const listings = allListings().slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="container pt-8 pb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
            بيع وشراء محلي — بأمان وثقة
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            أكثر من ٥٠٠٠ إعلان نشط في منطقتك الآن
          </p>
        </section>

        <div className="container pb-4">
          <CategoryPills />
        </div>

        <section className="container pb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">أحدث الإعلانات</h2>
            <Link href="/search" className="text-sm text-damascus-blue-600 hover:underline">
              عرض الكل ←
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {listings.map((listing, index) => (
              <ProductCard key={listing.id} listing={listing} priority={index < 2} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

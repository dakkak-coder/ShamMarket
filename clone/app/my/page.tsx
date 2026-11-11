"use client";

import Link from "next/link";
import { EmptyState } from "../../components/EmptyState";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListingRow } from "../../components/ListingRow";
import { StatsCards } from "../../components/StatsCards";
import { toArabicDigits } from "../../lib/format";
import { listingStats } from "../../lib/repo";
import { useMyListings } from "../../lib/store";

export default function MyListingsPage() {
  const { listings, remove } = useMyListings();
  const stats = listingStats(listings);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-2">إعلاناتي</h1>
        <p className="text-sm text-gray-500 mb-6">
          لديك {toArabicDigits(stats.count)} إعلانات · {toArabicDigits(stats.active)} نشط حالياً
        </p>

        <StatsCards count={stats.count} views={stats.views} contacts={stats.contacts} />

        {listings.length > 0 ? (
          <div className="space-y-3">
            {listings.map((listing) => (
              <ListingRow key={listing.id} listing={listing} onDelete={remove} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="لا توجد إعلانات بعد"
            hint="أول إعلان لك يظهر هنا مباشرة"
          />
        )}

        <div className="mt-6 text-center">
          <Link href="/new" className="btn-accent inline-block">
            + نشر إعلان جديد
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

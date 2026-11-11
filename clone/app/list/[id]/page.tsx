import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Footer } from "../../../components/Footer";
import { Gallery } from "../../../components/Gallery";
import { Header } from "../../../components/Header";
import { PriceTag } from "../../../components/PriceTag";
import { ProductCard } from "../../../components/ProductCard";
import { joinMeta, toArabicDigits } from "../../../lib/format";
import { findListing, relatedListings, allListings } from "../../../lib/repo";

export function generateStaticParams() {
  return allListings().map((listing) => ({ id: listing.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = findListing(id);
  return { title: listing ? `${listing.title} — شام ماركت` : "الإعلان غير موجود — شام ماركت" };
}

async function ListingBody({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = findListing(id);
  if (!listing) notFound();

  const related = relatedListings(listing);

  return (
    <main className="flex-1 container py-6">
      <Link href="/search" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block">
        → العودة للبحث
      </Link>

      <Gallery images={listing.images} title={listing.title} category={listing.category} />

      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{listing.title}</h1>
      <PriceTag price={listing.price} negotiable={listing.negotiable} size="lg" />

      <div className="bg-white rounded-xl p-4 border border-gray-200 my-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-damascus-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
          {listing.seller.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-800">
            {listing.seller.name}
            {listing.seller.verified ? " — بائع موثّق ✓" : ""}
          </p>
          <p className="text-xs text-gray-400">
            {joinMeta([listing.location, listing.seller.memberSince])}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">الوصف</h2>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          {listing.description}
        </p>
        <p className="text-xs text-gray-400 mt-3">
          {toArabicDigits(listing.views)} مشاهدة · {toArabicDigits(listing.contacts)} تواصل
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button type="button" className="btn-primary text-center">
          💬 ابعت رسالة
        </button>
        <a href="tel:+963000000000" className="btn-accent text-center">
          📞 اتصل بالبائع
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        📍 {listing.location} · نُشر {listing.time}
      </p>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">إعلانات مشابهة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {related.map((item) => (
              <ProductCard key={item.id} listing={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default function ListingPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Suspense
        fallback={
          <div className="flex-1 container py-10" aria-busy="true">
            <p className="text-sm text-gray-400">جارٍ تحميل الإعلان…</p>
          </div>
        }
      >
        <ListingBody params={params} />
      </Suspense>
      <Footer />
    </div>
  );
}

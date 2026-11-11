import { Suspense } from "react";
import { CategoryPills } from "../../components/CategoryPills";
import { EmptyState } from "../../components/EmptyState";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { SearchFilters } from "../../components/SearchFilters";
import { toArabicDigits } from "../../lib/format";
import { allListings, searchListings } from "../../lib/repo";

type SearchParams = {
  q?: string | string[];
  category?: string | string[];
  location?: string | string[];
};

const first = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

async function SearchResults({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const query = first(params.q) ?? "";
  const category = first(params.category) ?? "all";
  const location = first(params.location) ?? "";

  const results = searchListings({ q: query, category, location }, allListings());
  const hasFilters = Boolean(query || location || category !== "all");

  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <h1 className="text-xl font-bold text-gray-900">نتائج البحث</h1>
        <p className="text-sm text-gray-500" aria-live="polite">
          {toArabicDigits(results.length)} إعلان
          {query ? ` لـ «${query}»` : ""}
        </p>
      </div>

      <SearchFilters
        initialQuery={query}
        initialCategory={category}
        initialLocation={location}
      />

      <div className="mt-4">
        <CategoryPills active={category} />
      </div>

      <section className="mt-4">
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {results.map((listing) => (
              <ProductCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={hasFilters ? "ما في نتائج مطابقة" : "ما في إعلانات بعد"}
            hint={hasFilters ? "جرّب كلمة أعم أو موقعاً مختلفاً" : "كن أول من ينشر إعلاناً في منطقتك"}
            icon="🔍"
          />
        )}
      </section>
    </>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-6">
        <Suspense
          fallback={
            <div aria-busy="true">
              <p className="text-sm text-gray-400">جارٍ تحميل النتائج…</p>
            </div>
          }
        >
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

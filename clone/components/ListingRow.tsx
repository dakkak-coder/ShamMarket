"use client";

import Link from "next/link";
import { formatCount, toArabicDigits } from "../lib/format";
import type { Listing } from "../lib/types";

export function ListingRow({
  listing,
  onDelete,
}: {
  listing: Listing;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-3 sm:gap-4">
      <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center text-xl" aria-hidden="true">
        {listing.category === "cars" ? "🚗" : listing.category === "furniture" ? "🛋️" : "📱"}
      </div>
      <div className="flex-1 min-w-0">
        <Link
          href={`/list/${listing.id}`}
          className="text-sm font-medium text-gray-800 hover:text-damascus-blue-600 line-clamp-1"
        >
          {listing.title}
        </Link>
        <p className="text-xs text-gray-400 mt-1">
          {listing.status === "active" ? "🟢 نشط" : "⚪ منتهي"} · {toArabicDigits(listing.views)}{" "}
          مشاهدة · {formatCount(listing.contacts)} تواصل
        </p>
      </div>
      <div className="flex gap-2 shrink-0">
        <Link
          href={`/list/${listing.id}`}
          className="px-3 py-1.5 text-xs bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
        >
          عرض
        </Link>
        <button
          type="button"
          onClick={() => onDelete(listing.id)}
          className="px-3 py-1.5 text-xs bg-gray-100 rounded-lg text-gray-600 hover:bg-terracotta-100 hover:text-terracotta-700"
        >
          حذف
        </button>
      </div>
    </div>
  );
}

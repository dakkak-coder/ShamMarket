import Link from "next/link";
import type { Listing } from "../lib/types";
import { ListingImage } from "./ListingImage";
import { PriceTag } from "./PriceTag";

export function ProductCard({
  listing,
  priority = false,
}: {
  listing: Listing;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/list/${listing.id}`}
      className="card card-hover block focus-visible:outline-2 focus-visible:outline-damascus-blue-500"
    >
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <ListingImage
          src={listing.image}
          alt={listing.title}
          category={listing.category}
          priority={priority}
        />
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-md text-gray-700">
          {listing.time}
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm text-gray-800 line-clamp-2 leading-relaxed">{listing.title}</h3>
        <PriceTag price={listing.price} negotiable={listing.negotiable} size="md" />
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <span aria-hidden="true">📍</span>
          <span className="truncate">{listing.location}</span>
        </p>
      </div>
    </Link>
  );
}

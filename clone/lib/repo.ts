import { myListingIds, seedListings } from "./data";
import type { CategoryId, Listing } from "./types";

export function allListings(): Listing[] {
  return seedListings.filter((listing) => listing.status === "active");
}

export function findListing(id: string): Listing | undefined {
  return seedListings.find((listing) => listing.id === id);
}

export function mySeedListings(): Listing[] {
  return myListingIds
    .map((id) => seedListings.find((listing) => listing.id === id))
    .filter((listing): listing is Listing => Boolean(listing));
}

export interface SearchOptions {
  q?: string;
  category?: string;
  location?: string;
}

export function searchListings(
  options: SearchOptions,
  source: Listing[] = allListings(),
): Listing[] {
  const query = options.q?.trim().toLowerCase() ?? "";
  const category = options.category?.trim();
  const location = options.location?.trim();

  return source.filter((listing) => {
    if (category && category !== "all" && listing.category !== (category as CategoryId)) {
      return false;
    }
    if (location && listing.location !== location) return false;
    if (!query) return true;
    return `${listing.title} ${listing.description} ${listing.location}`
      .toLowerCase()
      .includes(query);
  });
}

export function relatedListings(listing: Listing, limit = 4): Listing[] {
  return allListings()
    .filter((candidate) => candidate.id !== listing.id)
    .sort((a, b) => {
      const aScore = a.category === listing.category ? 0 : 1;
      const bScore = b.category === listing.category ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);
}

export function listingStats(listings: Listing[]) {
  return {
    count: listings.length,
    active: listings.filter((listing) => listing.status === "active").length,
    views: listings.reduce((total, listing) => total + listing.views, 0),
    contacts: listings.reduce((total, listing) => total + listing.contacts, 0),
  };
}

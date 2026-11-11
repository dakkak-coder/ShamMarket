"use client";

import { useSyncExternalStore } from "react";
import { mySeedListings } from "./repo";
import type { Listing, ListingDraft } from "./types";

const STORAGE_KEY = "sham-market:listings:v1";
const CHANGE_EVENT = "sham-market:listings-changed";
const EMPTY: Listing[] = [];

const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cachedListings: Listing[] = EMPTY;

function parse(raw: string | null): Listing[] {
  if (!raw) return EMPTY;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed.filter((entry): entry is Listing => {
      return Boolean(entry) && typeof entry === "object" && "id" in entry && "title" in entry;
    });
  } catch {
    return EMPTY;
  }
}

function getSnapshot(): Listing[] {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedListings = parse(raw);
  }
  return cachedListings;
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function writeCreated(listings: Listing[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function createListing(draft: ListingDraft): Listing {
  const listing: Listing = {
    id: `u${Date.now().toString(36)}`,
    title: draft.title.trim(),
    category: draft.category,
    price: draft.price.trim(),
    negotiable: draft.negotiable,
    location: draft.location,
    city: draft.location.split("—")[0]?.trim() || draft.location,
    time: "الآن",
    description: draft.description.trim(),
    image: draft.image,
    images: draft.images,
    status: "active",
    views: 0,
    contacts: 0,
    seller: { name: "أنت", verified: false, memberSince: "عضو جديد" },
  };
  writeCreated([listing, ...getSnapshot()]);
  return listing;
}

export function deleteListing(id: string) {
  writeCreated(getSnapshot().filter((listing) => listing.id !== id));
}

/**
 * My listings = seeded demo listings plus anything created in this browser.
 * Created listings live in localStorage because this build has no backend,
 * matching the reference app's mock-data constraint.
 */
export function useMyListings() {
  const created = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);

  return {
    listings: [...created, ...mySeedListings()],
    remove: deleteListing,
  };
}

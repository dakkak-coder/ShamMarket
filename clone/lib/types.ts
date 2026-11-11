export type CategoryId =
  | "mobile"
  | "electronics"
  | "cars"
  | "furniture"
  | "property"
  | "jobs"
  | "free"
  | "animals"
  | "services";

export type ListingStatus = "active" | "expired";

export interface Category {
  id: CategoryId | "all";
  label: string;
  emoji: string;
}

export interface Seller {
  name: string;
  verified: boolean;
  memberSince: string;
}

export interface Listing {
  id: string;
  title: string;
  category: CategoryId;
  /** Display price, Arabic-Indic digits, as shown in the reference app. */
  price: string;
  negotiable: boolean;
  location: string;
  city: string;
  /** Relative time label, e.g. "منذ ساعتين". */
  time: string;
  description: string;
  image: string;
  images: string[];
  status: ListingStatus;
  views: number;
  contacts: number;
  seller: Seller;
}

export interface ListingDraft {
  title: string;
  category: CategoryId;
  price: string;
  negotiable: boolean;
  description: string;
  location: string;
  image: string;
  images: string[];
}

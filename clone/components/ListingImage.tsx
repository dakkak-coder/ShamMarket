"use client";

import Image from "next/image";
import { useState } from "react";

const fallbackTint: Record<string, string> = {
  mobile: "from-damascus-blue-100 to-damascus-blue-200",
  electronics: "from-saffron-100 to-saffron-200",
  cars: "from-damascus-blue-50 to-damascus-blue-100",
  furniture: "from-terracotta-50 to-terracotta-100",
  property: "from-olive-50 to-olive-100",
  jobs: "from-gray-100 to-gray-200",
  free: "from-saffron-100 to-saffron-200",
  animals: "from-olive-50 to-saffron-100",
  services: "from-terracotta-50 to-saffron-100",
};

/**
 * Remote listing photos with a branded, deterministic fallback tile.
 * The fallback keeps the layout honest when the photo host is unreachable.
 */
export function ListingImage({
  src,
  alt,
  category,
  priority = false,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: {
  src: string;
  alt: string;
  category: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const tint = fallbackTint[category] ?? "from-gray-100 to-gray-200";

  if (!src || failed) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br ${tint} flex items-center justify-center`}
        role="img"
        aria-label={alt}
      >
        <span className="text-4xl opacity-60" aria-hidden="true">
          📷
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}

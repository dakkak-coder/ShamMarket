"use client";

import { useState } from "react";
import { ListingImage } from "./ListingImage";

export function Gallery({
  images,
  title,
  category,
}: {
  images: string[];
  title: string;
  category: string;
}) {
  const gallery = images.length > 0 ? images : [""];
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
      <div className="relative w-full aspect-[16/10] max-h-[520px] bg-gray-100">
        <ListingImage
          src={gallery[selected]}
          alt={`${title} — صورة ${selected + 1}`}
          category={category}
          priority
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {gallery.length > 1 ? (
        <div className="flex gap-2 px-3 py-2 overflow-x-auto scrollbar-none">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`عرض الصورة ${index + 1}`}
              aria-pressed={selected === index}
              className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                selected === index ? "border-damascus-blue-600" : "border-transparent hover:border-damascus-blue-300"
              }`}
            >
              <ListingImage
                src={image}
                alt=""
                category={category}
                sizes="64px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

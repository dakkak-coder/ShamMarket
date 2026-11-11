"use client";

import { useMemo, useState } from "react";
import { toArabicDigits } from "../lib/format";

const MAX_PHOTOS = 8;

/**
 * Local photo picker. Selection is previewed in the browser only; this build
 * has no upload endpoint, so the images are not persisted with the listing.
 */
export function PhotoDropzone() {
  const [files, setFiles] = useState<File[]>([]);

  const previews = useMemo(
    () => files.map((file) => ({ name: file.name, url: URL.createObjectURL(file) })),
    [files],
  );

  function addFiles(selected: FileList | null) {
    if (!selected) return;
    setFiles((current) => [...current, ...Array.from(selected)].slice(0, MAX_PHOTOS));
  }

  return (
    <div>
      <label
        htmlFor="photos"
        className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-400 text-sm cursor-pointer hover:border-damascus-blue-500 hover:text-gray-600 transition-colors"
      >
        📷 اضغط لإضافة صور (حتى {toArabicDigits(MAX_PHOTOS)} صور)
      </label>
      <input
        id="photos"
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(event) => addFiles(event.target.files)}
      />
      <p className="text-xs text-gray-400 mt-2">
        المعاينة محلية فقط في هذه النسخة التجريبية — لا يتم رفع الصور.
      </p>

      {previews.length > 0 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2">
          {previews.map((preview, index) => (
            <li
              key={`${preview.name}-${index}`}
              className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview.url} alt={preview.name} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setFiles((current) => current.filter((_, position) => position !== index))}
                className="absolute top-1 left-1 bg-white/90 rounded-full w-6 h-6 text-xs text-gray-700"
                aria-label={`إزالة الصورة ${index + 1}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

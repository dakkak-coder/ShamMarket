"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PhotoDropzone } from "../../components/PhotoDropzone";
import { categories, locations } from "../../lib/data";
import { createListing } from "../../lib/store";
import type { CategoryId } from "../../lib/types";

export default function NewListingPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<CategoryId>("mobile");
  const [price, setPrice] = useState("");
  const [negotiable, setNegotiable] = useState(false);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState<string>(locations[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (title.trim().length < 4) nextErrors.title = "اكتب عنواناً واضحاً (٤ أحرف على الأقل)";
    if (!price.trim()) nextErrors.price = "أدخل السعر أو اكتب «مجاني»";
    if (description.trim().length < 10) nextErrors.description = "أضف وصفاً من ١٠ أحرف على الأقل";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    createListing({
      title,
      category,
      price,
      negotiable,
      description,
      location,
      image: "",
      images: [],
    });

    setSaved(true);
    router.push("/my");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8 max-w-xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-6">نشر إعلان جديد</h1>

        <form onSubmit={submit} className="bg-white rounded-xl border border-gray-200 p-5 space-y-4" noValidate>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              عنوان الإعلان <span className="text-terracotta-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="مثال: iPhone 15 Pro Max 256GB نظيف"
              className="field"
              aria-invalid={Boolean(errors.title)}
              aria-describedby={errors.title ? "title-error" : undefined}
            />
            {errors.title ? (
              <p id="title-error" className="text-xs text-terracotta-600 mt-1">
                {errors.title}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              الفئة
            </label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value as CategoryId)}
              className="field"
            >
              {categories
                .filter((item) => item.id !== "all")
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-3 items-end">
            <div className="flex-1 min-w-[160px]">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                السعر <span className="text-terracotta-500">*</span>
              </label>
              <input
                id="price"
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                placeholder="١٢٠٠$"
                className="field"
                aria-invalid={Boolean(errors.price)}
                aria-describedby={errors.price ? "price-error" : undefined}
              />
              {errors.price ? (
                <p id="price-error" className="text-xs text-terracotta-600 mt-1">
                  {errors.price}
                </p>
              ) : null}
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer pb-3">
              <input
                type="checkbox"
                checked={negotiable}
                onChange={(event) => setNegotiable(event.target.checked)}
                className="rounded"
              />
              قابل للتفاوض
            </label>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              الوصف <span className="text-terracotta-500">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="اكتب تفاصيل الإعلان هنا..."
              className="field resize-none"
              aria-invalid={Boolean(errors.description)}
              aria-describedby={errors.description ? "description-error" : undefined}
            />
            {errors.description ? (
              <p id="description-error" className="text-xs text-terracotta-600 mt-1">
                {errors.description}
              </p>
            ) : null}
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">صور</span>
            <PhotoDropzone />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              الموقع
            </label>
            <select
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="field"
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn-accent w-full text-center py-3">
            نشر الإعلان
          </button>
          {saved ? (
            <p className="text-xs text-olive-600 text-center" role="status">
              تم حفظ الإعلان محلياً — تجده في «إعلاناتي».
            </p>
          ) : null}
        </form>
      </main>

      <Footer />
    </div>
  );
}

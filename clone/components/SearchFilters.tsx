"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories, locations } from "../lib/data";

export function SearchFilters({
  initialQuery = "",
  initialCategory = "all",
  initialLocation = "",
}: {
  initialQuery?: string;
  initialCategory?: string;
  initialLocation?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState(initialLocation);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category && category !== "all") params.set("category", category);
    if (location) params.set("location", location);
    const suffix = params.toString();
    router.push(suffix ? `/search?${suffix}` : "/search");
  }

  function reset() {
    setQuery("");
    setCategory("all");
    setLocation("");
    router.push("/search");
  }

  return (
    <form onSubmit={submit} className="card p-4 grid gap-3 sm:grid-cols-[1fr_auto_auto_auto] sm:items-end">
      <div>
        <label htmlFor="filter-q" className="block text-sm font-medium text-gray-700 mb-1">
          كلمة البحث
        </label>
        <input
          id="filter-q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="سيارة، هاتف، عفش..."
          className="field"
          dir="rtl"
        />
      </div>

      <div className="sm:w-40">
        <label htmlFor="filter-category" className="block text-sm font-medium text-gray-700 mb-1">
          الفئة
        </label>
        <select
          id="filter-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="field"
        >
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:w-48">
        <label htmlFor="filter-location" className="block text-sm font-medium text-gray-700 mb-1">
          الموقع
        </label>
        <select
          id="filter-location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="field"
        >
          <option value="">كل المواقع</option>
          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="btn-primary flex-1 sm:flex-none">
          بحث
        </button>
        <button type="button" onClick={reset} className="btn-ghost">
          مسح
        </button>
      </div>
    </form>
  );
}

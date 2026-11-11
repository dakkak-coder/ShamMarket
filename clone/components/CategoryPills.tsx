import Link from "next/link";
import { categories } from "../lib/data";

export function CategoryPills({ active }: { active?: string }) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2" role="navigation" aria-label="الفئات">
      {categories.map((category) => {
        const isActive = (active ?? "all") === category.id;
        const href = category.id === "all" ? "/search" : `/search?category=${category.id}`;
        return (
          <Link
            key={category.id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
              isActive
                ? "bg-damascus-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-damascus-blue-500 hover:text-white"
            }`}
          >
            <span aria-hidden="true">{category.emoji}</span> {category.label}
          </Link>
        );
      })}
    </div>
  );
}

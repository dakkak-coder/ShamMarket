import Link from "next/link";

const categories = [
  { id: "all", label: "الكل" },
  { id: "mobile", label: "📱 موبايلات" },
  { id: "electronics", label: "⚡ إلكترونيات" },
  { id: "cars", label: "🚗 سيارات" },
  { id: "furniture", label: "🛋️ عفش" },
  { id: "property", label: "🏠 عقارات" },
  { id: "jobs", label: "💼 وظائف" },
  { id: "free", label: "🎁 مجاني" },
  { id: "animals", label: "🐾 حيوانات" },
  { id: "services", label: "🔧 خدمات" },
];

export function CategoryPills() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/search?category=${cat.id}`}
          className="shrink-0 px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-damascus-blue-500 hover:text-white transition-colors whitespace-nowrap"
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}

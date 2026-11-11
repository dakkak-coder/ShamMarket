import { formatCount } from "../lib/format";

export function StatsCards({
  count,
  views,
  contacts,
}: {
  count: number;
  views: number;
  contacts: number;
}) {
  const items = [
    { value: count, label: "إعلانات", tone: "text-damascus-blue-600" },
    { value: views, label: "مشاهدة", tone: "text-gray-800" },
    { value: contacts, label: "تواصل", tone: "text-terracotta-500" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-lg p-3 text-center border border-gray-200"
        >
          <p className={`text-2xl font-bold ${item.tone}`}>{formatCount(item.value)}</p>
          <p className="text-xs text-gray-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

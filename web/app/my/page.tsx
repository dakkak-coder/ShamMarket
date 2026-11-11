import { Header } from "../../components/Header";
import Link from "next/link";

// Mock data
const myListings = [
  { id: "1", title: "Samsung Galaxy S23", status: "active", views: 142, contacts: 8 },
  { id: "2", title: "Hyundai Tucson 2020", status: "active", views: 89, contacts: 3 },
  { id: "3", title: "كنب كوفي ١+٢", status: "expired", views: 234, contacts: 12 },
];

export default function MyListingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container py-8 max-w-xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          إعلاناتي
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          لديك ٣ إعلانات · ٢ نشط حالياً
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <p className="text-2xl font-bold text-damascus-blue-600">٣</p>
            <p className="text-xs text-gray-500">إعلانات</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <p className="text-2xl font-bold text-gray-800">٤٦٥</p>
            <p className="text-xs text-gray-500">مشاهدة</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
            <p className="text-2xl font-bold text-terracotta-500">٢٣</p>
            <p className="text-xs text-gray-500">تواصل</p>
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-3">
          {myListings.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0" />
              <div className="flex-1 min-w-0">
                <Link
                  href={`/list/${item.id}`}
                  className="text-sm font-medium text-gray-800 hover:text-damascus-blue-600"
                >
                  {item.title}
                </Link>
                <p className="text-xs text-gray-400 mt-1">
                  {item.status === "active" ? "🟢 نشط" : "⚪ منتهي"} · {item.views} مشاهدة · {item.contacts} تواصل
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                  تعديل
                </button>
                <button className="px-3 py-1.5 text-xs bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no listings */}
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-2">📦</p>
          <p className="text-sm">لا توجد إعلانات بعد</p>
          <a href="/new" className="btn-primary inline-block mt-4">
            + نشر إعلان جديد
          </a>
        </div>
      </main>
    </div>
  );
}

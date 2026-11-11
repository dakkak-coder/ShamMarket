import { Header } from "../../components/Header";

export default function NewListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container py-8 max-w-xl mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          نشر إعلان جديد
        </h1>

        <form className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              عنوان الإعلان
            </label>
            <input
              type="text"
              placeholder="مثال: iPhone 15 Pro Max 256GB نظيف"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-damascus-blue-500 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              الفئة
            </label>
            <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white">
              <option>موبايلات</option>
              <option>إلكترونيات</option>
              <option>سيارات</option>
              <option>عفش</option>
              <option>عقارات</option>
              <option>وظائف</option>
              <option>حيوانات</option>
              <option>خدمات</option>
              <option>مجاني</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                السعر
              </label>
              <input
                type="text"
                placeholder="١٢٠٠$"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded" />
                قابل للتفاوض
              </label>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              الوصف
            </label>
            <textarea
              rows={4}
              placeholder="اكتب تفاصيل الإعلان هنا..."
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm resize-none"
            />
          </div>

          {/* Photos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              صور
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-400 text-sm cursor-pointer hover:border-damascus-blue-500 hover:text-gray-600 transition-colors">
              📷 اضغط لإضافة صور (حتى 8 صور)
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              الموقع
            </label>
            <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white">
              <option>دمشق — المزة</option>
              <option>دمشق — أبو رمانة</option>
              <option>دمشق — كفرسوسة</option>
              <option>حلب — الحواجة</option>
              <option>اللاذقية</option>
              <option>طرطوس</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="btn-accent w-full text-center py-3">
            نشر الإعلان
          </button>
        </form>
      </main>
    </div>
  );
}

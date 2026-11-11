import { Header } from "../../components/Header";

// Mock detail page for testing locally
export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container py-8">
        {/* Back */}
        <a href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block">
          → العودة للبحث
        </a>

        {/* Image Gallery */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
          <div className="w-full aspect-[16/10] bg-gray-100">
            <img
              src="https://picsum.photos/seed/detail/800/500"
              alt="صورة المنتج"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 px-3 py-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-lg bg-gray-100 border-2 border-transparent hover:border-damascus-blue-600 cursor-pointer overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/seed/thumb${i}/64/64`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title & Price */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Samsung Galaxy S23 Ultra 256GB بحالة ممتازة
        </h1>

        <p className="text-2xl font-bold text-damascus-blue-600 mb-6">
          ١٢٠٠$ نقداً
        </p>

        {/* Seller Info */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-damascus-blue-500 flex items-center justify-center text-white text-sm font-bold">
              أ
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">أحمد — بائع موثّق ✓</p>
              <p className="text-xs text-gray-400">دمشق — المزة · عضو منذ ٦ أشهر</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">الوصف</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            الجهاز بحالة ممتازة، شاحن أصلي، كرتون كامل.
            بدون خدوش أو أعطال.
            ضمان ٤٨ ساعة — إذا ما لقيت زي ما قلت، أرجع.
            ممكن أشوفك في نقطة الضمان (محل البرازان — المزة).
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="btn-primary text-center">
            💬 ابعت رسالة
          </button>
          <button className="btn-accent text-center">
            📞 اتصل بالبائع
          </button>
        </div>

        {/* Location */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          📍 دمشق — المزة · نشر منذ ساعتين
        </p>
      </main>
    </div>
  );
}

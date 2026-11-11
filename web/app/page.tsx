import { CategoryPills } from "../components/CategoryPills";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Header";

// Mock data for demo/testing on local machine
const mockListings = [
  {
    id: "1",
    title: "Samsung Galaxy S23 Ultra 256GB بحالة ممتازة",
    price: "١٢٠٠$ نقد",
    image: "https://picsum.photos/seed/samsung/400/300",
    location: "دمشق — المزة",
    time: "منذ ساعتين",
  },
  {
    id: "2",
    title: "شقة مفروشة ٣ غرف — أبو رمانة",
    price: "٣٥٠٠$ إيجار شهري",
    image: "https://picsum.photos/seed/apt/400/300",
    location: "دمشق — أبو رمانة",
    time: "منذ ٥ ساعات",
  },
  {
    id: "3",
    title: "Hyundai Tucson 2020 فل كامل — كمبيوتر جديد",
    price: "٨٥٠٠$",
    image: "https://picsum.photos/seed/car/400/300",
    location: "اللاذقية",
    time: "منذ يوم",
  },
  {
    id: "4",
    title: "كنب كوفي ١+١+٣ — استخدم شهر واحد",
    price: "٨٠٠$",
    image: "https://picsum.photos/seed/sofa/400/300",
    location: "حلب — الحواجة",
    time: "منذ ٣ ساعات",
  },
  {
    id: "5",
    title: "آيفون ١٥ برو ماكس ٢٥٦ جيجا — بضمان ٤٨ ساعة",
    price: "١١٠٠$ نقداً",
    image: "https://picsum.photos/seed/iphone/400/300",
    location: "دمشق — الميدان",
    time: "منذ ساعة",
  },
  {
    id: "6",
    title: "تابلت iPad Air 2024 مع قلم",
    price: "٧٥٠$",
    image: "https://picsum.photos/seed/ipad/400/300",
    location: "طرطوس",
    time: "منذ ١٢ ساعة",
  },
  {
    id: "7",
    title: "سيارة كيا سورينتو 2022 — كمبيوتر نظيف",
    price: "٩٢٠٠$",
    image: "https://picsum.photos/seed/kia/400/300",
    location: "دمشق — قدسيا",
    time: "منذ ٦ ساعات",
  },
  {
    id: "8",
    title: "ثلاجة سامسونج ٦٠٠ لتر — نظيفة",
    price: "٦٥٠$",
    image: "https://picsum.photos/seed/fridge/400/300",
    location: "دمشق — كفرسوسة",
    time: "منذ ٤ ساعات",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="container py-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          بيع وشراء محلي — بأمان وثقة
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          أكثر من ٥٠٠٠ إعلان نشط في منطقتك الآن
        </p>
      </section>

      {/* Categories */}
      <div className="container pb-4">
        <CategoryPills />
      </div>

      {/* Listings Grid */}
      <section className="container pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            أحدث الإعلانات
          </h2>
          <a href="/search" className="text-sm text-damascus-blue-600 hover:underline">
            عرض الكل ←
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mockListings.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

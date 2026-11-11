# شام ماركت — Sham Market

> **بيع وشراء محلي في سوريا — بأمان وثقة**

أول منصة مخصصة للسوق السوري، مبنيّة على الهوية البصرية السورية الجديدة
(ليش蓝 Kleinanzeigen). تدعم الويب + iOS + Android من نفس الكود.

## 📐 البنية

```
ShamMarket/
├── web/          # Next.js 15 (App Router, Tailwind v4, RTL native)
├── mobile/       # Expo (React Native) — iOS + Android
├── design/       # الهوية البصرية السورية الجديدة (ألوان، خط، شعار SVG)
└── README.md
```

## 🚀 التشغيل محلياً

```bash
# Web
cd web && npm install && npm run dev

# Mobile (Web preview)
cd mobile && npm install && npx expo start --web
```

## 🎨 الهوية البصرية

- **الأزرق الدمشقي** `#2c4a72` — اللون الأساسي (سماء الجامع الأموي)
- **الطيني/التراكوتا** `#e05a3a` — لون التأكيد (جدران دمشق القديمة)
- **الزعفران/الذهبي** `#f5a82c` — لون التمييز
- **الزيتوني** `#3f8a3f` — الثقة والموثوقية
- **الخط:** Noto Kufi Arabic / Tajawal (عربي) + Inter (إنجليزي)
- **الشعار:** `/design/logo.svg` (بوابة دمشقية هندسية)

## ✅ حالة المشروع

| المكون | الحالة |
|--------|--------|
| Web (Next.js) | 🟢 جاهز للتجربة |
| Mobile (Expo) | 🟡 يحتاج `npm install` |
| الهوية البصرية | 🟢 جاهزة |
| GitHub | 🟢 مرفوع |

## 📋 التالي

- [ ] إضافة mock API + dummy data
- [ ] testing: run dev server and verify pages
- [ ] polish: add loading states, empty states
- [ ] build: `npm run build` for web + `npx expo build:web`

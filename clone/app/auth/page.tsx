"use client";

import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8 max-w-md mx-auto">
        <h1 className="text-xl font-bold text-gray-900 mb-6">تسجيل الدخول إلى شام ماركت</h1>

        <div className="card p-5">
          <div className="grid grid-cols-2 gap-2 mb-5" role="tablist" aria-label="نوع الحساب">
            <button
              type="button"
              role="tab"
              aria-selected={mode === "signin"}
              onClick={() => {
                setMode("signin");
                setSubmitted(false);
              }}
              className={`py-2 rounded-lg text-sm font-semibold transition-colors ${
                mode === "signin"
                  ? "bg-damascus-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              دخول
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "signup"}
              onClick={() => {
                setMode("signup");
                setSubmitted(false);
              }}
              className={`py-2 rounded-lg text-sm font-semibold transition-colors ${
                mode === "signup"
                  ? "bg-damascus-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              حساب جديد
            </button>
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {mode === "signup" ? (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم
                </label>
                <input id="name" type="text" className="field" placeholder="اسمك الكامل" autoComplete="name" />
              </div>
            ) : null}

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                رقم الموبايل
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                className="field"
                placeholder="09xx xxx xxx"
                autoComplete="tel"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                كلمة المرور
              </label>
              <input
                id="password"
                type="password"
                className="field"
                placeholder="••••••••"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
              />
            </div>

            <button type="submit" className="btn-primary w-full text-center py-3">
              {mode === "signin" ? "دخول" : "إنشاء حساب"}
            </button>

            {submitted ? (
              <p className="text-xs text-gray-500 text-center" role="status">
                نسخة تجريبية: الحساب غير متصل بخادم، لا يتم إرسال أي بيانات.
              </p>
            ) : null}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // تحميل الترجمة من ملفات
  .use(LanguageDetector) // اكتشاف لغة المستخدم تلقائياً
  .use(initReactI18next) // ربط i18n مع React
  .init({
    fallbackLng: "en", // لغة افتراضية
    debug: true,        // إظهار تنبيهات بالكونسول

    interpolation: {
      escapeValue: false, // لا تهرب HTML
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // مسار ملفات الترجمة
    },
  });

export default i18n;

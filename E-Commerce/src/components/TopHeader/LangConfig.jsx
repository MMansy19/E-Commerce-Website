// LangConfig.jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize language
const savedLang = localStorage.getItem("lang");
const defaultLang = savedLang || "en";

i18n.use(initReactI18next).init({
  lng: defaultLang,
  resources: {
    en: {
      translation: {
        dir: "ltr",
        topHeader:
          "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
        shop: "ShopNow",
        welcome: "Welcome to the E-Commerce Website",
      },
    },
    gr: {
      translation: {
        dir: "ltr",
        topHeader:
          "Sommerschlussverkauf für alle Badeanzüge und kostenloser Expressversand – 50 % RABATT!",
        shop: "Jetzt einkaufen",
        welcome: "Willkommen auf der E-Commerce-Website",
      },
    },
    ar: {
      translation: {
        dir: "rtl",
        topHeader:
          "تخفيضات الصيف على جميع بدلات السباحة والتوصيل السريع المجاني - خصم 50%!",
        shop: "تسوق الآن",
        welcome: "مرحبًا بك في موقع التجارة الإلكترونية",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uzNavbar from "../locales/uz/navbar.json"
import enNavbar from "../locales/eng/navbar.json"
import ruNavbar from "../locales/rus/navbar.json"
import frNavbar from "../locales/fr/navbar.json"


i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        navbar: uzNavbar,
      },
      en: {
        navbar: enNavbar,
      },
      ru: {
        navbar: ruNavbar,
      },
      fr: {
        navbar: frNavbar,
      },
    },
    fallbackLng: "uz",
    supportedLngs: ["uz", "en", "ru", "fr"],
    defaultNS: "navbar",
    ns: ["navbar"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18next;

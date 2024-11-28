import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/en/translation.json'
import id from './locales/id/translation.json'
import th from './locales/th/translation.json'
import fil from './locales/fil/translation.json'
import km from './locales/km/translation.json'
import ms from './locales/ms/translation.json'
import my from './locales/my/translation.json'
import vi from './locales/vi/translation.json'



i18n.use(initReactI18next).init({
    resources:{
        en:{translation:en},
        id:{translation:id},
        th:{translation:th},
        fil:{translation:fil},
        km:{translation:km},
        ms:{translation:ms},
        my:{translation:my},
        vi:{translation:vi},
    },
    fallbackLng:"en",
    interpolation:{
        escapeValue:false
    }
})

export default i18n
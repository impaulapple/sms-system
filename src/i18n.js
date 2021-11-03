import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enusJson from "./translation/en-us.json";
import zhtwJson from "./translation/zh-tw.json";
import zhcnJson from "./translation/zh-cn.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    'en_us': {
        translation: enusJson
    },
    'zh_tw': {
        translation: zhtwJson
    },
    'zh_cn': {
        translation: zhcnJson
    }
};

const getDefaultLanguage = () =>{
    let sOrgCode = process.env.REACT_APP_COUNTRY && process.env.REACT_APP_COUNTRY.trim();
    switch (sOrgCode) {
        case "CN":
            return 'zh_cn';
        case "TW":
            return 'zh_tw';
        default:
            return 'en_us';
    }
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getDefaultLanguage(),
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
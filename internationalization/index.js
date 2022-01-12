import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_id from '../assets/languages/common/id.json';
import common_en from '../assets/languages/common/en.json';

i18n.use(initReactI18next).init({
  lng: 'id',
  fallbackLng: 'id',
  debug: process.env.NODE_ENV !== 'production',
  interpolation: {
    escapeValue: false
  },
  resources: {
    id: {
      common: common_id
    },
    en: {
      common: common_en
    }
  }
});

export default i18n;

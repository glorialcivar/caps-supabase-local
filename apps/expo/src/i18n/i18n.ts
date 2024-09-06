import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import en from "./locales/en.json";
import es from "./locales/es.json";

const translations = { en, es };

export const i18n = new I18n(translations, {
  defaultLocale: "es",
  locale: Localization.locale,
  enableFallback: true
});

export const t = i18n.t;

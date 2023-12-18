import { getLocales } from "expo-localization";
import pt from "./pt";
import en from "./en";
import { I18n } from "i18n-js";
import React from "react";

export const LangContext = React.createContext();
export const DeviceLanguage = getLocales()[0].languageCode;
export const i = new I18n({
  pt: {
    ...pt,
  },
  en: {
    ...en,
  },
});


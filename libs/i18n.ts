enum Language {
  en = 'en',
};
type Translation = Record<string, string>;
type Keyset = Record<Language, Translation>;

let activeLanguage = Language.en;
let activeTranslation: Translation | null = null;

export const setLanguage = (lng: Language) => {
  activeLanguage = lng;
}

export const i18nUse = (keyset: Keyset) => {
  activeTranslation = keyset[activeLanguage];
}

export const i18n = (key: string) => activeTranslation[key] || key;
export const languages = {
  en: 'English',
  nl: 'Nederlands',
} as const;

export const defaultLang = 'en' as const;
export type Lang = keyof typeof languages;
export const supportedLangs = Object.keys(languages) as Lang[];

import { defaultLang, type Lang, supportedLangs } from './config';

import enUi from './en/ui.json';
import enHome from './en/home.json';
import enAbout from './en/about.json';
import enCv from './en/cv.json';
import enBlog from './en/blog.json';

import nlUi from './nl/ui.json';
import nlHome from './nl/home.json';
import nlAbout from './nl/about.json';
import nlCv from './nl/cv.json';
import nlBlog from './nl/blog.json';

const translations: Record<string, Record<string, Record<string, unknown>>> = {
  en: { ui: enUi, home: enHome, about: enAbout, cv: enCv, blog: enBlog },
  nl: { ui: nlUi, home: nlHome, about: nlAbout, cv: nlCv, blog: nlBlog },
};

/** Extract language from URL pathname, e.g. /en/about → 'en' */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (supportedLangs.includes(lang as Lang)) return lang as Lang;
  return defaultLang;
}

/** Build a localized path: getLocalizedPath('/en/about', 'nl') → '/nl/about' */
export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(en|nl)/, '') || '/';
  if (cleanPath === '/') return `/${lang}/`;
  return `/${lang}${cleanPath}`;
}

/** Look up a nested translation key using dot notation, e.g. t('en', 'ui', 'nav.home') */
export function t(lang: Lang, namespace: string, key: string): string {
  const value = getNestedValue(translations[lang]?.[namespace], key)
    ?? getNestedValue(translations[defaultLang]?.[namespace], key)
    ?? key;
  return String(value);
}

/** Look up a nested translation key and return it as an array */
export function tArray(lang: Lang, namespace: string, key: string): string[] {
  const value = getNestedValue(translations[lang]?.[namespace], key)
    ?? getNestedValue(translations[defaultLang]?.[namespace], key);
  if (Array.isArray(value)) return value.map(String);
  return [];
}

/** Look up a nested translation key and return it as an object */
export function tObject(lang: Lang, namespace: string, key: string): Record<string, unknown> {
  const value = getNestedValue(translations[lang]?.[namespace], key)
    ?? getNestedValue(translations[defaultLang]?.[namespace], key);
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return {};
}

function getNestedValue(obj: unknown, path: string): unknown {
  if (!obj || typeof obj !== 'object') return undefined;
  return path.split('.').reduce<unknown>((current, segment) => {
    if (current && typeof current === 'object' && segment in (current as Record<string, unknown>)) {
      return (current as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);
}

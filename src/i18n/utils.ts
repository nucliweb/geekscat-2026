import { defaultLocale, ui, type Locale, type UIKey } from './ui';

export function getLocale(locale: string | undefined): Locale {
  if (locale === 'en' || locale === 'es' || locale === 'ca') return locale;
  return defaultLocale;
}

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return (ui[locale][key] ?? ui[defaultLocale][key]) as string;
  };
}

export function localizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function getAlternateLocales(currentPath: string, currentLocale: Locale) {
  const locales: Locale[] = ['ca', 'en', 'es'];
  const basePath = currentLocale === defaultLocale ? currentPath : currentPath.replace(`/${currentLocale}`, '') || '/';

  return locales.map((locale) => ({
    locale,
    href: localizedPath(basePath, locale),
    isCurrent: locale === currentLocale,
  }));
}

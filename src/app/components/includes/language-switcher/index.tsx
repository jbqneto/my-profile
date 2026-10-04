'use client';

import { locales } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ onChange }: { onChange?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const language = useLocale();
  const t = useTranslations('title');

  const changeLanguage = (event: MouseEvent<HTMLAnchorElement>, locale: string) => {
    onChange?.();
    // Preserve normal browser behavior for new tabs and modified clicks.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (language === locale) return;
    const newPathname = pathname.replace(/^\/[^/]+/, `/${locale}`);
    router.push(`${newPathname}${window.location.search}${window.location.hash}`, { scroll: false });
  };

  return (
    <div role="group" aria-label={t('languageLabel')} className="flex rounded-lg border border-gray-700 p-0.5">
      {locales.map((locale) => (
        <a key={locale} href={pathname.replace(/^\/[^/]+/, `/${locale}`)} hrefLang={locale === 'en' ? 'en' : 'pt-BR'} onClick={(event) => changeLanguage(event, locale)} aria-label={locale === 'en' ? 'English' : 'Português'} aria-current={language === locale ? 'page' : undefined} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-xs font-semibold transition-colors ${language === locale ? 'bg-green-400 text-gray-950' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}>
          {locale === 'en' ? 'EN' : 'PT'}
        </a>
      ))}
    </div>
  );
}

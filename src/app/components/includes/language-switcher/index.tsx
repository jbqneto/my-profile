'use client';

import { locales } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ onChange }: { onChange?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const language = useLocale();
  const t = useTranslations('title');

  const changeLanguage = (locale: string) => {
    onChange?.();
    if (language === locale) return;
    const newPathname = pathname.replace(/^\/[^/]+/, `/${locale}`);
    router.push(`${newPathname}${window.location.search}${window.location.hash}`, { scroll: false });
  };

  return (
    <div role="group" aria-label={t('languageLabel')} className="flex rounded-lg border border-gray-700 p-0.5">
      {locales.map((locale) => (
        <button key={locale} type="button" onClick={() => changeLanguage(locale)} aria-label={locale === 'en' ? 'English' : 'Português'} aria-pressed={language === locale} className={`min-h-11 min-w-11 rounded-md text-xs font-semibold transition-colors ${language === locale ? 'bg-green-400 text-gray-950' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}>
          {locale === 'en' ? 'EN' : 'PT'}
        </button>
      ))}
    </div>
  );
}

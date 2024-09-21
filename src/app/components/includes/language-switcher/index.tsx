'use client'

import { locales } from '@/i18n/routing';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const currentLocale = pathname.split('/')[1]
        setLanguage(locales.includes(currentLocale) ? currentLocale : 'en')
    }, [pathname])

    const changeLanguage = (lang: string) => {
        const newPathname = pathname.replace(/^\/[^\/]+/, `/${lang}`)
        router.push(newPathname)
    }

    return (
        <div className="flex space-x-2">
            {locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => changeLanguage(locale)}
                    className={`w-8 h-8 rounded-full overflow-hidden ${language === locale ? 'ring-2 ring-green-500' : ''}`}
                >
                    <Image width={25} height={25} src={`/imgs/ln-${locale}.webp`} alt={locale} className="w-full h-full object-cover" />
                </button>
            ))}
        </div>
    )
}
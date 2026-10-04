import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { isSiteLocale, LANGUAGE_ALTERNATES, SEO_CONTENT, SITE_NAME, SITE_URL } from '@/lib/seo';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import localFont from 'next/font/local';

const geist = localFont({ src: '../fonts/GeistVF.woff', display: 'swap', variable: '--font-geist' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111827',
};

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  if (!isSiteLocale(locale)) notFound();
  const content = SEO_CONTENT[locale];
  const url = `${SITE_URL}/${locale}`;
  const indexable = process.env.VERCEL_ENV !== 'preview' && process.env.VERCEL_ENV !== 'development';
  return {
    metadataBase: new URL(SITE_URL),
    title: content.title,
    description: content.description,
    applicationName: SITE_NAME,
    authors: [{ name: 'José Neto', url }],
    creator: 'José Neto',
    alternates: { canonical: url, languages: LANGUAGE_ALTERNATES },
    robots: { index: indexable, follow: true },
    openGraph: {
      type: 'website',
      url,
      title: content.title,
      description: content.description,
      siteName: SITE_NAME,
      locale: content.ogLocale,
      alternateLocale: [SEO_CONTENT[locale === 'en' ? 'br' : 'en'].ogLocale],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isSiteLocale(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale === 'br' ? 'pt-BR' : locale}>
      <body className={geist.variable}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
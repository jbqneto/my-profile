import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { isSiteLocale, SEO_CONTENT } from '@/lib/seo';

export const alt = 'José Neto | JBQNeto — Java, Spring Boot & Angular';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage({ params: { locale } }: { params: { locale: string } }) {
  if (!isSiteLocale(locale)) notFound();
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#111827', color: '#f3f4f6', padding: '64px 80px', justifyContent: 'space-between', borderBottom: '12px solid #4ade80' }}>
      <div style={{ display: 'flex', color: '#4ade80', fontSize: 32 }}>JBQNeto / portfolio</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 92, fontWeight: 700, letterSpacing: '-3px' }}>José Neto</div>
        <div style={{ display: 'flex', fontSize: 38, color: '#d1d5db', marginTop: 12 }}>{SEO_CONTENT[locale].jobTitle}</div>
        <div style={{ display: 'flex', fontSize: 28, color: '#4ade80', marginTop: 28 }}>Java · Spring Boot · Angular</div>
      </div>
      <div style={{ display: 'flex', fontSize: 24, color: '#9ca3af' }}>dev.jbqneto.com</div>
    </div>,
    size,
  );
}

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical pages, without fragments, redirects or invented modification dates.
  return ['en', 'br'].map((locale) => ({ url: `${SITE_URL}/${locale}` }));
}

export const SITE_URL = 'https://dev.jbqneto.com';
export const SITE_NAME = 'José Neto | JBQNeto';
export const LANGUAGE_ALTERNATES = {
  en: `${SITE_URL}/en`,
  'pt-BR': `${SITE_URL}/br`,
  'x-default': `${SITE_URL}/br`,
};

export const SEO_CONTENT = {
  en: {
    title: 'José Neto — Full-stack Developer | Java, Spring Boot & Angular',
    description: 'Explore José Neto’s portfolio: full-stack development with Java, Spring Boot and Angular, professional experience, practical web projects and résumé.',
    language: 'en',
    ogLocale: 'en_US',
    jobTitle: 'Full-stack Developer',
  },
  br: {
    title: 'José Neto — Desenvolvedor Full-stack | Java, Spring Boot e Angular',
    description: 'Conheça o portfólio de José Neto: desenvolvimento full-stack com Java, Spring Boot e Angular, experiência profissional, projetos web e currículo.',
    language: 'pt-BR',
    ogLocale: 'pt_BR',
    jobTitle: 'Desenvolvedor Full-stack',
  },
} as const;

export type SiteLocale = keyof typeof SEO_CONTENT;

export function isSiteLocale(locale: string): locale is SiteLocale {
  return locale === 'en' || locale === 'br';
}

export function profileStructuredData(locale: SiteLocale) {
  const content = SEO_CONTENT[locale];
  const url = `${SITE_URL}/${locale}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ['en', 'pt-BR'],
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        url,
        name: content.title,
        description: content.description,
        inLanguage: content.language,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'José Bezerra de Queiroz Neto',
        alternateName: ['José Neto', 'JBQNeto'],
        url,
        jobTitle: content.jobTitle,
        knowsAbout: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Docker', 'PostgreSQL'],
        sameAs: ['https://github.com/jbqneto', 'https://www.linkedin.com/in/jbqneto'],
      },
    ],
  };
}

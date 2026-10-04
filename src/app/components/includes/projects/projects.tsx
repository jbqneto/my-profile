import { ArrowUpRight, CreditCard, Music, Wrench } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projects = [
  { name: 'NuraTools', key: 'nuratools', link: 'https://tools.thedevlab.site/', icon: Wrench },
  { name: 'Cartão Digital', key: 'digitalCard', link: 'https://www.cartaodigital.app/', icon: CreditCard },
  { name: 'Focus Beat', key: 'focusBeat', link: 'https://focus.thedevlab.site/', icon: Music },
] as const;

export function Projects() {
  const t = useTranslations('title');
  return (
    <div className="site-container">
      <h2 className="section-heading">{t('projectsTitle')}</h2>
      <div className="grid gap-4 md:grid-cols-3 sm:gap-6">
        {projects.map(({ name, key, link, icon: Icon }) => (
          <article key={key} className="flex min-w-0 flex-col rounded-2xl border border-gray-700 bg-gray-800 p-6">
            <Icon className="mb-5 h-7 w-7 text-green-400" aria-hidden="true" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mb-6 mt-3 flex-1 text-base leading-relaxed text-gray-300">{t(`projectDescriptions.${key}`)}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${t('viewProject')}: ${name}`} className="flex min-h-11 items-center gap-2 self-start rounded-md text-sm font-semibold text-green-400 hover:text-green-300">
              {t('viewProject')}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

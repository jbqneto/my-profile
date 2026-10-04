import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { ArrowDown, ArrowUpRight, Briefcase, Calendar, Code, FileText, Github, Linkedin } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isSiteLocale, profileStructuredData } from '@/lib/seo';
import { WORK_EXPERIENCES } from '../../../data/constants';
import Navigation from '../components/includes/navigation';
import { Projects } from '../components/includes/projects/projects';

const CV_URL = 'https://drive.google.com/file/d/1AG79l8u-wQK29Ut_1j6qbQr0RdpWz91z/view?usp=drive_link';

export default async function Component({ params: { locale } }: { params: { locale: string } }) {
  if (!isSiteLocale(locale)) notFound();
  const t = await getTranslations('title');
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-green-400 px-4 py-3 text-gray-950 focus:not-sr-only">{t('skipToContent')}</a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData(locale)).replace(/</g, '\\u003c') }} />
        <section id="about" className="border-b border-gray-800 bg-gray-800/60 py-14 sm:py-20 lg:py-28">
          <div className="site-container text-center">
            <p className="mb-4 font-mono text-sm text-green-400 sm:text-base">{t('intro')}</p>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">José Neto</h1>
            <p className="mx-auto mb-8 mt-5 max-w-2xl text-balance text-base leading-relaxed text-gray-300 sm:text-xl">{t('role')}</p>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-sm leading-relaxed text-gray-400 sm:text-base">{t('professionalSummary')}</p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-400 px-6 text-sm font-semibold text-gray-950 transition-colors hover:bg-green-300">
                <FileText className="h-4 w-4" aria-hidden="true" />{t('viewResume')}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 text-sm font-semibold transition-colors hover:border-green-400 hover:text-green-400">
                {t('exploreProjects')}<ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="section-spacing">
          <div className="site-container">
            <h2 className="section-heading">{t('skillsTitle')}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {['Java', 'JavaScript', 'Spring', 'TypeScript', 'Angular', 'Docker', 'React*', 'GraphQL*', 'Node.js*'].map((skill) => (
                <div key={skill} className="flex min-w-0 items-center gap-2 rounded-xl border border-gray-800 bg-gray-800/70 p-4 sm:gap-3 sm:p-5">
                  <Code className="h-5 w-5 shrink-0 text-green-400" aria-hidden="true" />
                  <span className="min-w-0 break-words text-sm font-medium sm:text-base">{skill}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">{t('learningNote')}</p>
          </div>
        </section>
        <section id="timeline" className="section-spacing bg-gray-800/60">
          <div className="site-container">
            <h2 className="section-heading">{t('timelineTitle')}</h2>
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              {WORK_EXPERIENCES.map((job, index) => (
                <article key={`${job.company}-${index}`} className="flex items-start gap-3 sm:gap-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-green-400/25 bg-green-400/10 sm:h-11 sm:w-11">
                    <Briefcase className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 border-b border-gray-700 pb-6 sm:pb-8">
                    <h3 className="text-lg font-semibold leading-snug sm:text-xl">{job.company}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-300 sm:text-base">{job.role}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" /><span>{job.period}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => <span key={tech} className="max-w-full break-words rounded-md bg-gray-700 px-2.5 py-1 text-xs leading-relaxed text-gray-200">{tech}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="section-spacing"><Projects /></section>
        <section id="contact" className="section-spacing border-t border-gray-800">
          <div className="site-container">
            <h2 className="section-heading">{t('contactTitle')}</h2>
            <form className="mx-auto max-w-lg space-y-5" action="/api/contact" method="POST">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-300">{t('namePlaceholder')}</label>
                <Input id="contact-name" type="text" name="name" autoComplete="name" required maxLength={120} className="h-12 border-gray-600 bg-gray-800 text-base" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">{t('emailPlaceholder')}</label>
                <Input id="contact-email" type="email" name="email" autoComplete="email" required maxLength={254} className="h-12 border-gray-600 bg-gray-800 text-base" />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-300">{t('messagePlaceholder')}</label>
                <Textarea id="contact-message" name="message" required maxLength={5000} rows={5} className="min-h-36 resize-y border-gray-600 bg-gray-800 text-base" />
              </div>
              <Button type="submit" className="min-h-12 w-full bg-green-400 font-semibold text-gray-950 hover:bg-green-300">{t('sendMessage')}</Button>
            </form>
            <div className="mt-8 flex justify-center gap-3">
              <a href="https://github.com/jbqneto" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 text-gray-300 hover:border-green-400 hover:text-green-400"><Github className="h-5 w-5" aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/jbqneto" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-700 text-gray-300 hover:border-green-400 hover:text-green-400"><Linkedin className="h-5 w-5" aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 bg-gray-900 py-6">
        <div className="site-container text-center text-xs leading-relaxed text-gray-400 sm:text-sm"><p>{t('footer', { year: new Date().getFullYear(), name: 'José Bezerra de Queiroz Neto' })}</p></div>
      </footer>
    </div>
  );
}

'use client';

import { Menu, Terminal, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitcher from './language-switcher';

export default function Navigation() {
  const t = useTranslations('title');
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const links = [
    ['about', 'about'], ['skills', 'skills'], ['timeline', 'experience'],
    ['projects', 'projects'], ['contact', 'contact'],
  ] as const;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1280px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur">
      <div className="site-container flex min-h-20 items-center justify-between gap-3">
        <a href="#about" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2 font-mono text-lg font-bold sm:text-xl" aria-label={t('homeLabel')}>
          <Terminal className="h-6 w-6 text-green-400" aria-hidden="true" />
          JBQNeto
        </a>
        <nav className="hidden xl:block" aria-label={t('navigationLabel')}>
          <ul className="flex items-center gap-1">
            {links.map(([id, key]) => (
              <li key={id}><a href={`#${id}`} className="flex min-h-11 items-center rounded-lg px-3 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-green-400">{t(key)}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <LanguageSwitcher onChange={() => setOpen(false)} />
          <button ref={toggleRef} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={t(open ? 'closeMenu' : 'openMenu')} className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-700 text-gray-100 hover:bg-gray-800 xl:hidden">
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" hidden={!open} aria-label={t('navigationLabel')} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-800 xl:hidden">
        <ul className="site-container grid gap-1 py-3">
          {links.map(([id, key]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-lg px-3 text-gray-200 hover:bg-gray-800 hover:text-green-400">{t(key)}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

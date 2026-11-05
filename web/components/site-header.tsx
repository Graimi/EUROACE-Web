'use client';

/* oxlint-disable next/no-html-link-for-pages */
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { ProjectSignature } from './project-signature';
import { SocialLinks } from './social-links';
import { essentialCopy } from '@/lib/essential-copy';
import { copy } from '@/lib/content';
import { homePathForTheme } from '@/lib/home-proposals';
import {
  projectCopy,
  hiddenSections,
  sectionIds,
  type Language,
  type Section,
} from '@/lib/project';
import './home-review.css';
import './home-essential.css';
import './essential-variants.css';
import './site-header.css';

function SocialDrawer({ language }: { language: Language }) {
  const t = essentialCopy[language];
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);
  return (
    <div className="hp-social hp-social-a">
      <div className="hp-social-toggle-row hp-container">
        <button
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="he-social-panel"
          onClick={() => setOpen(!open)}
        >
          {t.follow}
          <ChevronDown
            size={17}
            className={open ? 'hp-rotated' : ''}
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="hp-social-panel" id="he-social-panel" hidden={!open}>
        <div className="hp-container">
          <button
            className="he-social-close"
            type="button"
            aria-label={t.closeSocial}
            onClick={close}
          >
            <X size={22} />
          </button>
          <SocialLinks language={language} />
        </div>
      </div>
    </div>
  );
}

function LanguageNavigation({
  language,
  path,
  mobile = false,
}: {
  language: Language;
  path: string;
  mobile?: boolean;
}) {
  const t = essentialCopy[language];
  return (
    <nav
      className={`he-language${mobile ? ' he-language-mobile' : ''}`}
      aria-label={t.languages}
    >
      {(['es', 'pt', 'en'] as const).map((lang) => (
        <a
          key={lang}
          href={`${path}?lang=${lang}`}
          lang={lang}
          hrefLang={lang}
          aria-label={{ es: 'Español', pt: 'Português', en: 'English' }[lang]}
          aria-current={language === lang ? 'true' : undefined}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader({
  language,
  theme = 3,
  activeSection = 'home',
}: {
  language: Language;
  theme?: 1 | 2 | 3;
  activeSection?: Section | 'home';
}) {
  const t = essentialCopy[language];
  const project = projectCopy[language];
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const path =
    activeSection === 'home' ? homePathForTheme(theme) : `/${activeSection}`;
  const page = (target: string) => `${target}?lang=${language}`;
  const items = [
    { label: t.home, path: homePathForTheme(theme), section: 'home' },
    ...sectionIds
      .filter((id) => id !== 'analytics' && !hiddenSections.includes(id))
      .map((id) => ({
        label:
          id === 'observatorio' ? t.about : project.nav[sectionIds.indexOf(id)],
        path: `/${id}`,
        section: id,
      })),
  ];
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenu.current?.open) {
        mobileMenu.current.open = false;
        mobileMenu.current.querySelector('summary')?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
  const analytics = (
    <a
      className="he-nav-analytics hp-header-cta motion-button"
      href={page('/analytics')}
      aria-current={activeSection === 'analytics' ? 'page' : undefined}
    >
      <ChartNoAxesCombined size={17} aria-hidden="true" />
      Analytics
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
  return (
    <>
      <a className="hp-skip" href="#hp-contenido">
        {copy[language].skip}
      </a>
      <header className="hp-header">
        {theme === 3 ? (
          <div className="he-brand-topline" aria-hidden="true" />
        ) : (
          <SocialDrawer language={language} />
        )}
        <div className="hp-container hp-masthead">
          <a className="hp-brand" href={page('/')} aria-label={t.home}>
            <ProjectSignature language={language} />
          </a>
          <div className="he-header-tools">
            <LanguageNavigation language={language} path={path} />
            {analytics}
          </div>
        </div>
      </header>
      <div className="he-sticky-nav">
        <nav className="hp-nav hp-container" aria-label={t.nav}>
          {items.map((item) => (
            <a
              key={item.section}
              href={page(item.path)}
              aria-current={activeSection === item.section ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="he-mobile-nav hp-container">
          <details ref={mobileMenu} className="hp-mobile-menu">
            <summary>
              {t.menu}
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav aria-label={t.nav}>
              {items.map((item) => (
                <a
                  key={item.section}
                  href={page(item.path)}
                  aria-current={
                    activeSection === item.section ? 'page' : undefined
                  }
                  onClick={() => {
                    if (mobileMenu.current) mobileMenu.current.open = false;
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
          <LanguageNavigation language={language} path={path} mobile />
          {analytics}
        </div>
      </div>
    </>
  );
}

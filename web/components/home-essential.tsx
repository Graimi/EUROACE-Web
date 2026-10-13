'use client';

// Full navigations preserve the language and isolate this proposal from the original home.
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  ChevronDown,
  Globe2,
  Target,
  Layers3,
  Menu,
  Plus,
  Users,
  X,
} from 'lucide-react';
import { ProjectSignature } from './project-signature';
import { EssentialRings } from './essential-rings';
import { EssentialMap } from './essential-map';
import { EssentialMapVariant } from './essential-map-variants';
import { EssentialAtlas } from './essential-atlas';
import { essentialCopy } from '@/lib/essential-copy';
import { copy } from '@/lib/content';
import {
  partners,
  projectCopy,
  projectSource,
  sectionIds,
  type Language,
} from '@/lib/project';
import './home-review.css';
import './home-essential.css';
import './essential-variants.css';

function subscribeLanguage(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}
function readLanguage(): Language {
  const language = new URLSearchParams(window.location.search).get('lang');
  return language === 'pt' || language === 'en' ? language : 'es';
}
function serverLanguage(): Language {
  return 'es';
}

function EssentialLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`hp-link${light ? ' hp-link-light' : ''}`} href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function SocialDrawer({ language }: { language: Language }) {
  const t = essentialCopy[language];
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const open = pinned || hovered;
  const close = () => {
    setPinned(false);
    setHovered(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPinned(false);
        setHovered(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);
  return (
    <div
      className="hp-social hp-social-a"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="hp-social-toggle-row hp-container">
        <button
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="he-social-panel"
          onClick={() => {
            if (pinned) close();
            else setPinned(true);
          }}
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
          <div className="hp-social-links">
            {[
              ['LinkedIn', 'in'],
              ['Instagram', 'ig'],
              ['Facebook', 'f'],
            ].map(([name, mark]) => (
              <div className="hp-network" key={name}>
                <span className="hp-network-icon" aria-hidden="true">
                  {mark}
                </span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeEssential({ variant = 1 }: { variant?: 1 | 2 | 3 | 4 }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    readLanguage,
    serverLanguage,
  );
  const t = essentialCopy[language];
  const base = copy[language];
  const project = projectCopy[language];
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const page = (path: string) => `${path}?lang=${language}`;
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const navItems = [
    { label: t.home, href: page(`/home-propuesta-${variant}`) },
    ...sectionIds.map((id, index) => ({
      label: id === 'observatorio' ? t.about : project.nav[index],
      href: id === 'observatorio' ? '#sobre-el-proyecto' : page(`/${id}`),
    })),
  ].filter((item) => variant < 3 || item.href !== page('/analytics'));
  const accesses = [
    { title: project.nav[0], href: '/observatorio', Icon: Globe2 },
    { title: project.nav[1], href: '/actividades', Icon: Users },
    { title: project.nav[3], href: '/publicaciones', Icon: BookOpen },
    { title: 'Analytics', href: '/analytics', Icon: ChartNoAxesCombined },
  ];
  const money = new Intl.NumberFormat(
    language === 'en' ? 'en-IE' : language === 'pt' ? 'pt-PT' : 'es-ES',
    { style: 'currency', currency: 'EUR' },
  );

  return (
    <div
      className={`hp hp-variant-1 he he-theme-${variant}${variant === 4 ? ' he-theme-3' : ''}`}
    >
      <a className="hp-skip" href="#hp-contenido">
        {base.skip}
      </a>
      <header className="hp-header">
        <SocialDrawer language={language} />
        <div className="hp-container hp-masthead">
          <a className="hp-brand" href={page('/')} aria-label={t.original}>
            <ProjectSignature />
          </a>
          <div className="he-header-tools">
            <nav className="he-language" aria-label={t.languages}>
              {(['es', 'pt', 'en'] as const).map((lang) => (
                <a
                  key={lang}
                  href={`/home-propuesta-${variant}?lang=${lang}`}
                  lang={lang}
                  hrefLang={lang}
                  aria-label={
                    { es: 'Español', pt: 'Português', en: 'English' }[lang]
                  }
                  aria-current={language === lang ? 'true' : undefined}
                >
                  {lang.toUpperCase()}
                </a>
              ))}
            </nav>
            <a className="hp-button hp-header-cta" href={page('/analytics')}>
              Analytics <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <div className="he-sticky-nav">
        <nav className="hp-nav hp-container" aria-label={t.nav}>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={index === 0 ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="he-nav-analytics" href={page('/analytics')}>
            <ChartNoAxesCombined size={17} aria-hidden="true" />
            Analytics <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </nav>
        <div className="he-mobile-nav hp-container">
          <details ref={mobileMenu} className="hp-mobile-menu">
            <summary>
              {t.menu}
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav aria-label={t.nav}>
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={() => {
                    if (mobileMenu.current) mobileMenu.current.open = false;
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
          <a className="he-nav-analytics" href={page('/analytics')}>
            <ChartNoAxesCombined size={17} aria-hidden="true" />
            Analytics <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hp-review-label hp-container">
        <span>
          {variant === 1
            ? t.review
            : `${t.proposalLabel} 0${variant} / ${t.names[variant - 1].toUpperCase()}`}
        </span>
        <span>
          {variant === 1 ? t.reviewNote : t.variantNotes[variant - 2]}
        </span>
      </div>
      <main id="hp-contenido">
        <section className="hp-essential-hero">
          {variant === 3 && (
            <div className="he-hero-rings" aria-hidden="true">
              <EssentialRings language={language} decorative />
            </div>
          )}
          <img
            src="/home-proposals/evora.jpg"
            alt={t.photo}
            width="3967"
            height="2922"
            fetchPriority="high"
          />
          <div className="hp-container he-hero-grid">
            <div className="hp-essential-copy">
              {variant < 3 && (
                <div className="he-region-names" aria-label={t.regions}>
                  <span>Alentejo</span>
                  <span>Centro</span>
                  <span>Extremadura</span>
                </div>
              )}
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
              <a className="hp-button" href={page('/observatorio')}>
                {t.discover}
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
            {variant === 1 ? (
              <EssentialMap language={language} />
            ) : variant >= 3 ? (
              <EssentialAtlas language={language} />
            ) : (
              <EssentialMapVariant language={language} variant={2} />
            )}
          </div>
          <div className="hp-photo-location">{t.place}</div>
        </section>
        <section className="hp-container hp-essential-intro">
          <span className="hp-kicker">{t.introLabel}</span>
          <div>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>
        </section>
        <section
          className="hp-container hp-access-grid"
          aria-label={t.discover}
        >
          {accesses.map(({ title, href, Icon }, index) => (
            <a
              href={page(href)}
              key={href}
              className={`hp-access hp-access-${index}`}
            >
              <span className="hp-access-top">
                <Icon size={31} strokeWidth={1.3} aria-hidden="true" />
                <ArrowUpRight size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{t.accesses[index]}</p>
            </a>
          ))}
        </section>
        <section className="hp-news-section" id="cooperacion">
          {variant === 4 && (
            <div className="he-section-rings" aria-hidden="true">
              <EssentialRings language={language} decorative />
            </div>
          )}
          <div className="hp-container">
            <div className="hp-section-title">
              <div>
                <p className="hp-kicker">{t.newsLabel}</p>
                <h2>{t.newsTitle}</h2>
              </div>
              <EssentialLink href={page('/actualidad')}>
                {t.allNews}
              </EssentialLink>
            </div>
            <div className="hp-news-layout">
              <article className="hp-feature-news">
                {variant !== 4 && (
                  <div className="he-rings-panel">
                    <EssentialRings
                      language={language}
                      decorative={variant === 3}
                    />
                  </div>
                )}
                <div className="hp-news-body">
                  <span className="hp-kicker">{t.projectLabel}</span>
                  <h3>{t.featureTitle}</h3>
                  <p>{t.featureText}</p>
                  <EssentialLink href={page('/nosotros')}>
                    {t.network}
                  </EssentialLink>
                </div>
              </article>
              <aside className="hp-agenda">
                <span className="hp-kicker">{t.next}</span>
                <div className="hp-agenda-symbol" aria-hidden="true">
                  <Plus size={44} strokeWidth={1} />
                </div>
                <h3>{t.agendaTitle}</h3>
                <p>{t.agendaText}</p>
                <span className="hp-status">{t.agendaStatus}</span>
                <EssentialLink href={page('/eventos')}>
                  {t.agendaLink}
                </EssentialLink>
              </aside>
            </div>
            <div className="hp-briefs">
              <a href={page('/actividades')}>
                <span className="hp-kicker">{t.work}</span>
                <h3>{t.workTitle}</h3>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a href={page('/publicaciones')}>
                <span className="hp-kicker">{t.publications}</span>
                <h3>{t.publicationTitle}</h3>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section
          className="he-project hp-container"
          id="sobre-el-proyecto"
          aria-labelledby="he-project-title"
        >
          <span className="hp-kicker">
            {t.about.toUpperCase()} · 0461_OBSERVATORIO_EUROACE_4_E
          </span>
          <h2 id="he-project-title">{t.projectTitle}</h2>
          <div className="he-funding-statement">
            <span className="he-funding-mark" aria-hidden="true">
              EU
            </span>
            <p>{t.funding}</p>
            <span className="he-funding-period">{t.period}</span>
          </div>
          <div className="he-project-grid">
            <div className="he-objectives">
              <article className="he-info-card">
                <Target size={28} strokeWidth={1.5} aria-hidden="true" />
                <h3>{t.objectives}</h3>
                <p>{t.objectiveText}</p>
              </article>
              <article className="he-info-card">
                <Layers3 size={28} strokeWidth={1.5} aria-hidden="true" />
                <h3>{t.expected}</h3>
                <p>{t.expectedText}</p>
              </article>
            </div>
            <aside className="he-project-finance" aria-label={t.rate}>
              <span className="hp-kicker">INTERREG · POCTEP 2021–2027</span>
              <dl>
                <div>
                  <dt>{t.budget}</dt>
                  <dd>{money.format(874567.7)}</dd>
                </div>
                <div>
                  <dt>{t.erdf}</dt>
                  <dd>{money.format(655925.78)}</dd>
                </div>
                <div>
                  <dt>{t.rate}</dt>
                  <dd>75 %</dd>
                </div>
              </dl>
              <div className="he-funding-meter" aria-hidden="true">
                <span />
              </div>
              <EssentialLink href={projectSource}>{t.source}</EssentialLink>
              <p className="he-small">{t.checked}</p>
            </aside>
          </div>
        </section>
        <section className="hp-container hp-partners">
          <p className="hp-kicker">{t.partnersLabel}</p>
          <h2>{t.partnersTitle}</h2>
          <div>
            {partners.map((partner) => (
              <a href={partner.url} key={partner.name}>
                <img
                  src={partner.image}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="hp-footer">
        <div className="hp-container">
          <div className="hp-footer-top">
            <h2>{t.footerTitle}</h2>
            <EssentialLink href={page('/contacto')} light>
              {t.contact}
            </EssentialLink>
          </div>
          <div className="hp-footer-bottom">
            <p>{t.funding}</p>
            <img
              src="/brand/eurorregion-euroace.webp"
              alt="Interreg España–Portugal / Eurorregión EUROACE"
              width="320"
              height="64"
              loading="lazy"
            />
          </div>
          <div className="hp-credits">
            {t.credits}{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Roman_Temple,_%C3%89vora,_Portugal_julesvernex2.jpg">
              Jules Verne Times Two
            </a>{' '}
            / <a href="https://julesvernex2.com">julesvernex2.com</a> /{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
            . {t.crop}
          </div>
          <p className="hp-draft">{t.draft}</p>
        </div>
      </footer>
      <aside className="hp-comparison" aria-label={t.comparison}>
        <div>
          <span className="hp-comparison-dot" />
          <strong>{t.inReview}</strong>
          <span className="hp-comparison-hint">{t.mix}</span>
        </div>
        <nav aria-label={t.versions}>
          <a href={page('/')}>
            {t.originalShort}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          {t.names.map((name, index) => (
            <a
              key={name}
              href={`/home-propuesta-${index + 1}?lang=${language}`}
              aria-current={index + 1 === variant ? 'page' : undefined}
            >
              <span>0{index + 1}</span>
              {name}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

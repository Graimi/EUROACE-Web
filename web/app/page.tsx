'use client';

// Inline SVG diagrams expose an accessible image role.
/* oxlint-disable jsx-a11y/prefer-tag-over-role, next/no-img-element */

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  ChartNoAxesCombined,
  Lightbulb,
  TrendingUp,
  Globe2,
  MoveUpRight,
  BookOpen,
  Mail,
  Network,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import { copy } from '@/lib/content';
import { LivingRings } from '@/components/living-rings';
import { ProjectSignature } from '@/components/project-signature';
import {
  Activities,
  ContactDetails,
  Events,
  Partners,
  ProjectFacts,
} from '@/components/project-sections';
import {
  projectCopy,
  sectionIds,
  type Language,
  type Section,
} from '@/lib/project';

const areaIcons = [Lightbulb, TrendingUp, ChartNoAxesCombined];

function subscribeLanguage(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}
function readLanguage(): Language {
  const lang = new URLSearchParams(window.location.search).get('lang');
  return lang === 'pt' || lang === 'en' ? lang : 'es';
}
function serverLanguage(): Language {
  return 'es';
}

export default function Home({ section }: { section?: Section }) {
  const language = useSyncExternalStore(
    subscribeLanguage,
    readLanguage,
    serverLanguage,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const t = copy[language];
  const project = projectCopy[language];
  const visible = (id: Section) => !section || section === id;
  const pageHref = (id?: Section) => `${id ? '/' + id : '/'}?lang=${language}`;
  const changeLanguage = (lang: Language) => {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState(null, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menuOpen]);
  return (
    <div
      className={
        section ? `interior interior-cards interior-${section}` : 'home'
      }
    >
      <a className="skip-link" href="#contenido">
        {t.skip}
      </a>
      <header id="inicio" className="site-header">
        <div className="masthead wrap">
          <a href={pageHref()} className="brand" aria-label={project.fullName}>
            <ProjectSignature />
          </a>
          <div className="header-tools">
            <div className="language-switch" aria-label="Language / Idioma">
              {(['es', 'pt', 'en'] as const).map((lang) => (
                <Button
                  key={lang}
                  variant="ghost"
                  aria-pressed={language === lang}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </Button>
              ))}
            </div>
            <a className="header-analytics" href={pageHref('analytics')}>
              Analytics <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Button
              ref={menuButton}
              variant="ghost"
              className="menu-button"
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              aria-label={menuOpen ? t.close : t.menu}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <nav
          id="main-nav"
          className={`navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label={
            language === 'en'
              ? 'Main navigation'
              : language === 'es'
                ? 'Navegación principal'
                : 'Navegação principal'
          }
        >
          <div className="wrap nav-inner">
            <a href={pageHref()} aria-current={!section ? 'page' : undefined}>
              {project.home}
            </a>
            {sectionIds.map((id, i) => (
              <a
                key={id}
                href={pageHref(id)}
                aria-current={section === id ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {project.nav[i]}
              </a>
            ))}
            <a
              className="nav-analytics-cta"
              href={pageHref('analytics')}
              onClick={() => setMenuOpen(false)}
            >
              Analytics <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>
      <main id="contenido">
        {section && (
          <div className="wrap interior-heading">
            <a className="text-link" href={pageHref()}>
              {project.home}
            </a>
            <h1>{project.nav[sectionIds.indexOf(section)]}</h1>
          </div>
        )}
        {!section && (
          <>
            <section className="hero wrap" aria-labelledby="hero-title">
              <div className="hero-copy">
                <p className="eyebrow">
                  <span className="tiny-dot" />
                  {t.eyebrow}
                </p>
                <h1 id="hero-title">
                  {t.title[0]}
                  <br />
                  {t.title[1]}
                  <br />
                  <em>
                    <span className="shared-word">
                      <span className="sr-only">{t.title[2]}</span>
                      <span aria-hidden="true">
                        <span className="syllable-turquoise">
                          {language === 'en'
                            ? 'ho'
                            : language === 'es'
                              ? 'com'
                              : 'par'}
                        </span>
                        <span className="syllable-blue">
                          {language === 'en'
                            ? 'ri'
                            : language === 'es'
                              ? 'par'
                              : 'tilha'}
                        </span>
                        <span className="syllable-lime">
                          {language === 'en'
                            ? 'zon'
                            : language === 'es'
                              ? 'tido'
                              : 'do'}
                        </span>
                      </span>
                    </span>
                  </em>
                </h1>
                <p className="hero-description">{t.intro}</p>
                <div className="hero-actions">
                  <a className="primary-link" href={pageHref('observatorio')}>
                    {t.discover}
                    <ArrowRight size={19} />
                  </a>
                  <a className="text-link" href={pageHref('analytics')}>
                    {t.explore}
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <LivingRings language={language} variant="combined" />
              </div>
            </section>
            <section
              className="facts wrap"
              aria-label={
                language === 'en'
                  ? 'EUROACE in numbers'
                  : language === 'es'
                    ? 'La EUROACE en cifras'
                    : 'A EUROACE em números'
              }
            >
              {[
                ['02', t.countries],
                ['03', t.regions],
                ['04', t.partners],
              ].map(([n, label]) => (
                <div key={n}>
                  <strong>{n}</strong>
                  <span>{label}</span>
                </div>
              ))}
              <div className="fact-goal">
                <span>{t.goal}</span>
                <strong>
                  {t.goalText}
                  <MoveUpRight size={25} />
                </strong>
              </div>
            </section>
          </>
        )}
        {visible('observatorio') && (
          <section id="observatorio" className="about wrap section-space">
            <div className="section-top">
              <p className="eyebrow">{t.aboutLabel}</p>
              <span className="small-cross" aria-hidden="true">
                +
              </span>
            </div>
            <div className="about-intro">
              <h2>{t.aboutTitle}</h2>
              <div>
                <p>{t.about}</p>
                <div className="audiences">
                  {t.audience.map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="eyebrow area-label">{t.areasLabel}</p>
            <div className="areas">
              {t.areas.map((area, i) => {
                const Icon = areaIcons[i];
                return (
                  <article key={area}>
                    <Icon size={26} strokeWidth={1.5} />
                    <span className="area-number">0{i + 1}</span>
                    <h3>{area}</h3>
                    <p>{t.areaText[i]}</p>
                  </article>
                );
              })}
            </div>
            {section && <ProjectFacts language={language} />}
            {!section && (
              <a className="section-link" href={pageHref('observatorio')}>
                {project.nav[0]} <ArrowUpRight size={18} />
              </a>
            )}
          </section>
        )}
        {visible('actividades') && <Activities language={language} />}
        {visible('analytics') && (
          <section id="analytics" className="analytics-section">
            <div className="wrap analytics-inner">
              <div className="analytics-copy">
                <p className="eyebrow">{t.analyticsLabel}</p>
                <span className="status">
                  <span className="tiny-dot" />
                  {t.future}
                </span>
                <h2>{t.analyticsTitle}</h2>
                <p>{t.analyticsText}</p>
                <ul>
                  {t.capabilities.map((cap) => (
                    <li key={cap}>
                      <ArrowUpRight size={17} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="analytics-preview">
                <div className="preview-top">
                  <strong>
                    EUROACE <span>Analytics</span>
                  </strong>
                  <ChartNoAxesCombined size={21} />
                </div>
                <div className="preview-content">
                  <div className="preview-heading">
                    <div>
                      <p>{t.index}</p>
                      <span>{t.units}</span>
                    </div>
                    <span className="sample-tag">DEMO</span>
                  </div>
                  <svg
                    viewBox="0 0 500 210"
                    role="img"
                    aria-label={t.chartAlt}
                    className="line-chart"
                  >
                    <g className="chart-grid">
                      <path d="M38 30H480M38 75H480M38 120H480M38 165H480" />
                    </g>
                    <g className="chart-axis">
                      <text x="0" y="35">
                        120
                      </text>
                      <text x="0" y="80">
                        100
                      </text>
                      <text x="8" y="125">
                        80
                      </text>
                      <text x="8" y="170">
                        60
                      </text>
                    </g>
                    <path
                      d="M40 136L115 118L190 127L260 88L335 93L408 46L480 30"
                      fill="none"
                      stroke="#18baa8"
                      strokeWidth="3"
                    />
                    <path
                      d="M40 159L115 149L190 112L260 125L335 110L408 83L480 68"
                      fill="none"
                      stroke="#1e00ff"
                      strokeWidth="3"
                      strokeDasharray="7 4"
                    />
                    <path
                      d="M40 174L115 164L190 159L260 150L335 128L408 135L480 105"
                      fill="none"
                      stroke="#666666"
                      strokeWidth="3"
                      strokeDasharray="2 5"
                    />
                    <g className="chart-axis">
                      <text x="38" y="205">
                        2024
                      </text>
                      <text x="180" y="205">
                        2025
                      </text>
                      <text x="320" y="205">
                        2026
                      </text>
                      <text x="450" y="205">
                        2027
                      </text>
                    </g>
                  </svg>
                  <div className="chart-legend">
                    <span>━ Extremadura</span>
                    <span>┄ Alentejo</span>
                    <span>┈ Centro</span>
                  </div>
                  <div className="mini-bars" aria-hidden="true">
                    {[40, 67, 50, 86, 64, 90, 75, 100, 84, 68, 93, 100].map(
                      (h, i) => (
                        <i key={i} style={{ height: `${h}%` }} />
                      ),
                    )}
                  </div>
                </div>
                <div className="preview-foot">
                  <span className="tiny-dot" />
                  {t.preview}
                </div>
              </div>
            </div>
          </section>
        )}
        {visible('publicaciones') && (
          <section
            id="publicaciones"
            className="publications wrap section-space"
          >
            <p className="eyebrow">{t.publicationsLabel}</p>
            <div className="heading-row">
              <h2>{t.publicationsTitle}</h2>
              <p>{t.publicationsText}</p>
            </div>
            <div className="publication-grid">
              {(section ? t.formats : t.formats.slice(0, 3)).map(
                (format, i) => (
                  <article
                    className={`publication publication-${i}`}
                    key={format}
                  >
                    <div className="publication-cover" aria-hidden="true">
                      <span>EUROACE / {format}</span>
                      <div className="cover-diagram">
                        {i === 0 ? (
                          <Globe2 strokeWidth={0.65} />
                        ) : i === 1 ? (
                          <ChartNoAxesCombined strokeWidth={0.65} />
                        ) : (
                          <Network strokeWidth={0.65} />
                        )}
                      </div>
                      <span>
                        EUROACE
                        <br />
                        {t.eyebrow}
                      </span>
                    </div>
                    <div className="publication-body">
                      <span className="publication-type">
                        {format} <span>· {t.planned}</span>
                      </span>
                      <h3>{t.pubTitles[i]}</h3>
                      <p>{t.pubDescriptions[i]}</p>
                    </div>
                  </article>
                ),
              )}
            </div>
            {!section && (
              <a className="section-link" href={pageHref('publicaciones')}>
                {project.nav[3]} <ArrowUpRight size={18} />
              </a>
            )}
            <p className="availability">
              <BookOpen size={17} />
              {t.notPublished}
            </p>
          </section>
        )}
        {visible('actualidad') && (
          <section id="actualidad" className="news-section">
            <div className="wrap">
              <p className="eyebrow">{t.newsLabel}</p>
              <h2>{t.newsTitle}</h2>
              <article className="news-standalone">
                <BookOpen size={25} />
                <div>
                  <h3>{t.newsEmpty}</h3>
                  <p>{t.newsText}</p>
                </div>
              </article>
            </div>
          </section>
        )}
        {visible('eventos') && <Events language={language} />}
        {visible('nosotros') && <Partners language={language} />}
      </main>
      <footer id="contacto">
        <div className="wrap contact-row">
          <div>
            <p className="eyebrow">{project.nav[7]}</p>
            <h2>{t.contact}</h2>
            <p>{t.contactText}</p>
          </div>
          <Mail size={42} strokeWidth={1} />
        </div>
        <ContactDetails language={language} />
        <div className="funding wrap">
          <p>{t.funding}</p>
        </div>
        <div className="eurorregion-footer wrap">
          <a href="https://www.euro-ace.eu/">
            <img
              src="/brand/eurorregion-euroace.webp"
              width="475"
              height="95"
              alt="Interreg España–Portugal y Eurorregión EUROACE"
            />
          </a>
        </div>
        <div className="footer-base wrap">
          <span>{t.footer}</span>
          <span>{project.review}</span>
        </div>
      </footer>
    </div>
  );
}

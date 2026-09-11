'use client';

// Inline SVG diagrams need an image role; the 10 KB official JPEG stays unmodified.
/* oxlint-disable jsx-a11y/prefer-tag-over-role, next/no-img-element */

import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  ChartNoAxesCombined,
  Lightbulb,
  TrendingUp,
  Zap,
  Globe2,
  MoveUpRight,
  BookOpen,
  CalendarDays,
  Mail,
  Network,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import { copy } from '@/lib/content';
import { LivingRings } from '@/components/living-rings';

const anchors = [
  'inicio',
  'observatorio',
  'analytics',
  'publicaciones',
  'actualidad',
  'eventos',
  'contacto',
];
const areaIcons = [Lightbulb, TrendingUp, ChartNoAxesCombined, Zap];

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'pt'>('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const t = copy[language];
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
    <>
      <a className="skip-link" href="#contenido">
        {t.skip}
      </a>
      <header id="inicio" className="site-header">
        <div className="masthead wrap">
          <a
            href="#inicio"
            className="brand"
            aria-label="Observatorio EUROACE · Inicio"
          >
            <img
              src="/brand/interreg-observatorio.svg"
              alt="Interreg España–Portugal. Cofinanciado por la Unión Europea. Observatorio EUROACE."
              width="1070"
              height="215"
            />
          </a>
          <div className="header-tools">
            <div className="language-switch" aria-label="Idioma">
              <Button
                variant="ghost"
                aria-pressed={language === 'es'}
                onClick={() => setLanguage('es')}
              >
                ES
              </Button>
              <span aria-hidden="true">/</span>
              <Button
                variant="ghost"
                aria-pressed={language === 'pt'}
                onClick={() => setLanguage('pt')}
              >
                PT
              </Button>
            </div>
            <a href="#analytics" className="header-analytics">
              Analytics <ArrowUpRight size={17} />
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
            language === 'es' ? 'Navegación principal' : 'Navegação principal'
          }
        >
          <div className="wrap nav-inner">
            {t.nav.map((label, i) => (
              <a
                key={anchors[i]}
                href={`#${anchors[i]}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                {i === 2 && <ArrowUpRight size={14} />}
              </a>
            ))}
            <span className="nav-caption">EXTREMADURA · ALENTEJO · CENTRO</span>
          </div>
        </nav>
      </header>
      <main id="contenido">
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
                {language === 'es' ? (
                  <span className="shared-word">
                    <span className="sr-only">compartido.</span>
                    <span aria-hidden="true">
                      <span className="syllable-turquoise">com</span>
                      <span className="syllable-blue">par</span>
                      <span className="syllable-yellow">ti</span>
                      <span className="syllable-yellow">do</span>.
                    </span>
                  </span>
                ) : (
                  t.title[2]
                )}
              </em>
            </h1>
            <p className="hero-description">{t.intro}</p>
            <div className="hero-actions">
              <a className="primary-link" href="#observatorio">
                {t.discover}
                <ArrowRight size={19} />
              </a>
              <a className="text-link" href="#analytics">
                {t.explore}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <LivingRings language={language} />
            <div className="fluid-comparison">
              <p className="fluid-label">{language === 'es' ? '02 · Movimiento fluido' : '02 · Movimento fluido'}</p>
              <LivingRings language={language} variant="fluid" />
            </div>
          </div>
        </section>
        <section
          className="facts wrap"
          aria-label={
            language === 'es' ? 'La EUROACE en cifras' : 'A EUROACE em números'
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
        </section>
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
        <section id="publicaciones" className="publications wrap section-space">
          <p className="eyebrow">{t.publicationsLabel}</p>
          <div className="heading-row">
            <h2>{t.publicationsTitle}</h2>
            <p>{t.publicationsText}</p>
          </div>
          <div className="publication-grid">
            {t.formats.map((format, i) => (
              <article className={`publication publication-${i}`} key={format}>
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
            ))}
          </div>
          <p className="availability">
            <BookOpen size={17} />
            {t.notPublished}
          </p>
        </section>
        <section className="news-section">
          <div className="wrap">
            <p className="eyebrow">{t.newsLabel}</p>
            <h2>{t.newsTitle}</h2>
            <div className="news-grid">
              <article id="actualidad">
                <div className="news-icon">
                  <BookOpen size={25} />
                </div>
                <div>
                  <p className="eyebrow">{t.news}</p>
                  <h3>{t.newsEmpty}</h3>
                  <p>{t.newsText}</p>
                </div>
              </article>
              <article id="eventos">
                <div className="news-icon">
                  <CalendarDays size={25} />
                </div>
                <div>
                  <p className="eyebrow">{t.events}</p>
                  <h3>{t.eventEmpty}</h3>
                  <p>{t.eventText}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="partners-section wrap">
          <p className="eyebrow">{t.partnersLabel}</p>
          <h2>{t.partnersTitle}</h2>
          <div className="partners">
            <div>
              <img
                src="/logo-junta.png"
                alt={t.juntaName}
                width="280"
                height="38"
              />
              <span>{t.junta}</span>
            </div>
            <div>
              <img
                src="/logo-uex.png"
                alt={t.university}
                width="400"
                height="400"
              />
            </div>
            <div>
              <img
                src="/logo-evora.png"
                alt="Universidade de Évora"
                width="401"
                height="126"
              />
            </div>
            <div>
              <img
                src="/logo-ubi.jpeg"
                alt="Universidade da Beira Interior"
                width="315"
                height="160"
              />
            </div>
          </div>
        </section>
      </main>
      <footer id="contacto">
        <div className="wrap contact-row">
          <div>
            <p className="eyebrow">{t.nav[6]}</p>
            <h2>{t.contact}</h2>
            <p>{t.contactText}</p>
          </div>
          <Mail size={42} strokeWidth={1} />
        </div>
        <div className="funding wrap">
          <img
            src="/brand/interreg-observatorio.svg"
            width="1070"
            height="215"
            alt="Interreg España–Portugal. Cofinanciado por la Unión Europea. Observatorio EUROACE."
          />
          <p>{t.funding}</p>
        </div>
        <div className="footer-base wrap">
          <span>{t.footer}</span>
          <span>{t.draft}</span>
        </div>
      </footer>
    </>
  );
}

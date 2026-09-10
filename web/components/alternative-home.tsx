'use client';

// Original institutional images remain unchanged; inline SVG is a labelled diagram.
/* oxlint-disable next/no-img-element, jsx-a11y/prefer-tag-over-role */

import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Compass,
  FileText,
  Lightbulb,
  Menu,
  Network,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { copy } from '@/lib/content';

type Variant = 'editorial' | 'data';
type Content = (typeof copy)['es'];
const anchors = [
  'inicio',
  'observatorio',
  'analytics',
  'publicaciones',
  'actualidad',
  'eventos',
  'contacto',
];
const icons = [Lightbulb, TrendingUp, ChartNoAxesCombined, Zap];
const labels = {
  es: {
    editorialTitle: ['El conocimiento', 'no tiene fronteras.'],
    dataTitle: ['Una mirada más clara', 'a nuestro territorio.'],
    territory: 'EL TERRITORIO QUE NOS UNE',
    discover: 'Explorar el conocimiento',
    shared: 'Una mirada compartida',
    territoryShort: 'Extremadura, Alentejo y Centro de Portugal.',
    analytical: 'DEL TERRITORIO AL CONOCIMIENTO',
    catalogue: '¿Qué te gustaría conocer?',
    access: 'Accesos por área',
    platformTitle: 'Una nueva forma de leer la EUROACE.',
    editorialPlatform: 'Más perspectivas.\nMejores preguntas.',
    platformCta: 'Conoce la futura plataforma',
    chart: 'Comparar para comprender',
    series: 'Ejemplo de indicador',
    demo: 'Representación conceptual. Valores ficticios, sin significado estadístico.',
    resourceLabel: 'BIBLIOTECA DE CONOCIMIENTO',
    territories: 'Tres territorios, una perspectiva común.',
    resources: 'Investigación que se abre al territorio.',
    agenda: 'Conversaciones que nos acercan.',
    newsDate: 'NOVEDADES POR PUBLICAR',
    eventDate: 'FECHAS POR CONFIRMAR',
    connection: 'INVESTIGAR / COMPARTIR / COOPERAR',
    future: 'Próximamente',
    overview: 'LA EUROACE, DE UN VISTAZO',
    country: 'España',
    countries: 'España + Portugal',
    all: 'Ver publicaciones',
  },
  pt: {
    editorialTitle: ['O conhecimento', 'não tem fronteiras.'],
    dataTitle: ['Um olhar mais claro', 'sobre o nosso território.'],
    territory: 'O TERRITÓRIO QUE NOS UNE',
    discover: 'Explorar o conhecimento',
    shared: 'Um olhar partilhado',
    territoryShort: 'Extremadura, Alentejo e Centro de Portugal.',
    analytical: 'DO TERRITÓRIO AO CONHECIMENTO',
    catalogue: 'O que gostaria de conhecer?',
    access: 'Acessos por área',
    platformTitle: 'Uma nova forma de ler a EUROACE.',
    editorialPlatform: 'Mais perspetivas.\nMelhores perguntas.',
    platformCta: 'Conheça a futura plataforma',
    chart: 'Comparar para compreender',
    series: 'Exemplo de indicador',
    demo: 'Representação conceptual. Valores fictícios, sem significado estatístico.',
    resourceLabel: 'BIBLIOTECA DE CONHECIMENTO',
    territories: 'Três territórios, uma perspetiva comum.',
    resources: 'Investigação que se abre ao território.',
    agenda: 'Conversas que nos aproximam.',
    newsDate: 'NOVIDADES A PUBLICAR',
    eventDate: 'DATAS A CONFIRMAR',
    connection: 'INVESTIGAR / PARTILHAR / COOPERAR',
    future: 'Em breve',
    overview: 'A EUROACE NUM RELANCE',
    country: 'Espanha',
    countries: 'Espanha + Portugal',
    all: 'Ver publicações',
  },
};

function InstitutionalFooter({ t }: { t: Content }) {
  return (
    <>
      <section className="alt-partners alt-wrap">
        <p className="alt-kicker">{t.partnersLabel}</p>
        <h2>{t.partnersTitle}</h2>
        <div className="alt-partner-logos">
          <div>
            <img
              src="/logo-junta.png"
              alt={t.juntaName}
              width="280"
              height="38"
            />
            <p>{t.junta}</p>
          </div>
          <img
            src="/logo-uex.png"
            alt={t.university}
            width="400"
            height="400"
          />
          <img
            src="/logo-evora.png"
            alt="Universidade de Évora"
            width="401"
            height="126"
          />
          <img
            src="/logo-ubi.jpeg"
            alt="Universidade da Beira Interior"
            width="315"
            height="160"
          />
        </div>
      </section>
      <footer className="alt-footer" id="contacto">
        <div className="alt-wrap">
          <div className="alt-contact">
            <h2>{t.contact}</h2>
            <p>{t.contactText}</p>
            <ArrowUpRight size={40} aria-hidden="true" />
          </div>
          <div className="alt-funding">
            <img
              src="/brand/interreg-observatorio.svg"
              alt="Interreg España–Portugal. Cofinanciado por la Unión Europea. Observatorio EUROACE."
              width="1070"
              height="215"
            />
            <p>{t.funding}</p>
          </div>
          <div className="alt-colophon">
            <span>{t.footer}</span>
            <span>{t.draft}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function ComparisonChart({
  t,
  language,
  compact = false,
}: {
  t: Content;
  language: 'es' | 'pt';
  compact?: boolean;
}) {
  const l = labels[language];
  return (
    <figure className={`alt-comparison ${compact ? 'compact' : ''}`}>
      <figcaption>
        <span>{l.chart}</span>
        <span className="alt-demo-tag">DEMO</span>
      </figcaption>
      <p>{l.series}</p>
      <svg viewBox="0 0 510 220" role="img" aria-label={t.chartAlt}>
        <g className="alt-chart-grid">
          <path d="M160 22V183M233 22V183M306 22V183M379 22V183M452 22V183" />
        </g>
        <g className="alt-chart-text">
          <text x="0" y="53">
            Extremadura
          </text>
          <text x="0" y="110">
            Alentejo
          </text>
          <text x="0" y="167">
            Centro
          </text>
        </g>
        <path d="M160 47H390" stroke="#18baa8" strokeWidth="3" />
        <circle cx="390" cy="47" r="9" fill="#18baa8" />
        <path
          d="M160 104H332"
          stroke="#1e00ff"
          strokeWidth="3"
          strokeDasharray="7 3"
        />
        <rect x="324" y="96" width="16" height="16" fill="#1e00ff" />
        <path
          d="M160 161H420"
          stroke="#666666"
          strokeWidth="3"
          strokeDasharray="2 4"
        />
        <path d="M420 151L430 169H410Z" fill="#666666" />
        <g className="alt-chart-ticks">
          <text x="155" y="210">
            0
          </text>
          <text x="224" y="210">
            25
          </text>
          <text x="297" y="210">
            50
          </text>
          <text x="370" y="210">
            75
          </text>
          <text x="440" y="210">
            100
          </text>
        </g>
      </svg>
      <p className="alt-chart-note">{l.demo}</p>
    </figure>
  );
}

export function AlternativeHome({ variant }: { variant: Variant }) {
  const [language, setLanguage] = useState<'es' | 'pt'>('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const t = copy[language];
  const l = labels[language];
  const editorial = variant === 'editorial';
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menuOpen]);
  return (
    <div className={`alternative alt-${variant}`}>
      <a className="skip-link" href="#alt-content">
        {t.skip}
      </a>
      <header className="alt-header" id="inicio">
        <div className="alt-wrap alt-masthead">
          <a href="#inicio" className="alt-brand" aria-label={t.footer}>
            <img
              src="/brand/interreg-observatorio.svg"
              alt="Interreg España–Portugal. Cofinanciado por la Unión Europea. Observatorio EUROACE."
              width="1070"
              height="215"
            />
          </a>
          <div className="alt-header-tools">
            <div className="alt-languages" aria-label="Idioma">
              <Button
                variant="ghost"
                aria-pressed={language === 'es'}
                onClick={() => setLanguage('es')}
              >
                ES
              </Button>
              <span>/</span>
              <Button
                variant="ghost"
                aria-pressed={language === 'pt'}
                onClick={() => setLanguage('pt')}
              >
                PT
              </Button>
            </div>
            <a href="#analytics" className="alt-header-cta">
              Analytics
              <ArrowUpRight size={17} />
            </a>
            <Button
              ref={menuButton}
              variant="ghost"
              className="alt-menu-toggle"
              aria-label={menuOpen ? t.close : t.menu}
              aria-expanded={menuOpen}
              aria-controls="alt-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <nav
          className={`alt-navigation ${menuOpen ? 'open' : ''}`}
          id="alt-navigation"
          aria-label={
            language === 'es' ? 'Navegación principal' : 'Navegação principal'
          }
        >
          <div className="alt-wrap">
            {t.nav.map((name, i) => (
              <a
                key={name}
                href={`#${anchors[i]}`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main id="alt-content">
        {editorial ? (
          <section className="editorial-hero alt-wrap">
            <div className="editorial-dateline">
              <p className="alt-kicker">{t.eyebrow}</p>
              <span>ES / PT</span>
            </div>
            <h1>
              {l.editorialTitle[0]}
              <br />
              <em>{l.editorialTitle[1]}</em>
            </h1>
            <div className="editorial-hero-bottom">
              <p className="editorial-territory-label">
                <Compass size={21} />
                {l.territoryShort}
              </p>
              <div>
                <p>{t.intro}</p>
                <a href="#observatorio" className="alt-underlined">
                  {t.discover}
                  <ArrowDown size={18} />
                </a>
              </div>
            </div>
            <div className="editorial-territories" aria-label={l.territory}>
              {['Extremadura', 'Alentejo', 'Centro'].map((name, i) => (
                <div key={name}>
                  <span>
                    0{i + 1} <span>{i === 0 ? l.country : 'Portugal'}</span>
                  </span>
                  <h2>{name}</h2>
                  <div className="territory-rule" aria-hidden="true" />
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="data-hero">
            <div className="alt-wrap data-hero-inner">
              <div>
                <p className="alt-kicker">{t.eyebrow}</p>
                <h1>
                  {l.dataTitle[0]}
                  <br />
                  <em>{l.dataTitle[1]}</em>
                </h1>
                <p className="data-hero-description">{t.intro}</p>
                <a href="#analytics" className="alt-action">
                  {t.explore}
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <div className="data-directory">
                <div>
                  <Network size={22} />
                  <span className="alt-kicker">{l.access}</span>
                </div>
                <h2>{l.catalogue}</h2>
                <nav aria-label={t.areasLabel}>
                  {t.areas.map((area, i) => {
                    const Icon = icons[i];
                    return (
                      <a href={`#area-${i}`} key={area}>
                        <Icon size={20} />
                        <span>{area}</span>
                        <ArrowUpRight size={17} />
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </section>
        )}

        {!editorial && (
          <section className="data-facts alt-wrap" aria-label={l.overview}>
            <div>
              <span className="alt-kicker">EUROACE</span>
              <p>{l.territories}</p>
            </div>
            {[
              ['03', t.regions],
              ['02', t.countries],
              ['04', t.partners],
            ].map(([n, name]) => (
              <div key={n}>
                <strong>{n}</strong>
                <span>{name}</span>
              </div>
            ))}
          </section>
        )}

        <section className="alt-about alt-wrap alt-section" id="observatorio">
          <div className="alt-about-heading">
            <p className="alt-kicker">{t.aboutLabel}</p>
            <h2>{editorial ? l.shared : t.aboutTitle}</h2>
            <p>{t.about}</p>
            <div className="alt-audiences">
              {t.audience.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            {editorial && (
              <div className="editorial-small-facts">
                <span>
                  <b>3</b>
                  {t.regions}
                </span>
                <span>
                  <b>2</b>
                  {t.countries}
                </span>
                <span>
                  <b>4</b>
                  {t.partners}
                </span>
              </div>
            )}
          </div>
          <div className="alt-areas">
            <p className="alt-kicker">{t.areasLabel}</p>
            <div>
              {t.areas.map((area, i) => {
                const Icon = icons[i];
                return (
                  <article id={`area-${i}`} key={area}>
                    <span className="alt-area-index">
                      {editorial ? `0${i + 1}` : <Icon size={24} />}
                    </span>
                    <div>
                      <h3>{area}</h3>
                      <p>{t.areaText[i]}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="alt-analytics" id="analytics">
          <div className="alt-wrap">
            <div className="alt-analytics-heading">
              <div>
                <p className="alt-kicker">EUROACE ANALYTICS</p>
                <h2>{editorial ? l.editorialPlatform : l.platformTitle}</h2>
              </div>
              <span className="alt-status">{t.future}</span>
            </div>
            <div className="alt-analytics-body">
              <div className="alt-analytics-description">
                <p>{t.analyticsText}</p>
                <ul>
                  {t.capabilities.map((cap, i) => (
                    <li key={cap}>
                      <span>0{i + 1}</span>
                      {cap}
                    </li>
                  ))}
                </ul>
                {!editorial && (
                  <div className="data-territory-legend">
                    <span>Extremadura</span>
                    <span>Alentejo</span>
                    <span>Centro</span>
                  </div>
                )}
              </div>
              <ComparisonChart t={t} language={language} />
            </div>
          </div>
        </section>

        <section
          className="alt-publications alt-wrap alt-section"
          id="publicaciones"
        >
          <div className="alt-resource-heading">
            <p className="alt-kicker">{l.resourceLabel}</p>
            <h2>{l.resources}</h2>
            <p>{t.publicationsText}</p>
          </div>
          <div className="alt-resources">
            {t.formats.map((format, i) => (
              <article key={format}>
                <div className="alt-resource-number" aria-hidden="true">
                  {editorial ? (
                    <>
                      <span>EUROACE</span>
                      <strong>0{i + 1}</strong>
                      <span>{format}</span>
                    </>
                  ) : (
                    <FileText size={26} />
                  )}
                </div>
                <div>
                  <p className="alt-kicker">{format}</p>
                  <h3>{t.pubTitles[i]}</h3>
                  <p>{t.pubDescriptions[i]}</p>
                  <span className="alt-planned">{t.planned}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="alt-availability">
            <BookOpen size={18} />
            {t.notPublished}
          </p>
        </section>

        <section className="alt-agenda">
          <div className="alt-wrap">
            <div className="alt-agenda-heading">
              <p className="alt-kicker">{t.newsLabel}</p>
              <h2>{l.agenda}</h2>
            </div>
            <div className="alt-agenda-grid">
              <article id="actualidad">
                <span className="alt-kicker">{l.newsDate}</span>
                <h3>{t.newsEmpty}</h3>
                <p>{t.newsText}</p>
                <span className="alt-agenda-category">{t.news}</span>
              </article>
              <article id="eventos">
                <span className="alt-kicker">{l.eventDate}</span>
                <h3>{t.eventEmpty}</h3>
                <p>{t.eventText}</p>
                <span className="alt-agenda-category">{t.events}</span>
              </article>
            </div>
          </div>
        </section>
      </main>
      <InstitutionalFooter t={t} />
    </div>
  );
}

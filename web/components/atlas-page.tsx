'use client';

/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import { useState, type ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  FileText,
  Gauge,
  PanelsTopLeft,
  GraduationCap,
  Lightbulb,
  Network,
  Search,
  Users,
  Zap,
} from 'lucide-react';
import { SiteHeader } from './site-header';
import { SocialLinks } from './social-links';
import { PageHeaderReview } from './page-header-review';
import { EventsCalendar } from './events-calendar';
import { EssentialFooter } from './essential-footer-proposals';
import { EssentialAtlas } from './essential-atlas';
import { ResearchCards } from './research-card-proposals';
import { atlasPageCopy } from '@/lib/atlas-page-copy';
import { atlasPartners, partnerRegions } from '@/lib/atlas-partners';
import { essentialCopy } from '@/lib/essential-copy';
import { essentialNews } from '@/lib/essential-news';
import { copy } from '@/lib/content';
import {
  projectCopy,
  projectSource,
  coordinationContact,
  sectionIds,
  type Language,
  type Section,
} from '@/lib/project';
import { useSiteLanguage } from '@/lib/site-language';
import './atlas-page.css';
import './manual-palette.css';
import './button-effects.css';

const areaIcons = [Lightbulb, Zap, Network];
const studies = [
  { area: 0, topic: 0 },
  { area: 0, topic: 1 },
  { area: 0, topic: 2 },
  { area: 1, topic: 0 },
  { area: 2, topic: 0 },
];
const regionNames = {
  alentejo: 'Alentejo',
  centro: 'Centro',
  extremadura: 'Extremadura',
};

function url(path: string, language: Language) {
  return `${path}?lang=${language}`;
}
function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      className="hp-link"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function SectionTitle({ title, label }: { title: string; label?: string }) {
  return (
    <div className="ap-section-title">
      {label && <p className="hp-kicker">{label}</p>}
      <h2>{title}</h2>
    </div>
  );
}

function ProjectPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const essential = essentialCopy[language];
  const base = copy[language];
  const money = new Intl.NumberFormat(
    language === 'en' ? 'en-IE' : language === 'pt' ? 'pt-PT' : 'es-ES',
    { style: 'currency', currency: 'EUR' },
  );
  return (
    <>
      <section className="ap-band">
        <div className="hp-container ap-purpose">
          <div>
            <p className="hp-kicker">{t.purpose}</p>
            <h2>{essential.introTitle}</h2>
            <p>{t.purposeText}</p>
          </div>
          <dl className="ap-stats">
            {[
              [2, t.countries],
              [3, t.regions],
              [4, t.partners],
            ].map(([number, label]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{number}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="ap-section hp-container">
        <SectionTitle title={t.areas} />
        <ResearchCards language={language} design="ventanas" />
      </section>
      <section className="ap-section hp-container ap-audience">
        <SectionTitle title={t.audience} />
        <div>
          {base.audience.map((name, index) => (
            <span key={name}>
              <span aria-hidden="true">0{index + 1}</span>
              {name}
            </span>
          ))}
        </div>
      </section>
      <section className="ap-band ap-funding-band">
        <div className="hp-container ap-funding">
          <div>
            <SectionTitle
              title={t.projectDetails}
              label="INTERREG · POCTEP 2021–2027"
            />
            <p>{essential.funding}</p>
            <TextLink href={projectSource} external>
              {essential.source}
            </TextLink>
          </div>
          <dl>
            {[
              [essential.budget, money.format(874567.7)],
              [essential.erdf, money.format(655925.78)],
              [essential.rate, '75 %'],
              [t.duration, '01/01/2026 · 31/12/2028'],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function ActivitiesPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const project = projectCopy[language];
  const essential = essentialCopy[language];
  const icons = [Search, Network, ChartNoAxesCombined, Users];
  return (
    <>
      <section className="ap-section hp-container ap-activities">
        {project.activities.map((title, index) => {
          const Icon = icons[index];
          return (
            <article key={title}>
              <div className="ap-activity-mark">
                <span>0{index + 1}</span>
                <Icon size={30} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{project.activityText[index]}</p>
                {index === 2 && (
                  <TextLink href={url('/analytics', language)}>
                    EUROACE Analytics
                  </TextLink>
                )}
              </div>
            </article>
          );
        })}
      </section>
      <section className="ap-band">
        <div className="hp-container ap-section">
          <SectionTitle title={t.studies} />
          <p className="ap-section-intro">{t.studyIntro}</p>
          <div className="ap-study-list">
            {studies.map(({ area, topic }, index) => (
              <article key={`${area}-${topic}`}>
                <span className={`ap-study-number ap-area-${area}`}>
                  0{index + 1}
                </span>
                <div>
                  <p className="hp-kicker">
                    {essential.researchAreas[area].title}
                  </p>
                  <h3>{essential.researchAreas[area].topics[topic]}</h3>
                </div>
                <Check size={20} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ap-section hp-container">
        <SectionTitle title={t.transfer} />
        <p className="ap-section-intro">{t.transferText}</p>
        <div className="ap-two-cards">
          <article>
            <Network size={28} aria-hidden="true" />
            <h3>{t.labs}</h3>
            <p>{t.labsText}</p>
          </article>
          <article>
            <Users size={28} aria-hidden="true" />
            <h3>{t.campus}</h3>
            <p>{t.campusText}</p>
          </article>
        </div>
      </section>
    </>
  );
}

function PartnerCards({
  language,
  contact = false,
}: {
  language: Language;
  contact?: boolean;
}) {
  const t = atlasPageCopy[language];
  const project = projectCopy[language];
  return (
    <div className={contact ? 'ap-contact-partners' : 'ap-partner-grid'}>
      {atlasPartners.map((partner, index) => (
        <article key={partner.name}>
          <div className="ap-partner-top">
            <span className="hp-kicker">{partnerRegions[index]}</span>
            <span className="ap-partner-index">0{index + 1}</span>
          </div>
          <div className="ap-partner-logo">
            <img
              src={partner.image}
              width={partner.width}
              height={partner.height}
              alt={partner.name}
            />
          </div>
          <h3>{partner.name}</h3>
          {!contact && <p>{project.roles[index]}</p>}
          <TextLink href={partner.url} external>
            {t.institutionalWeb}
          </TextLink>
        </article>
      ))}
    </div>
  );
}

function PartnersPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  return (
    <>
      <section className="ap-section hp-container">
        <SectionTitle title={t.partnersTitle} />
        <PartnerCards language={language} />
      </section>
      <section className="ap-band">
        <div className="hp-container ap-cooperation">
          <Network size={62} strokeWidth={1.1} aria-hidden="true" />
          <div>
            <h2>{t.cooperation}</h2>
            <p>{t.cooperationText}</p>
            <TextLink href={url('/actividades', language)}>
              {t.viewActivities}
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}

function PublicationsPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const base = copy[language];
  const [query, setQuery] = useState('');
  const [format, setFormat] = useState('all');
  const formatIcons = [FileText, Gauge, PanelsTopLeft, GraduationCap];
  const formats = base.formats.map((name, index) => ({
    name,
    index,
    description: base.pubDescriptions[index],
  }));
  const filtered = formats.filter(
    (item) =>
      (format === 'all' || format === String(item.index)) &&
      normalize(`${item.name} ${item.description}`).includes(normalize(query)),
  );
  const reset = () => {
    setQuery('');
    setFormat('all');
  };
  return (
    <section className="ap-section hp-container">
      <SectionTitle title={t.resources} />
      <p className="ap-section-intro">{t.catalogNote}</p>
      <div className="ap-filters">
        <label className="ap-search">
          <span>{t.searchPublications}</span>
          <div>
            <Search size={19} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchPublications}
            />
          </div>
        </label>
        <label>
          <span>{t.format}</span>
          <select
            value={format}
            onChange={(event) => setFormat(event.target.value)}
          >
            <option value="all">{t.all}</option>
            {formats.map((item) => (
              <option key={item.index} value={item.index}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <output className="ap-result-count">
        {filtered.length} / {formats.length}
      </output>
      {filtered.length ? (
        <div className="ap-resource-grid">
          {filtered.map((item) => {
            const Icon = formatIcons[item.index];
            return (
              <article key={item.index}>
                <div className={`ap-resource-art ap-format-${item.index}`}>
                  <Icon size={56} strokeWidth={1.1} aria-hidden="true" />
                  <span aria-hidden="true">0{item.index + 1}</span>
                </div>
                <div className="ap-resource-content">
                  <span className="ap-status">{t.planned}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="ap-empty">
          <BookOpen size={34} strokeWidth={1.3} aria-hidden="true" />
          <h3>{t.noMatches}</h3>
          <button type="button" className="hp-link" onClick={reset}>
            {t.reset}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
      <div className="ap-inline-callout">
        <p>{t.publicationCta}</p>
        <TextLink href={url('/actualidad', language)}>{t.viewNews}</TextLink>
      </div>
    </section>
  );
}

function NewsPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const essential = essentialCopy[language];
  const [query, setQuery] = useState('');
  const [source, setSource] = useState('all');
  const [order, setOrder] = useState('latest');
  const sources = [...new Set(essentialNews.map((item) => item.source))];
  const filtered = essentialNews
    .filter(
      (item) =>
        (source === 'all' || source === item.source) &&
        normalize(
          `${item.copy[language].title} ${item.copy[language].summary} ${item.source}`,
        ).includes(normalize(query)),
    )
    .sort((a, b) =>
      order === 'latest'
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date),
    );
  const date = new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return (
    <section className="ap-section hp-container">
      <div className="ap-filters ap-news-filters">
        <label className="ap-search">
          <span>{t.searchNews}</span>
          <div>
            <Search size={19} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.searchNews}
            />
          </div>
        </label>
        <label>
          <span>{t.sources}</span>
          <select
            value={source}
            onChange={(event) => setSource(event.target.value)}
          >
            <option value="all">{t.all}</option>
            {sources.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{t.order}</span>
          <select
            value={order}
            onChange={(event) => setOrder(event.target.value)}
          >
            <option value="latest">{t.latest}</option>
            <option value="oldest">{t.oldest}</option>
          </select>
        </label>
      </div>
      <output className="ap-result-count">
        {filtered.length} / {essentialNews.length}
      </output>
      {filtered.length ? (
        <div className="ap-news-grid">
          {filtered.map((item, index) => (
            <article
              className={index === 0 ? 'ap-news-feature' : ''}
              key={item.id}
            >
              <img
                src={item.image.src}
                alt={item.copy[language].imageAlt}
                width={item.image.width}
                height={item.image.height}
                loading="lazy"
              />
              <div className="ap-news-content">
                <div className="ap-news-meta">
                  <time dateTime={item.date}>
                    {date.format(new Date(`${item.date}T12:00:00Z`))}
                  </time>
                  <span>{item.source}</span>
                </div>

                <h2>{item.copy[language].title}</h2>
                <p>{item.copy[language].summary}</p>
                <TextLink href={item.url} external>
                  {essential.readNews}
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="ap-empty">
          <Search size={34} aria-hidden="true" />
          <h3>{t.noMatches}</h3>
          <button
            className="hp-link"
            type="button"
            onClick={() => {
              setQuery('');
              setSource('all');
              setOrder('latest');
            }}
          >
            {t.reset}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

function EventsPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const project = projectCopy[language];
  const [archive, setArchive] = useState(false);
  const date = new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return (
    <>
      <section className="ap-section hp-container">
        <fieldset className="ap-tabs" aria-label={project.nav[5]}>
          <button
            type="button"
            aria-pressed={!archive}
            onClick={() => setArchive(false)}
          >
            {t.upcoming}
          </button>
          <button
            type="button"
            aria-pressed={archive}
            onClick={() => setArchive(true)}
          >
            {t.archive}
          </button>
        </fieldset>
        {!archive ? (
          <div className="ap-event-upcoming">
            <EventsCalendar language={language} />
            <div className="ap-event-pending">
              <div className="ap-calendar-symbol" aria-hidden="true">
                <CalendarDays size={75} strokeWidth={1.1} />
                <span>EUROACE</span>
              </div>
              <div>
                <span className="ap-status">
                  {essentialCopy[language].agendaStatus}
                </span>
                <h2>{t.eventPending}</h2>
                <p>{t.eventPendingText}</p>
                <button
                  type="button"
                  className="hp-link"
                  onClick={() => setArchive(true)}
                >
                  {t.archive}
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="ap-event-grid">
            {[
              {
                item: essentialNews.find((item) => item.id === 'coordination')!,
                title: t.coordination,
                date: '2026-07-23',
                displayDate: date.format(new Date('2026-07-23T12:00:00Z')),
                place: 'Covilhã · Centro',
              },
              {
                item: essentialNews.find((item) => item.id === 'launch')!,
                title: t.kickoff,
                date: '2026-06-02',
                displayDate: date.format(new Date('2026-06-02T12:00:00Z')),
                place: 'Badajoz · Extremadura',
              },
            ].map((event) => (
              <article key={event.date}>
                <img
                  src={event.item.image.src}
                  alt={event.item.copy[language].imageAlt}
                  width={event.item.image.width}
                  height={event.item.image.height}
                />
                <div>
                  <time dateTime={event.date}>{event.displayDate}</time>
                  <h3>{event.title}</h3>
                  <p>{event.place}</p>
                  <TextLink href={event.item.url} external>
                    {t.eventSource}
                  </TextLink>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <section className="ap-band">
        <div className="hp-container ap-section">
          <SectionTitle title={t.eventFormats} />
          <div className="ap-event-formats">
            {t.eventFormatNames.map((name, index) => (
              <div key={name}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{name}</h3>
              </div>
            ))}
          </div>
          <TextLink href={url('/actividades', language)}>
            {t.viewActivities}
          </TextLink>
        </div>
      </section>
    </>
  );
}

function AnalyticsPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const essential = essentialCopy[language];
  const [area, setArea] = useState(0);
  const [region, setRegion] = useState('all');
  const selected = essential.researchAreas[area];
  const regionLabel =
    region === 'all'
      ? t.allRegions
      : regionNames[region as keyof typeof regionNames];
  return (
    <section className="ap-section hp-container">
      <div className="ap-data-notice">
        <span className="ap-status">{t.dataStatus}</span>
        <p>{t.dataStatusText}</p>
      </div>
      <div className="ap-analytics-controls">
        <div>
          <p className="ap-field-label">{t.area}</p>
          <fieldset className="ap-area-buttons" aria-label={t.area}>
            {essential.researchAreas.map((item, index) => {
              const Icon = areaIcons[index];
              return (
                <button
                  className={`ap-area-${index}`}
                  key={item.title}
                  type="button"
                  aria-pressed={area === index}
                  onClick={() => setArea(index)}
                >
                  <Icon size={20} aria-hidden="true" />
                  {item.title}
                </button>
              );
            })}
          </fieldset>
        </div>
        <label>
          <span className="ap-field-label">{t.region}</span>
          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option value="all">{t.allRegions}</option>
            {Object.entries(regionNames).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="ap-analytics-grid">
        <div className="ap-territory" data-region={region}>
          <p className="hp-kicker">{t.selectedTerritory}</p>
          <output className="ap-region-name">{regionLabel}</output>
          <EssentialAtlas language={language} />
        </div>
        <div className={`ap-analysis ap-area-${area}`}>
          <p className="hp-kicker">EUROACE ANALYTICS</p>
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
          <ul className="ap-topic-list">
            {selected.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <h3>{t.questionsTitle}</h3>
          <ol>
            {t.questions[area].map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
          <TextLink href={url('/publicaciones', language)}>
            {t.viewPublications}
          </TextLink>
        </div>
      </div>
    </section>
  );
}

function ContactPage({ language }: { language: Language }) {
  const t = atlasPageCopy[language];
  const base = copy[language];
  const [audience, setAudience] = useState(0);
  const destinations = [
    '/nosotros',
    '/actividades',
    '/observatorio',
    '/actualidad',
  ];
  return (
    <>
      <section className="hp-container ap-contact-direct">
        <div>
          <p className="hp-kicker">
            {
              {
                es: 'COORDINACIÓN DEL PROYECTO',
                pt: 'COORDENAÇÃO DO PROJETO',
                en: 'PROJECT COORDINATION',
              }[language]
            }
          </p>
          <h2>Junta de Extremadura</h2>
          <TextLink href={coordinationContact.source} external>
            {essentialCopy[language].source}
          </TextLink>
        </div>
        <div>
          <a href={`mailto:${coordinationContact.email}`}>
            {coordinationContact.email}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <a href={coordinationContact.phoneHref}>
            {coordinationContact.phone}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="ap-section hp-container ap-contact-routing">
        <SectionTitle title={t.contactAudience} />
        <fieldset className="ap-tabs" aria-label={t.contactAudience}>
          {base.audience.map((name, index) => (
            <button
              key={name}
              type="button"
              aria-pressed={audience === index}
              onClick={() => setAudience(index)}
            >
              {name}
            </button>
          ))}
        </fieldset>
        <div className="ap-contact-guidance">
          <p>{t.contactGuidance[audience]}</p>
          <TextLink href={url(destinations[audience], language)}>
            {t.continue}
          </TextLink>
        </div>
      </section>
      <section className="ap-band">
        <div className="hp-container ap-section">
          <SectionTitle title={t.channelPending} />
          <p className="ap-section-intro">{t.channelPendingText}</p>
          <PartnerCards language={language} contact />
        </div>
      </section>
      <section
        className="ap-section hp-container ap-social-section"
        id="redes-sociales"
      >
        <SectionTitle title={t.socialTitle} />
        <SocialLinks language={language} />
      </section>
    </>
  );
}

const pageBodies = {
  observatorio: ProjectPage,
  actividades: ActivitiesPage,
  nosotros: PartnersPage,
  publicaciones: PublicationsPage,
  actualidad: NewsPage,
  eventos: EventsPage,
  analytics: AnalyticsPage,
  contacto: ContactPage,
};

export function AtlasPage({ section }: { section: Section }) {
  const language = useSiteLanguage();
  const t = atlasPageCopy[language];
  const project = projectCopy[language];
  const Body = pageBodies[section];
  const next =
    sectionIds[(sectionIds.indexOf(section) + 1) % sectionIds.length];
  return (
    <div
      className={`hp hp-variant-1 he he-theme-3 he-atlas-layout ap ap-${section}`}
      data-site-palette="manual"
      data-button-effect="arrow-shine"
    >
      <SiteHeader language={language} activeSection={section} />
      <main id="hp-contenido">
        <PageHeaderReview section={section} language={language} />
        <div id="ap-page-body">
          <Body language={language} />
        </div>
        <section className="ap-next hp-container">
          <div>
            <p className="hp-kicker">{t.continue}</p>
            <h2>{project.nav[sectionIds.indexOf(next)]}</h2>
          </div>
          <a
            className="hp-button motion-button"
            href={url(`/${next}`, language)}
          >
            {project.nav[sectionIds.indexOf(next)]}
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </section>
      </main>
      <EssentialFooter language={language} showCredits={false} />
    </div>
  );
}

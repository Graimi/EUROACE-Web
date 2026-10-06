import { ProjectSignature } from './project-signature';
/* oxlint-disable next/no-img-element */
import {
  partners,
  projectCopy,
  projectSource,
  type Language,
} from '@/lib/project';

export function InstitutionalBanner() {
  return (
    <div className="institutional-banner wrap">
      <a href="https://www.euro-ace.eu/">
        <ProjectSignature />
      </a>
    </div>
  );
}

export function ProjectFacts({ language }: { language: Language }) {
  const t = projectCopy[language];
  const values = [
    '0461_OBSERVATORIO_EUROACE_4_E',
    'Interreg VI-A España–Portugal (POCTEP) 2021–2027',
    '874.567,70 €',
    '655.925,78 €',
    ...t.policy,
    '01/01/2026',
    '31/12/2028',
  ];
  return (
    <div className="project-details">
      <h3>{t.factsTitle}</h3>
      <dl className="project-facts">
        {t.factLabels.map((label, i) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{values[i]}</dd>
          </div>
        ))}
      </dl>
      <p className="source-note">{t.sourceNote}</p>
      <a className="text-link" href={projectSource}>
        {t.source} ↗
      </a>
    </div>
  );
}

export function Activities({ language }: { language: Language }) {
  const t = projectCopy[language];
  return (
    <section id="actividades" className="wrap section-space project-activities">
      <p className="eyebrow">{t.nav[1]}</p>
      <h2>{t.activitiesTitle}</h2>
      <p className="section-intro">{t.activitiesIntro}</p>
      <div className="activity-grid">
        {t.activities.map((name, i) => (
          <article key={name}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{name}</h3>
            <p>{t.activityText[i]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Partners({ language }: { language: Language }) {
  const t = projectCopy[language];
  return (
    <section id="nosotros" className="wrap section-space project-partners">
      <p className="eyebrow">{t.nav[2]}</p>
      <h2>
        {language === 'es'
          ? 'Cuatro socios. Una visión compartida.'
          : language === 'pt'
            ? 'Quatro parceiros. Uma visão partilhada.'
            : 'Four partners. One shared vision.'}
      </h2>
      <div className="partner-grid">
        {partners.map((partner, i) => (
          <article key={partner.name}>
            <a className="partner-image" href={partner.url}>
              <img
                src={partner.image}
                alt={partner.name}
                width="280"
                height="130"
              />
            </a>
            <h3>{partner.name}</h3>
            <p>{t.roles[i]}</p>
            <a className="text-link" href={partner.url}>
              {t.visit} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Events({ language }: { language: Language }) {
  const t = projectCopy[language];
  return (
    <section id="eventos" className="wrap section-space project-events">
      <p className="eyebrow">{t.nav[5]}</p>
      <h2>{t.nav[5]}</h2>
      <p className="section-intro">{t.eventIntro}</p>
      <div className="activity-grid">
        <article>
          <h3>{t.upcoming}</h3>
          <p>{t.upcomingEmpty}</p>
        </article>
        <article>
          <h3>{t.past}</h3>
          <p>{t.pastEmpty}</p>
        </article>
      </div>
    </section>
  );
}

export function ContactDetails({ language }: { language: Language }) {
  const t = projectCopy[language];
  return (
    <div className="wrap contact-details">
      <div>
        <h3>{t.email}</h3>
        <p>{t.emailEmpty}</p>
        <a className="text-link" href={`/nosotros?lang=${language}`}>
          {t.nav[2]} ↗
        </a>
      </div>
      <div>
        <h3>{t.social}</h3>
        <p>{t.socialEmpty}</p>
      </div>
    </div>
  );
}

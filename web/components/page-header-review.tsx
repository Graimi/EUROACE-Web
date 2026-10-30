'use client';

/* oxlint-disable next/no-html-link-for-pages */
import { useState } from 'react';
import { ArrowDown, Pause, Play } from 'lucide-react';
import { AtlasHeroArt } from './atlas-hero-art';
import { ProjectHeading } from './project-heading';
import { atlasPageCopy } from '@/lib/atlas-page-copy';
import { selectedHeaderStyles } from '@/lib/header-styles';
import {
  projectCopy,
  sectionIds,
  type Language,
  type Section,
} from '@/lib/project';

export function PageHeaderReview({
  section,
  language,
}: {
  section: Section;
  language: Language;
}) {
  const [paused, setPaused] = useState(false);
  const project = projectCopy[language];
  const page = atlasPageCopy[language].pages[section];
  const styles = selectedHeaderStyles;
  const [selected, setSelected] = useState('editorial');
  const activeStyle =
    styles.find((style) => style.id === selected) ?? styles[0];
  const activeId = activeStyle.id;
  const t = {
    es: {
      breadcrumb: 'Ruta de navegación',
      label: 'Propuestas de cabecera',
      nav: 'Comparar estilos de cabecera',
      jump: 'Ir al contenido de la página',
      proposal: 'Propuesta',
      pause: 'Pausar propuestas',
      resume: 'Reanudar propuestas',
    },
    pt: {
      breadcrumb: 'Percurso de navegação',
      label: 'Propostas de cabeçalho',
      nav: 'Comparar estilos de cabeçalho',
      jump: 'Ir para o conteúdo da página',
      proposal: 'Proposta',
      pause: 'Pausar propostas',
      resume: 'Retomar propostas',
    },
    en: {
      breadcrumb: 'Breadcrumb',
      label: 'Header proposals',
      nav: 'Compare header styles',
      jump: 'Go to page content',
      proposal: 'Proposal',
      pause: 'Pause proposals',
      resume: 'Resume proposals',
    },
  }[language];
  const title =
    section === 'observatorio' ? (
      <ProjectHeading language={language} />
    ) : (
      <h1 className="ap-hero-title">{page.title}</h1>
    );
  return (
    <div
      className="ap-header-review hp-container"
      data-animations-paused={paused}
    >
      <nav className="ap-breadcrumb" aria-label={t.breadcrumb}>
        <a href={`/?lang=${language}`}>{project.home}</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">
          {project.nav[sectionIds.indexOf(section)]}
        </span>
      </nav>
      <div className="ap-review-toolbar">
        <p className="hp-kicker">{t.label}</p>
        <div className="ap-review-actions">
          <button
            className="ap-motion-toggle"
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <Play size={13} aria-hidden="true" />
            ) : (
              <Pause size={13} aria-hidden="true" />
            )}
            {paused ? t.resume : t.pause}
          </button>
          <a className="ap-review-content-link" href="#ap-page-body">
            {t.jump}
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <fieldset className="ap-review-index" aria-label={t.nav}>
        {styles.map((style) => (
          <button
            type="button"
            key={style.id}
            aria-pressed={activeId === style.id}
            aria-controls="cabecera-activa"
            onClick={() => setSelected(style.id)}
          >
            <span>0{style.number}</span>
            {style.name[language]}
          </button>
        ))}
      </fieldset>
      <section
        className="ap-header-option"
        id="cabecera-activa"
        data-header-style={activeId}
        aria-labelledby="cabecera-activa-label"
        key={`${section}-${activeId}`}
      >
        <p className="ap-header-option-label" id="cabecera-activa-label">
          <span>{`${t.proposal} 0${activeStyle.number}`}</span>
          <strong>{activeStyle.name[language]}</strong>
        </p>
        <div className={`ap-hero ap-hero-design-${activeStyle.design}`}>
          <div>
            <p className="hp-kicker">
              EUROACE / {project.nav[sectionIds.indexOf(section)]}
            </p>
            {title}
            <p className="ap-lead">{page.intro}</p>
          </div>
          <AtlasHeroArt
            section={section}
            design={activeStyle.design}
            language={language}
          />
        </div>
      </section>
    </div>
  );
}

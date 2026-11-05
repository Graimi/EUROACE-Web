/* oxlint-disable next/no-html-link-for-pages */
import { AtlasHeroArt } from './atlas-hero-art';
import { ProjectHeading } from './project-heading';
import { atlasPageCopy } from '@/lib/atlas-page-copy';
import { headerStyleFor } from '@/lib/header-styles';
import {
  projectCopy,
  sectionIds,
  type Language,
  type Section,
} from '@/lib/project';

const breadcrumbLabel = {
  es: 'Ruta de navegación',
  pt: 'Percurso de navegação',
  en: 'Breadcrumb',
};

export function PageHeaderReview({
  section,
  language,
}: {
  section: Section;
  language: Language;
}) {
  const project = projectCopy[language];
  const page = atlasPageCopy[language].pages[section];
  const style = headerStyleFor(section);
  const title =
    section === 'observatorio' ? (
      <ProjectHeading language={language} />
    ) : (
      <h1 className="ap-hero-title">{page.title}</h1>
    );
  return (
    <div className="ap-header-review hp-container">
      <nav className="ap-breadcrumb" aria-label={breadcrumbLabel[language]}>
        <a href={`/?lang=${language}`}>{project.home}</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">
          {project.nav[sectionIds.indexOf(section)]}
        </span>
      </nav>
      <section
        className="ap-header-option"
        data-header-style={style.id}
        aria-label={page.title}
      >
        <div className={`ap-hero ap-hero-design-${style.design}`}>
          <div>
            <p className="hp-kicker">
              EUROACE / {project.nav[sectionIds.indexOf(section)]}
            </p>
            {title}
            <p className="ap-lead">{page.intro}</p>
          </div>
          <AtlasHeroArt
            section={section}
            design={style.design}
            mixed={'mixed' in style}
            language={language}
          />
        </div>
      </section>
    </div>
  );
}

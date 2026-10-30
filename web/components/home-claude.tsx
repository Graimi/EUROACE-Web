'use client';

// Propuesta Claude: same Atlas content and manual palette, rebuilt on one set of
// tokens (spacing, radius, type, colour roles) so every section reads the same way.
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Globe2,
  Plus,
  Users,
} from 'lucide-react';
import { SiteHeader } from './site-header';
import { EssentialRings } from './essential-rings';
import { EssentialNewsCarousel } from './essential-news-carousel';
import { EssentialFooter } from './essential-footer-proposals';
import { EssentialAtlas } from './essential-atlas';
import { ResearchCards } from './research-card-proposals';
import { useSiteLanguage } from '@/lib/site-language';
import { essentialCopy } from '@/lib/essential-copy';
import { atlasPartners } from '@/lib/atlas-partners';
import { projectCopy, projectSource } from '@/lib/project';
import './home-review.css';
import './home-essential.css';
import './essential-variants.css';
import './manual-palette.css';
import './button-effects.css';
import './claude-proposal.css';

const labels = {
  es: {
    badge: 'Propuesta Claude',
    note: 'Misma paleta del manual, con tokens y componentes unificados.',
    back: 'Volver a Atlas',
  },
  pt: {
    badge: 'Proposta Claude',
    note: 'Mesma paleta do manual, com tokens e componentes unificados.',
    back: 'Voltar ao Atlas',
  },
  en: {
    badge: 'Claude proposal',
    note: 'Same manual palette, with unified tokens and components.',
    back: 'Back to Atlas',
  },
} as const;

function TextLink({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <a className={`cl-link${inverse ? ' cl-link-inverse' : ''}`} href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function SectionHead({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="cl-head">
      <div>
        <p className="cl-kicker">{kicker}</p>
        <h2 className="cl-h2">{title}</h2>
      </div>
      {action}
    </header>
  );
}

export function HomeClaude() {
  const language = useSiteLanguage();
  const t = essentialCopy[language];
  const project = projectCopy[language];
  const ui = labels[language];
  const page = (path: string) => `${path}?lang=${language}`;
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
      className="hp he he-theme-3 he-atlas-layout he-research-layout-integrated cl"
      data-site-palette="manual"
      data-button-effect="arrow-shine"
    >
      <div className="cl-badge-bar" role="note">
        <div className="hp-container cl-badge-inner">
          <span className="cl-badge">{ui.badge}</span>
          <span className="cl-badge-note">{ui.note}</span>
          <a href={page('/')}>
            <ArrowLeft size={16} aria-hidden="true" />
            {ui.back}
          </a>
        </div>
      </div>
      <SiteHeader language={language} theme={3} />
      <main id="hp-contenido">
        <section className="hp-essential-hero cl-hero">
          <div className="hp-container he-hero-grid">
            <div className="hp-essential-copy">
              <div className="he-hero-rings" aria-hidden="true">
                <EssentialRings language={language} decorative compact />
              </div>
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
              <a
                className="cl-button cl-button-primary motion-button"
                href={page('/observatorio')}
              >
                {t.discover}
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
            <EssentialAtlas language={language} />
          </div>
        </section>

        <section className="hp-container hp-essential-intro cl-intro-block">
          <span className="hp-kicker">{t.introLabel}</span>
          <div>
            <h2>{t.introTitle}</h2>
            <p>{t.introText}</p>
          </div>
          <div className="he-research-integrated he-research-colored">
            <p className="hp-kicker">{t.researchLabel}</p>
            <ResearchCards language={language} design="bandas" />
          </div>
        </section>

        <section className="cl-section cl-section-tint" aria-label={t.discover}>
          <div className="hp-container cl-grid cl-grid-4">
            {accesses.map(({ title, href, Icon }, index) => (
              <a
                className={`cl-card cl-access${index === 3 ? ' cl-access-dark' : ''}`}
                href={page(href)}
                key={href}
              >
                <span className="cl-access-top">
                  <Icon size={30} strokeWidth={1.4} aria-hidden="true" />
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
                <h3 className="cl-h3">{title}</h3>
                <p className="cl-body">{t.accesses[index]}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="cl-section hp-news-section" id="cooperacion">
          <div className="hp-container">
            <SectionHead
              kicker={t.newsLabel}
              title={t.newsTitle}
              action={
                <TextLink href={page('/actualidad')}>{t.allNews}</TextLink>
              }
            />
            <div className="hp-news-layout">
              <EssentialNewsCarousel language={language} />
              <aside className="cl-card cl-agenda">
                <p className="cl-kicker">{t.next}</p>
                <span className="cl-agenda-mark" aria-hidden="true">
                  <Plus size={36} strokeWidth={1.2} />
                </span>
                <h3 className="cl-h3">{t.agendaTitle}</h3>
                <p className="cl-body">{t.agendaText}</p>
                <span className="cl-status">{t.agendaStatus}</span>
                <TextLink href={page('/eventos')}>{t.agendaLink}</TextLink>
              </aside>
            </div>
          </div>
        </section>

        <section
          className="cl-section"
          id="sobre-el-proyecto"
          aria-labelledby="cl-project-title"
        >
          <div className="hp-container">
            <header className="cl-head">
              <div>
                <p className="cl-kicker">{t.about.toUpperCase()}</p>
                <h2 className="cl-h2" id="cl-project-title">
                  {t.projectTitle}
                </h2>
              </div>
            </header>
            <p className="cl-funding">
              <span aria-hidden="true">EU</span>
              <span>{t.funding}</span>
              <small>{t.period}</small>
            </p>
            <div className="cl-project-grid">
              <div className="cl-stack">
                <article className="cl-card">
                  <h3 className="cl-h3">{t.objectives}</h3>
                  <p className="cl-body">{t.objectiveText}</p>
                </article>
                <article className="cl-card">
                  <h3 className="cl-h3">{t.expected}</h3>
                  <p className="cl-body">{t.expectedText}</p>
                </article>
              </div>
              <aside className="cl-card cl-finance" aria-label={t.rate}>
                <p className="cl-kicker">INTERREG · POCTEP 2021–2027</p>
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
                <div className="cl-meter" aria-hidden="true">
                  <span />
                </div>
                <TextLink href={projectSource} inverse>
                  {t.source}
                </TextLink>
                <small>{t.checked}</small>
              </aside>
            </div>
          </div>
        </section>

        <section className="cl-section cl-section-tint cl-partners">
          <div className="hp-container">
            <SectionHead kicker={t.partnersLabel} title={t.partnersTitle} />
            <div className="cl-logos">
              {atlasPartners.map((partner) => (
                <a
                  href={partner.url}
                  key={partner.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </div>
        </section>
      </main>
      <EssentialFooter language={language} showCredits={false} />
    </div>
  );
}

'use client';

// Full navigations preserve the language and isolate this proposal from the original home.
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Globe2,
  Target,
  Layers3,
  Plus,
  Users,
} from 'lucide-react';
import { SiteHeader } from './site-header';
import { useSiteLanguage } from '@/lib/site-language';
import { EssentialRings } from './essential-rings';
import { EssentialNewsCarousel } from './essential-news-carousel';
import { EssentialFooter } from './essential-footer-proposals';
import { ResearchCards } from './research-card-proposals';
import { EssentialMap } from './essential-map';
import { EssentialMapVariant } from './essential-map-variants';
import { EssentialAtlas } from './essential-atlas';
import { essentialCopy } from '@/lib/essential-copy';
import { atlasPartners } from '@/lib/atlas-partners';
import { proposalNumberForTheme } from '@/lib/home-proposals';
import { projectCopy, projectSource } from '@/lib/project';
import './home-review.css';
import './home-essential.css';
import './essential-variants.css';
import './manual-palette.css';
import './button-effects.css';

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

export function HomeEssential({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  const language = useSiteLanguage();
  const t = essentialCopy[language];
  const project = projectCopy[language];
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
      className={`hp hp-variant-1 he he-theme-${variant} he-atlas-layout he-research-layout-integrated`}
      data-site-palette="manual"
      data-button-effect="arrow-shine"
    >
      <SiteHeader language={language} theme={variant} />
      {variant !== 3 && (
        <div className="hp-review-label hp-container">
          <span>
            {`${t.proposalLabel} ${proposalNumberForTheme(variant)} / ${t.names[variant - 1].toUpperCase()}`}
          </span>
          <span>
            {variant === 1 ? t.reviewNote : t.variantNotes[variant - 2]}
          </span>
        </div>
      )}
      <main id="hp-contenido">
        <section className="hp-essential-hero">
          {variant !== 3 && (
            <img
              src="/home-proposals/evora.jpg"
              alt={t.photo}
              width="3967"
              height="2922"
              fetchPriority="high"
            />
          )}
          <div className="hp-container he-hero-grid">
            <div className="hp-essential-copy">
              <div className="he-hero-rings" aria-hidden="true">
                <EssentialRings language={language} decorative compact />
              </div>
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
              <a
                className="hp-button motion-button"
                href={page('/observatorio')}
              >
                {t.discover}
                <ArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
            {variant === 1 ? (
              <EssentialMap language={language} />
            ) : variant === 3 ? (
              <EssentialAtlas language={language} />
            ) : (
              <EssentialMapVariant language={language} variant={2} />
            )}
          </div>
          {variant !== 3 && <div className="hp-photo-location">{t.place}</div>}
        </section>
        <section className="hp-container hp-essential-intro">
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
              <EssentialNewsCarousel language={language} />
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
          </div>
        </section>
        <section
          className="he-project hp-container"
          id="sobre-el-proyecto"
          aria-labelledby="he-project-title"
        >
          <span className="hp-kicker">{t.about.toUpperCase()}</span>
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
            {atlasPartners.map((partner) => (
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
      <EssentialFooter language={language} showCredits={variant !== 3} />
    </div>
  );
}

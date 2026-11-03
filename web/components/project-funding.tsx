'use client';

// "Sobre el proyecto" block shared by the home and the Sobre el proyecto page:
// funding statement with the EU flag, objectives, expected results and the financial card.
import { ArrowUpRight } from 'lucide-react';
import { essentialCopy } from '@/lib/essential-copy';
import { projectSource, type Language } from '@/lib/project';
import './claude-proposal.css';

const euLabel = {
  es: 'Unión Europea',
  pt: 'União Europeia',
  en: 'European Union',
} as const;

const starPoints = Array.from({ length: 10 }, (_, i) => {
  const r = i % 2 ? 1.6 : 4;
  const a = (Math.PI / 5) * i - Math.PI / 2;
  return `${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`;
}).join(' ');

function EuFlag({ label }: { label: string }) {
  return (
    <svg className="cl-eu" viewBox="0 0 100 100">
      <title>{label}</title>
      <circle cx="50" cy="50" r="50" fill="#039" />
      {Array.from({ length: 12 }, (_, i) => (
        <polygon
          key={i}
          points={starPoints}
          fill="#fc0"
          transform={`translate(${(50 + 30 * Math.sin((Math.PI / 6) * i)).toFixed(2)} ${(50 - 30 * Math.cos((Math.PI / 6) * i)).toFixed(2)})`}
        />
      ))}
    </svg>
  );
}

export function ProjectFunding({
  language,
  titleId,
}: {
  language: Language;
  titleId: string;
}) {
  const t = essentialCopy[language];
  const money = new Intl.NumberFormat(
    language === 'en' ? 'en-IE' : language === 'pt' ? 'pt-PT' : 'es-ES',
    { style: 'currency', currency: 'EUR' },
  );
  return (
    <>
      <header className="cl-head">
        <div>
          <p className="cl-kicker">{t.about.toUpperCase()}</p>
          <h2 className="cl-h2" id={titleId}>
            {t.projectTitle}
          </h2>
        </div>
      </header>
      <p className="cl-funding">
        <EuFlag label={euLabel[language]} />
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
          <a className="cl-link cl-link-inverse" href={projectSource}>
            {t.source}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <small>{t.checked}</small>
        </aside>
      </div>
    </>
  );
}

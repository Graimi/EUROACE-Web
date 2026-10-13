import { euroaceRegions } from '@/lib/euroace-map';
import { essentialCopy } from '@/lib/essential-copy';
import type { Language } from '@/lib/project';

export function EssentialMap({ language }: { language: Language }) {
  const t = essentialCopy[language];
  return (
    <figure className="he-territory-map">
      <figcaption>
        <span className="hp-kicker">EUROACE</span>
        <strong>{t.mapTitle}</strong>
      </figcaption>
      {/* Inline SVG needs its image role to expose the accessible description. */}
      {/* oxlint-disable-next-line jsx-a11y/prefer-tag-over-role */}
      <svg viewBox="0 0 390 365" role="img" aria-label={t.mapAlt}>
        <g stroke="#fff" strokeWidth="2" strokeLinejoin="round">
          {euroaceRegions.map(({ key, d }) => (
            <path key={key} className={`he-map-${key}`} d={d} />
          ))}
        </g>
        <g className="he-map-labels">
          <text x="99" y="93">
            Centro
          </text>
          <text x="109" y="251">
            Alentejo
          </text>
          <text x="246" y="170" className="he-map-label-light">
            Extremadura
          </text>
        </g>
        <g className="he-map-countries">
          <text x="48" y="332">
            PORTUGAL
          </text>
          <text x="257" y="332">
            {language === 'en'
              ? 'SPAIN'
              : language === 'pt'
                ? 'ESPANHA'
                : 'ESPAÑA'}
          </text>
        </g>
      </svg>
      <a
        className="he-map-credit"
        href="https://gisco-services.ec.europa.eu/distribution/v2/nuts/"
      >
        © EuroGeographics · Eurostat / GISCO · NUTS 2021
      </a>
    </figure>
  );
}

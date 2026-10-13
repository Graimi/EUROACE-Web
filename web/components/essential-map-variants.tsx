'use client';

/* oxlint-disable jsx-a11y/prefer-tag-over-role -- Inline SVG needs its accessible image role. */

import { useState } from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { euroaceRegions } from '@/lib/euroace-map';
import { essentialCopy } from '@/lib/essential-copy';
import type { Language } from '@/lib/project';

const regionOffsets: Record<string, string> = {
  centro: 'translate(-16 -10)',
  alentejo: 'translate(-22 25)',
  extremadura: 'translate(43 0)',
};
const labelPositions: Record<string, [number, number]> = {
  centro: [99, 93],
  alentejo: [109, 251],
  extremadura: [246, 170],
};

export function EssentialMapVariant({
  language,
  variant,
}: {
  language: Language;
  variant: 2 | 3;
}) {
  const t = essentialCopy[language];
  const [active, setActive] = useState<string | null>(null);
  const exploded = variant === 3;
  const mapId = `he-map-${variant}`;

  return (
    <figure className={`he-map-design he-map-design-${variant}`}>
      <figcaption>
        <div>
          <span className="hp-kicker">EUROACE / {exploded ? '03' : '02'}</span>
          <strong>{exploded ? t.mapConnection : t.mapTitle}</strong>
        </div>
        <Compass size={26} strokeWidth={1.2} aria-hidden="true" />
      </figcaption>
      {/* Inline SVG preserves the regional geometry and an accessible description. */}
      <svg
        className="he-map-stage"
        viewBox={exploded ? '-40 0 460 390' : '-20 0 390 360'}
        role="img"
        aria-label={`${t.mapAlt}${exploded ? `. ${t.mapDiagram}` : ''}`}
      >
        <defs>
          <pattern
            id={`${mapId}-grid`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.18" />
          </pattern>
          <filter
            id={`${mapId}-shadow`}
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feDropShadow
              dx="0"
              dy={exploded ? '9' : '5'}
              stdDeviation={exploded ? '2' : '7'}
              floodColor={exploded ? '#080512' : '#183b2a'}
              floodOpacity="0.25"
            />
          </filter>
        </defs>
        <rect
          x="-40"
          y="0"
          width="460"
          height="390"
          fill={`url(#${mapId}-grid)`}
        />
        {exploded ? (
          <g className="he-map-orbits" fill="none">
            <ellipse
              cx="165"
              cy="184"
              rx="201"
              ry="119"
              transform="rotate(-31 165 184)"
            />
            <ellipse
              cx="165"
              cy="184"
              rx="175"
              ry="161"
              transform="rotate(24 165 184)"
            />
            <path
              d="M83 83 Q170 32 289 170 Q255 316 87 276 Q22 189 83 83"
              strokeDasharray="4 6"
            />
          </g>
        ) : (
          <g className="he-map-coordinates" fill="none">
            <path d="M-3 25 H20 M-3 25 V48 M329 25 H306 M329 25 V48 M-3 330 H20 M-3 330 V307 M329 330 H306 M329 330 V307" />
            <path
              d="M-3 178 H329 M163 25 V330"
              strokeDasharray="3 8"
              opacity="0.3"
            />
          </g>
        )}
        {euroaceRegions.map(({ key, d, name }) => (
          <g
            key={key}
            className={`he-map-region${active && active !== key ? ' he-map-dimmed' : ''}`}
            transform={exploded ? regionOffsets[key] : undefined}
          >
            <path
              className={`he-map-${key}`}
              d={d}
              filter={`url(#${mapId}-shadow)`}
              stroke={exploded ? '#ffffffb0' : '#fff'}
              strokeWidth={exploded ? '1.6' : '2.5'}
              strokeLinejoin="round"
            />
            <text
              x={labelPositions[key][0]}
              y={labelPositions[key][1]}
              className={`he-map-region-label${key === 'extremadura' ? ' he-map-region-label-light' : ''}`}
            >
              {name}
            </text>
          </g>
        ))}
        <text x={exploded ? '335' : '312'} y="31" className="he-map-north">
          N
        </text>
        <path
          d={
            exploded
              ? 'M340 39 v20 m-4 -15 4 -5 4 5'
              : 'M317 39 v20 m-4 -15 4 -5 4 5'
          }
          className="he-map-coordinates"
          fill="none"
        />
      </svg>
      <fieldset className="he-map-legend" aria-label={t.mapExplore}>
        {[...euroaceRegions]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ key, name }) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              onClick={() => setActive(active === key ? null : key)}
            >
              <span className={`he-dot-${key}`} aria-hidden="true" />
              {name}
            </button>
          ))}
      </fieldset>
      <a
        className="he-map-credit"
        href="https://gisco-services.ec.europa.eu/distribution/v2/nuts/"
      >
        © EuroGeographics · GISCO · NUTS 2021{' '}
        <ArrowUpRight size={10} aria-hidden="true" />
      </a>
    </figure>
  );
}

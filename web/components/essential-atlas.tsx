'use client';

/* oxlint-disable jsx-a11y/prefer-tag-over-role -- Inline SVG needs its accessible image role. */
import { LocateFixed } from 'lucide-react';
import { euroaceRegions } from '@/lib/euroace-map';
import { iberiaCountries } from '@/lib/iberia-map';
import { essentialCopy } from '@/lib/essential-copy';
import type { Language } from '@/lib/project';

const markers = [
  {
    key: 'centro',
    x: 89.5,
    y: 164.7,
    labelX: 18,
    labelY: 97,
    line: 'M89.5 164.7 V109 H18',
  },
  {
    key: 'alentejo',
    x: 94.5,
    y: 243.7,
    labelX: 22,
    labelY: 346,
    line: 'M94.5 243.7 V328 H22',
  },
  {
    key: 'extremadura',
    x: 163,
    y: 203.2,
    labelX: 258,
    labelY: 303,
    line: 'M163 203.2 L239 286 H349',
  },
];

export function EssentialAtlas({ language }: { language: Language }) {
  const t = essentialCopy[language];
  return (
    <figure className="he-atlas">
      <svg viewBox="0 0 510 370" role="img" aria-label={t.atlasAlt}>
        <g
          className="he-atlas-target"
          transform="translate(470.5 14)"
          aria-hidden="true"
        >
          <LocateFixed size={25} strokeWidth={1.3} />
        </g>
        <defs>
          <pattern
            id="he-atlas-land"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="#798576" />
          </pattern>
          {euroaceRegions.map(({ key }) => (
            <pattern
              key={key}
              id={`he-atlas-${key}`}
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 5 5 0"
                className={`he-atlas-stroke-${key}`}
                strokeWidth="1.5"
              />
            </pattern>
          ))}
        </defs>
        <g className="he-atlas-graticule">
          <path d="M0 80 H510 M0 160 H510 M0 240 H510 M0 320 H510 M70 0 V370 M170 0 V370 M270 0 V370 M370 0 V370 M470 0 V370" />
        </g>
        <g aria-hidden="true">
          {iberiaCountries.map(({ country, d }) => (
            <g key={country}>
              <path d={d} fill="#ebeee6" />
              <path d={d} fill="url(#he-atlas-land)" />
            </g>
          ))}
        </g>
        <g transform="translate(40 118.2) scale(.5)">
          {euroaceRegions.map(({ key, d }) => (
            <g key={key} className="he-atlas-region">
              <path
                d={d}
                className={`he-atlas-fill-${key}`}
                fillOpacity="0.2"
              />
              <path d={d} fill={`url(#he-atlas-${key})`} />
              <path
                d={d}
                fill="none"
                className={`he-atlas-stroke-${key}`}
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </g>
          ))}
        </g>
        <text x="312" y="135" className="he-atlas-country">
          {language === 'en'
            ? 'SPAIN'
            : language === 'pt'
              ? 'ESPANHA'
              : 'ESPAÑA'}
        </text>
        <text
          x="70"
          y="270"
          transform="rotate(-90 70 270)"
          className="he-atlas-country"
        >
          PORTUGAL
        </text>
        {markers.map(({ key, x, y, labelX, labelY, line }) => (
          <g key={key} className="he-atlas-marker">
            <path d={line} fill="none" stroke="#17221b" strokeWidth="0.8" />
            <circle cx={x} cy={y} r="7" fill="#fff" />
            <circle cx={x} cy={y} r="4" className={`he-atlas-fill-${key}`} />
            <text x={labelX} y={labelY}>
              {euroaceRegions.find((region) => region.key === key)?.name}
            </text>
          </g>
        ))}
        <g className="he-atlas-orientation">
          <text x="479" y="292">
            N
          </text>
          <path d="M483 301 V335 M478 308 483 301 488 308" fill="none" />
        </g>
      </svg>
      <a
        className="he-atlas-credit"
        href="https://gisco-services.ec.europa.eu/distribution/v2/nuts/"
      >
        © EuroGeographics · Eurostat / GISCO · NUTS 2021
      </a>
    </figure>
  );
}

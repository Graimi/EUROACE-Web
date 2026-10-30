'use client';

import { ArrowUpRight } from 'lucide-react';
import type { Language } from '@/lib/project';
import './social-links.css';

// Profiles linked by the official Euroregion website, not Observatory profiles.
const networks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/euroreg_euroace',
    tone: 'instagram',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Euroace-Alentejo-Centro-Extremadura-155627704491107',
    tone: 'facebook',
  },
  { name: 'X', href: 'https://x.com/EUROREG_EUROACE', tone: 'x' },
] as const;

export function SocialMark({
  name,
}: {
  name: (typeof networks)[number]['name'];
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {name === 'Instagram' ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </g>
      ) : name === 'Facebook' ? (
        <path d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.7 1.8-1.7H18V2.4a27 27 0 0 0-3-.2c-3 0-5 1.8-5 5.1v2.2H7V13h3v9z" />
      ) : (
        <path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-7.5L5.5 22H2.3l8.3-9.5L.8 2h6.4l5.6 7.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5z" />
      )}
    </svg>
  );
}

export function SocialLinks({ language }: { language: Language }) {
  const t = {
    es: {
      note: 'Perfiles de la eurorregión EUROACE',
      action: 'Seguir',
      external: 'se abre en otra pestaña',
    },
    pt: {
      note: 'Perfis da eurorregião EUROACE',
      action: 'Seguir',
      external: 'abre noutro separador',
    },
    en: {
      note: 'EUROACE Euroregion profiles',
      action: 'Follow',
      external: 'opens in a new tab',
    },
  }[language];
  return (
    <div className="social-designs social-design-1">
      <p className="social-profile-label">{t.note}</p>
      <div className="social-design-links">
        {networks.map((network) => (
          <a
            className={`social-link social-${network.tone}`}
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${network.name}, EUROACE, ${t.external}`}
          >
            <span className="social-glyph">
              <SocialMark name={network.name} />
            </span>
            <span className="social-link-text">
              <strong>{network.name}</strong>
              <small>{t.action} EUROACE</small>
            </span>
            <ArrowUpRight
              className="social-link-arrow"
              size={21}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

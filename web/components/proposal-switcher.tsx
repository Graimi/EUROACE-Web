'use client';

import { usePathname } from 'next/navigation';
import type { Language } from '@/lib/project';

const proposals = [
  { href: '/', number: '00', name: 'Original' },
  { href: '/home-propuesta-1', number: '01', name: 'Esencial' },
  { href: '/home-propuesta-2', number: '02', name: 'Verde' },
  { href: '/home-propuesta-3', number: '03', name: 'Atlas' },
  { href: '/home-propuesta-4', number: '04', name: 'Atlas abierto' },
];

export function ProposalSwitcher({ language }: { language: Language }) {
  const pathname = usePathname();
  const label = language === 'pt'
    ? 'Ver propostas de design'
    : language === 'en'
      ? 'View design proposals'
      : 'Ver propuestas de diseño';
  return (
    <nav
      className="proposal-switcher"
      aria-label={label}
    >
      <span className="proposal-switcher-label">
        {label}
      </span>
      <div>
        {proposals.map(({ href, number, name }) => (
          <a
            key={href}
            href={`${href}?lang=${language}`}
            aria-current={
              pathname.replace(/\/$/, '') === href.replace(/\/$/, '')
                ? 'page'
                : undefined
            }
          >
            <b>{number}</b>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

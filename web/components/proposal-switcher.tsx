'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight, PanelsTopLeft } from 'lucide-react';
import type { Language } from '@/lib/project';
import { homeProposals } from '@/lib/home-proposals';
import './proposal-switcher.css';

export function ProposalSwitcher({ language }: { language: Language }) {
  const pathname = usePathname();
  const disclosure = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      const element = disclosure.current;
      if (
        event.key === 'Escape' &&
        element?.open &&
        element.contains(document.activeElement)
      ) {
        element.open = false;
        element.querySelector('summary')?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
  const label =
    language === 'pt'
      ? 'Ver outras propostas'
      : language === 'en'
        ? 'View other proposals'
        : 'Ver otras propuestas';
  const proposals = homeProposals(language);
  const current =
    proposals.find(
      ({ href }) => pathname.replace(/\/$/, '') === href.replace(/\/$/, ''),
    ) ?? proposals[0];
  return (
    <details
      className="footer-proposal-access"
      ref={disclosure}
      onToggle={(event) => {
        const element = event.currentTarget;
        if (element.open) {
          element.scrollIntoView({ block: 'nearest', behavior: 'auto' });
        }
      }}
    >
      <summary>
        <PanelsTopLeft size={17} aria-hidden="true" />
        {label}
        <ChevronDown size={16} aria-hidden="true" />
      </summary>
      <nav aria-label={label}>
        {proposals
          .filter(({ href }) => href !== current.href)
          .map(({ href, number, name }) => (
            <a key={href} href={`${href}?lang=${language}`}>
              <b>{number}</b>
              <span>{name}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
      </nav>
    </details>
  );
}

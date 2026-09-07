'use client';

import { usePathname } from 'next/navigation';

const proposals = [
  { href: '/', number: '01', name: 'Conexión territorial' },
  { href: '/propuesta-2', number: '02', name: 'Atlas editorial' },
  { href: '/propuesta-3', number: '03', name: 'Ventana de datos' },
];

export function ProposalSwitcher() {
  const pathname = usePathname();
  return (
    <nav
      className="proposal-switcher"
      aria-label="Comparar propuestas de diseño"
    >
      <span className="proposal-switcher-label">
        EUROACE <span>/ Propuestas de diseño</span>
      </span>
      <div>
        {proposals.map(({ href, number, name }) => (
          <a
            key={href}
            href={href}
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

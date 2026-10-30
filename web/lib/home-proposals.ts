import { essentialCopy } from './essential-copy';
import type { Language } from './project';

export function homeProposals(language: Language) {
  const t = essentialCopy[language];
  const primary = { es: 'Principal', pt: 'Principal', en: 'Primary' }[language];
  return [
    { href: '/', number: '01', name: `${t.names[2]} · ${primary}`, variant: 3 },
    { href: '/home-propuesta-2', number: '02', name: t.names[1], variant: 2 },
    { href: '/home-propuesta-3', number: '03', name: t.names[0], variant: 1 },
    { href: '/propuesta-claude', number: 'C', name: 'Claude', variant: 4 },
    {
      href: '/home-propuesta-original',
      number: '00',
      name: t.originalShort,
      variant: 0,
    },
  ];
}

export function homePathForTheme(theme: 1 | 2 | 3) {
  return theme === 3 ? '/' : `/home-propuesta-${theme === 1 ? 3 : 2}`;
}

export function proposalNumberForTheme(theme: 1 | 2 | 3) {
  return theme === 3 ? '01' : theme === 2 ? '02' : '03';
}

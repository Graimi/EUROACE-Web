import { atlasPageCopy } from '@/lib/atlas-page-copy';
import type { Language } from '@/lib/project';

export function ProjectHeading({
  language,
  as: Heading = 'h1',
}: {
  language: Language;
  as?: 'h1' | 'h2';
}) {
  const t = {
    es: { prefix: 'Conectar su ', potential: 'potencial.' },
    pt: { prefix: 'Ligar o seu ', potential: 'potencial.' },
    en: { prefix: 'Connect its ', potential: 'potential.' },
  }[language];
  const first = atlasPageCopy[language].pages.observatorio.title.split('\n')[0];
  return (
    <Heading className="ap-project-heading ap-hero-title">
      {first}
      <br />
      {t.prefix}
      <span className="ap-potential">{t.potential}</span>
    </Heading>
  );
}

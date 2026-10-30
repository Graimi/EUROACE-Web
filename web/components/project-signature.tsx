/* oxlint-disable next/no-img-element */
import { projectCopy, type Language } from '@/lib/project';
import './project-signature.css';

export function ProjectSignature({ language = 'es' }: { language?: Language }) {
  // The supplied masters have outlined lettering. Keep their paths and colours intact.
  const logoLanguage = language === 'pt' ? 'pt' : 'es';
  return (
    <span className="project-signature">
      <img
        className="interreg-official"
        src="/brand/interreg-official.png"
        width="1903"
        height="574"
        alt="Interreg España–Portugal. Cofinanciado por la Unión Europea. Cofinanciado pela União Europeia."
      />
      <span className="project-signature-name">
        <img
          className="observatory-official"
          src={`/brand/official/observatorio-euroace-${logoLanguage}.svg`}
          width="1355.4"
          height="150"
          alt={projectCopy[language].fullName}
        />
      </span>
    </span>
  );
}

'use client';

import { useId, useState } from 'react';
import { ChevronDown, Lightbulb, Network, Zap } from 'lucide-react';
import { essentialCopy } from '@/lib/essential-copy';
import type { Language } from '@/lib/project';
import './research-card-proposals.css';

function ToggleCard({
  language,
  index,
}: {
  language: Language;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const area = essentialCopy[language].researchAreas[index];
  const Icon = [Lightbulb, Zap, Network][index];
  return (
    <article
      className={`he-research-card he-research-card-${index} rc-card${open ? ' rc-open' : ''}`}
      onPointerEnter={(event) => {
        if (
          event.pointerType === 'mouse' &&
          matchMedia('(hover: hover) and (pointer: fine)').matches
        )
          setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (
          event.pointerType === 'mouse' &&
          matchMedia('(hover: hover) and (pointer: fine)').matches
        )
          setOpen(false);
      }}
    >
      <h3 className="rc-heading">
        <button
          className="rc-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-content`}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="rc-mark" aria-hidden="true">
            <span>0{index + 1}</span>
            <Icon size={28} strokeWidth={1.3} />
          </span>
          <span className="rc-title">{area.title}</span>
          <ChevronDown className="rc-chevron" size={20} aria-hidden="true" />
        </button>
      </h3>
      <div
        className="rc-panel"
        id={`${id}-content`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="rc-panel-inner">
          <div className="rc-copy">
            <p>{area.description}</p>
            <ul>
              {area.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ResearchCards({
  language,
  design,
}: {
  language: Language;
  design: 'bandas' | 'ventanas';
}) {
  const hint = {
    es: 'Pasa el ratón o pulsa una tarjeta para explorar cada ámbito.',
    pt: 'Passe o rato ou prima um cartão para explorar cada área.',
    en: 'Hover over or press a card to explore each research area.',
  }[language];
  return (
    <div
      className={`rc-section rc-design-${design} he-research-colored`}
      lang={language}
    >
      <p className="rc-hint">{hint}</p>
      <div className="he-research-grid rc-grid">
        {essentialCopy[language].researchAreas.map((area, index) => (
          <ToggleCard language={language} index={index} key={area.title} />
        ))}
      </div>
    </div>
  );
}

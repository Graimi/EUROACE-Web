'use client';

/* oxlint-disable next/no-html-link-for-pages */
import { ArrowUpRight } from 'lucide-react';
import { ProjectSignature } from './project-signature';
import { FooterRings } from './footer-rings';
import { essentialCopy } from '@/lib/essential-copy';
import {
  hiddenSections,
  projectCopy,
  sectionIds,
  type Language,
} from '@/lib/project';
import './essential-footer-proposals.css';

function FooterCredits({ language }: { language: Language }) {
  const t = essentialCopy[language];
  return (
    <div className="he-footer-notes">
      <p>
        {t.credits}{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Roman_Temple,_%C3%89vora,_Portugal_julesvernex2.jpg">
          Jules Verne Times Two
        </a>{' '}
        / <a href="https://julesvernex2.com">julesvernex2.com</a> /{' '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          CC BY-SA 4.0
        </a>
        . {t.crop}
      </p>
      <p>{t.draft}</p>
    </div>
  );
}

export function EssentialFooter({
  language,
  showCredits,
}: {
  language: Language;
  showCredits: boolean;
}) {
  const t = essentialCopy[language];
  const project = projectCopy[language];
  const page = (path: string) => `${path}?lang=${language}`;
  const navigation = sectionIds
    .map((id, index) => ({
      id,
      href: page(`/${id}`),
      label: project.nav[index],
    }))
    .filter(({ id }) => !hiddenSections.includes(id));
  const contact = (
    <a className="he-footer-contact motion-button" href={page('/contacto')}>
      {t.contact}
      <ArrowUpRight size={19} aria-hidden="true" />
    </a>
  );

  return (
    <div className="he-footer-proposals" id="propuestas-footer">
      <footer
        className="he-footer-option he-footer-orbit he-footer-deriva"
        aria-labelledby="he-footer-title-1"
        data-footer-variant="1"
      >
        <div className="he-footer-moving-rings">
          <FooterRings />
        </div>
        <div className="hp-container">
          <div className="he-footer-main">
            <div>
              <h2 id="he-footer-title-1">{t.footerTitle}</h2>
              <p className="he-footer-region-line">{t.regions}</p>
              {contact}
            </div>
            <nav aria-label={t.footerExplore} className="he-footer-nav">
              <p className="he-footer-nav-title">{t.footerExplore}</p>
              <div>
                {navigation.map((item) => (
                  <a href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          <div className="he-footer-funding">
            <p>{t.funding}</p>
            <div className="he-footer-signature">
              <ProjectSignature language={language} />
            </div>
          </div>
          {showCredits && <FooterCredits language={language} />}
        </div>
      </footer>
    </div>
  );
}

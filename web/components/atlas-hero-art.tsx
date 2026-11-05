/* oxlint-disable next/no-img-element */
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  FileText,
  Gauge,
  Globe2,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Newspaper,
  PanelsTopLeft,
  Search,
  Users,
  Zap,
} from 'lucide-react';
import { EssentialRings } from './essential-rings';
import { atlasPartners } from '@/lib/atlas-partners';
import { headerContent } from '@/lib/header-content';
import { sectionIds, type Language, type Section } from '@/lib/project';
import './atlas-hero-art.css';

const sectionIcons = {
  observatorio: Globe2,
  actividades: Search,
  nosotros: Users,
  publicaciones: BookOpen,
  actualidad: Newspaper,
  eventos: CalendarDays,
  analytics: ChartNoAxesCombined,
  contacto: Mail,
};
const topicIcons = {
  observatorio: [MapPin, MapPin, MapPin],
  actividades: [Search, Network, Users],
  nosotros: [Building2, GraduationCap, Globe2],
  publicaciones: [FileText, Gauge, GraduationCap],
  actualidad: [Newspaper, Users, Network],
  eventos: [Users, Lightbulb, CalendarDays],
  analytics: [Lightbulb, Zap, Network],
  contacto: [GraduationCap, Building2, Users],
};
const formatIcons = [FileText, Gauge, PanelsTopLeft, GraduationCap];

export function AtlasHeroArt({
  section,
  language,
  design,
  mixed = false,
}: {
  section: Section;
  language: Language;
  design?: Section;
  mixed?: boolean;
}) {
  const art = design ?? section;
  const content = headerContent(section, language);
  const Icon = sectionIcons[section];
  if (art === 'observatorio')
    return (
      <div className="ap-project-rings">
        <EssentialRings language={language} decorative compact />
      </div>
    );
  return (
    <div
      className={`ap-art ap-art-${art} ap-art-for-${section}`}
      data-subject={section}
      aria-hidden="true"
    >
      {art === 'actividades' && (
        <>
          <div className="ap-path-line" />
          {content.topics.map((label, index) => {
            const TopicIcon = topicIcons[section][index % 3];
            return (
              <div className={`ap-path-node ap-path-node-${index}`} key={label}>
                <span>
                  <TopicIcon size={28} strokeWidth={1.4} />
                </span>
                <p>{label}</p>
              </div>
            );
          })}
        </>
      )}
      {art === 'nosotros' && (
        <>
          <svg className="ap-partner-lines" viewBox="0 0 360 300">
            <path
              d="M85 70 275 70 275 230 85 230Z M85 70 275 230M275 70 85 230"
              fill="none"
              stroke="#b0b5d5"
              strokeWidth="1"
            />
          </svg>
          <span className="ap-network-core">
            <Icon size={25} />
          </span>
          {section === 'nosotros' || section === 'contacto'
            ? atlasPartners.map((partner, index) => (
                <div
                  className={`ap-network-logo ap-network-logo-${index}`}
                  key={partner.name}
                >
                  <img
                    src={partner.image}
                    alt=""
                    width={partner.width}
                    height={partner.height}
                  />
                </div>
              ))
            : content.network.map((label, index) => {
                const NodeIcon =
                  section === 'publicaciones'
                    ? formatIcons[index]
                    : topicIcons[section][index % 3];
                return (
                  <div
                    className={`ap-network-logo ap-network-topic ap-network-logo-${index}`}
                    key={label}
                  >
                    <NodeIcon size={24} strokeWidth={1.3} />
                    <span>{label}</span>
                  </div>
                );
              })}
          <p className="ap-art-caption">{content.caption}</p>
        </>
      )}
      {art === 'publicaciones' && (
        <>
          <div className="ap-cover ap-cover-back">
            <Icon size={30} strokeWidth={1.2} />
            <strong>{content.answer}</strong>
            <span>EUROACE / {content.title}</span>
            {mixed && (
              <div className="ap-cover-meta">
                {section === 'observatorio' ? (
                  <p>ALENTEJO · CENTRO · EXTREMADURA</p>
                ) : (
                  <ul>
                    {content.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {content.status && <small>{content.status}</small>}
          </div>
          <div className="ap-cover ap-cover-front">
            <Icon size={38} strokeWidth={1.2} />
            <strong>{content.caption}</strong>
            <span>
              {String(sectionIds.indexOf(section) + 1).padStart(2, '0')} /{' '}
              {content.title}
            </span>
            <i />
            <i />
            <i />
            {content.status && <small>{content.status}</small>}
          </div>
        </>
      )}
      {art === 'actualidad' && (
        <>
          <img
            className="ap-art-news-photo"
            src={content.image.src}
            alt=""
            width="1024"
            height="768"
            style={{ objectPosition: content.image.position }}
          />
          <div className="ap-art-news-label">
            <span>EUROACE / {content.title}</span>
            <strong>{content.caption}</strong>
            <ArrowUpRight size={28} />
            {content.status && <small>{content.status}</small>}
          </div>
        </>
      )}
      {art === 'eventos' && (
        <>
          <div className="ap-event-orbit" />
          <Icon size={64} strokeWidth={1} />
          <strong>{content.title}</strong>
          {section === 'eventos' && (
            <div className="ap-event-dots">
              {Array.from({ length: 21 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
          )}
          <div className="ap-poster-topics">
            {(section === 'publicaciones'
              ? content.network
              : content.topics
            ).map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
          <span>ALENTEJO · CENTRO · EXTREMADURA</span>
        </>
      )}
      {art === 'contacto' && (
        <>
          <div className="ap-message ap-message-one">
            <Icon size={27} strokeWidth={1.3} />
            <p>{content.question}</p>
          </div>
          <div className="ap-message ap-message-two">
            <strong>{content.answer}</strong>
            <ArrowUpRight size={32} strokeWidth={1.2} />
          </div>
        </>
      )}
      {art === 'analytics' && (
        <>
          <Icon size={64} strokeWidth={1} />
          <strong>{content.caption}</strong>
          <div className="ap-data-topics">
            {content.researchAreas.map((area) => (
              <span key={area.title}>{area.title}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

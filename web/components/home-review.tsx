'use client';

// Full page navigation keeps these isolated review styles out of the original home.
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  ChevronDown,
  Globe2,
  Menu,
  MoveUpRight,
  Plus,
  Users,
  X,
} from 'lucide-react';
import { ProjectSignature } from './project-signature';
import { partners, projectCopy, sectionIds } from '@/lib/project';
import { copy } from '@/lib/content';
import './home-review.css';

type Proposal = 1 | 2 | 3;
const proposals = ['Esencial', 'Territorio', 'Editorial'];
const photo = '/home-proposals/evora.jpg';
const networks = [
  {
    name: 'LinkedIn',
    mark: 'in',
    description: 'Investigación, proyectos y comunidad profesional.',
  },
  {
    name: 'Instagram',
    mark: 'ig',
    description: 'Personas, territorio y vida del Observatorio.',
  },
  {
    name: 'Facebook',
    mark: 'f',
    description: 'Actividades y novedades para compartir.',
  },
];

function Link({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a className={`hp-link${light ? ' hp-link-light' : ''}`} href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function SocialContents({ cards = false }: { cards?: boolean }) {
  return (
    <div className={cards ? 'hp-social-cards' : 'hp-social-links'}>
      {networks.map((network) => (
        <div className="hp-network" key={network.name}>
          <span className="hp-network-icon" aria-hidden="true">
            {network.mark}
          </span>
          <div>
            <strong>{network.name}</strong>
            {cards && <p>{network.description}</p>}
            <small>Perfil por confirmar</small>
          </div>
        </div>
      ))}
    </div>
  );
}

function SocialBar({ variant }: { variant: Proposal }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const open = pinned || hovered;
  const close = () => {
    setPinned(false);
    setHovered(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPinned(false);
        setHovered(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);

  if (variant === 3)
    return (
      <div className="hp-social hp-social-c">
        <div className="hp-container hp-social-c-line">
          <span>Conocimiento que se comparte.</span>
          <button
            ref={trigger}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={dialogOpen}
            aria-controls="hp-social-dialog"
            onClick={() => {
              dialog.current?.showModal();
              setDialogOpen(true);
            }}
          >
            Conecta con EUROACE <Plus size={17} aria-hidden="true" />
          </button>
        </div>
        <dialog
          ref={dialog}
          id="hp-social-dialog"
          className="hp-social-dialog"
          aria-labelledby="hp-dialog-title"
          onClose={() => setDialogOpen(false)}
        >
          <div className="hp-dialog-content">
            <button
              className="hp-dialog-close"
              type="button"
              aria-label="Cerrar redes sociales"
              onClick={() => dialog.current?.close()}
            >
              <X size={24} />
            </button>
            <span className="hp-kicker">LA CONVERSACIÓN CONTINÚA</span>
            <h2 id="hp-dialog-title">
              Más cerca.
              <br />
              Más conectados.
            </h2>
            <p>
              Las ideas no se quedan aquí. Sigue las actividades, descubre a las
              personas y comparte el conocimiento del Observatorio.
            </p>
            <SocialContents cards />
            <p className="hp-social-note">
              Vista de diseño. Estas redes son una propuesta; los perfiles
              oficiales están pendientes de confirmación.
            </p>
          </div>
        </dialog>
      </div>
    );

  return (
    <div
      className={`hp-social hp-social-${variant === 1 ? 'a' : 'b'}`}
      onPointerEnter={(event) => {
        if (variant === 1 && event.pointerType === 'mouse') setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="hp-social-toggle-row hp-container">
        {variant === 2 && (
          <span className="hp-social-message">
            Una comunidad sin fronteras.
          </span>
        )}
        <button
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="hp-social-panel"
          onClick={() => {
            if (pinned) close();
            else setPinned(true);
          }}
        >
          {variant === 2 && (
            <span className="hp-mini-networks" aria-hidden="true">
              <b>in</b>
              <b>ig</b>
              <b>f</b>
            </span>
          )}
          {variant === 1 ? 'Síguenos' : 'Nuestras redes'}
          <ChevronDown
            size={17}
            className={open ? 'hp-rotated' : ''}
            aria-hidden="true"
          />
        </button>
      </div>
      <div id="hp-social-panel" className="hp-social-panel" hidden={!open}>
        <div className="hp-container">
          <div className="hp-social-heading">
            <div>
              <span className="hp-kicker">OBSERVATORIO EUROACE</span>
              <h2>
                {variant === 1
                  ? 'Conecta con el Observatorio.'
                  : 'Elige dónde seguimos en contacto.'}
              </h2>
            </div>
            <button
              type="button"
              aria-label="Cerrar redes sociales"
              onClick={close}
            >
              <X size={22} />
            </button>
          </div>
          <SocialContents cards={variant === 2} />
          <p className="hp-social-note">
            Vista de diseño · redes propuestas, perfiles oficiales por
            confirmar.
          </p>
        </div>
      </div>
    </div>
  );
}

function Header({ variant }: { variant: Proposal }) {
  return (
    <header className="hp-header">
      <SocialBar variant={variant} />
      <div className="hp-container hp-masthead">
        <a className="hp-brand" href="/" aria-label="Volver a la home original">
          <ProjectSignature />
        </a>
        <a className="hp-button hp-header-cta" href="/analytics">
          Analytics <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <nav className="hp-nav hp-container" aria-label="Navegación principal">
        <a href={`/home-propuesta-${variant}`} aria-current="page">
          Inicio
        </a>
        {sectionIds.map((id, index) => (
          <a key={id} href={`/${id}`}>
            {projectCopy.es.nav[index]}
          </a>
        ))}
      </nav>
      <details className="hp-mobile-menu hp-container">
        <summary>
          Menú <Menu size={20} aria-hidden="true" />
        </summary>
        <nav aria-label="Navegación móvil">
          <a href={`/home-propuesta-${variant}`} aria-current="page">
            Inicio
          </a>
          {sectionIds.map((id, index) => (
            <a key={id} href={`/${id}`}>
              {projectCopy.es.nav[index]}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

function Comparison({ variant }: { variant: Proposal }) {
  return (
    <aside className="hp-comparison" aria-label="Comparar propuestas de home">
      <div>
        <span className="hp-comparison-dot" />
        <strong>En revisión</strong>
        <span className="hp-comparison-hint">Home y barra combinables</span>
      </div>
      <nav aria-label="Versiones de la home">
        <a href="/">
          Original <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        {proposals.map((name, index) => (
          <a
            key={name}
            href={`/home-propuesta-${index + 1}`}
            aria-current={index + 1 === variant ? 'page' : undefined}
          >
            <span>0{index + 1}</span> {name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function SectionTitle({
  label,
  title,
  href,
  action,
}: {
  label: string;
  title: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="hp-section-title">
      <div>
        <p className="hp-kicker">{label}</p>
        <h2>{title}</h2>
      </div>
      {href && <Link href={href}>{action}</Link>}
    </div>
  );
}

function Partners() {
  return (
    <section className="hp-container hp-partners">
      <p className="hp-kicker">UNA ALIANZA TRANSFRONTERIZA</p>
      <h2>Cuatro socios. Un horizonte común.</h2>
      <div>
        {partners.map((partner) => (
          <a href={partner.url} key={partner.name} aria-label={partner.name}>
            <img
              src={partner.image}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hp-footer">
      <div className="hp-container">
        <div className="hp-footer-top">
          <h2>
            El conocimiento crece
            <br />
            cuando se comparte.
          </h2>
          <Link href="/contacto" light>
            Contacta con el Observatorio
          </Link>
        </div>
        <div className="hp-footer-bottom">
          <p>{copy.es.funding}</p>
          <img
            src="/brand/eurorregion-euroace.webp"
            alt="Interreg España–Portugal y Eurorregión EUROACE"
            width="320"
            height="64"
            loading="lazy"
          />
        </div>
        <div className="hp-credits">
          Fotografía de Évora:{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Roman_Temple,_%C3%89vora,_Portugal_julesvernex2.jpg">
            Jules Verne Times Two
          </a>{' '}
          / <a href="https://julesvernex2.com">julesvernex2.com</a> /{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA 4.0
          </a>
          . Encuadre adaptado en pantalla.
        </div>
        <p className="hp-draft">
          Propuesta visual para revisión · las muestras editoriales no son
          noticias ni convocatorias publicadas.
        </p>
      </div>
    </footer>
  );
}

function Agenda({ dark = false }: { dark?: boolean }) {
  return (
    <aside className={`hp-agenda${dark ? ' hp-agenda-dark' : ''}`}>
      <span className="hp-kicker">PRÓXIMA CITA</span>
      <div className="hp-agenda-symbol" aria-hidden="true">
        <Plus size={44} strokeWidth={1} />
      </div>
      <h3>
        Un espacio
        <br />
        para encontrarnos.
      </h3>
      <p>Seminarios, talleres y encuentros de cooperación transfronteriza.</p>
      <span className="hp-status">Programación por confirmar</span>
      <Link href="/eventos" light={dark}>
        Consultar agenda
      </Link>
    </aside>
  );
}

function Essentials() {
  const accesses = [
    {
      title: 'El Observatorio',
      text: 'Qué nos une y hacia dónde vamos.',
      href: '/observatorio',
      Icon: Globe2,
    },
    {
      title: 'Actividades',
      text: 'Del conocimiento a la cooperación.',
      href: '/actividades',
      Icon: Users,
    },
    {
      title: 'Publicaciones',
      text: 'Investigación para compartir.',
      href: '/publicaciones',
      Icon: BookOpen,
    },
    {
      title: 'Analytics',
      text: 'Otra forma de leer el territorio.',
      href: '/analytics',
      Icon: ChartNoAxesCombined,
    },
  ];
  return (
    <>
      <section className="hp-essential-hero">
        <img
          src={photo}
          alt="Templo romano de Évora, en Alentejo"
          width="3967"
          height="2922"
          fetchPriority="high"
        />
        <div className="hp-container hp-essential-copy">
          <span className="hp-kicker">
            OBSERVATORIO DE COOPERACIÓN TRANSFRONTERIZA
          </span>
          <h1>
            El conocimiento
            <br />
            nos acerca.
          </h1>
          <p>
            Tres regiones, una mirada compartida.
            <br />
            Conectamos investigación, territorio y personas.
          </p>
          <a className="hp-button" href="/observatorio">
            Conoce el Observatorio <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="hp-photo-location">Évora · Alentejo, Portugal</div>
      </section>
      <section className="hp-container hp-essential-intro">
        <span className="hp-kicker">UN PROYECTO, MUCHAS CONEXIONES</span>
        <div>
          <h2>
            Comprender lo que somos.
            <br />
            Imaginar lo que podemos ser.
          </h2>
          <p>
            El Observatorio EUROACE acerca el conocimiento de Extremadura,
            Alentejo y Centro de Portugal a quienes viven, investigan, emprenden
            y toman decisiones en este territorio.
          </p>
        </div>
      </section>
      <section
        className="hp-container hp-access-grid"
        aria-label="Explora el Observatorio"
      >
        {accesses.map(({ title, text, href, Icon }, index) => (
          <a href={href} key={title} className={`hp-access hp-access-${index}`}>
            <span className="hp-access-top">
              <Icon size={31} strokeWidth={1.3} aria-hidden="true" />
              <ArrowUpRight size={22} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </a>
        ))}
      </section>
      <section className="hp-news-section">
        <div className="hp-container">
          <SectionTitle
            label="ACTUALIDAD Y AGENDA"
            title="La cooperación se mueve."
            href="/actualidad"
            action="Toda la actualidad"
          />
          <div className="hp-news-layout">
            <article className="hp-feature-news">
              <div className="hp-news-art" aria-hidden="true">
                <span>
                  EURO
                  <br />
                  ACE.
                </span>
                <i />
                <i />
                <i />
              </div>
              <div className="hp-news-body">
                <span className="hp-kicker">EL PROYECTO</span>
                <h3>Una red científica para mirar más allá de la frontera.</h3>
                <p>
                  Conoce a los socios que conectan la investigación con los
                  retos de la eurorregión.
                </p>
                <Link href="/nosotros">Conoce la red</Link>
              </div>
            </article>
            <Agenda />
          </div>
          <div className="hp-briefs">
            <a href="/actividades">
              <span className="hp-kicker">LÍNEAS DE TRABAJO</span>
              <h3>Investigar, transferir y conectar.</h3>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="/publicaciones">
              <span className="hp-kicker">PUBLICACIONES EN PREPARACIÓN</span>
              <h3>Conocimiento abierto al territorio.</h3>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Territory() {
  return (
    <>
      <section className="hp-container hp-territory-hero">
        <div className="hp-territory-heading">
          <span className="hp-kicker">EXTREMADURA · ALENTEJO · CENTRO</span>
          <h1>
            Un territorio.
            <br />
            <em>Infinitas conexiones.</em>
          </h1>
          <p>
            Las fronteras delimitan un mapa.
            <br />
            El conocimiento abre posibilidades.
          </p>
          <a className="hp-button" href="#hp-territorios">
            Descubre la EUROACE <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <div
          className="hp-territory-art"
          aria-label="Composición simbólica de las tres regiones, no cartográfica"
        >
          <div className="hp-orbit hp-orbit-one" />
          <div className="hp-orbit hp-orbit-two" />
          <div className="hp-orbit hp-orbit-three" />
          <span className="hp-orbit-label hp-orbit-label-one">
            Centro <small>PORTUGAL</small>
          </span>
          <span className="hp-orbit-label hp-orbit-label-two">
            Extremadura <small>ESPAÑA</small>
          </span>
          <span className="hp-orbit-label hp-orbit-label-three">
            Alentejo <small>PORTUGAL</small>
          </span>
          <span className="hp-art-caption">
            Tres regiones. Una visión compartida.
          </span>
        </div>
      </section>
      <section id="hp-territorios" className="hp-territories">
        <div className="hp-container">
          <SectionTitle
            label="EL LUGAR QUE NOS UNE"
            title="La EUROACE empieza en su gente."
          />
          <div className="hp-territory-story">
            <div className="hp-region-photo">
              <img
                src={photo}
                alt="Patrimonio de Évora: templo romano en Alentejo"
                width="3967"
                height="2922"
                loading="lazy"
              />
              <span>Una mirada a Évora / Alentejo</span>
            </div>
            <div className="hp-region-list">
              {[
                ['01', 'Extremadura', 'España'],
                ['02', 'Alentejo', 'Portugal'],
                ['03', 'Centro', 'Portugal'],
              ].map(([number, name, country]) => (
                <div key={name}>
                  <span>{number}</span>
                  <h3>
                    {name}
                    <small>{country}</small>
                  </h3>
                  <MoveUpRight size={24} aria-hidden="true" />
                </div>
              ))}
              <p>
                Una eurorregión para compartir conocimiento, abordar retos
                comunes y abrir nuevas oportunidades de cooperación.
              </p>
              <Link href="/observatorio">Entiende el proyecto</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="hp-container hp-section">
        <SectionTitle
          label="TRES MIRADAS SOBRE EL TERRITORIO"
          title="Qué queremos comprender."
        />
        <div className="hp-area-grid">
          {copy.es.areas.map((area, index) => (
            <a href="/observatorio" key={area}>
              <span>0{index + 1}</span>
              <h3>{area}</h3>
              <p>{copy.es.areaText[index]}</p>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
      <section className="hp-container hp-work">
        <div>
          <span className="hp-kicker">DEL TERRITORIO A LA ACCIÓN</span>
          <h2>
            Conocer.
            <br />
            Compartir.
            <br />
            <em>Transformar.</em>
          </h2>
        </div>
        <div className="hp-work-list">
          <a href="/actividades">
            <span>01 / INVESTIGACIÓN</span>
            <h3>Una red científica transfronteriza.</h3>
            <p>Equipos, estudios y análisis que conectan las tres regiones.</p>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="/actividades">
            <span>02 / TRANSFERENCIA</span>
            <h3>Ideas que salen al encuentro.</h3>
            <p>
              Laboratorios, talleres y Campus EUROACE como líneas de actividad
              del proyecto.
            </p>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="hp-data-band">
        <div className="hp-container">
          <div>
            <span className="hp-kicker">EUROACE ANALYTICS · EN DESARROLLO</span>
            <h2>
              Un territorio que también
              <br />
              se podrá leer en datos.
            </h2>
            <p>
              Indicadores, comparaciones y nuevas perspectivas sobre la
              eurorregión.
            </p>
            <Link href="/analytics" light>
              Descubre la futura plataforma
            </Link>
          </div>
          <div className="hp-data-art" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <b>
              EUROACE
              <br />
              Analytics ↗
            </b>
          </div>
        </div>
      </section>
      <section className="hp-container hp-section">
        <SectionTitle
          label="SIGUE EL PROYECTO"
          title="Lo próximo, más cerca."
        />
        <div className="hp-two-links">
          <Link href="/actualidad">Novedades del Observatorio</Link>
          <Link href="/eventos">Encuentros y actividades</Link>
        </div>
      </section>
    </>
  );
}

function Editorial() {
  return (
    <>
      <section className="hp-container hp-editorial-intro">
        <div>
          <span className="hp-kicker">OBSERVATORIO EUROACE</span>
          <h1>
            Ideas que cruzan
            <br />
            <em>fronteras.</em>
          </h1>
        </div>
        <p>
          Investigación, personas y perspectivas para comprender un territorio
          compartido.
        </p>
      </section>
      <section className="hp-container hp-editorial-cover">
        <article className="hp-editorial-feature">
          <div className="hp-cover-art" aria-hidden="true">
            <span>
              CUADERNOS
              <br />
              EUROACE
            </span>
            <div className="hp-cover-rings">
              <i />
              <i />
              <i />
            </div>
            <strong>
              Una mirada
              <br />
              al territorio.
            </strong>
            <small>INVESTIGACIÓN / COOPERACIÓN / FUTURO</small>
          </div>
          <div className="hp-cover-copy">
            <span className="hp-kicker">PUBLICACIONES · MUESTRA EDITORIAL</span>
            <h2>
              Entender el presente.
              <br />
              Abrir nuevas preguntas.
            </h2>
            <p>
              Estudios e informes para acercar el conocimiento de la eurorregión
              a la sociedad.
            </p>
            <span className="hp-status">
              Contenido previsto, aún no publicado
            </span>
            <Link href="/publicaciones">
              Explora las publicaciones previstas
            </Link>
          </div>
        </article>
        <aside className="hp-editorial-sidebar">
          <span className="hp-kicker">EN EL OBSERVATORIO</span>
          <a href="/actividades">
            <small>01 / INVESTIGACIÓN</small>
            <h3>Conocimiento construido entre regiones.</h3>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a href="/nosotros">
            <small>02 / COMUNIDAD</small>
            <h3>Cuatro socios, una red compartida.</h3>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
          <a href="/analytics">
            <small>03 / EN DESARROLLO</small>
            <h3>Una nueva ventana a los datos.</h3>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </aside>
      </section>
      <section className="hp-container hp-section">
        <SectionTitle
          label="SELECCIÓN EDITORIAL"
          title="Historias que nos conectan."
          href="/actualidad"
          action="Ver actualidad"
        />
        <p className="hp-sample-note">
          Ejemplos de composición y enfoque editorial, pendientes de contenidos
          reales.
        </p>
        <div className="hp-editorial-grid">
          <article>
            <div className="hp-editorial-image">
              <img
                src={photo}
                alt="Templo romano de Évora"
                width="3967"
                height="2922"
                loading="lazy"
              />
            </div>
            <span className="hp-kicker">TERRITORIO · EJEMPLO</span>
            <h3>Tres regiones, nuevas formas de mirar.</h3>
            <p>
              Una propuesta de espacio para contar los retos y las oportunidades
              de la EUROACE.
            </p>
            <Link href="/observatorio">Conoce el territorio del proyecto</Link>
          </article>
          <article>
            <div className="hp-type-art" aria-hidden="true">
              Cono<span>cer.</span>
              <br />
              Compar<span>tir.</span>
            </div>
            <span className="hp-kicker">TRANSFERENCIA · EJEMPLO</span>
            <h3>Cuando la investigación se comparte.</h3>
            <p>
              Un espacio para acercar los avances de los equipos a empresas,
              instituciones y ciudadanía.
            </p>
            <Link href="/actividades">Conoce las líneas de actividad</Link>
          </article>
          <Agenda dark />
        </div>
      </section>
      <section className="hp-editorial-resources">
        <div className="hp-container">
          <span className="hp-kicker">PARA SEGUIR EXPLORANDO</span>
          <h2>
            El conocimiento,
            <br />a tu alcance.
          </h2>
          <div>
            {[
              [
                'Publicaciones',
                'Estudios, informes y recursos',
                '/publicaciones',
              ],
              [
                'Analytics',
                'La futura plataforma de indicadores',
                '/analytics',
              ],
              [
                'Áreas de conocimiento',
                'Los temas que investigamos',
                '/observatorio',
              ],
            ].map(([title, description, href]) => (
              <a key={title} href={href}>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight size={25} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function HomeReview({ variant }: { variant: Proposal }) {
  return (
    <div className={`hp hp-variant-${variant}`}>
      <a className="hp-skip" href="#hp-contenido">
        Saltar al contenido
      </a>
      <Header variant={variant} />
      <div className="hp-review-label hp-container">
        <span>
          PROPUESTA 0{variant} / {proposals[variant - 1].toUpperCase()}
        </span>
        <span>
          {
            [
              'Inspiración TUTOR · Barra A: pestaña desplegable',
              'Identidad territorial · Barra B: redes visibles',
              'Actualidad y resultados · Barra C: panel lateral',
            ][variant - 1]
          }
        </span>
      </div>
      <main id="hp-contenido">
        {variant === 1 ? (
          <Essentials />
        ) : variant === 2 ? (
          <Territory />
        ) : (
          <Editorial />
        )}
        <Partners />
      </main>
      <Footer />
      <Comparison variant={variant} />
    </div>
  );
}

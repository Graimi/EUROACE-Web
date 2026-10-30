import { atlasPageCopy } from './atlas-page-copy';
import { copy } from './content';
import { essentialCopy } from './essential-copy';
import {
  projectCopy,
  sectionIds,
  type Language,
  type Section,
} from './project';

export function headerContent(section: Section, language: Language) {
  const t = atlasPageCopy[language];
  const base = copy[language];
  const project = projectCopy[language];
  const words = {
    es: {
      topics: {
        observatorio: ['Alentejo', 'Centro', 'Extremadura'],
        actividades: ['Investigar', 'Transferir', 'Cooperar'],
        nosotros: ['Junta de Extremadura', 'UEx', 'UÉvora', 'UBI'],
        publicaciones: ['Informes', 'Barómetros', 'Artículos'],
        actualidad: ['Avances', 'Equipos', 'Cooperación'],
        eventos: ['Seminarios', 'Talleres', 'Encuentros'],
        analytics: ['Emprendimiento', 'Energía', 'Competitividad'],
        contacto: ['Investigación', 'Empresas', 'Ciudadanía'],
      },
      questions: {
        observatorio: '¿Qué nos conecta?',
        actividades: '¿Cómo cooperamos?',
        nosotros: '¿Quiénes somos?',
        publicaciones: '¿Qué podremos consultar?',
        actualidad: '¿Qué está pasando?',
        eventos: '¿Cuándo nos encontramos?',
        analytics: '¿Qué vamos a analizar?',
        contacto: '¿Cómo conectar?',
      },
      answers: {
        observatorio: 'Tres regiones. Una mirada compartida.',
        actividades: 'Estudios, laboratorios y Campus EUROACE.',
        nosotros: 'Junta de Extremadura · UEx · UÉvora · UBI.',
        publicaciones: 'Informes, barómetros, infografías y artículos.',
        actualidad: 'Los avances del Observatorio y sus equipos.',
        eventos: 'Las próximas fechas están por confirmar.',
        analytics: 'Tres ámbitos de investigación.',
        contacto: 'Contacta con la coordinación del proyecto.',
      },
      captions: {
        observatorio: 'El punto de partida del Observatorio',
        actividades: 'Equipos que investigan juntos',
        nosotros: 'Cuatro instituciones. Un proyecto común.',
        publicaciones: 'Formatos del conocimiento',
        actualidad: 'Así avanza el Observatorio',
        eventos: 'Espacios para compartir conocimiento',
        analytics: 'Tres territorios para explorar',
        contacto: 'Un punto de encuentro',
      },
      networkActivities: ['Estudios', 'Laboratorios', 'Campus', 'Analytics'],
      networkNews: ['Ubinnovative', 'EUROACE', 'UBI', 'UEx'],
      networkData: ['Territorio', 'Empresas', 'Personas', 'Conocimiento'],
      networkProject: [
        'Investigación',
        'Territorio',
        'Cooperación',
        'Ciudadanía',
      ],
      planned: 'En preparación',
      data: 'Plataforma en desarrollo',
    },
    pt: {
      topics: {
        observatorio: ['Alentejo', 'Centro', 'Extremadura'],
        actividades: ['Investigar', 'Transferir', 'Cooperar'],
        nosotros: ['Junta de Extremadura', 'UEx', 'UÉvora', 'UBI'],
        publicaciones: ['Relatórios', 'Barómetros', 'Artigos'],
        actualidad: ['Avanços', 'Equipas', 'Cooperação'],
        eventos: ['Seminários', 'Workshops', 'Encontros'],
        analytics: ['Empreendedorismo', 'Energia', 'Competitividade'],
        contacto: ['Investigação', 'Empresas', 'Cidadãos'],
      },
      questions: {
        observatorio: 'O que nos liga?',
        actividades: 'Como cooperamos?',
        nosotros: 'Quem somos?',
        publicaciones: 'O que poderemos consultar?',
        actualidad: 'O que está a acontecer?',
        eventos: 'Quando nos encontramos?',
        analytics: 'O que vamos analisar?',
        contacto: 'Como entrar em contacto?',
      },
      answers: {
        observatorio: 'Três regiões. Uma visão partilhada.',
        actividades: 'Estudos, laboratórios e Campus EUROACE.',
        nosotros: 'Junta de Extremadura · UEx · UÉvora · UBI.',
        publicaciones: 'Relatórios, barómetros, infografias e artigos.',
        actualidad: 'Os avanços do Observatório e das suas equipas.',
        eventos: 'As próximas datas estão por confirmar.',
        analytics: 'Três áreas de investigação.',
        contacto: 'Contacte a coordenação do projeto.',
      },
      captions: {
        observatorio: 'O ponto de partida do Observatório',
        actividades: 'Equipas que investigam em conjunto',
        nosotros: 'Quatro instituições. Um projeto comum.',
        publicaciones: 'Formatos do conhecimento',
        actualidad: 'Os avanços do Observatório',
        eventos: 'Espaços para partilhar conhecimento',
        analytics: 'Três territórios para explorar',
        contacto: 'Um ponto de encontro',
      },
      networkActivities: ['Estudos', 'Laboratórios', 'Campus', 'Analytics'],
      networkNews: ['Ubinnovative', 'EUROACE', 'UBI', 'UEx'],
      networkData: ['Território', 'Empresas', 'Pessoas', 'Conhecimento'],
      networkProject: ['Investigação', 'Território', 'Cooperação', 'Cidadãos'],
      planned: 'Em preparação',
      data: 'Plataforma em desenvolvimento',
    },
    en: {
      topics: {
        observatorio: ['Alentejo', 'Centro', 'Extremadura'],
        actividades: ['Research', 'Transfer', 'Cooperate'],
        nosotros: ['Junta de Extremadura', 'UEx', 'UÉvora', 'UBI'],
        publicaciones: ['Reports', 'Barometers', 'Articles'],
        actualidad: ['Progress', 'Teams', 'Cooperation'],
        eventos: ['Seminars', 'Workshops', 'Meetings'],
        analytics: ['Entrepreneurship', 'Energy', 'Competitiveness'],
        contacto: ['Research', 'Businesses', 'Citizens'],
      },
      questions: {
        observatorio: 'What connects us?',
        actividades: 'How do we cooperate?',
        nosotros: 'Who are we?',
        publicaciones: 'What will be available?',
        actualidad: 'What is happening?',
        eventos: 'When will we meet?',
        analytics: 'What will we analyse?',
        contacto: 'How can we connect?',
      },
      answers: {
        observatorio: 'Three regions. A shared perspective.',
        actividades: 'Studies, labs and Campus EUROACE.',
        nosotros: 'Junta de Extremadura · UEx · UÉvora · UBI.',
        publicaciones: 'Reports, barometers, infographics and articles.',
        actualidad: 'Updates from the Observatory and its teams.',
        eventos: 'The next dates are yet to be confirmed.',
        analytics: 'Three research areas.',
        contacto: 'Contact the project coordination team.',
      },
      captions: {
        observatorio: 'The Observatory’s starting point',
        actividades: 'Teams researching together',
        nosotros: 'Four institutions. One shared project.',
        publicaciones: 'Knowledge formats',
        actualidad: 'Progress at the Observatory',
        eventos: 'Spaces to share knowledge',
        analytics: 'Three regions to explore',
        contacto: 'A meeting point',
      },
      networkActivities: ['Studies', 'Labs', 'Campus', 'Analytics'],
      networkNews: ['Ubinnovative', 'EUROACE', 'UBI', 'UEx'],
      networkData: ['Region', 'Businesses', 'People', 'Knowledge'],
      networkProject: ['Research', 'Region', 'Cooperation', 'Citizens'],
      planned: 'In preparation',
      data: 'Platform in development',
    },
  }[language];
  const network = {
    observatorio: words.networkProject,
    actividades: words.networkActivities,
    nosotros: project.roles,
    publicaciones: base.formats,
    actualidad: words.networkNews,
    eventos: base.audience,
    analytics: words.networkData,
    contacto: project.roles,
  }[section];
  const images = {
    observatorio: {
      src: '/home-proposals/news/launch.webp',
      position: '50% 50%',
    },
    actividades: {
      src: '/home-proposals/news/ubi-observatory.jpg',
      position: '50% 45%',
    },
    nosotros: {
      src: '/home-proposals/news/coordination.jpg',
      position: '50% 45%',
    },
    publicaciones: {
      src: '/home-proposals/headers/publications.svg',
      position: '50% 50%',
    },
    actualidad: {
      src: '/home-proposals/news/seville.jpg',
      position: '50% 62%',
    },
    eventos: { src: '/home-proposals/news/seville.jpg', position: '50% 65%' },
    analytics: {
      src: '/home-proposals/headers/analytics.svg',
      position: '50% 50%',
    },
    contacto: {
      src: '/home-proposals/headers/contact.svg',
      position: '50% 50%',
    },
  }[section];
  return {
    title: project.nav[sectionIds.indexOf(section)],
    topics: words.topics[section],
    network,
    question: words.questions[section],
    answer: words.answers[section],
    caption: words.captions[section],
    image: images,
    status:
      section === 'publicaciones'
        ? words.planned
        : section === 'analytics'
          ? words.data
          : undefined,
    researchAreas: essentialCopy[language].researchAreas,
    eventFormats: t.eventFormatNames,
  };
}

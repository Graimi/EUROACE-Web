export type Language = 'es' | 'pt' | 'en';
export const sectionIds = [
  'observatorio',
  'actividades',
  'nosotros',
  'publicaciones',
  'actualidad',
  'eventos',
  'analytics',
  'contacto',
] as const;
export type Section = (typeof sectionIds)[number];
export const projectSource =
  'https://www.poctep.eu/proyecto/0461_observatorio_euroace_4_e-observatorio-de-cooperacion-transfronteriza-euroace/';
export const partners = [
  {
    name: 'Junta de Extremadura',
    image: '/logo-junta.png',
    url: 'https://www.juntaex.es/',
  },
  {
    name: 'Universidad de Extremadura',
    image: '/logo-uex.png',
    url: 'https://www.unex.es/',
  },
  {
    name: 'Universidade de Évora',
    image: '/logo-evora.png',
    url: 'https://www.uevora.pt/',
  },
  {
    name: 'Universidade da Beira Interior',
    image: '/logo-ubi.jpeg',
    url: 'https://www.ubi.pt/',
  },
];

export const projectCopy = {
  es: {
    nav: [
      'El Observatorio',
      'Actividades',
      'Nosotros',
      'Publicaciones',
      'Actualidad',
      'Eventos',
      'Analytics',
      'Contacto',
    ],
    home: 'Inicio',
    fullName: 'Observatorio de Cooperación Transfronteriza EUROACE',
    activitiesTitle: 'Del conocimiento a la cooperación.',
    activitiesIntro:
      'Una red científica que estudia el territorio, comparte resultados y acerca el conocimiento a la sociedad.',
    activities: [
      'Investigación y análisis',
      'Transferencia de conocimiento',
      'EUROACE Analytics',
      'Coordinación y comunicación',
    ],
    activityText: [
      'Equipos transfronterizos, estudios, informes, publicaciones y barómetros sobre las tres áreas de conocimiento.',
      'Laboratorios de innovación, talleres y Campus EUROACE para conectar investigación, empresas, administraciones y ciudadanía.',
      'Desarrollo de una plataforma de indicadores, comparaciones y visualizaciones sobre la eurorregión.',
      'Trabajo conjunto entre socios, seguimiento del proyecto y difusión de sus actividades y resultados.',
    ],
    roles: [
      'Beneficiario principal. Coordinación general, gestión y comunicación del proyecto.',
      'Desarrollo de EUROACE Analytics y de la web, investigación y divulgación de resultados.',
      'Investigación y transferencia de conocimiento en la eurorregión.',
      'Investigación, red científica y transferencia de conocimiento.',
    ],
    visit: 'Web institucional',
    factsTitle: 'El proyecto en detalle',
    factLabels: [
      'Código del proyecto',
      'Programa',
      'Coste total indicativo',
      'FEDER total aprobado',
      'Prioridad',
      'Objetivo político',
      'Objetivo específico',
      'Inicio',
      'Fin',
    ],
    policy: [
      'P1. Empresas, digital e I+D+i',
      'Una Europa más inteligente',
      'OE 1.1 I+D+i',
    ],
    source: 'Consultar ficha oficial POCTEP',
    sourceNote:
      'Datos de la ficha pública POCTEP consultada el 05/10/2026. El coste total es indicativo.',
    upcoming: 'Próximos eventos',
    past: 'Eventos celebrados',
    eventIntro:
      'Talleres, workshops, laboratorios, seminarios y encuentros de cooperación. Aquí podrás consultar sus programas y resultados.',
    upcomingEmpty:
      'Las próximas fechas y programas se publicarán cuando estén confirmados.',
    pastEmpty: 'El archivo de eventos y sus materiales está en preparación.',
    social: 'Redes sociales',
    socialEmpty:
      'Los perfiles oficiales del Observatorio estarán disponibles próximamente.',
    email: 'Correo general del proyecto',
    emailEmpty:
      'Canal pendiente de confirmación. Mientras tanto, puedes consultar las webs institucionales de nuestros socios.',
    review:
      'Borrador para revisión. Contenidos y traducciones pendientes de validación.',
    layouts: 'Propuestas de página interior',
    editorial: '01 · Editorial',
    cards: '02 · Tarjetas',
  },
  pt: {
    nav: [
      'O Observatório',
      'Atividades',
      'Quem somos',
      'Publicações',
      'Atualidade',
      'Eventos',
      'Analytics',
      'Contacto',
    ],
    home: 'Início',
    fullName: 'Observatório de Cooperação Transfronteiriça EUROACE',
    activitiesTitle: 'Do conhecimento à cooperação.',
    activitiesIntro:
      'Uma rede científica que estuda o território, partilha resultados e aproxima o conhecimento da sociedade.',
    activities: [
      'Investigação e análise',
      'Transferência de conhecimento',
      'EUROACE Analytics',
      'Coordenação e comunicação',
    ],
    activityText: [
      'Equipas transfronteiriças, estudos, relatórios, publicações e barómetros sobre as três áreas de conhecimento.',
      'Laboratórios de inovação, workshops e Campus EUROACE para ligar investigação, empresas, administrações e cidadãos.',
      'Desenvolvimento de uma plataforma de indicadores, comparações e visualizações sobre a eurorregião.',
      'Trabalho conjunto entre parceiros, acompanhamento do projeto e divulgação das suas atividades e resultados.',
    ],
    roles: [
      'Beneficiário principal. Coordenação geral, gestão e comunicação do projeto.',
      'Desenvolvimento do EUROACE Analytics e do website, investigação e divulgação de resultados.',
      'Investigação e transferência de conhecimento na eurorregião.',
      'Investigação, rede científica e transferência de conhecimento.',
    ],
    visit: 'Website institucional',
    factsTitle: 'O projeto em detalhe',
    factLabels: [
      'Código do projeto',
      'Programa',
      'Custo total indicativo',
      'FEDER total aprovado',
      'Prioridade',
      'Objetivo político',
      'Objetivo específico',
      'Início',
      'Fim',
    ],
    policy: [
      'P1. Empresas, digital e I&D&i',
      'Uma Europa mais inteligente',
      'OE 1.1 I&D&i',
    ],
    source: 'Consultar ficha oficial POCTEP',
    sourceNote:
      'Dados da ficha pública POCTEP consultada em 05/10/2026. O custo total é indicativo.',
    upcoming: 'Próximos eventos',
    past: 'Eventos realizados',
    eventIntro:
      'Workshops, laboratórios, seminários e encontros de cooperação. Aqui poderá consultar os seus programas e resultados.',
    upcomingEmpty:
      'As próximas datas e programas serão publicados quando estiverem confirmados.',
    pastEmpty:
      'O arquivo de eventos e os respetivos materiais estão em preparação.',
    social: 'Redes sociais',
    socialEmpty:
      'Os perfis oficiais do Observatório estarão disponíveis em breve.',
    email: 'Email geral do projeto',
    emailEmpty:
      'Canal a confirmar. Entretanto, pode consultar os websites institucionais dos nossos parceiros.',
    review:
      'Proposta para revisão. Conteúdos e traduções sujeitos a validação.',
    layouts: 'Propostas de página interior',
    editorial: '01 · Editorial',
    cards: '02 · Cartões',
  },
  en: {
    nav: [
      'The Observatory',
      'Activities',
      'About us',
      'Publications',
      'News',
      'Events',
      'Analytics',
      'Contact',
    ],
    home: 'Home',
    fullName: 'EUROACE Observatory for Cross-border Cooperation',
    activitiesTitle: 'From knowledge to cooperation.',
    activitiesIntro:
      'A scientific network studying the region, sharing results and connecting knowledge with society.',
    activities: [
      'Research and analysis',
      'Knowledge transfer',
      'EUROACE Analytics',
      'Coordination and communication',
    ],
    activityText: [
      'Cross-border teams, studies, reports, publications and barometers covering the three knowledge areas.',
      'Innovation labs, workshops and Campus EUROACE connecting research, businesses, public authorities and citizens.',
      'Development of a platform with indicators, comparisons and visualisations about the Euroregion.',
      'Joint work between partners, project monitoring and communication of activities and results.',
    ],
    roles: [
      'Lead beneficiary. Overall project coordination, management and communication.',
      'Development of EUROACE Analytics and the website, research and dissemination of results.',
      'Research and knowledge transfer in the Euroregion.',
      'Research, scientific networking and knowledge transfer.',
    ],
    visit: 'Institutional website',
    factsTitle: 'Project details',
    factLabels: [
      'Project code',
      'Programme',
      'Indicative total cost',
      'Approved ERDF contribution',
      'Priority',
      'Policy objective',
      'Specific objective',
      'Start date',
      'End date',
    ],
    policy: [
      'P1. Business, digital and R&D&I',
      'A smarter Europe',
      'SO 1.1 R&D&I',
    ],
    source: 'View the official POCTEP project record',
    sourceNote:
      'Public POCTEP project record consulted on 5 October 2026. The total cost is indicative.',
    upcoming: 'Upcoming events',
    past: 'Past events',
    eventIntro:
      'Workshops, innovation labs, seminars and cooperation meetings. Explore their programmes and results here.',
    upcomingEmpty: 'Dates and programmes will be published once confirmed.',
    pastEmpty: 'The event archive and supporting materials are being prepared.',
    social: 'Social media',
    socialEmpty: 'The Observatory’s official profiles will be available soon.',
    email: 'General project email',
    emailEmpty:
      'Contact channel awaiting confirmation. Meanwhile, you can visit our partners’ institutional websites.',
    review:
      'Draft for review. Content and translations are subject to validation.',
    layouts: 'Interior page proposals',
    editorial: '01 · Editorial',
    cards: '02 · Cards',
  },
};

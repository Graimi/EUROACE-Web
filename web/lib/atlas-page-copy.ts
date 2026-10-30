import type { Language, Section } from './project';

type AtlasPageCopy = {
  pages: Record<Section, { title: string; intro: string }>;
  territory: string;
  purpose: string;
  purposeText: string;
  audience: string;
  countries: string;
  regions: string;
  partners: string;
  projectDetails: string;
  programme: string;
  duration: string;
  areas: string;
  studies: string;
  studyIntro: string;
  transfer: string;
  transferText: string;
  labs: string;
  labsText: string;
  campus: string;
  campusText: string;
  partnersTitle: string;
  cooperation: string;
  cooperationText: string;
  searchPublications: string;
  searchNews: string;
  format: string;
  all: string;
  sources: string;
  latest: string;
  oldest: string;
  order: string;
  planned: string;
  catalogNote: string;
  noMatches: string;
  reset: string;
  resources: string;
  publicationCta: string;
  upcoming: string;
  archive: string;
  eventPending: string;
  eventPendingText: string;
  kickoff: string;
  coordination: string;
  june: string;
  eventSource: string;
  eventFormats: string;
  eventFormatNames: string[];
  area: string;
  region: string;
  allRegions: string;
  selectedTerritory: string;
  dataStatus: string;
  dataStatusText: string;
  questionsTitle: string;
  questions: string[][];
  institution: string;
  institutionalWeb: string;
  channelPending: string;
  channelPendingText: string;
  contactAudience: string;
  contactGuidance: string[];
  socialTitle: string;
  socialPending: string;
  continue: string;
  viewNews: string;
  viewActivities: string;
  viewPublications: string;
};

export const atlasPageCopy: Record<Language, AtlasPageCopy> = {
  es: {
    pages: {
      observatorio: {
        title: 'Comprender el territorio.\nConectar su potencial.',
        intro:
          'Investigamos los retos de Extremadura, Alentejo y Centro de Portugal para aportar conocimiento a las decisiones y a la cooperación entre las tres regiones.',
      },
      actividades: {
        title: 'Investigar juntos.\nCompartir lo aprendido.',
        intro:
          'Estudios, laboratorios y encuentros para conectar a los equipos científicos con los retos de empresas, administraciones y ciudadanía.',
      },
      nosotros: {
        title: 'Cuatro socios.\nUna mirada compartida.',
        intro:
          'La Junta de Extremadura y las universidades de Extremadura, Évora y Beira Interior unen sus capacidades para investigar los retos de la EUROACE.',
      },
      publicaciones: {
        title: 'Investigar.\nPublicar. Compartir.',
        intro:
          'Aquí reuniremos los informes, barómetros, infografías y artículos científicos del Observatorio. Conocimiento abierto para entender el territorio y apoyar sus decisiones.',
      },
      actualidad: {
        title: 'El Observatorio,\npaso a paso.',
        intro:
          'Sigue los avances de la investigación, el trabajo de los socios y los encuentros que dan forma al Observatorio EUROACE.',
      },
      eventos: {
        title: 'Encontrarnos.\nCompartir. Cooperar.',
        intro:
          'Consulta las próximas citas y los encuentros celebrados por el Observatorio. Espacios para poner en común preguntas, experiencias y conocimiento.',
      },
      analytics: {
        title: 'Datos para entender.\nConocimiento para decidir.',
        intro:
          'EUROACE Analytics reunirá indicadores sobre emprendimiento, economía y energía, y competitividad. Explora el alcance de la plataforma mientras preparamos los datos.',
      },
      contacto: {
        title: 'Conecta con\nel Observatorio.',
        intro:
          '¿Investigas, trabajas en una empresa o representas a una institución? Encuentra el contacto de coordinación y las entidades que participan en el proyecto.',
      },
    },
    territory: 'ALENTEJO · CENTRO · EXTREMADURA',
    purpose: 'CONOCER PARA COOPERAR',
    purposeText:
      'La cooperación empieza por comprender qué compartimos. Conectamos equipos de investigación de las tres regiones para estudiar sus retos y aportar conocimiento útil a quienes toman decisiones.',
    audience: 'Conocimiento para quienes hacen territorio',
    countries: 'países',
    regions: 'regiones',
    partners: 'socios',
    projectDetails: 'Con apoyo europeo',
    programme: 'Programa',
    duration: 'Periodo de ejecución',
    areas: 'Tres ámbitos de investigación',
    studies: 'Cinco estudios iniciales',
    studyIntro:
      'Estos son los cinco estudios iniciales del Observatorio. Iremos actualizando este espacio con sus avances.',
    transfer: 'Del estudio al territorio',
    transferText:
      'El programa del proyecto prevé espacios de encuentro para poner en común el conocimiento y conectarlo con las necesidades de empresas, administraciones y ciudadanía.',
    labs: 'Laboratorios de innovación',
    labsText:
      'Investigadores, empresas y agentes públicos compartirán retos y explorarán aplicaciones del conocimiento en las tres áreas del proyecto.',
    campus: 'Campus EUROACE',
    campusText:
      'Encuentros para acercar el conocimiento del Observatorio a los agentes del territorio y a la ciudadanía.',
    partnersTitle: 'Las instituciones de la red',
    cooperation: 'Una red, muchas perspectivas',
    cooperationText:
      'La Junta de Extremadura coordina el proyecto. Las universidades de Extremadura, Évora y Beira Interior aportan investigación, análisis y transferencia. Cuatro instituciones que comparten preguntas y suman perspectivas sobre la EUROACE.',
    searchPublications: 'Buscar formatos y recursos',
    searchNews: 'Buscar noticias',
    format: 'Formato',
    all: 'Todos',
    sources: 'Fuente',
    latest: 'Más recientes',
    oldest: 'Más antiguas',
    order: 'Orden',
    planned: 'En preparación',
    catalogNote:
      'El catálogo se irá construyendo con los resultados del proyecto. Cada documento aparecerá aquí cuando esté publicado y disponible para su consulta.',
    noMatches: 'No hay resultados con estos filtros.',
    reset: 'Restablecer filtros',
    resources: 'Formatos del conocimiento',
    publicationCta:
      'La investigación ya está en marcha. Sigue sus avances mientras preparamos las primeras publicaciones.',
    upcoming: 'Próximos encuentros',
    archive: 'Encuentros celebrados',
    eventPending: 'La próxima cita está por confirmar.',
    eventPendingText:
      'Añadiremos al calendario las fechas, los lugares y los programas en cuanto estén confirmados. Mientras tanto, descubre los encuentros que ya han impulsado el proyecto.',
    kickoff: 'Puesta en marcha del Observatorio',
    coordination: 'Comité de Coordinación',
    june: 'Junio de 2026',
    eventSource: 'Consultar la crónica',
    eventFormats: 'Así compartiremos el conocimiento',
    eventFormatNames: [
      'Seminarios y talleres',
      'Laboratorios de innovación',
      'Campus EUROACE',
    ],
    area: 'Área de estudio',
    region: 'Territorio',
    allRegions: 'Toda la EUROACE',
    selectedTerritory: 'Territorio seleccionado',
    dataStatus: 'Plataforma en desarrollo',
    dataStatusText:
      'Estamos preparando la plataforma. Incorporaremos indicadores y series cuando los datos estén disponibles y validados. Por ahora, puedes explorar las áreas de análisis y los territorios previstos.',
    questionsTitle: 'Preguntas que orientan el análisis',
    questions: [
      [
        '¿Qué facilita la creación de nuevas empresas?',
        '¿Cómo influye el apoyo institucional?',
        '¿Qué oportunidades ofrece el emprendimiento creativo?',
      ],
      [
        '¿Cómo avanza la transición energética?',
        '¿Cómo se relacionan economía y energía?',
        '¿Qué retos plantea el desarrollo sostenible del territorio?',
      ],
      [
        '¿Cómo colaboran universidades y empresas?',
        '¿Qué fortalece los ecosistemas de innovación?',
        '¿Cómo contribuyen productividad y capital humano a la competitividad?',
      ],
    ],
    institution: 'Institución',
    institutionalWeb: 'Consultar web institucional',
    channelPending: 'El canal general estará disponible próximamente.',
    channelPendingText:
      'Mientras se confirma el correo del Observatorio, puedes acceder a las instituciones participantes a través de sus webs oficiales.',
    contactAudience: '¿Desde dónde quieres conectar?',
    contactGuidance: [
      'Conoce las tres universidades participantes y las áreas de estudio para explorar posibles conexiones científicas.',
      'Consulta las actividades de transferencia y los laboratorios previstos para conectar los retos de tu empresa con la investigación.',
      'Conoce el propósito del Observatorio y la coordinación institucional del proyecto.',
      'Sigue las noticias, los encuentros y los recursos abiertos que acercan el conocimiento al territorio.',
    ],
    socialTitle: 'Síguenos',
    socialPending:
      'Los enlaces a los perfiles oficiales se incorporarán cuando estén confirmados.',
    continue: 'Sigue explorando',
    viewNews: 'Ver actualidad',
    viewActivities: 'Conocer las actividades',
    viewPublications: 'Ver publicaciones',
  },
  pt: {
    pages: {
      observatorio: {
        title: 'Compreender o território.\nLigar o seu potencial.',
        intro:
          'Investigamos os desafios da Extremadura, do Alentejo e do Centro de Portugal para apoiar as decisões e a cooperação entre as três regiões.',
      },
      actividades: {
        title: 'Investigar em conjunto.\nPartilhar o que aprendemos.',
        intro:
          'Estudos, laboratórios e encontros para ligar as equipas científicas aos desafios das empresas, das administrações e dos cidadãos.',
      },
      nosotros: {
        title: 'Quatro parceiros.\nUma visão partilhada.',
        intro:
          'A Junta de Extremadura e as universidades da Extremadura, de Évora e da Beira Interior unem as suas capacidades para investigar os desafios da EUROACE.',
      },
      publicaciones: {
        title: 'Investigar.\nPublicar. Partilhar.',
        intro:
          'Aqui reuniremos os relatórios, barómetros, infografias e artigos científicos do Observatório. Conhecimento aberto para compreender o território e apoiar as suas decisões.',
      },
      actualidad: {
        title: 'O Observatório,\npasso a passo.',
        intro:
          'Acompanhe os avanços da investigação, o trabalho dos parceiros e os encontros que dão forma ao Observatório EUROACE.',
      },
      eventos: {
        title: 'Encontrar.\nPartilhar. Cooperar.',
        intro:
          'Consulte os próximos encontros e os eventos já realizados pelo Observatório. Espaços para partilhar perguntas, experiências e conhecimento.',
      },
      analytics: {
        title: 'Dados para compreender.\nConhecimento para decidir.',
        intro:
          'O EUROACE Analytics reunirá indicadores sobre empreendedorismo, economia e energia, e competitividade. Explore o âmbito da plataforma enquanto preparamos os dados.',
      },
      contacto: {
        title: 'Entre em contacto\ncom o Observatório.',
        intro:
          'Investiga, trabalha numa empresa ou representa uma instituição? Encontre o contacto da coordenação e as entidades que participam no projeto.',
      },
    },
    territory: 'ALENTEJO · CENTRO · EXTREMADURA',
    purpose: 'CONHECER PARA COOPERAR',
    purposeText:
      'A cooperação começa por compreender o que partilhamos. Ligamos equipas de investigação das três regiões para estudar os seus desafios e apoiar quem toma decisões.',
    audience: 'Conhecimento para quem constrói o território',
    countries: 'países',
    regions: 'regiões',
    partners: 'parceiros',
    projectDetails: 'Com apoio europeu',
    programme: 'Programa',
    duration: 'Período de execução',
    areas: 'Três áreas de investigação',
    studies: 'Cinco estudos iniciais',
    studyIntro:
      'Estes são os cinco estudos iniciais do Observatório. Atualizaremos este espaço com os seus avanços.',
    transfer: 'Do estudo ao território',
    transferText:
      'O programa do projeto prevê espaços de encontro para partilhar conhecimento e ligá-lo às necessidades das empresas, administrações e cidadãos.',
    labs: 'Laboratórios de inovação',
    labsText:
      'Investigadores, empresas e agentes públicos partilharão desafios e explorarão aplicações do conhecimento nas três áreas do projeto.',
    campus: 'Campus EUROACE',
    campusText:
      'Encontros para aproximar o conhecimento do Observatório dos agentes do território e dos cidadãos.',
    partnersTitle: 'As instituições da rede',
    cooperation: 'Uma rede, muitas perspetivas',
    cooperationText:
      'A Junta de Extremadura coordena o projeto. As universidades da Extremadura, de Évora e da Beira Interior contribuem com investigação, análise e transferência. Quatro instituições que partilham perguntas e somam perspetivas sobre a EUROACE.',
    searchPublications: 'Pesquisar formatos e recursos',
    searchNews: 'Pesquisar notícias',
    format: 'Formato',
    all: 'Todos',
    sources: 'Fonte',
    latest: 'Mais recentes',
    oldest: 'Mais antigas',
    order: 'Ordem',
    planned: 'Em preparação',
    catalogNote:
      'O catálogo irá crescer com os resultados do projeto. Cada documento será acrescentado quando estiver publicado e disponível para consulta.',
    noMatches: 'Não há resultados com estes filtros.',
    reset: 'Repor filtros',
    resources: 'Formatos do conhecimento',
    publicationCta:
      'A investigação já está em curso. Acompanhe os seus avanços enquanto preparamos as primeiras publicações.',
    upcoming: 'Próximos encontros',
    archive: 'Encontros realizados',
    eventPending: 'O próximo encontro está por confirmar.',
    eventPendingText:
      'Acrescentaremos ao calendário as datas, os locais e os programas assim que estiverem confirmados. Entretanto, descubra os encontros que já impulsionaram o projeto.',
    kickoff: 'Arranque do Observatório',
    coordination: 'Comité de Coordenação',
    june: 'Junho de 2026',
    eventSource: 'Consultar a notícia',
    eventFormats: 'Assim partilharemos o conhecimento',
    eventFormatNames: [
      'Seminários e workshops',
      'Laboratórios de inovação',
      'Campus EUROACE',
    ],
    area: 'Área de estudo',
    region: 'Território',
    allRegions: 'Toda a EUROACE',
    selectedTerritory: 'Território selecionado',
    dataStatus: 'Plataforma em desenvolvimento',
    dataStatusText:
      'Estamos a preparar a plataforma. Acrescentaremos indicadores e séries quando os dados estiverem disponíveis e validados. Por agora, pode explorar as áreas de análise e os territórios previstos.',
    questionsTitle: 'Perguntas que orientam a análise',
    questions: [
      [
        'O que facilita a criação de novas empresas?',
        'Como influencia o apoio institucional?',
        'Que oportunidades oferece o empreendedorismo criativo?',
      ],
      [
        'Como avança a transição energética?',
        'Como se relacionam economia e energia?',
        'Que desafios coloca o desenvolvimento sustentável do território?',
      ],
      [
        'Como colaboram universidades e empresas?',
        'O que fortalece os ecossistemas de inovação?',
        'Como contribuem a produtividade e o capital humano para a competitividade?',
      ],
    ],
    institution: 'Instituição',
    institutionalWeb: 'Consultar website institucional',
    channelPending: 'O canal geral estará disponível em breve.',
    channelPendingText:
      'Enquanto se confirma o email do Observatório, pode aceder às instituições participantes através dos seus websites oficiais.',
    contactAudience: 'A partir de onde quer conectar-se?',
    contactGuidance: [
      'Conheça as três universidades participantes e as áreas de estudo para explorar possíveis ligações científicas.',
      'Consulte as atividades de transferência e os laboratórios previstos para ligar os desafios da sua empresa à investigação.',
      'Conheça o propósito do Observatório e a coordenação institucional do projeto.',
      'Siga as notícias, os encontros e os recursos abertos que aproximam o conhecimento do território.',
    ],
    socialTitle: 'Segue-nos',
    socialPending:
      'As ligações aos perfis oficiais serão incorporadas quando estiverem confirmadas.',
    continue: 'Continue a explorar',
    viewNews: 'Ver atualidade',
    viewActivities: 'Conhecer as atividades',
    viewPublications: 'Ver publicações',
  },
  en: {
    pages: {
      observatorio: {
        title: 'Understand the region.\nConnect its potential.',
        intro:
          'We research the challenges facing Extremadura, Alentejo and Centro de Portugal to inform decisions and support cooperation between the three regions.',
      },
      actividades: {
        title: 'Research together.\nShare what we learn.',
        intro:
          'Studies, labs and meetings connecting research teams with the challenges facing businesses, public authorities and citizens.',
      },
      nosotros: {
        title: 'Four partners.\nOne shared perspective.',
        intro:
          'The Junta de Extremadura and the universities of Extremadura, Évora and Beira Interior combine their expertise to research the challenges facing EUROACE.',
      },
      publicaciones: {
        title: 'Research.\nPublish. Share.',
        intro:
          'This space will bring together the Observatory’s reports, barometers, infographics and scientific articles. Open knowledge to understand the region and inform its decisions.',
      },
      actualidad: {
        title: 'The Observatory,\nstep by step.',
        intro:
          'Follow the research, the work of our partners and the meetings shaping the EUROACE Observatory.',
      },
      eventos: {
        title: 'Meet.\nShare. Cooperate.',
        intro:
          'Explore upcoming events and past meetings organised by the Observatory. Spaces to share questions, experience and knowledge.',
      },
      analytics: {
        title: 'Data to understand.\nKnowledge to decide.',
        intro:
          'EUROACE Analytics will bring together indicators on entrepreneurship, the economy and energy, and competitiveness. Explore the platform’s scope while we prepare the data.',
      },
      contacto: {
        title: 'Connect with\nthe Observatory.',
        intro:
          'Are you a researcher, a business or an institutional representative? Find the project coordination contact and the participating organisations.',
      },
    },
    territory: 'ALENTEJO · CENTRO · EXTREMADURA',
    purpose: 'KNOWLEDGE FOR COOPERATION',
    purposeText:
      'Cooperation starts with understanding what we share. We connect research teams across the three regions to study their challenges and inform the people making decisions.',
    audience: 'Knowledge for the people shaping the region',
    countries: 'countries',
    regions: 'regions',
    partners: 'partners',
    projectDetails: 'With European support',
    programme: 'Programme',
    duration: 'Project period',
    areas: 'Three research areas',
    studies: 'Five initial studies',
    studyIntro:
      'These are the Observatory’s five initial studies. We will update this space as they progress.',
    transfer: 'From research to the region',
    transferText:
      'The project programme includes opportunities to share knowledge and connect it with the needs of businesses, public authorities and citizens.',
    labs: 'Innovation labs',
    labsText:
      'Researchers, businesses and public representatives will share challenges and explore applications of knowledge across the three project areas.',
    campus: 'Campus EUROACE',
    campusText:
      'Meetings bringing the Observatory’s knowledge closer to regional stakeholders and citizens.',
    partnersTitle: 'The institutions in the network',
    cooperation: 'One network, many perspectives',
    cooperationText:
      'The Junta de Extremadura coordinates the project. The universities of Extremadura, Évora and Beira Interior contribute research, analysis and knowledge transfer. Four institutions sharing questions and combining perspectives on EUROACE.',
    searchPublications: 'Search formats and resources',
    searchNews: 'Search news',
    format: 'Format',
    all: 'All',
    sources: 'Source',
    latest: 'Newest first',
    oldest: 'Oldest first',
    order: 'Order',
    planned: 'In preparation',
    catalogNote:
      'The catalogue will grow with the project’s results. Each document will appear here once it has been published and is available to read.',
    noMatches: 'No results match these filters.',
    reset: 'Reset filters',
    resources: 'Knowledge formats',
    publicationCta:
      'Research is already under way. Follow its progress while we prepare the first publications.',
    upcoming: 'Upcoming meetings',
    archive: 'Past meetings',
    eventPending: 'The next meeting is awaiting confirmation.',
    eventPendingText:
      'We will add dates, locations and programmes to the calendar as soon as they are confirmed. In the meantime, explore the meetings that have already moved the project forward.',
    kickoff: 'Observatory launch',
    coordination: 'Coordination Committee',
    june: 'June 2026',
    eventSource: 'Read the meeting report',
    eventFormats: 'How we will share knowledge',
    eventFormatNames: [
      'Seminars and workshops',
      'Innovation labs',
      'Campus EUROACE',
    ],
    area: 'Research area',
    region: 'Region',
    allRegions: 'All of EUROACE',
    selectedTerritory: 'Selected region',
    dataStatus: 'Platform in development',
    dataStatusText:
      'We are preparing the platform. Indicators and time series will be added once the data are available and validated. For now, explore the planned research areas and regions.',
    questionsTitle: 'Questions guiding the analysis',
    questions: [
      [
        'What helps new businesses get started?',
        'How does institutional support affect entrepreneurship?',
        'What opportunities does creative entrepreneurship offer?',
      ],
      [
        'How is the energy transition progressing?',
        'How do the economy and energy interact?',
        'What challenges does sustainable regional development present?',
      ],
      [
        'How do universities and businesses work together?',
        'What strengthens innovation ecosystems?',
        'How do productivity and human capital support competitiveness?',
      ],
    ],
    institution: 'Institution',
    institutionalWeb: 'Visit institutional website',
    channelPending: 'The general contact channel will be available soon.',
    channelPendingText:
      'While the Observatory’s email address is being confirmed, you can reach participating institutions through their official websites.',
    contactAudience: 'How would you like to connect?',
    contactGuidance: [
      'Explore the three participating universities and research areas to find potential scientific connections.',
      'Discover the planned transfer activities and innovation labs to connect your business challenges with research.',
      'Learn about the Observatory’s purpose and the project’s institutional coordination.',
      'Follow the news, meetings and open resources connecting knowledge with the region.',
    ],
    socialTitle: 'Follow us',
    socialPending:
      'Links to the official profiles will be added once confirmed.',
    continue: 'Keep exploring',
    viewNews: 'View news',
    viewActivities: 'Explore activities',
    viewPublications: 'View publications',
  },
};

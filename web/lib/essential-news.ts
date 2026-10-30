import type { Language } from './project';
import { progressSource } from './essential-copy';

export type EssentialNewsItem = {
  id: string;
  date: string;
  source: string;
  url: string;
  image: { src: string; width: number; height: number };
  copy: Record<Language, { title: string; summary: string; imageAlt: string }>;
};

// Published institutional articles, ordered by publication date.
export const essentialNews: EssentialNewsItem[] = [
  {
    id: 'seville-observatories',
    date: '2026-09-28',
    source: 'Ubinnovative · UBI',
    url: 'https://pt.linkedin.com/posts/ubinnovative_nos-dias-22-e-23-de-setembro-estivemos-em-activity-7510299676961660928-s4B4',
    image: {
      src: '/home-proposals/news/seville.jpg',
      width: 1024,
      height: 768,
    },
    copy: {
      es: {
        title: 'El Observatorio EUROACE participa en un encuentro europeo.',
        summary:
          'Ubinnovative representó al proyecto en Sevilla para compartir conocimiento y metodologías entre observatorios transfronterizos.',
        imageAlt: 'Encuentro de observatorios transfronterizos en Sevilla.',
      },
      pt: {
        title: 'O Observatório EUROACE participa num encontro europeu.',
        summary:
          'O Ubinnovative representou o projeto em Sevilha para partilhar conhecimento e metodologias entre observatórios transfronteiriços.',
        imageAlt: 'Encontro de observatórios transfronteiriços em Sevilha.',
      },
      en: {
        title: 'EUROACE Observatory takes part in a European meeting.',
        summary:
          'Ubinnovative represented the project in Seville to exchange knowledge and methods with cross-border observatories.',
        imageAlt: 'Meeting of cross-border observatories in Seville.',
      },
    },
  },
  {
    id: 'coordination',
    date: '2026-07-28',
    source: 'EUROACE',
    url: progressSource,
    image: {
      src: '/home-proposals/news/coordination.jpg',
      width: 1300,
      height: 732,
    },
    copy: {
      es: {
        imageAlt:
          'Participantes en la reunión del Comité de Coordinación del Observatorio EUROACE.',
        title: 'Cinco estudios y equipos de las tres universidades.',
        summary:
          'El Comité de Coordinación acuerda las temáticas de investigación y constituye los equipos transfronterizos.',
      },
      pt: {
        imageAlt:
          'Participantes na reunião do Comité de Coordenação do Observatório EUROACE.',
        title: 'Cinco estudos e equipas das três universidades.',
        summary:
          'O Comité de Coordenação define os temas de investigação e constitui as equipas transfronteiriças.',
      },
      en: {
        imageAlt:
          'Participants in the EUROACE Observatory Coordination Committee meeting.',
        title: 'Five studies and teams from three universities.',
        summary:
          'The Coordination Committee agrees the research topics and establishes cross-border teams.',
      },
    },
  },
  {
    id: 'ubi-research',
    date: '2026-07-01',
    source: 'UBI · Urbi et Orbi',
    url: 'https://urbietorbi.ubi.pt/ubi-integra-observatorio-euroace-de-cooperacao-transfronteirica/',
    image: {
      src: '/home-proposals/news/ubi-observatory.jpg',
      width: 800,
      height: 440,
    },
    copy: {
      es: {
        title: 'La UBI coordina la producción científica del Observatorio.',
        summary:
          'Ubinnovative y NECE desarrollan la participación de la universidad en la investigación conjunta del proyecto.',
        imageAlt: 'Imagen del Observatorio publicada por la UBI.',
      },
      pt: {
        title: 'A UBI coordena a produção científica do Observatório.',
        summary:
          'O Ubinnovative e o NECE desenvolvem a participação da universidade na investigação conjunta do projeto.',
        imageAlt: 'Imagem do Observatório publicada pela UBI.',
      },
      en: {
        title: 'UBI coordinates the Observatory’s scientific production.',
        summary:
          'Ubinnovative and NECE deliver the university’s contribution to the project’s joint research.',
        imageAlt: 'Observatory image published by UBI.',
      },
    },
  },
  {
    id: 'launch',
    date: '2026-06-08',
    source: 'Universidad de Extremadura',
    url: 'https://des-comunicacion.unex.es/2026/06/08/arranca-el-observatorio-de-cooperacion-transfronteriza-de-la-euroace/',
    image: { src: '/home-proposals/news/launch.webp', width: 831, height: 346 },
    copy: {
      es: {
        imageAlt:
          'Participantes en la puesta en marcha del Observatorio, en la Facultad de Ciencias de la Documentación y la Comunicación.',
        title: 'Arranca el Observatorio de Cooperación Transfronteriza.',
        summary:
          'La primera reunión en Badajoz reúne a los socios y presenta las tres áreas iniciales de trabajo.',
      },
      pt: {
        imageAlt:
          'Participantes no lançamento do Observatório, na Faculdade de Ciências da Documentação e da Comunicação.',
        title: 'Arranca o Observatório de Cooperação Transfronteiriça.',
        summary:
          'A primeira reunião em Badajoz reúne os parceiros e apresenta as três áreas iniciais de trabalho.',
      },
      en: {
        imageAlt:
          'Participants at the Observatory launch at the Faculty of Documentation and Communication Sciences.',
        title: 'The Cross-border Cooperation Observatory launches.',
        summary:
          'The first meeting in Badajoz brings the partners together and introduces the three initial research areas.',
      },
    },
  },
  {
    id: 'cooperation',
    date: '2026-04-10',
    source: 'Universidad de Extremadura',
    url: 'https://comunicacion.unex.es/2026/04/10/la-uex-obtiene-financiacion-en-8-proyectos-europeos-de-investigacion-e-innovacion-transfronteriza-con-portugal/',
    image: {
      src: '/home-proposals/news/cooperation.webp',
      width: 831,
      height: 346,
    },
    copy: {
      es: {
        imageAlt:
          'Imagen institucional de la Oficina de Proyectos Europeos de la UEx.',
        title: 'La UEx participa en ocho proyectos transfronterizos.',
        summary:
          'La universidad presenta los proyectos financiados por POCTEP, entre ellos el Observatorio EUROACE.',
      },
      pt: {
        imageAlt:
          'Imagem institucional do Gabinete de Projetos Europeus da UEx.',
        title: 'A UEx participa em oito projetos transfronteiriços.',
        summary:
          'A universidade apresenta os projetos financiados pelo POCTEP, entre os quais o Observatório EUROACE.',
      },
      en: {
        imageAlt: 'Institutional image from the UEx European Projects Office.',
        title: 'UEx takes part in eight cross-border projects.',
        summary:
          'The university introduces the projects funded by POCTEP, including the EUROACE Observatory.',
      },
    },
  },
];

export const headerStyles = [
  {
    id: 'orbita',
    number: 1,
    design: 'actividades',
    name: { es: 'Órbita', pt: 'Órbita', en: 'Orbit' },
  },
  {
    id: 'red',
    number: 2,
    design: 'nosotros',
    name: { es: 'Red compartida', pt: 'Rede partilhada', en: 'Shared network' },
  },
  {
    id: 'editorial',
    number: 3,
    design: 'publicaciones',
    name: { es: 'Editorial', pt: 'Editorial', en: 'Editorial' },
  },
  {
    id: 'ventana',
    number: 4,
    design: 'actualidad',
    name: {
      es: 'Ventana al territorio',
      pt: 'Janela para o território',
      en: 'Window onto the region',
    },
  },
  {
    id: 'cartel',
    number: 5,
    design: 'eventos',
    name: { es: 'Cartel', pt: 'Cartaz', en: 'Poster' },
  },
  {
    id: 'conversacion',
    number: 6,
    design: 'contacto',
    name: { es: 'Conversación', pt: 'Conversa', en: 'Conversation' },
  },
  {
    id: 'mixto',
    number: 7,
    design: 'publicaciones',
    mixed: true,
    name: {
      es: 'Editorial + Cartel',
      pt: 'Editorial + Cartaz',
      en: 'Editorial + Poster',
    },
  },
] as const;

// Final choice per page (header proposal number, see headerStyles above).
const headerStyleBySection: Record<string, number> = {
  observatorio: 7,
  actividades: 7,
  nosotros: 3,
  publicaciones: 3,
  actualidad: 6,
  eventos: 5,
  contacto: 6,
  analytics: 3,
};

export function headerStyleFor(section: string) {
  const number = headerStyleBySection[section] ?? 3;
  return headerStyles.find((style) => style.number === number) ?? headerStyles[2];
}

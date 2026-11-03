'use client';

// Review control: swaps the look of the intro band on the home and on "Sobre el proyecto".
import { useEffect, useSyncExternalStore } from 'react';
import type { Language } from '@/lib/project';

const bands = ['turquesa', 'azul', 'blanco', 'suave', 'degradado'] as const;
type Band = (typeof bands)[number];

const labels: Record<Language, { title: string; names: Record<Band, string> }> =
  {
    es: {
      title: 'Franja',
      names: {
        turquesa: 'Turquesa',
        azul: 'Azul',
        blanco: 'Blanco',
        suave: 'Suave',
        degradado: 'Degradado',
      },
    },
    pt: {
      title: 'Faixa',
      names: {
        turquesa: 'Turquesa',
        azul: 'Azul',
        blanco: 'Branco',
        suave: 'Suave',
        degradado: 'Degradê',
      },
    },
    en: {
      title: 'Band',
      names: {
        turquesa: 'Turquoise',
        azul: 'Blue',
        blanco: 'White',
        suave: 'Soft',
        degradado: 'Gradient',
      },
    },
  };

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readBand(): Band {
  let stored: string | null | undefined;
  try {
    stored = sessionStorage.getItem('euroace-band');
  } catch {
    stored = document.documentElement.dataset.band;
  }
  return bands.find((band) => band === stored) ?? 'turquesa';
}

function chooseBand(band: Band) {
  document.documentElement.dataset.band = band;
  try {
    sessionStorage.setItem('euroace-band', band);
  } catch {
    /* the choice just is not remembered */
  }
  listeners.forEach((listener) => listener());
}

export function BandSwitcher({ language }: { language: Language }) {
  const band = useSyncExternalStore(
    subscribe,
    readBand,
    () => 'turquesa' as Band,
  );
  const t = labels[language];
  useEffect(() => {
    document.documentElement.dataset.band = band;
  }, [band]);
  return (
    <fieldset className="band-switcher">
      <legend>
        {t.title} {bands.indexOf(band) + 1}/{bands.length}
      </legend>
      {bands.map((name, index) => (
        <button
          key={name}
          type="button"
          aria-pressed={band === name}
          onClick={() => chooseBand(name)}
        >
          <b>{index + 1}</b> {t.names[name]}
        </button>
      ))}
    </fieldset>
  );
}

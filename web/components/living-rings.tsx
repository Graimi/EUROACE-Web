'use client';

/* oxlint-disable next/no-img-element */
import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LivingRings({ language }: { language: 'es' | 'pt' }) {
  const [paused, setPaused] = useState(false);
  const pt = language === 'pt';
  return (
    <figure className={`living-rings ${paused ? 'is-paused' : ''}`}>
      <div className="ring-stage" aria-hidden="true">
        <div className="ring-canvas">
          <img
            className="living-ring ring-centro"
            src="/brand/ring-centro.svg"
            width="356"
            height="356"
            alt=""
          />
          <img
            className="living-ring ring-alentejo"
            src="/brand/ring-alentejo.svg"
            width="356"
            height="356"
            alt=""
          />
          <img
            className="living-ring ring-extremadura"
            src="/brand/ring-extremadura.svg"
            width="356"
            height="356"
            alt=""
          />
        </div>
      </div>
      <figcaption>
        <p className="rings-message">
          {pt
            ? 'Cada território, a sua identidade.\nJuntos, novas possibilidades.'
            : 'Cada territorio, su identidad.\nJuntos, nuevas posibilidades.'}
        </p>
        <ul
          className="rings-legend"
          aria-label={
            pt
              ? 'Territórios representados pelos anéis'
              : 'Territorios representados por los anillos'
          }
        >
          <li>
            <span className="legend-centro" />
            Centro
          </li>
          <li>
            <span className="legend-extremadura" />
            Extremadura
          </li>
          <li>
            <span className="legend-alentejo" />
            Alentejo
          </li>
        </ul>
        <div className="rings-controls">
          <span>
            {pt
              ? 'Conectar · partilhar · evoluir'
              : 'Conectar · compartir · evolucionar'}
          </span>
          <Button
            className="rings-pause"
            variant="ghost"
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            {paused
              ? pt
                ? 'Retomar animação'
                : 'Reanudar animación'
              : pt
                ? 'Pausar animação'
                : 'Pausar animación'}
          </Button>
          <span className="rings-reduced">
            {pt ? 'Movimento reduzido' : 'Movimiento reducido'}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

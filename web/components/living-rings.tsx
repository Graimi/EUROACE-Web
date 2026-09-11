'use client';

/* oxlint-disable next/no-img-element */
import { useEffect, useRef, useState } from 'react';

export function LivingRings({ language, variant = 'original' }: { language: 'es' | 'pt'; variant?: 'original' | 'fluid' }) {
  const [ready, setReady] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene =
    useRef<
      Awaited<ReturnType<typeof import('@/lib/rings-scene').createRingsScene>>
    >(null);
  useEffect(() => {
    const controller = new AbortController();
    let cleanup: (() => void) | undefined;
    const target = canvas.current;
    if (!target) return;
    void import('@/lib/rings-scene')
      .then(async ({ createRingsScene }) => {
        if (controller.signal.aborted) return;
        const instance = await createRingsScene(target, controller.signal, variant);
        if (!instance) return;
        if (controller.signal.aborted) {
          instance.dispose();
          return;
        }
        scene.current = instance;
        cleanup = () => instance.dispose();
        setReady(true);
      })
      .catch(() => {
        /* Original static vectors remain visible without WebGL. */
      });
    return () => {
      controller.abort();
      cleanup?.();
      scene.current = null;
    };
  }, [variant]);
  const pt = language === 'pt';
  return (
    <figure
      className={`living-rings rings-three legend-${variant} ${ready ? 'scene-ready' : ''}`}
    >
      <div className="ring-stage" aria-hidden="true">
        <canvas ref={canvas} className="rings-webgl" />
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
        <ul
          className="rings-legend"
          aria-label={
            pt
              ? 'Territórios representados pelos anéis'
              : 'Territorios representados por los anillos'
          }
        >
          <li>
            <span className="legend-centro" aria-hidden="true" />
            <div><strong>Centro</strong><small>Portugal</small></div>
          </li>
          <li>
            <span className="legend-extremadura" aria-hidden="true" />
            <div><strong>Extremadura</strong><small>{pt ? 'Espanha' : 'España'}</small></div>
          </li>
          <li>
            <span className="legend-alentejo" aria-hidden="true" />
            <div><strong>Alentejo</strong><small>Portugal</small></div>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

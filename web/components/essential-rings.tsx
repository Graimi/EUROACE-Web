'use client';

/* oxlint-disable next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { essentialCopy } from '@/lib/essential-copy';
import type { Language } from '@/lib/project';

// Reuses the original home geometry and motion, including reduced-motion support.
export function EssentialRings({
  language,
  decorative = false,
}: {
  language: Language;
  decorative?: boolean;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const t = essentialCopy[language];
  useEffect(() => {
    const controller = new AbortController();
    const target = canvas.current;
    if (!target) return;
    let dispose: (() => void) | undefined;
    void import('@/lib/rings-scene')
      .then(async ({ createRingsScene }) => {
        if (controller.signal.aborted) return;
        const instance = await createRingsScene(
          target,
          controller.signal,
          'combined',
        );
        if (!instance) return;
        if (controller.signal.aborted) {
          instance.dispose();
          return;
        }
        dispose = () => instance.dispose();
        setReady(true);
      })
      .catch(() => {
        /* Preserve the original vector fallback when WebGL is unavailable. */
      });
    return () => {
      controller.abort();
      dispose?.();
    };
  }, []);
  return (
    <figure
      className={`he-rings rings-three ${ready ? 'scene-ready' : ''}`}
      aria-label={decorative ? undefined : t.rings}
      aria-hidden={decorative || undefined}
    >
      <div className="ring-stage" aria-hidden="true">
        <canvas ref={canvas} className="rings-webgl" />
        <div className="ring-canvas">
          {['centro', 'extremadura', 'alentejo'].map((region) => (
            <img
              key={region}
              className={`living-ring ring-${region}`}
              src={`/brand/ring-${region}.svg`}
              width="356"
              height="356"
              alt=""
            />
          ))}
        </div>
      </div>
      {!decorative && (
        <figcaption>
          <ul>
            <li>
              <span className="he-dot-centro" />
              Centro
            </li>
            <li>
              <span className="he-dot-extremadura" />
              Extremadura
            </li>
            <li>
              <span className="he-dot-alentejo" />
              Alentejo
            </li>
          </ul>
        </figcaption>
      )}
    </figure>
  );
}

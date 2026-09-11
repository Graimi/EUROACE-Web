'use client';

import { useEffect, useRef } from 'react';

export function ChromeRings({ language }: { language: 'es' | 'pt' }) {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let manual = false;
    const sync = () => {
      if (document.hidden || !visible || motion.matches) element.pause();
      else if (!manual) void element.play().catch(() => {});
    };
    const interact = () => {
      manual = true;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.25 },
    );
    observer.observe(element);
    element.addEventListener('pointerdown', interact);
    element.addEventListener('keydown', interact);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      observer.disconnect();
      element.removeEventListener('pointerdown', interact);
      element.removeEventListener('keydown', interact);
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);
  return (
    <figure className="chrome-comparison">
      <figcaption>
        <span className="eyebrow">
          {language === 'es' ? 'OPCIÓN 02 · CROMADO' : 'OPÇÃO 02 · CROMADO'}
        </span>
        <p>
          {language === 'es'
            ? 'Tres identidades. Un mismo reflejo.'
            : 'Três identidades. Um mesmo reflexo.'}
        </p>
      </figcaption>
      <video
        ref={video}
        poster="/brand/rings-chrome-poster.jpg"
        src="/brand/rings-chrome.mp4"
        controls
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={
          language === 'es'
            ? 'Segunda propuesta: animación de tres anillos cromados, creada con Magnific'
            : 'Segunda proposta: animação de três anéis cromados, criada com Magnific'
        }
      />
      <p className="chrome-credit">
        {language === 'es'
          ? 'Exploración visual creada con Magnific · 8 segundos'
          : 'Exploração visual criada com Magnific · 8 segundos'}
      </p>
    </figure>
  );
}

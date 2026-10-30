'use client';

/* oxlint-disable next/no-html-link-for-pages, next/no-img-element */
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { essentialNews } from '@/lib/essential-news';
import { essentialCopy } from '@/lib/essential-copy';
import type { Language } from '@/lib/project';

export function EssentialNewsCarousel({ language }: { language: Language }) {
  const t = essentialCopy[language];
  const track = useRef<HTMLDivElement>(null);
  const [pagination, setPagination] = useState({
    current: 0,
    total: essentialNews.length,
  });
  const date = new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const syncPagination = useCallback(() => {
    const element = track.current;
    if (!element) return;
    const cards = element.children;
    const step =
      (cards[1] as HTMLElement).offsetLeft -
      (cards[0] as HTMLElement).offsetLeft;
    if (!step) return;
    const total =
      Math.round((element.scrollWidth - element.clientWidth) / step) + 1;
    const current = Math.max(
      0,
      Math.min(total - 1, Math.round(element.scrollLeft / step)),
    );
    setPagination((previous) =>
      previous.current === current && previous.total === total
        ? previous
        : { current, total },
    );
  }, []);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(syncPagination);
    observer.observe(element);
    syncPagination();
    return () => observer.disconnect();
  }, [syncPagination]);

  const goTo = (index: number) => {
    const element = track.current;
    if (!element) return;
    const cards = element.children;
    const step =
      (cards[1] as HTMLElement).offsetLeft -
      (cards[0] as HTMLElement).offsetLeft;
    element.scrollTo({
      left: step * index,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  };

  return (
    <section
      className="he-news-carousel"
      aria-label={t.newsCarousel}
      aria-roledescription={t.carousel}
    >
      <div className="he-news-controls">
        <p className="hp-kicker">{t.latestNews}</p>
        <div>
          <span className="he-news-counter" aria-hidden="true">
            {pagination.current + 1} / {pagination.total}
          </span>
          <button
            type="button"
            aria-label={t.previousNews}
            aria-controls="he-news-track"
            disabled={pagination.current === 0}
            onClick={() => goTo(pagination.current - 1)}
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={t.nextNews}
            aria-controls="he-news-track"
            disabled={pagination.current === pagination.total - 1}
            onClick={() => goTo(pagination.current + 1)}
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        className="he-news-track"
        id="he-news-track"
        ref={track}
        onScroll={syncPagination}
      >
        {essentialNews.map((item) => (
          <article className="he-news-card he-news-card-top" key={item.id}>
            <div className="he-news-media">
              <img
                src={item.image.src}
                alt={item.copy[language].imageAlt}
                width={item.image.width}
                height={item.image.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="he-news-content">
              <div className="he-news-meta">
                <time dateTime={item.date}>
                  {date.format(new Date(`${item.date}T12:00:00Z`))}
                </time>
                <span>{item.source}</span>
              </div>
              <h3>{item.copy[language].title}</h3>
              <p>{item.copy[language].summary}</p>
              <a className="hp-link" href={item.url}>
                {t.readNews}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="he-news-pagination" aria-label={t.newsPages}>
        {Array.from({ length: pagination.total }, (_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`${t.newsPage} ${index + 1}`}
            aria-current={index === pagination.current ? 'true' : undefined}
            onClick={() => goTo(index)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}

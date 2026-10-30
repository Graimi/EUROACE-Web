'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Language } from '@/lib/project';

// Only documented Observatory meetings are marked. Future dates stay unassigned.
const meetings = [
  {
    date: '2026-06-02',
    title: {
      es: 'Puesta en marcha del Observatorio',
      pt: 'Lançamento do Observatório',
      en: 'Observatory launch',
    },
    place: 'Badajoz',
    source:
      'https://www.juntaex.es/w/reunion-observatorio-cooperacion-transfronteriza-euroace',
  },
  {
    date: '2026-07-23',
    title: {
      es: 'Comité de Coordinación',
      pt: 'Comité de Coordenação',
      en: 'Coordination Committee',
    },
    place: 'Covilhã',
    source:
      'https://euro-ace.eu/noticias/los-socios-del-observatorio-euroace-se-reunen-en-el-comite-de-coordinacion',
  },
];

export function EventsCalendar({ language }: { language: Language }) {
  const [month, setMonth] = useState(() => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1, 12);
  });
  const [selected, setSelected] = useState<string | null>(null);
  const t = {
    es: {
      title: 'Calendario de encuentros',
      previous: 'Mes anterior',
      next: 'Mes siguiente',
      today: 'Mes actual',
      empty: 'No hay encuentros confirmados este mes.',
      weekdays: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      names: [
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
        'domingo',
      ],
      source: 'Consultar la crónica',
      note: 'Los próximos encuentros aparecerán aquí cuando se confirmen.',
    },
    pt: {
      title: 'Calendário de encontros',
      previous: 'Mês anterior',
      next: 'Mês seguinte',
      today: 'Mês atual',
      empty: 'Não há encontros confirmados este mês.',
      weekdays: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      names: [
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado',
        'domingo',
      ],
      source: 'Consultar a notícia',
      note: 'Os próximos encontros aparecerão aqui quando forem confirmados.',
    },
    en: {
      title: 'Meetings calendar',
      previous: 'Previous month',
      next: 'Next month',
      today: 'Current month',
      empty: 'No confirmed meetings this month.',
      weekdays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      names: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      source: 'Read the report',
      note: 'Upcoming meetings will appear here once confirmed.',
    },
  }[language];
  const year = month.getFullYear();
  const number = month.getMonth();
  const key = `${year}-${String(number + 1).padStart(2, '0')}`;
  const days = new Date(year, number + 1, 0).getDate();
  const offset = (month.getDay() + 6) % 7;
  const thisMonth = meetings.filter((event) => event.date.startsWith(key));
  const shown = selected
    ? thisMonth.filter((event) => event.date === selected)
    : thisMonth;
  const dateFormat = new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const move = (step: number) => {
    setMonth(new Date(year, number + step, 1, 12));
    setSelected(null);
  };
  return (
    <section className="ap-calendar" aria-label={t.title}>
      <div className="ap-calendar-heading">
        <h3>{t.title}</h3>
        <button
          type="button"
          onClick={() => {
            const now = new Date();
            setMonth(new Date(now.getFullYear(), now.getMonth(), 1, 12));
            setSelected(null);
          }}
        >
          {t.today}
        </button>
      </div>
      <div className="ap-calendar-navigation">
        <button type="button" aria-label={t.previous} onClick={() => move(-1)}>
          <ChevronLeft size={20} />
        </button>
        <p aria-live="polite">
          {new Intl.DateTimeFormat(language, {
            month: 'long',
            year: 'numeric',
          }).format(month)}
        </p>
        <button type="button" aria-label={t.next} onClick={() => move(1)}>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="ap-calendar-grid">
        {t.weekdays.map((day, index) => (
          <abbr key={`w${index}`} title={t.names[index]}>
            {day}
          </abbr>
        ))}
        {Array.from({ length: offset }, (_, i) => (
          <span key={`empty${i}`} />
        ))}
        {Array.from({ length: days }, (_, index) => {
          const day = index + 1;
          const iso = `${key}-${String(day).padStart(2, '0')}`;
          const event = thisMonth.find((item) => item.date === iso);
          return event ? (
            <button
              className="ap-calendar-event"
              key={iso}
              type="button"
              aria-pressed={selected === iso}
              aria-label={`${dateFormat.format(new Date(year, number, day, 12))}: ${event.title[language]}`}
              onClick={() => setSelected(selected === iso ? null : iso)}
            >
              {day}
              <i />
            </button>
          ) : (
            <span key={iso}>{day}</span>
          );
        })}
      </div>
      <div className="ap-calendar-results" aria-live="polite">
        {shown.length ? (
          shown.map((event) => (
            <a
              href={event.source}
              target="_blank"
              rel="noopener noreferrer"
              key={event.date}
            >
              <time dateTime={event.date}>
                {dateFormat.format(new Date(`${event.date}T12:00:00`))}
              </time>
              <strong>{event.title[language]}</strong>
              <span>
                {event.place} · {t.source}
              </span>
            </a>
          ))
        ) : (
          <p>{t.empty}</p>
        )}
      </div>
      <p className="ap-calendar-note">{t.note}</p>
    </section>
  );
}

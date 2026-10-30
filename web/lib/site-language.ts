'use client';

import { useEffect, useSyncExternalStore } from 'react';
import type { Language } from './project';

function subscribe(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}

function read(): Language {
  const language = new URLSearchParams(window.location.search).get('lang');
  return language === 'pt' || language === 'en' ? language : 'es';
}

export function useSiteLanguage() {
  const language = useSyncExternalStore(
    subscribe,
    read,
    () => 'es' as Language,
  );
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return language;
}

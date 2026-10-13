import type { Metadata } from 'next';
import { HomeEssential } from '@/components/home-essential';

export const metadata: Metadata = { title: 'EUROACE | Home 01 · Esencial' };
export default function Page() {
  return <HomeEssential />;
}

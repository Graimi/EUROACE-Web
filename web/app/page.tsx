import type { Metadata } from 'next';
import { HomeEssential } from '@/components/home-essential';

export const metadata: Metadata = { title: 'EUROACE | Inicio · Atlas' };

export default function Page() {
  return <HomeEssential variant={3} />;
}

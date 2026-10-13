import type { Metadata } from 'next';
import { HomeEssential } from '@/components/home-essential';

export const metadata: Metadata = { title: 'EUROACE | Home 03 · Atlas' };
export default function Page() {
  return <HomeEssential variant={3} />;
}

import type { Metadata } from 'next';
import { HomeEssential } from '@/components/home-essential';

export const metadata: Metadata = { title: 'EUROACE | Home 02 · Verde' };
export default function Page() {
  return <HomeEssential variant={2} />;
}

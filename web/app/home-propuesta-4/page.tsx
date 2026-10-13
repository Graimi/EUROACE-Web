import type { Metadata } from 'next';
import { HomeEssential } from '@/components/home-essential';

export const metadata: Metadata = {
  title: 'EUROACE | Home 04 · Atlas abierto',
};
export default function Page() {
  return <HomeEssential variant={4} />;
}

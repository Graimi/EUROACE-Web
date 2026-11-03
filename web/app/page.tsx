import type { Metadata } from 'next';
import { HomeClaude } from '@/components/home-claude';

export const metadata: Metadata = { title: 'EUROACE | Inicio' };

export default function Page() {
  return <HomeClaude />;
}

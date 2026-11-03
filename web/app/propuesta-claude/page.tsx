import type { Metadata } from 'next';
import { HomeClaude } from '@/components/home-claude';

export const metadata: Metadata = { title: 'EUROACE | Propuesta Claude' };

export default function Page() {
  return <HomeClaude version={1} review />;
}

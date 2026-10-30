import type { Metadata } from 'next';
import OriginalHome from '@/components/original-home';

export const metadata: Metadata = { title: 'EUROACE | Propuesta · Original' };

export default function Page() {
  return <OriginalHome />;
}

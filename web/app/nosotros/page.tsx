import type { Metadata } from 'next';
import { AtlasPage } from '@/components/atlas-page';

export const metadata: Metadata = { title: 'EUROACE | Nosotros' };

export default function Page() {
  return <AtlasPage section="nosotros" />;
}

import type { Metadata } from 'next';
import { AlternativeHome } from '@/components/alternative-home';

export const metadata: Metadata = {
  title: 'EUROACE | Propuesta 03 · Ventana de datos',
};

export default function DataProposal() {
  return <AlternativeHome variant="data" />;
}

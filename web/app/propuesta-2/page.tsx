import type { Metadata } from 'next';
import { AlternativeHome } from '@/components/alternative-home';

export const metadata: Metadata = {
  title: 'EUROACE | Propuesta 02 · Atlas editorial',
};

export default function EditorialProposal() {
  return <AlternativeHome variant="editorial" />;
}

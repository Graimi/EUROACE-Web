import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import './proposals.css';
import './brand.css';

export const metadata: Metadata = {
  title: 'Observatorio EUROACE | Conocimiento sin fronteras',
  description:
    'Conocimiento y cooperación entre Extremadura, Alentejo y Centro de Portugal. Descubre el Observatorio EUROACE y su futura plataforma de datos.',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

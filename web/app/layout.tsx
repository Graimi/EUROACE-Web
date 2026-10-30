import type { Metadata } from 'next';
import './globals.css';
import './proposals.css';
import './brand-tokens.css';
import './brand.css';
import './review.css';
import './selected-design.css';

export const metadata: Metadata = {
  title: 'Observatorio EUROACE | Conocimiento sin fronteras',
  description:
    'Conocimiento y cooperación entre Extremadura, Alentejo y Centro de Portugal. Descubre el Observatorio EUROACE y su futura plataforma de datos.',
  robots: { index: false, follow: false },
  icons: {
    icon: [
      {
        url: '/favicon.ico?v=20261020',
        sizes: '16x16 32x32 48x48 64x64',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-32x32.png?v=20261020',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.svg?v=20261020',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico?v=20261020',
    apple: [
      {
        url: '/apple-touch-icon.png?v=20261020',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

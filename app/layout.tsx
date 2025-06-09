import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inspectra - Professional Metal Inspection Services',
  description: 'Professional metal inspection and non-destructive testing services in Rajkot. Expert team, state-of-the-art equipment, and reliable service.',
  keywords: 'metal inspection, NDT services, Rajkot, Gujarat, industrial inspection, quality control',
  authors: [{ name: 'Inspectra Services' }],
  creator: 'Inspectra Services',
  publisher: 'Inspectra Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
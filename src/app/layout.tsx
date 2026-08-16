import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BAHA MADZO GADZE FOR CHARITY | Environmental Conservation in Kilifi, Kenya',
    template: '%s | BAHA Madzo Gadze for Charity',
  },
  description:
    'BAHA MADZO GADZE FOR CHARITY is an environmental conservation organization based in Mnarani, Kilifi County, Kenya, promoting sustainable waste management, climate action, environmental education, and community empowerment.',
  keywords: [
    'BAHA MADZO GADZE FOR CHARITY',
    'BMG',
    'Kilifi',
    'Mnarani',
    'Kenya',
    'environment',
    'charity',
    'climate action',
    'tree planting',
    'waste management',
    'recycling',
    'Zero Plastic',
    'environmental education',
    'Baha digital innovation hub',
  ],
  authors: [{ name: 'BAHA MADZO GADZE FOR CHARITY' }],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://bahamadzogadze.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BAHA MADZO GADZE FOR CHARITY',
    description: 'Working Together for a Cleaner, Greener Kilifi',
    type: 'website',
    siteName: 'BAHA MADZO GADZE FOR CHARITY',
    url: 'https://bahamadzogadze.com/',
    images: [
      {
        url: 'https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/bmg-logo.jpeg',
        alt: 'BAHA MADZO GADZE FOR CHARITY logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
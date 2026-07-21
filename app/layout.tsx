import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bet Vault — India\'s Premium Cricket Betting ID Service',
  description: 'Get your cricket betting ID set up in under 5 minutes. Trusted by 3 million+ Indian bettors. Instant WhatsApp setup, secure payments, 24/7 support.',
  keywords: 'cricket betting id, online betting india, ipl betting, cricket id provider, bet vault, betting id whatsapp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

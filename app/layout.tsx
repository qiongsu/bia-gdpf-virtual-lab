import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BIA-GDPF Virtual Learning Laboratory',
  description: 'An interactive learning laboratory for xylem-inspired hydroponic filtration.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sarim Ansari | Software Engineer',
  description: 'Portfolio website for Sarim Ansari, software engineer focused on GenAI and intelligent platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

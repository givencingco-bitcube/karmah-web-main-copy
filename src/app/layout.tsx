import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
// import { BugsnagErrorBoundary } from '~/lib/bugsnag';
import { Inter } from 'next/font/google';

const antiqueOliverStdBlack = localFont({
  src: '../fonts/Antique-Olive-Std-Black.ttf',
  variable: '--font-antique-oliver-black',
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karmah',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <BugsnagErrorBoundary>
    <html lang="en" className="max-md:overflow-x-hidden">
      <body
        className={`${antiqueOliverStdBlack.variable} ${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
    // </BugsnagErrorBoundary>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from '@/lib/provider/ReactQueryProvider';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/lib/provider/theme-provider';
import { Poppins, Noto_Sans_Lao } from 'next/font/google';
// Lang
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600'], subsets: ['latin'] });

const notoSansLao = Noto_Sans_Lao({ weight: ['100', '200', '300', '400', '500', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shopshop.la | CLOUD COMMERCE',
  description: 'A commerce platform service in laos',
  icons: {
    icon: ['/favicon.ico?v=4'],
    // apple: ['/apple-touch-icon.png?v=4'],
    // shortcut: ['/apple-touch-icon.png'],
  },
  openGraph: {
    title: 'Shopshop.la | CLOUD COMMERCE',
    description: 'A commerce platform service in laos',
    url: 'https://shopshop.la',
    images: [
      {
        url: 'https://shopshop.la/images/cover_image.png',
        width: 1200,
        height: 630,
        alt: 'Shopshop.la | CLOUD COMMERCE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopshop.la | CLOUD COMMERCE',
    description: 'A commerce platform service in laos',
    images: 'https://shopshop.la/images/cover_image.png',
  },
  verification: {
    google: '8q9rw1ndte5cfcebnb8uy0y3a5k12w',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html suppressHydrationWarning={true} lang={locale}>
      <body className={`${locale === 'la' ? notoSansLao.className : poppins.className} antialiased`}>
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <main className="">
              <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
            </main>
          </ThemeProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

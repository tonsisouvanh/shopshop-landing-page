import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from '@/lib/provider/ReactQueryProvider';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/lib/provider/theme-provider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600'], subsets: ['latin'] });

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
        url: 'https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/471172522_122095255238701164_1556792149829411800_n.png?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHWfdJ3D4Q4yieN9vhMH5-Ntam2mvk4eKa1qbaa-Th4pu0DbbMRujHua9zVGKGvOyQhno7Cz6DI_DkSDxjq0non&_nc_ohc=rw-_gKS7lxoQ7kNvgHqBAEl&_nc_zt=23&_nc_ht=scontent.fvte2-1.fna&_nc_gid=AqZ4ixfCvlm7ZPFDaopOp3Y&oh=00_AYA7z4O-uQY6_sg_m0G0_3zdYMebvbnIKym3v8WU1CkPug&oe=677DC9DA',
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
    images:
      'https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/471172522_122095255238701164_1556792149829411800_n.png?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHWfdJ3D4Q4yieN9vhMH5-Ntam2mvk4eKa1qbaa-Th4pu0DbbMRujHua9zVGKGvOyQhno7Cz6DI_DkSDxjq0non&_nc_ohc=rw-_gKS7lxoQ7kNvgHqBAEl&_nc_zt=23&_nc_ht=scontent.fvte2-1.fna&_nc_gid=AqZ4ixfCvlm7ZPFDaopOp3Y&oh=00_AYA7z4O-uQY6_sg_m0G0_3zdYMebvbnIKym3v8WU1CkPug&oe=677DC9DA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <main className="">{children}</main>
          </ThemeProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import ScrollToTop from '@/components/ScrollToTop';
import Breadcrumb from '@/components/Breadcrumb';

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${jakartaSans.variable} font-sans antialiased bg-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Breadcrumb />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingChat />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { getTranslations } from 'next-intl/server';
import { Mail, MapPin, Clock } from 'lucide-react';
import HubSpotForm from '@/components/HubSpotForm';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/contact`,
      languages: {
        'en': 'https://brevonsolutions.com/en/contact',
        'id': 'https://brevonsolutions.com/id/contact',
      },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {t('title')}
            </h1>
            <p className="text-xl leading-8 text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <HubSpotForm locale={locale} />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {t('info.title')}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@brevonsolutions.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t('info.email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      {t('info.location')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      {t('info.hours')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-blue-50 border border-blue-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-700">
                  Let's discuss how we can help transform your business with our expert services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

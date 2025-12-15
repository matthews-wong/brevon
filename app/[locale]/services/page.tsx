import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Code, Palette, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.services' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://brevonsolutions.com/${locale}/services`,
      siteName: 'Brevon Solutions',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/services`,
      languages: {
        'en': 'https://brevonsolutions.com/en/services',
        'id': 'https://brevonsolutions.com/id/services',
      },
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = useTranslations('services');

  const services = [
    {
      name: t('itConsulting.title'),
      description: t('itConsulting.description'),
      features: [
        t('itConsulting.features.0'),
        t('itConsulting.features.1'),
        t('itConsulting.features.2'),
        t('itConsulting.features.3'),
      ],
      icon: Zap,
      href: `/${locale}/services/it-consulting`,
    },
    {
      name: t('webDevelopment.title'),
      description: t('webDevelopment.description'),
      features: [
        t('webDevelopment.features.0'),
        t('webDevelopment.features.1'),
        t('webDevelopment.features.2'),
        t('webDevelopment.features.3'),
      ],
      icon: Code,
      href: `/${locale}/services/web-development`,
    },
    {
      name: t('systemIntegration.title'),
      description: t('systemIntegration.description'),
      features: [
        t('systemIntegration.features.0'),
        t('systemIntegration.features.1'),
        t('systemIntegration.features.2'),
        t('systemIntegration.features.3'),
      ],
      icon: Shield,
      href: `/${locale}/services/system-integration`,
    },
    {
      name: t('uiUx.title'),
      description: t('uiUx.description'),
      features: [
        t('uiUx.features.0'),
        t('uiUx.features.1'),
        t('uiUx.features.2'),
        t('uiUx.features.3'),
      ],
      icon: Palette,
      href: `/${locale}/services/ui-ux`,
    },
    {
      name: t('digitalMarketing.title'),
      description: t('digitalMarketing.description'),
      features: [
        t('digitalMarketing.features.0'),
        t('digitalMarketing.features.1'),
        t('digitalMarketing.features.2'),
        t('digitalMarketing.features.3'),
      ],
      icon: Sparkles,
      href: `/${locale}/services/digital-marketing`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        </div>
                        <span className="text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our services can help transform your business
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`/${locale}/contact`}
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-gray-100 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

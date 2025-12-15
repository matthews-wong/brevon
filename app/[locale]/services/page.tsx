import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Code, Palette, Zap, Shield, Sparkles, ArrowRight, Workflow, TrendingUp } from 'lucide-react';
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
  const t = await getTranslations({ locale, namespace: 'services' });

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
      gradient: 'from-yellow-500 to-orange-500',
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
      gradient: 'from-blue-500 to-cyan-500',
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
      icon: Workflow,
      gradient: 'from-green-500 to-emerald-500',
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
      gradient: 'from-purple-500 to-pink-500',
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
      icon: TrendingUp,
      gradient: 'from-red-500 to-rose-500',
      href: `/${locale}/services/digital-marketing`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-400/30 backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>Our Expertise</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl animate-fade-in">
              {t('title')}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 animate-fade-in">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`group relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl shadow-${service.gradient.split('-')[1]}-500/50 mb-8`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {service.name}
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="group/link inline-flex items-center gap-2 text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors w-fit"
                  >
                    Learn more
                    <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Features */}
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="rounded-3xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                    <h3 className="text-xl font-semibold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 group/item">
                          <div className={`mt-1 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          <span className="text-base text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our services can help transform your business
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

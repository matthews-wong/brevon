import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Palette, Zap, Shield, Sparkles, ArrowRight, Workflow, TrendingUp, CheckCircle } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
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
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
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
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
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
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000',
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
      href: `/${locale}/services/digital-marketing`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative h-[400px] lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000"
            alt="Professional services"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-sm border border-blue-500/30">
                <Sparkles className="h-4 w-4" />
                <span>Our Expertise</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                {t('title')}
              </h1>
              <p className="text-xl leading-8 text-gray-200 max-w-2xl">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 shadow-lg mb-8">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {service.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors w-fit"
                  >
                    Learn more
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-blue-600 py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
            alt="Modern city"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

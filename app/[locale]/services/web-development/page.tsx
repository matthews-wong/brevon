import { getTranslations } from 'next-intl/server';
import { Code } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Web Application Development - Brevon Solutions',
    description: 'Custom web applications, SaaS platforms, enterprise systems, and API & backend development',
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/services/web-development`,
      languages: {
        'en': 'https://brevonsolutions.com/en/services/web-development',
        'id': 'https://brevonsolutions.com/id/services/web-development',
      },
    },
  };
}

export default async function WebDevelopmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.webDevelopment' });

  return (
    <ServicePageTemplate
      locale={locale}
      icon={Code}
      title={t('title')}
      description={t('description')}
      features={[
        t('features.0'),
        t('features.1'),
        t('features.2'),
        t('features.3'),
      ]}
      benefits={[
        {
          title: 'Modern Technologies',
          description: 'Built with the latest frameworks and best practices for optimal performance',
        },
        {
          title: 'Scalable Architecture',
          description: 'Applications designed to grow with your business needs',
        },
        {
          title: 'Responsive Design',
          description: 'Works flawlessly across all devices and screen sizes',
        },
        {
          title: 'Secure & Reliable',
          description: 'Enterprise-grade security and 99.9% uptime guarantee',
        },
      ]}
      gradient="from-blue-500 to-cyan-500"
    />
  );
}

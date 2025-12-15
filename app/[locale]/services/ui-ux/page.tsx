import { getTranslations } from 'next-intl/server';
import { Palette } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'UI/UX Design Services - Brevon Solutions',
    description: 'User research, wireframing & prototyping, UI design systems, and UX optimization',
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/services/ui-ux`,
      languages: {
        'en': 'https://brevonsolutions.com/en/services/ui-ux',
        'id': 'https://brevonsolutions.com/id/services/ui-ux',
      },
    },
  };
}

export default async function UIUXPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.uiUx' });

  return (
    <ServicePageTemplate
      locale={locale}
      icon={Palette}
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
          title: 'User-Centered Design',
          description: 'Create interfaces that delight users and drive engagement',
        },
        {
          title: 'Improved Conversion',
          description: 'Optimize user journeys to increase conversion rates',
        },
        {
          title: 'Brand Consistency',
          description: 'Maintain a consistent design language across all touchpoints',
        },
        {
          title: 'Competitive Advantage',
          description: 'Stand out with exceptional user experiences',
        },
      ]}
      gradient="from-purple-500 to-pink-500"
    />
  );
}

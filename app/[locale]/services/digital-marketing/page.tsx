import { getTranslations } from 'next-intl/server';
import { TrendingUp } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Digital Marketing Services - Brevon Solutions',
    description: 'Search engine optimization (SEO), performance marketing, analytics & tracking, and conversion optimization',
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/services/digital-marketing`,
      languages: {
        'en': 'https://brevonsolutions.com/en/services/digital-marketing',
        'id': 'https://brevonsolutions.com/id/services/digital-marketing',
      },
    },
  };
}

export default async function DigitalMarketingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.digitalMarketing' });

  return (
    <ServicePageTemplate
      locale={locale}
      icon={TrendingUp}
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
          title: 'Increased Visibility',
          description: 'Improve your online presence and reach more potential customers',
        },
        {
          title: 'Data-Driven Results',
          description: 'Make informed decisions based on comprehensive analytics',
        },
        {
          title: 'Higher ROI',
          description: 'Optimize campaigns for maximum return on investment',
        },
        {
          title: 'Competitive Edge',
          description: 'Stay ahead of competitors with cutting-edge marketing strategies',
        },
      ]}
      gradient="from-red-500 to-rose-500"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000"
    />
  );
}

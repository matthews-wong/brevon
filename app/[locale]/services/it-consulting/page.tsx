import { getTranslations } from 'next-intl/server';
import { Zap } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'IT Consulting Services - Brevon Solutions',
    description: 'Digital transformation strategy, system architecture design, cloud & infrastructure consulting, and technology roadmap planning',
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/services/it-consulting`,
      languages: {
        'en': 'https://brevonsolutions.com/en/services/it-consulting',
        'id': 'https://brevonsolutions.com/id/services/it-consulting',
      },
    },
  };
}

export default async function ITConsultingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.itConsulting' });

  return (
    <ServicePageTemplate
      locale={locale}
      icon={Zap}
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
          title: 'Strategic Planning',
          description: 'We help you create a comprehensive technology roadmap aligned with your business goals',
        },
        {
          title: 'Expert Guidance',
          description: 'Our consultants bring years of experience across various industries and technologies',
        },
        {
          title: 'Cost Optimization',
          description: 'Identify opportunities to reduce costs while improving efficiency',
        },
        {
          title: 'Risk Mitigation',
          description: 'Proactive identification and management of technology-related risks',
        },
      ]}
      gradient="from-yellow-500 to-orange-500"
    />
  );
}

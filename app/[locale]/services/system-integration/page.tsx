import { getTranslations } from 'next-intl/server';
import { Workflow } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Tools & System Integration - Brevon Solutions',
    description: 'Third-party API integration, ERP/CRM integration, automation & workflow tools, and data synchronization',
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/services/system-integration`,
      languages: {
        'en': 'https://brevonsolutions.com/en/services/system-integration',
        'id': 'https://brevonsolutions.com/id/services/system-integration',
      },
    },
  };
}

export default async function SystemIntegrationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.systemIntegration' });

  return (
    <ServicePageTemplate
      locale={locale}
      icon={Workflow}
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
          title: 'Seamless Integration',
          description: 'Connect all your systems and tools for smooth data flow across your organization',
        },
        {
          title: 'Increased Efficiency',
          description: 'Automate repetitive tasks and streamline business processes',
        },
        {
          title: 'Data Consistency',
          description: 'Ensure data accuracy and consistency across all platforms',
        },
        {
          title: 'Real-time Sync',
          description: 'Keep all systems synchronized with real-time data updates',
        },
      ]}
      gradient="from-green-500 to-emerald-500"
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
    />
  );
}

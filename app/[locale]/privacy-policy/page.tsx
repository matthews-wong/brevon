import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/privacy-policy`,
      languages: {
        'en': 'https://brevonsolutions.com/en/privacy-policy',
        'id': 'https://brevonsolutions.com/id/privacy-policy',
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const sections = [
    { key: 'collection', title: t('sections.collection.title'), content: t('sections.collection.content') },
    { key: 'usage', title: t('sections.usage.title'), content: t('sections.usage.content') },
    { key: 'protection', title: t('sections.protection.title'), content: t('sections.protection.content') },
    { key: 'sharing', title: t('sections.sharing.title'), content: t('sections.sharing.content') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {t('lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-400 mb-12">
              {t('intro')}
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.key} className="rounded-2xl bg-gray-800/50 p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

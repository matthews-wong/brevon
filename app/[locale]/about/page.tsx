import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Target, Eye, Award, Users } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://brevonsolutions.com/${locale}/about`,
      siteName: 'Brevon Solutions',
      locale: locale,
      type: 'website',
    },
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}/about`,
      languages: {
        'en': 'https://brevonsolutions.com/en/about',
        'id': 'https://brevonsolutions.com/id/about',
      },
    },
  };
}

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    {
      name: t('values.quality.title'),
      description: t('values.quality.description'),
      icon: Award,
    },
    {
      name: t('values.innovation.title'),
      description: t('values.innovation.description'),
      icon: Target,
    },
    {
      name: t('values.integrity.title'),
      description: t('values.integrity.description'),
      icon: Users,
    },
    {
      name: t('values.excellence.title'),
      description: t('values.excellence.description'),
      icon: Eye,
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

      {/* Description Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-8 text-gray-700">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('mission.description')}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-6">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('values.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Target, Eye, Award, Users, Zap, Shield, TrendingUp, Heart } from 'lucide-react';
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

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const values = [
    {
      name: t('values.quality.title'),
      description: t('values.quality.description'),
      icon: Award,
    },
    {
      name: t('values.innovation.title'),
      description: t('values.innovation.description'),
      icon: Zap,
    },
    {
      name: t('values.integrity.title'),
      description: t('values.integrity.description'),
      icon: Shield,
    },
    {
      name: t('values.excellence.title'),
      description: t('values.excellence.description'),
      icon: TrendingUp,
    },
  ];

  const achievements = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years in Business' },
    { value: '15+', label: 'Team Members' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative h-[400px] lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
            alt="Team collaboration"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-sm border border-blue-500/30">
                <Heart className="h-4 w-4" />
                <span>Our Story</span>
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

      {/* Description Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-8 text-gray-700 mb-6">
              {t('description')}
            </p>
            <p className="text-lg leading-8 text-gray-600">
              We specialize in transforming business challenges into digital opportunities. Our team of experienced developers, designers, and consultants work closely with clients across Indonesia and beyond to deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Achievements
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="flex flex-col items-center text-center bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col bg-blue-50 rounded-2xl p-10 border border-blue-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-sm mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('mission.description')}
              </p>
              <p className="text-base text-gray-600">
                We believe in leveraging cutting-edge technology to solve complex business problems while maintaining a human-centered approach to everything we do.
              </p>
            </div>

            <div className="flex flex-col bg-purple-50 rounded-2xl p-10 border border-purple-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 shadow-sm mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('vision.description')}
              </p>
              <p className="text-base text-gray-600">
                Our vision extends beyond just delivering projects - we aim to be strategic partners in our clients' digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Award className="h-4 w-4" />
              <span>Core Values</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              {t('values.title')}
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="flex flex-col bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-sm mb-6">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.name}
                  </h3>
                </div>
                <p className="text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Work With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our diverse team brings together expertise in modern technologies, design thinking, and business strategy to deliver comprehensive solutions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Approach</h3>
              <p className="text-gray-600">
                We embrace agile methodologies to ensure rapid delivery, continuous improvement, and adaptability to changing requirements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Partnership</h3>
              <p className="text-gray-600">
                We don't just build and leave - we provide ongoing support, maintenance, and strategic guidance to ensure your continued success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

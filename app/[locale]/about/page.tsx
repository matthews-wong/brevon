import { getTranslations } from 'next-intl/server';
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
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      name: t('values.innovation.title'),
      description: t('values.innovation.description'),
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: t('values.integrity.title'),
      description: t('values.integrity.description'),
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: t('values.excellence.title'),
      description: t('values.excellence.description'),
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const achievements = [
    { value: '100+', label: 'Projects Completed', gradient: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Happy Clients', gradient: 'from-purple-500 to-pink-500' },
    { value: '5+', label: 'Years in Business', gradient: 'from-green-500 to-emerald-500' },
    { value: '15+', label: 'Team Members', gradient: 'from-orange-500 to-red-500' },
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
              <Heart className="h-4 w-4" />
              <span>Our Story</span>
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

      {/* Description Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-8 text-gray-300 mb-6">
              {t('description')}
            </p>
            <p className="text-lg leading-8 text-gray-400">
              We specialize in transforming business challenges into digital opportunities. Our team of experienced developers, designers, and consultants work closely with clients across Indonesia and beyond to deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-fade-in">
              Our Achievements
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400 animate-fade-in">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="group relative flex flex-col items-center text-center rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-blue-500/20 animate-scale-in"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className={`relative text-4xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2`}>
                  {achievement.value}
                </div>
                <div className="relative text-sm text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-1 hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
              <div className="flex flex-col h-full rounded-3xl bg-gray-900 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50 mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {t('mission.title')}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('mission.description')}
                </p>
                <p className="mt-4 text-base text-gray-400">
                  We believe in leveraging cutting-edge technology to solve complex business problems while maintaining a human-centered approach to everything we do.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 p-1 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              <div className="flex flex-col h-full rounded-3xl bg-gray-900 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 mb-6">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {t('vision.title')}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('vision.description')}
                </p>
                <p className="mt-4 text-base text-gray-400">
                  Our vision extends beyond just delivering projects - we aim to be strategic partners in our clients' digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400 ring-1 ring-purple-400/30 animate-fade-in">
              <Award className="h-4 w-4" />
              <span>Core Values</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl animate-fade-in">
              {t('values.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400 animate-fade-in">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="group relative flex flex-col rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-500/20 animate-slide-up"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent shadow-lg ring-4 ring-gray-800`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="relative text-xl font-semibold text-white mb-3">
                  {value.name}
                </h3>
                <p className="relative text-base text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Work With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-gray-400">
                Our diverse team brings together expertise in modern technologies, design thinking, and business strategy to deliver comprehensive solutions.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Agile Approach</h3>
              <p className="text-gray-400">
                We embrace agile methodologies to ensure rapid delivery, continuous improvement, and adaptability to changing requirements.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Long-term Partnership</h3>
              <p className="text-gray-400">
                We don't just build and leave - we provide ongoing support, maintenance, and strategic guidance to ensure your continued success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

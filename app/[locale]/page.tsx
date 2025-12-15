import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Code, Palette, Zap, Shield, CheckCircle, Sparkles, Layers, Cpu, Workflow, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: 'software development, IT consulting, web development, Indonesia, digital solutions, UI/UX design, digital marketing',
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://brevonsolutions.com/${locale}`,
      siteName: 'Brevon Solutions',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      canonical: `https://brevonsolutions.com/${locale}`,
      languages: {
        'en': 'https://brevonsolutions.com/en',
        'id': 'https://brevonsolutions.com/id',
      },
    },
  };
}

function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-400/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Enterprise-Grade Digital Solutions</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            <span className="block">{t('title').split(' ').slice(0, 2).join(' ')}</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('title').split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
            <Link
              href={`/${locale}/contact`}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105"
            >
              <span>{t('cta')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-gray-300 ring-1 ring-inset ring-gray-600 hover:ring-gray-500 hover:bg-gray-800/50 transition-all backdrop-blur-sm"
            >
              {t('ctaSecondary')}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col group">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-300 transition-all">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: string }) {
  const t = useTranslations('services');

  const services = [
    {
      name: t('itConsulting.title'),
      description: t('itConsulting.description'),
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      href: `/${locale}/services/it-consulting`,
    },
    {
      name: t('webDevelopment.title'),
      description: t('webDevelopment.description'),
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      href: `/${locale}/services/web-development`,
    },
    {
      name: t('systemIntegration.title'),
      description: t('systemIntegration.description'),
      icon: Workflow,
      gradient: 'from-green-500 to-emerald-500',
      href: `/${locale}/services/system-integration`,
    },
    {
      name: t('uiUx.title'),
      description: t('uiUx.description'),
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      href: `/${locale}/services/ui-ux`,
    },
    {
      name: t('digitalMarketing.title'),
      description: t('digitalMarketing.description'),
      icon: TrendingUp,
      gradient: 'from-red-500 to-rose-500',
      href: `/${locale}/services/digital-marketing`,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 mb-4 ring-1 ring-blue-400/30">
            <Layers className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.name}
              href={service.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-${service.gradient.split('-')[1]}-500/50`}>
                  <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-7 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-400 line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                0{index + 1}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const t = useTranslations('whyUs');

  const features = [
    {
      name: t('expertise.title'),
      description: t('expertise.description'),
      icon: Cpu,
    },
    {
      name: t('quality.title'),
      description: t('quality.description'),
      icon: Shield,
    },
    {
      name: t('scalability.title'),
      description: t('scalability.description'),
      icon: Layers,
    },
    {
      name: t('support.title'),
      description: t('support.description'),
      icon: CheckCircle,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 mb-4 ring-1 ring-blue-500/20">
            <Sparkles className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="group relative flex flex-col rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const t = useTranslations('techStack');

  const techCategories = [
    {
      name: t('frontend'),
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: t('backend'),
      technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      name: t('cloud'),
      technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Vercel'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: t('tools'),
      technologies: ['Git', 'Figma', 'Jira', 'Analytics', 'CI/CD'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 mb-4 ring-1 ring-indigo-400/30">
            <Code className="h-4 w-4" />
            <span>Technology</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {techCategories.map((category) => (
            <div key={category.name} className="group relative flex flex-col rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-gray-700 hover:border-gray-600">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <h3 className={`relative text-lg font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-6`}>
                {category.name}
              </h3>
              <ul className="relative space-y-3">
                {category.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-gray-400 group/item hover:text-gray-300 transition-colors">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.gradient} group-hover/item:scale-125 transition-transform`}></div>
                    <span className="text-sm font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const t = useTranslations('process');

  const steps = [
    {
      name: t('discovery.title'),
      description: t('discovery.description'),
      step: '01',
      icon: Sparkles,
    },
    {
      name: t('design.title'),
      description: t('design.description'),
      step: '02',
      icon: Palette,
    },
    {
      name: t('development.title'),
      description: t('development.description'),
      step: '03',
      icon: Code,
    },
    {
      name: t('deployment.title'),
      description: t('deployment.description'),
      step: '04',
      icon: Zap,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400 mb-4 ring-1 ring-purple-400/30">
            <Workflow className="h-4 w-4" />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent -translate-x-4"></div>
                )}

                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/50">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-blue-400 shadow-lg ring-4 ring-gray-800">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.name}
                  </h3>
                  <p className="text-base text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ locale }: { locale: string }) {
  const t = useTranslations('cta');

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            {t('subtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={`/${locale}/contact`}
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              <span>{t('button')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <WhyUsSection />
      <TechStackSection />
      <ProcessSection />
      <CTASection locale={locale} />
    </>
  );
}

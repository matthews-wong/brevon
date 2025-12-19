import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, Palette, Zap, Shield, CheckCircle, Layers, Cpu, Workflow, TrendingUp, HelpCircle, Users, Target, Award } from 'lucide-react';
import FAQ from '@/components/FAQ';
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
    <section className="relative bg-white">
      {/* Hero Image with Overlay */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
          alt="Modern office workspace"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl w-full">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-300 mb-4 sm:mb-6 backdrop-blur-sm border border-blue-500/30">
              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Enterprise-Grade Digital Solutions</span>
              <span className="sm:hidden">Digital Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              {t('title')}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 mb-6 sm:mb-10 max-w-2xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                <span>{t('cta')}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white ring-1 ring-white/30 hover:bg-white/10 transition-colors"
              >
                {t('ctaSecondary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ locale }: { locale: string }) {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700 mb-3 sm:mb-4">
              <Target className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>About Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
              {locale === 'id' ? 'Mitra Terpercaya untuk Transformasi Digital Anda' : 'Your Trusted Partner for Digital Transformation'}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                {locale === 'id'
                  ? 'Brevon Solutions adalah perusahaan software dan IT consulting berbasis di Indonesia yang berfokus pada pengembangan solusi digital berkualitas tinggi untuk bisnis modern.'
                  : 'Brevon Solutions is an Indonesia-based software and IT consulting company focused on developing high-quality digital solutions for modern businesses.'}
              </p>
              <p>
                {locale === 'id'
                  ? 'Kami membantu perusahaan dari berbagai industri untuk mengoptimalkan proses bisnis mereka melalui teknologi yang tepat, desain yang user-centric, dan strategi digital yang efektif.'
                  : 'We help companies across industries optimize their business processes through the right technology, user-centric design, and effective digital strategies.'}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-semibold text-gray-900">Expert Team</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-semibold text-gray-900">Quality Focus</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-semibold text-gray-900">Reliable Support</div>
              </div>
            </div>
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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
      href: `/${locale}/services/it-consulting`,
    },
    {
      name: t('webDevelopment.title'),
      description: t('webDevelopment.description'),
      icon: Code,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
      href: `/${locale}/services/web-development`,
    },
    {
      name: t('systemIntegration.title'),
      description: t('systemIntegration.description'),
      icon: Workflow,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
      href: `/${locale}/services/system-integration`,
    },
    {
      name: t('uiUx.title'),
      description: t('uiUx.description'),
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000',
      href: `/${locale}/services/ui-ux`,
    },
    {
      name: t('digitalMarketing.title'),
      description: t('digitalMarketing.description'),
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
      href: `/${locale}/services/digital-marketing`,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700 mb-3 sm:mb-4">
            <Layers className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.name}
              href={service.href}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-base text-gray-600 mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
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
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
            <Award className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="relative flex flex-col bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
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
      icon: Target,
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
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
            <Workflow className="h-4 w-4" />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.name} className="relative flex flex-col">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%-2rem)] w-full h-0.5 bg-blue-200"></div>
              )}

              <div className="relative flex flex-col items-center text-center bg-white rounded-xl p-8 border border-gray-200">
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.name}
                </h3>
                <p className="text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ locale }: { locale: string }) {
  const faqItems = [
    {
      question: locale === 'id' ? 'Apa saja layanan yang ditawarkan Brevon Solutions?' : 'What services does Brevon Solutions offer?',
      answer: locale === 'id'
        ? 'Kami menawarkan berbagai layanan termasuk Konsultasi IT, Pengembangan Aplikasi Web, Integrasi Sistem, Desain UI/UX, dan Digital Marketing. Setiap layanan disesuaikan dengan kebutuhan spesifik bisnis Anda.'
        : 'We offer a range of services including IT Consulting, Web Application Development, System Integration, UI/UX Design, and Digital Marketing. Each service is tailored to your specific business needs.',
    },
    {
      question: locale === 'id' ? 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?' : 'How long does it take to complete a project?',
      answer: locale === 'id'
        ? 'Durasi proyek bervariasi tergantung pada kompleksitas dan ruang lingkup. Proyek sederhana mungkin memakan waktu 4-6 minggu, sementara solusi enterprise yang kompleks dapat memakan waktu 3-6 bulan. Kami akan memberikan timeline yang jelas selama konsultasi awal.'
        : 'Project duration varies depending on complexity and scope. Simple projects may take 4-6 weeks, while complex enterprise solutions can take 3-6 months. We provide a clear timeline during the initial consultation.',
    },
    {
      question: locale === 'id' ? 'Apakah Brevon Solutions menyediakan dukungan setelah proyek selesai?' : 'Does Brevon Solutions provide support after project completion?',
      answer: locale === 'id'
        ? 'Ya, kami menyediakan dukungan dan pemeliharaan berkelanjutan untuk semua proyek kami. Kami menawarkan berbagai paket dukungan untuk memastikan solusi Anda tetap berfungsi optimal dan up-to-date.'
        : 'Yes, we provide ongoing support and maintenance for all our projects. We offer various support packages to ensure your solution stays optimal and up-to-date.',
    },
    {
      question: locale === 'id' ? 'Bagaimana cara memulai proyek dengan Brevon Solutions?' : 'How do I get started with a project?',
      answer: locale === 'id'
        ? 'Memulai sangat mudah! Hubungi kami melalui formulir kontak, email, atau WhatsApp. Kami akan menjadwalkan konsultasi gratis untuk memahami kebutuhan Anda dan memberikan proposal yang disesuaikan.'
        : 'Getting started is easy! Contact us through our contact form, email, or WhatsApp. We\'ll schedule a free consultation to understand your needs and provide a tailored proposal.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {locale === 'id' ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-lg text-gray-600">
            {locale === 'id' ? 'Temukan jawaban untuk pertanyaan umum tentang layanan kami' : 'Find answers to common questions about our services'}
          </p>
        </div>
        <FAQ items={faqItems} />
      </div>
    </section>
  );
}

function CTASection({ locale }: { locale: string }) {
  const t = useTranslations('cta');

  return (
    <section className="relative bg-blue-600 py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
          alt="Modern city"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            {t('subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <span>{t('button')}</span>
              <ArrowRight className="h-5 w-5" />
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
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <WhyUsSection />
      <ProcessSection />
      <FAQSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}

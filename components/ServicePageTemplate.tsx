import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, LucideIcon, Sparkles } from 'lucide-react';

interface ServicePageTemplateProps {
  locale: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
  gradient: string;
  heroImage: string;
}

export default function ServicePageTemplate({
  locale,
  icon: Icon,
  title,
  description,
  features,
  benefits,
  gradient,
  heroImage,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative h-[400px] lg:h-[500px]">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300 backdrop-blur-sm border border-blue-500/30">
                <Sparkles className="h-4 w-4" />
                <span>Our Service</span>
              </div>
              <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-2xl`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                {title}
              </h1>
              <p className="text-xl leading-8 text-gray-200 max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm`}>
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-base font-medium text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Why choose this service for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-sm mb-4`}>
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how we can help transform your business with {title.toLowerCase()}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

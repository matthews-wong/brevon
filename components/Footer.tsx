'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const quickLinks = [
    { name: t('quickLinks'), href: `/${locale}` },
  ];

  const services = [
    { name: 'IT Consulting', href: `/${locale}/services/it-consulting` },
    { name: 'Web Development', href: `/${locale}/services/web-development` },
    { name: 'System Integration', href: `/${locale}/services/system-integration` },
    { name: 'UI/UX Design', href: `/${locale}/services/ui-ux` },
    { name: 'Digital Marketing', href: `/${locale}/services/digital-marketing` },
  ];

  const legal = [
    { name: t('privacy'), href: `/${locale}/privacy-policy` },
    { name: t('terms'), href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="bg-blue-600 text-white font-bold text-lg px-2.5 py-1.5 rounded-lg">
                B
              </div>
              <div>
                <span className="text-2xl font-bold text-blue-400">
                  Brevon
                </span>
                <span className="text-2xl font-bold text-white">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('ourServices')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                <a href="mailto:info@brevonsolutions.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t('email')}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span className="text-sm text-gray-400">
                  {t('location')}
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-semibold">{t('legal')}</h4>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

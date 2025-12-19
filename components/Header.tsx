'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract locale from pathname
  const locale = pathname.split('/')[1];

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className={`mx-3 mt-3 transition-all ${
          scrolled
            ? 'bg-white shadow-lg py-3 rounded-2xl'
            : 'bg-white shadow-md py-4 rounded-3xl'
        }`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href={`/${locale}`} className="-m-1.5 p-1.5 group">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="bg-blue-600 text-white font-bold text-base sm:text-xl px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                  B
                </div>
                <div className="flex flex-col sm:block">
                  <span className="text-lg sm:text-2xl font-bold text-blue-600">
                    Brevon
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-gray-900">Solutions</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageSwitcher />
          </div>
        </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-900/50"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:rounded-l-3xl sm:shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href={`/${locale}`} className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 text-white font-bold text-xl px-3 py-2 rounded-lg">
                    B
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      Brevon
                    </span>
                    <span className="text-2xl font-bold text-gray-900">Solutions</span>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        isActive(item.href)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

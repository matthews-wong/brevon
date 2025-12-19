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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .mobile-menu-panel {
          animation: slideIn 0.3s ease-out;
        }
        
        .mobile-menu-backdrop {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
        <div className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3 rounded-2xl border border-gray-200/50'
            : 'bg-white/90 backdrop-blur-md shadow-md py-4 rounded-3xl border border-gray-100'
        }`}>
          <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href={`/${locale}`} className="group flex items-center gap-2.5 -m-1.5 p-1.5">
                {/* Logo Text */}
                <div className="flex flex-col leading-none">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F] bg-clip-text text-transparent">
                    Brevon
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#8E9297] tracking-wide">
                    SOLUTIONS
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-semibold leading-6 transition-all px-3 py-2 rounded-lg ${
                    isActive(item.href)
                      ? 'text-[#1E3A5F] bg-[#1E3A5F]/10'
                      : 'text-gray-700 hover:text-[#1E3A5F] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1E3A5F] rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:text-[#1E3A5F] hover:bg-[#1E3A5F]/10 transition-all"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm mobile-menu-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm mobile-menu-panel">
            <div className="h-full bg-white shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                <Link 
                  href={`/${locale}`} 
                  className="flex items-center gap-2.5" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex flex-col leading-none">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      Brevon
                    </span>
                    <span className="text-sm font-semibold text-gray-600 tracking-wide">
                      SOLUTIONS
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="rounded-xl p-2.5 text-gray-700 hover:text-blue-600 hover:bg-white/80 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto px-6 py-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-2">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center rounded-2xl px-5 py-4 text-base font-semibold transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F] text-white shadow-lg shadow-[#1E3A5F]/30 scale-[1.02]'
                          : 'text-gray-700 hover:bg-white hover:shadow-md hover:scale-[1.01]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <span className="flex-1">{item.name}</span>
                      {isActive(item.href) ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Language Switcher at Bottom */}
              <div className="border-t border-gray-100 p-6 bg-white">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-gray-900">Language</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const currentPath = pathname.replace(/^\/(en|id)/, '');
                      window.location.href = `/en${currentPath || '/'}`;
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold transition-all ${
                      locale === 'en'
                        ? 'bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F] text-white shadow-lg shadow-[#1E3A5F]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#1E3A5F]/10 hover:shadow-md'
                    }`}
                  >
                    <img 
                      src="/img_gb.svg" 
                      alt="English Flag" 
                      className="w-6 h-6 rounded-full border border-gray-200"
                    />
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => {
                      const currentPath = pathname.replace(/^\/(en|id)/, '');
                      window.location.href = `/id${currentPath || '/'}`;
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold transition-all ${
                      locale === 'id'
                        ? 'bg-gradient-to-r from-[#1E3A5F] to-[#1E3A5F] text-white shadow-lg shadow-[#1E3A5F]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#1E3A5F]/10 hover:shadow-md'
                    }`}
                  >
                    <img 
                      src="/img_id.svg" 
                      alt="Indonesia Flag" 
                      className="w-6 h-6 rounded-full border border-gray-200"
                    />
                    <span>Indonesia</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
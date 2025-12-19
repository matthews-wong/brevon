'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'en',
    name: 'English',
    flag: '/img_gb.svg'
  });
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '/img_gb.svg' },
    { code: 'id', name: 'Indonesia', flag: '/img_id.svg' }
  ];

  // Get current language from pathname
  const getCurrentLanguage = () => {
    const currentLocale = pathname.split('/')[1];
    return languages.find(lang => lang.code === currentLocale) || languages[0];
  };

  // Update selected language on mount and pathname change
  useEffect(() => {
    setSelectedLanguage(getCurrentLanguage());
  }, [pathname]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const switchLocale = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);

    // Get the current locale from the pathname
    const currentLocale = pathname.split('/')[1];

    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${language.code}`);

    router.push(newPathname);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scaleY(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
        
        .font-jakarta {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="relative" ref={dropdownRef}>
        <div
          onClick={toggleDropdown}
          className="flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="flex justify-center items-center gap-2">
            <Image
              src={selectedLanguage.flag}
              alt={`${selectedLanguage.name} Flag`}
              width={24}
              height={24}
              className="w-6 h-6 rounded-full border border-gray-200"
            />
            <span className="text-sm font-jakarta font-medium text-gray-900">
              {selectedLanguage.name}
            </span>
          </div>
          <svg
            className={`w-5 h-5 text-gray-900 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.16)] p-2 z-50 animate-slideDown origin-top border border-gray-200">
            <div className="flex flex-col gap-1">
              {languages.map((language) => (
                <div
                  key={language.code}
                  onClick={() => switchLocale(language)}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
                    selectedLanguage.code === language.code ? 'bg-gray-50' : ''
                  }`}
                >
                  <Image
                    src={language.flag}
                    alt={`${language.name} Flag`}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0"
                  />
                  <span className="text-sm font-jakarta font-medium text-gray-900">
                    {language.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
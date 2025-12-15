'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();

  // Split the pathname and filter out empty strings
  const segments = pathname.split('/').filter(Boolean);

  // Remove the locale from segments
  const locale = segments[0];
  const pathSegments = segments.slice(1);

  // Don't show breadcrumb on homepage
  if (pathSegments.length === 0) return null;

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${locale}/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { href, label };
  });

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800" aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href={`/${locale}`}
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-600 mx-2" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-blue-400 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

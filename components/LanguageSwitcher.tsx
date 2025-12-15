'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // Get the current locale from the pathname
    const currentLocale = pathname.split('/')[1];

    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

    router.push(newPathname);
  };

  const currentLocale = pathname.split('/')[1];

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <select
        value={currentLocale}
        onChange={(e) => switchLocale(e.target.value)}
        className="rounded-md bg-gray-800 border-gray-700 text-sm font-semibold text-gray-300 focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="id">ID</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

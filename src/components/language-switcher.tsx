'use client'

import { Link } from '@/components/link'
import { usePathname } from 'next/navigation'

const locales = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  
  // Extract the current locale from the pathname
  const currentLocale = pathname.split('/')[1]
  
  // Get the path without the locale
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => {
        const isActive = currentLocale === locale.code
        
        return (
          <Link
            key={locale.code}
            href={`/${locale.code}${pathWithoutLocale}`}
            className={`px-2 py-1 text-sm rounded ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {locale.name}
          </Link>
        )
      })}
    </div>
  )
} 
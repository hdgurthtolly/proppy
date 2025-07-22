import { redirect } from 'next/navigation'
import React from 'react'

const locales = ['en', 'de']

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const resolvedParams = await params
  
  // Validate locale
  if (!locales.includes(resolvedParams.locale)) {
    redirect('/de')
  }

  return <>{children}</>
}

import '@/styles/tailwind.css'
import { redirect } from 'next/navigation'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

const locales = ['en', 'de']

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const resolvedParams = React.use(params)
  
  // Validate locale
  if (!locales.includes(resolvedParams.locale)) {
    redirect('/en')
  }

  return (
    <html lang={resolvedParams.locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}

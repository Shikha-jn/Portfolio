import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shikha Jain | React Native Developer',
  description: 'React Native Developer building high-performance cross-platform mobile apps for Android and iOS. Expert in mobile optimization, full release cycles, and performance tuning.',
  keywords: ['React Native', 'Mobile Developer', 'iOS', 'Android', 'JavaScript', 'TypeScript', 'Firebase'],
  authors: [{ name: 'Shikha Jain' }],
  openGraph: {
    title: 'Shikha Jain | React Native Developer',
    description: 'Building high-performance cross-platform mobile apps',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1625',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

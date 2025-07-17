import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { AuthProvider } from '@/context/AuthProvider'
import Header from '@/components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Client App | Automation Platform',
  description: 'Submit your pension documents and biodata for verification',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <Toaster position="top-center" />
          <main>{children}</main>
        </AuthProvider>
        <footer className="bg-gray-800 text-white text-center text-sm py-4">
          &copy; 2025 Prime Pillars Real Estate Development Company. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

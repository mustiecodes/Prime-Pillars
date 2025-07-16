'use client'

import React from 'react'

interface PageWrapperProps {
  title?: string
  children: React.ReactNode
  className?: string
  contentClassName?: string
}

export default function PageWrapper({
  title,
  children,
  className = '',
  contentClassName = '',
}: PageWrapperProps) {
  return (
    <main className={`min-h-screen bg-[#f0f2f5] ${className}`}>
      <header className="bg-gradient-to-r from-[#0057A0] to-[#C8102E] text-white py-6 text-center">
        {title && (
          <h1 className="text-2xl font-bold">{title}</h1>
        )}
      </header>
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
        <div className={`space-y-6 ${contentClassName}`}>{children}</div>
      </div>
    </main>
  )
}

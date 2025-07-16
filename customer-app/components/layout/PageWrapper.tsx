'use client'

import React from 'react'

interface PageWrapperProps {
  title?: string
  children: React.ReactNode
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {title && <h1 className="text-2xl font-bold text-gray-800 mb-6">{title}</h1>}
        <div className="bg-white p-6 rounded-lg shadow">{children}</div>
      </div>
    </div>
  )
}

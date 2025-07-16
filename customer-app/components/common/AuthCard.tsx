'use client'

import React from 'react'

interface AuthCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function AuthCard({
  title,
  subtitle,
  children,
  className = '',
}: AuthCardProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section
        className={`w-full max-w-md bg-white p-6 rounded-lg shadow-md ${className}`}
        aria-labelledby="auth-title"
      >
        <h1 id="auth-title" className="text-2xl font-semibold text-center text-gray-800 mb-2">
          {title}
        </h1>

        {subtitle && (
          <p className="text-center text-sm text-gray-600 mb-4">
            {subtitle}
          </p>
        )}

        {children}
      </section>
    </main>
  )
}

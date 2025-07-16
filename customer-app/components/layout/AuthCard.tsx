'use client'

import React from 'react'

interface AuthCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{title}</h2>
        {subtitle && <p className="text-center text-sm text-gray-600 mb-4">{subtitle}</p>}
        {children}
      </div>
    </div>
  )
}

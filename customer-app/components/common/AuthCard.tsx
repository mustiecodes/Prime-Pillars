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
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1 justify-center items-center bg-[#f0f2f5] px-4">
        <div className={`bg-white p-8 rounded-lg shadow-md max-w-xl w-full flex gap-8 ${className}`}>
          <div className="w-2/5 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/100x100.png?text=Logo"
              alt="Logo"
              className="max-w-[100px]"
            />
          </div>

          <div className="w-3/5 flex flex-col">
            <h2 className="text-2xl font-bold text-[#0057A0] mb-2">{title}</h2>

            {subtitle && (
              <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
            )}

            <div className="flex-1 flex flex-col justify-between">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

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
    <div className="max-w-4xl mx-auto mt-10 ">
      <div className={`space-y-6 ${contentClassName}`}>{children}</div>
    </div>
  )
}

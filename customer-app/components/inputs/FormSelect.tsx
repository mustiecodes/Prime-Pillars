'use client'

import React from 'react'

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  error?: string
  children: React.ReactNode
}

export default function FormSelect({ label, name, error, children, className = '', ...props }: FormSelectProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  )
}

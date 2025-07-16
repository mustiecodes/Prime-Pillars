'use client'

import React from 'react'

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  error?: string
  children: React.ReactNode
}

export default function FormSelect({
  label,
  name,
  error,
  children,
  disabled,
  ...props
}: FormSelectProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block font-semibold text-gray-800 text-sm">
        {label}
      </label>
      <select
        id={name}
        name={name}
        aria-invalid={!!error}
        disabled={disabled}
        className={`w-full px-3 py-2 rounded-md border text-sm focus:outline-none ${
          error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#0057A0]'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-white'}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}

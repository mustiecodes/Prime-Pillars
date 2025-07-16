'use client'

import React from 'react'

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error?: string
  required?: boolean
}

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  ...props
}: FormInputProps) {
  const inputId = `input-${name}`

  return (
    <div className="space-y-1">
      <label htmlFor={inputId} className="block font-semibold text-gray-800 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        aria-invalid={!!error}
        className={`w-full px-3 py-2 rounded-md border text-sm focus:outline-none ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:border-[#0057A0]'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  )
}

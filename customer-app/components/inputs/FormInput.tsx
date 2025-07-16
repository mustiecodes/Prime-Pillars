'use client'

import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  disabled = false,
  error,
  ...props
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:ring-blue-300'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

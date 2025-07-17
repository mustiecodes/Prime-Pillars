'use client'

import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

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
  const [showPassword, setShowPassword] = useState(false)
  const isPasswordField = type === 'password'
  const inputId = `input-${name}`

  return (
    <div className="space-y-1 relative">
      <label htmlFor={inputId} className="block font-semibold text-gray-800 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={inputId}
          name={name}
          type={isPasswordField && showPassword ? 'text' : type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={!!error}
          className={`w-full px-3 py-2 pr-10 rounded-md border text-sm focus:outline-none ${
            error
              ? 'border-red-500 focus:ring-red-300'
              : 'border-gray-300 focus:border-[#0057A0]'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
          {...props}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}

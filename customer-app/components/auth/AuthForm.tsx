'use client'

import React, { useState, useEffect } from 'react'
import FormInput from '@/components/common/FormInput'
import toast from 'react-hot-toast'

interface AuthFormProps {
  type?: 'login' | 'register'
  formData: {
    pen_number?: string
    password?: string
    confirm_password?: string
    email?: string
    first_name?: string
    surname?: string
    other_names?: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (formattedPenNumber: string) => Promise<void>
  errors: Record<string, string>
}

const AuthForm: React.FC<AuthFormProps> = ({
  type = 'login',
  formData,
  onChange,
  onSubmit,
  errors,
}) => {
  const isRegister = type === 'register'

  const passwordIsValid = (password: string) => {
    const hasLetter = /[a-zA-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    return password.length >= 8 && hasLetter && hasNumber
  }

  const [passwordValid, setPasswordValid] = useState(false)

  useEffect(() => {
    setPasswordValid(passwordIsValid(formData.password || ''))
  }, [formData.password])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!passwordValid) {
      toast.error('Password must be at least 8 characters and contain both letters and numbers')
      return
    }

    if (isRegister && formData.password !== formData.confirm_password) {
      toast.error('Passwords do not match')
      return
    }

    const rawPen = formData.pen_number?.replace(/\D/g, '') || ''
    const formattedPen = `PEN${rawPen}`

    onSubmit(formattedPen)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        label="PEN Number"
        name="pen_number"
        value={formData.pen_number || ''}
        onChange={(e) => {
          if (/^\d*$/.test(e.target.value)) onChange(e)
        }}
        error={errors.pen_number}
      />

      {isRegister && (
        <>
          <FormInput
            label="First Name"
            name="first_name"
            value={formData.first_name || ''}
            onChange={onChange}
            error={errors.first_name}
          />
          <FormInput
            label="Surname"
            name="surname"
            value={formData.surname || ''}
            onChange={onChange}
            error={errors.surname}
          />
          <FormInput
            label="Other Names (Optional)"
            name="other_names"
            value={formData.other_names || ''}
            onChange={onChange}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={onChange}
            error={errors.email}
          />
        </>
      )}

      <div>
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password || ''}
          onChange={onChange}
          error={errors.password}
        />
        <p className="text-xs text-gray-500 mt-1">
          Password must be at least 8 characters, contain letters and numbers.
        </p>
      </div>

      {isRegister && (
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
          value={formData.confirm_password || ''}
          onChange={onChange}
          error={errors.confirm_password}
        />
      )}

      <button
        type="submit"
        disabled={!passwordValid}
        className={`w-full py-2 rounded transition ${
          passwordValid
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  )
}

export default AuthForm

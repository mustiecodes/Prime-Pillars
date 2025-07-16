'use client'

import React from 'react'
import FormInput from '@/components/common/FormInput'

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
  onSubmit: () => Promise<void>
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

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="space-y-4">
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

      <FormInput
        label="PEN Number"
        name="pen_number"
        value={formData.pen_number || ''}
        onChange={onChange}
        error={errors.pen_number}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password || ''}
        onChange={onChange}
        error={errors.password}
      />

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
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  )
}

export default AuthForm

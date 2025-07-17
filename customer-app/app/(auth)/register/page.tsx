'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'

import { registerUser } from '@/lib/api'
import PageWrapper from '@/components/common/PageWrapper'
import AuthCard from '@/components/common/AuthCard'
import AuthForm from '@/components/auth/AuthForm'

export default function RegisterForm() {
  const router = useRouter()
  const [penExists, setPenExists] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    surname: '',
    other_names: '',
    email: '',
    pen_number: '',
    password: '',
    confirm_password: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    if (e.target.name === 'pen_number') setPenExists(false)
  }

  const handleSubmit = async (penNumber: string) => {
    if (formData.password !== formData.confirm_password) {
      toast.error('Passwords do not match')
      return
    }

    try {
      await registerUser({
        first_name: formData.first_name,
        surname: formData.surname,
        other_names: formData.other_names,
        email: formData.email,
        pen_number: penNumber,
        password: formData.password,
      })
      toast.success('Registration successful')
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message || 'Registration failed')
    }
  }

  return (
    <PageWrapper>
      <AuthCard title="User Registration">
        <AuthForm
          type="register"
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
        />
        {penExists && (
          <p className="text-red-600 text-xs mt-2">This PEN Number already exists.</p>
        )}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
        <p className="text-center text-sm text-gray-600 mt-8">
          &copy; 2025 Prime Pillars Real Estate
        </p>
      </AuthCard>
    </PageWrapper>
  )
}

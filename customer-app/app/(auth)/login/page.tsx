'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'

import PageWrapper from '@/components/common/PageWrapper'
import AuthCard from '@/components/common/AuthCard'
import AuthForm from '@/components/auth/AuthForm'

import { loginValidator } from '@/lib/validators'
import { loginUser } from '@/lib/api'
import { useAuth } from '@/context/AuthProvider'

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    pen_number: '',
    password: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (user) router.push('/')
  }, [user, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async () => {
    const newErrors = loginValidator(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      await loginUser(formData)
      toast.success('Login successful')
      router.push('/')
    } catch (error: any) {
      toast.error(error.message || 'Invalid credentials')
    }
  }

  return (
    <PageWrapper>
      <AuthCard title="Login">
        <AuthForm
          type="login"
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
        />

        <div className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </AuthCard>
    </PageWrapper>
  )
}

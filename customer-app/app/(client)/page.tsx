'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import PageWrapper from '@/components/common/PageWrapper'
import ClientForm from '@/components/application/ClientForm'
import { useAuth } from '@/context/AuthProvider'

export default function ClientPage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login')
        return
      }

      if (user && user.role !== 'client') {
        router.push('/')
        return
      }

      setReady(true)
    }
  }, [loading, user, router])

  if (loading || !ready) {
    return (
      <PageWrapper>
        <p className="text-center text-gray-600">Loading...</p>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper title="Housing Application">
      <ClientForm initialData={user!} />
    </PageWrapper>
  )
}

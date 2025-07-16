'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthProvider'

type ProtectRouteOptions = {
  redirectTo?: string
  allowedRoles?: string[] // Optional role check
  requireVerified?: boolean
}

/**
 * useProtectRoute: Protects a route by checking auth state.
 * - Redirects to `redirectTo` (default: '/login') if unauthenticated
 * - Supports optional role and verification checks
 */
export const useProtectRoute = ({
  redirectTo = '/login',
  allowedRoles,
  requireVerified = true,
}: ProtectRouteOptions = {}) => {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (loading) return

    const isUnauthorized =
      !user ||
      (requireVerified && !user.is_verified) ||
      (allowedRoles && !allowedRoles.includes(user.role || ''))

    if (isUnauthorized) {
      router.push(redirectTo)
    }
  }, [user, loading, redirectTo, allowedRoles, requireVerified, router])
}

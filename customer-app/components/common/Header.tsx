'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthProvider'

export default function Header() {
  const router = useRouter()
  const { user, refreshUser } = useAuth()

  const handleLogout = async () => {
    await fetch('http://localhost:5000/api/auth/logout', { method: 'POST', credentials: 'include' })
    await refreshUser()
    router.push('/login')
  }

  return (
    <header className="bg-gradient-to-r from-[#0057A0] to-[#C8102E] text-white px-8 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Prime Pillars</h1>
      <nav className="flex items-center gap-4 font-semibold">
        <Link href="/faqs" className="hover:underline">FAQs</Link>
        <Link href="/downloadable-forms" className="hover:underline">Downloadable Forms</Link>
        <Link href="/contact-us" className="hover:underline">Contact Us</Link>

        {!user && (
          <div className="flex gap-2">
            <Link
              href="/login"
              className="bg-white text-[#0057A0] px-4 py-1.5 rounded font-semibold hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#C8102E] text-white px-4 py-1.5 rounded font-semibold hover:bg-red-700 transition"
            >
              Register
            </Link>
          </div>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-white text-[#C8102E] px-4 py-1.5 rounded font-semibold hover:bg-gray-200 transition"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const tabs = [
  { name: 'Submitted Applications', href: '/(user)/submitted' },
  { name: 'Approved Applications', href: '/(user)/approved' },
  { name: 'Reports', href: '/(user)/reports' },
  { name: 'Account Opening', href: '/(user)/accounts' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6 text-blue-600">User Dashboard</h2>
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={clsx(
              'block px-4 py-2 rounded-md font-medium',
              pathname === tab.href
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            )}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

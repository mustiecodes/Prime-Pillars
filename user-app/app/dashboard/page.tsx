'use client'

import { useState } from 'react'
import SubmittedApplications from './tabs/SubmittedApplications'
import ApprovedApplications from './tabs/ApprovedApplications'
import Reports from './tabs/Reports'
import AccountOpening from './tabs/AccountOpening'
import SearchBar from '../components/SearchBar' // ✅ Import SearchBar

const tabs = [
  { label: 'Submitted Applications', key: 'submitted' },
  { label: 'Approved Applications', key: 'approved' },
  { label: 'Reports', key: 'reports' },
  { label: 'Account Opening', key: 'account' }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('submitted')

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'submitted':
        return <SubmittedApplications />
      case 'approved':
        return <ApprovedApplications />
      case 'reports':
        return <Reports />
      case 'account':
        return <AccountOpening />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      {/* ✅ SearchBar at top, visible across all tabs */}
      <SearchBar />

      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm rounded-full transition ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className="mt-4">
        {renderActiveTab()}
      </section>
    </main>
  )
}

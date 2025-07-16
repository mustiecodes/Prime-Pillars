'use client'

import { useState, useEffect } from 'react'

type Client = {
  id: number
  name: string
  rsaBalance: number
  pfa: string
  dateSubmitted: string
}

export default function ApprovedApplications() {
  const [clients, setClients] = useState<Client[]>([])
  const [filter, setFilter] = useState({ pfa: '', date: '' })

  useEffect(() => {
    const params = new URLSearchParams()
    if (filter.pfa) params.append('pfa', filter.pfa)
    if (filter.date) params.append('date', filter.date)

    fetch(`http://localhost:5000/api/dashboard/approved?${params.toString()}`)
      .then((res) => res.json())
      .then(setClients)
  }, [filter])

  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-900 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-8 space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Approved Applications</h2>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Filter by PFA"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFilter({ ...filter, pfa: e.target.value })}
          />
          <input
            type="date"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-700">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">PFA</th>
                <th className="px-4 py-3">RSA Balance</th>
                <th className="px-4 py-3">Approval Date</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t text-gray-800 text-sm">
                  <td className="px-4 py-3">{client.name}</td>
                  <td className="px-4 py-3">{client.pfa}</td>
                  <td className="px-4 py-3">₦{client.rsaBalance.toLocaleString()}</td>
                  <td className="px-4 py-3">{client.dateSubmitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

type Client = {
  id: number
  name: string
  rsaBalance: number
  pfa: string
  houseAllocated: string
  dateSubmitted: string
  accountPack: string[]
  processPack: string[]
}

export default function ApprovedApplications() {
  const [clients, setClients] = useState<Client[]>([])
  const [filter, setFilter] = useState({ pfa: '', house: '', date: '' })

  useEffect(() => {
    const params = new URLSearchParams()
    if (filter.pfa) params.append('pfa', filter.pfa)
    if (filter.house) params.append('house', filter.house)
    if (filter.date) params.append('date', filter.date)

    fetch(`http://localhost:5000/api/dashboard/approved?${params.toString()}`)
      .then((res) => res.json())
      .then(setClients)
  }, [filter])

  const generateOffer = (rsaBalance: number) => {
    if (rsaBalance >= 1000000) return 'Offer: Eligible for 3-Bedroom'
    if (rsaBalance >= 500000) return 'Offer: Eligible for 2-Bedroom'
    return 'Offer: Not Eligible'
  }

  const download = (urls: string[]) => {
    urls.forEach((url) => {
      const link = document.createElement('a')
      link.href = url
      link.download = ''
      link.click()
    })
  }

  const bulkDownload = (type: 'account' | 'process') => {
    const allUrls = clients.flatMap((client) =>
      type === 'account' ? client.accountPack : client.processPack
    )
    download(allUrls)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Approved Applications</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Filter by PFA"
          className="input"
          onChange={(e) => setFilter({ ...filter, pfa: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by House"
          className="input"
          onChange={(e) => setFilter({ ...filter, house: e.target.value })}
        />
        <input
          type="date"
          className="input"
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
        />
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-xl">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">PFA</th>
            <th className="px-4 py-2">RSA Balance</th>
            <th className="px-4 py-2">House Allocated</th>
            <th className="px-4 py-2">Date Submitted</th>
            <th className="px-4 py-2">Offer</th>
            <th className="px-4 py-2">Downloads</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-t">
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.pfa}</td>
              <td className="px-4 py-2">₦{client.rsaBalance.toLocaleString()}</td>
              <td className="px-4 py-2">{client.houseAllocated}</td>
              <td className="px-4 py-2">{client.dateSubmitted}</td>
              <td className="px-4 py-2 text-xs text-green-700">
                {generateOffer(client.rsaBalance)}
              </td>
              <td className="px-4 py-2 space-y-1">
                <button
                  onClick={() => download(client.accountPack)}
                  className="bg-blue-600 text-white px-2 py-1 rounded text-xs w-full"
                >
                  Account Opening
                </button>
                <button
                  onClick={() => download(client.processPack)}
                  className="bg-green-600 text-white px-2 py-1 rounded text-xs w-full"
                >
                  Process Docs
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bulk Download Buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={() => bulkDownload('account')}
          className="bg-blue-800 text-white px-4 py-2 rounded"
        >
          Bulk Download: Account Opening
        </button>
        <button
          onClick={() => bulkDownload('process')}
          className="bg-green-800 text-white px-4 py-2 rounded"
        >
          Bulk Download: Process Docs
        </button>
      </div>
    </div>
  )
}

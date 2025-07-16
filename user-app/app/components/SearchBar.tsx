'use client'

import { useState } from 'react'

type Client = {
  name: string
  pen: string
}

const mockClients: Client[] = [
  { name: 'John Doe', pen: 'PEN001' },
  { name: 'Jane Smith', pen: 'PEN002' },
  { name: 'Fatima Yusuf', pen: 'PEN003' },
  { name: 'Chinedu Okeke', pen: 'PEN004' },
  { name: 'Aisha Bello', pen: 'PEN005' }
]

export default function SearchBar() {
  const [name, setName] = useState('')
  const [pen, setPen] = useState('')
  const [results, setResults] = useState<Client[]>([])
  const [error, setError] = useState('')

  const handleSearch = () => {
    if (!name && !pen) {
      setError('Please enter a name or PEN number')
      setResults([])
      return
    }

    setError('')
    const filtered = mockClients.filter((client) => {
      const matchName = name ? client.name.toLowerCase().includes(name.toLowerCase()) : true
      const matchPen = pen ? client.pen.toLowerCase().includes(pen.toLowerCase()) : true
      return matchName && matchPen
    })

    setResults(filtered)
  }

  return (
    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-6">
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">PEN Number</label>
          <input
            type="text"
            value={pen}
            onChange={(e) => setPen(e.target.value)}
            placeholder="Enter PEN"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {results.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2 text-gray-800">Search Results</h3>
          <ul className="divide-y divide-gray-200 bg-white rounded-md">
            {results.map((client, i) => (
              <li key={i} className="p-3">
                <p className="font-medium">{client.name}</p>
                <p className="text-sm text-gray-600">PEN: {client.pen}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {results.length === 0 && (name || pen) && !error && (
        <p className="text-sm text-gray-500 mt-4">No results found.</p>
      )}
    </div>
  )
}

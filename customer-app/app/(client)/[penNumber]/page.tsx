'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { apiGet } from '@/lib/api'

export default function ClientProfile() {
  const { penNumber } = useParams<{ penNumber: string }>()
  const [client, setClient] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await apiGet(`/api/dashboard/client/${penNumber}`)
        setClient(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchClient()
  }, [penNumber])

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (!client) return <p className="text-center mt-10">Client not found.</p>

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-[#0057A0] to-[#C8102E] text-white py-6 text-center">
        <h1 className="text-2xl font-bold">Client Profile</h1>
      </header>

      <div className="max-w-4xl mx-auto my-10 bg-white p-8 rounded-md shadow">
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#0057A0] border-b pb-2">Biodata</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <p><strong>Full Name:</strong> {client.full_name}</p>
              <p><strong>PFA:</strong> {client.pfa}</p>
              <p><strong>RSA Balance:</strong> {client.rsa_balance}</p>
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Alt Email:</strong> {client.alt_email}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 font-medium">Passport Photo</p>
              <img
                src={`/uploads/passport-${penNumber}.jpg`} // Assuming this naming convention
                alt="Passport"
                className="w-28 h-36 object-cover border rounded"
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#0057A0] border-b pb-2">Uploaded Documents</h2>
          <ul className="list-disc ml-5 mt-4 space-y-1">
            {client.documents.map((doc: any) => (
              <li key={doc.id}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  {doc.title}
                </a> ({doc.status})
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[#0057A0] border-b pb-2">Allocated House</h2>
          <p><strong>House Type:</strong> 2 Bedroom Detached</p>
          <p><strong>House Number:</strong> 11A</p>
          <p><strong>Estate:</strong> Harmony Estate, Kaduna</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#0057A0] border-b pb-2">Status</h2>
          <p><strong>Application Status:</strong> Approved</p>
        </section>
      </div>
    </div>
  )
}

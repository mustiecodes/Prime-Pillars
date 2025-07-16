'use client'

import { useState } from 'react'

export default function Reports() {
  const [date, setDate] = useState('')
  const [reportType, setReportType] = useState('offers')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!date) {
      setMessage('Please select a date.')
      return
    }

    setLoading(true)
    setMessage('')
    setDownloadUrl(null)

    try {
      const res = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, reportType }),
      })

      if (!res.ok) throw new Error('Failed to generate report')

      const data = await res.json()
      setMessage(`✅ Report generated: ${data.filename}`)
      setDownloadUrl(`http://localhost:5000${data.download_url}`)
    } catch (err) {
      setMessage('❌ Could not generate report. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Report Type</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="offers">Offer for Clients</option>
            <option value="approved">Approved Clients</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`mt-4 px-6 py-2 rounded-lg text-white transition ${
          loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}

      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          ⬇️ Download Report
        </a>
      )}
    </div>
  )
}

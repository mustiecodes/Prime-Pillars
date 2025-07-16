'use client';

import { useState } from 'react';
import { fetchJSON } from '@/lib/api';

type Document = {
  id: number;
  title: string;
  status: string;
};

export default function ReverseDocuments() {
  const [penNumber, setPenNumber] = useState('');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const fetchDocuments = async () => {
    if (!penNumber.trim()) return;

    setLoading(true);
    setMessage(null);

    try {
      const data = await fetchJSON(`http://localhost:5000/api/admin/documents/${penNumber}`);
      setDocuments(data);
    } catch (err: any) {
      setDocuments([]);
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const reverseStatus = async (docId: number) => {
    setLoading(true);
    setMessage(null);

    try {
      await fetchJSON(`http://localhost:5000/api/admin/documents/${docId}/reset`, {
        method: 'POST',
      });

      setMessage({ type: 'success', text: 'Status reversed' });
      fetchDocuments();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Reverse Document Status</h2>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={penNumber}
          onChange={(e) => setPenNumber(e.target.value)}
          placeholder="Enter PEN Number"
          className="border p-2 rounded-lg w-64"
        />
        <button
          onClick={fetchDocuments}
          disabled={!penNumber || loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Fetch
        </button>
      </div>

      {message && (
        <p className={`text-sm mb-4 ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message.text}
        </p>
      )}

      {documents.length > 0 ? (
        <ul className="divide-y">
          {documents.map((doc) => (
            <li key={doc.id} className="py-2 flex justify-between items-center">
              <span>
                {doc.title} – <span className="text-gray-500 italic">{doc.status}</span>
              </span>
              {doc.status === 'accepted' && (
                <button
                  onClick={() => reverseStatus(doc.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Reverse to Pending
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No documents found for this PEN.</p>
      )}
    </div>
  );
}

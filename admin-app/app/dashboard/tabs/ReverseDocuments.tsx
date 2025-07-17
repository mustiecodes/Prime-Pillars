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
    <div>
      <h2 className="text-xl font-semibold mb-4 text-black">Reverse Document Status</h2>

      <div className="mb-4">
        <input
          type="text"
          value={penNumber}
          onChange={(e) => setPenNumber(e.target.value)}
          placeholder="Enter PEN Number"
          className="border border-gray-300 p-2 rounded w-full mb-2 text-black"
        />
        <button
          onClick={fetchDocuments}
          disabled={!penNumber || loading}
          className="submit-btn"
        >
          Fetch Documents
        </button>
      </div>

      {message && (
        <p className={`mb-4 text-sm ${message.type === 'error' ? 'text-[#C8102E]' : 'text-green-600'}`}>
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
                  className="text-[#C8102E] hover:text-red-800 text-sm"
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

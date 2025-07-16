'use client';

import { useEffect, useState } from 'react';
import { fetchJSON } from '@/lib/api';

export default function PFASettings() {
  const [pfas, setPfas] = useState<string[]>([]);
  const [newPfa, setNewPfa] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  useEffect(() => {
    fetchPfas();
  }, []);

  const fetchPfas = async () => {
    try {
      const data = await fetchJSON('http://localhost:5000/api/admin/pfa');
      setPfas(data.map((pfa: { name: string }) => pfa.name));
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const handleAdd = async () => {
    const trimmed = newPfa.trim();
    if (!trimmed) return;

    setLoading(true);
    setMessage(null);

    try {
      const result = await fetchJSON('http://localhost:5000/api/admin/pfa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmed }),
      });

      setNewPfa('');
      setMessage({ type: 'success', text: result.message || 'PFA added successfully' });
      fetchPfas();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (name: string) => {
    setLoading(true);
    setMessage(null);

    try {
      const result = await fetchJSON(`http://localhost:5000/api/admin/pfa/${encodeURIComponent(name)}`, {
        method: 'DELETE',
      });

      setMessage({ type: 'success', text: result.message || 'PFA removed' });
      fetchPfas();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Manage PFAs</h2>

      <div className="flex space-x-2 mb-4">
        <input
          value={newPfa}
          onChange={(e) => setNewPfa(e.target.value)}
          placeholder="Enter PFA name"
          className="flex-1 border p-2 rounded-lg"
        />
        <button
          onClick={handleAdd}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {message && (
        <p className={`mb-2 text-sm ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message.text}
        </p>
      )}

      {pfas.length > 0 ? (
        <ul className="divide-y">
          {pfas.map((pfa) => (
            <li key={pfa} className="py-2 flex justify-between items-center">
              <span>{pfa}</span>
              <button
                onClick={() => handleDelete(pfa)}
                disabled={loading}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No PFAs found.</p>
      )}
    </div>
  );
}

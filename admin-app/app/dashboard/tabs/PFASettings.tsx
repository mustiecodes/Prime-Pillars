'use client';

import { useEffect, useState } from 'react';
import { fetchJSON } from '@/lib/api';

export default function PFASettings() {
  const [pfas, setPfas] = useState<string[]>([]);
  const [newPfa, setNewPfa] = useState('');
  const [selectedPfa, setSelectedPfa] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  useEffect(() => {
    fetchPfas();
  }, []);

  const fetchPfas = async () => {
    try {
      const data = await fetchJSON('http://localhost:5000/api/admin/pfa');
      const names = data.map((pfa: { name: string }) => pfa.name);
      setPfas(names);
      setSelectedPfa(names[0] || '');
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

  const handleDelete = async () => {
    if (!selectedPfa) return;

    setLoading(true);
    setMessage(null);

    try {
      const result = await fetchJSON(`http://localhost:5000/api/admin/pfa/${encodeURIComponent(selectedPfa)}`, {
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
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage PFAs</h2>

      <div className="mb-6">
        <input
          value={newPfa}
          onChange={(e) => setNewPfa(e.target.value)}
          placeholder="PFA Name"
          className="border border-gray-300 p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleAdd}
          disabled={loading}
          className="submit-btn"
        >
          Add PFA
        </button>
      </div>

      {message && (
        <p className={`mb-4 text-sm ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message.text}
        </p>
      )}

      <div>
        <select
          className="border border-gray-300 p-2 rounded w-full mb-2"
          value={selectedPfa}
          onChange={(e) => setSelectedPfa(e.target.value)}
        >
          {pfas.map((pfa) => (
            <option key={pfa} value={pfa}>{pfa}</option>
          ))}
        </select>
        <button
          onClick={handleDelete}
          disabled={loading || !selectedPfa}
          className="submit-btn"
        >
          Remove Selected PFA
        </button>
      </div>
    </div>
  );
}

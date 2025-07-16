'use client';

import { useEffect, useState } from 'react';
import ClientProfile from '../../components/ClientProfile';

type ClientSummary = {
  pen_number: string;
  name: string;
  status: string;
  pfa: string;
};

export default function SubmittedApplications() {
  const [clients, setClients] = useState<ClientSummary[]>([]);
  const [selectedPen, setSelectedPen] = useState<string | null>(null);
  const [filterPFA, setFilterPFA] = useState<string>('All');

  useEffect(() => {
    fetch('http://localhost:5000/api/dashboard/clients')
      .then((res) => res.json())
      .then(setClients)
      .catch((err) => console.error('Failed to fetch clients:', err));
  }, []);

  const filteredClients =
    filterPFA === 'All' ? clients : clients.filter((c) => c.pfa === filterPFA);

  const pfaOptions = ['All', ...new Set(clients.map((c) => c.pfa))];

  // Remove client from state
  const handleRemoveClient = (penToRemove: string) => {
    setClients((prev) => prev.filter((c) => c.pen_number !== penToRemove));
    if (selectedPen === penToRemove) {
      setSelectedPen(null);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="col-span-1 border rounded-xl p-4 h-[550px] overflow-y-auto bg-gray-50">
        <h2 className="font-semibold text-lg mb-3">Client Applications</h2>

        <label className="block text-sm font-medium mb-1">Filter by PFA</label>
        <select
          value={filterPFA}
          onChange={(e) => setFilterPFA(e.target.value)}
          className="mb-4 w-full border rounded px-2 py-1 text-sm"
        >
          {pfaOptions.map((pfa) => (
            <option key={pfa} value={pfa}>
              {pfa}
            </option>
          ))}
        </select>

        <ul className="space-y-2">
          {filteredClients.map((client) => (
            <li
              key={client.pen_number}
              onClick={() => setSelectedPen(client.pen_number)}
              className={`cursor-pointer p-3 rounded-xl border hover:bg-blue-100 ${
                selectedPen === client.pen_number ? 'bg-blue-200' : ''
              }`}
            >
              <p className="font-medium">{client.name}</p>
              <p className="text-xs text-gray-500">{client.pen_number}</p>
              <p className="text-xs text-gray-400 italic">{client.pfa}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Panel */}
      <div className="col-span-3 border rounded-xl p-6 bg-white min-h-[550px]">
        {!selectedPen ? (
          <p className="text-gray-500">Select a client to view profile and documents.</p>
        ) : (
          <ClientProfile pen={selectedPen} onRemove={() => handleRemoveClient(selectedPen)} />
        )}
      </div>
    </div>
  );
}

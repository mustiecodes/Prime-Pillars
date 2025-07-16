'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type AccountRecord = {
  id: number;
  name: string;
  address: string;
  account_number: string;
};

export default function AccountOpening() {
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [records, setRecords] = useState<AccountRecord[]>([]);
  const [searchName, setSearchName] = useState('');
  const [searchAddress, setSearchAddress] = useState('');
  const [searchAccount, setSearchAccount] = useState('');
  const [message, setMessage] = useState('');

  // Fetch records with optional search
  const fetchRecords = async () => {
    try {
      const res = await axios.get<AccountRecord[]>('http://localhost:5000/api/dashboard/accounts', {
        params: {
          name: searchName,
          address: searchAddress,
          account: searchAccount
        }
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      setMessage('❌ Could not fetch records. Try again.');
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [searchName, searchAddress, searchAccount]);

  const handleUpload = async () => {
    if (!excelFile) return setMessage('❌ Please select a file to upload.');

    const form = new FormData();
    form.append('file', excelFile);

    try {
      const res = await axios.post('/api/dashboard/accounts', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(`✅ ${res.data.message}`);
      setExcelFile(null);
      fetchRecords();
    } catch (err: any) {
      console.error(err);
      setMessage('❌ Upload failed. Ensure it’s a valid Excel file.');
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold">Account Records</h2>
      {message && <p className="text-sm text-gray-700">{message}</p>}

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <input
          type="file"
          accept=".xls,.xlsx"
          onChange={(e) => setExcelFile(e.target.files?.[0] ?? null)}
          className="border rounded px-3 py-2 text-sm"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
        >
          Upload Excel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <input
          type="text"
          placeholder="Search Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
        <input
          type="text"
          placeholder="Search Address"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
        <input
          type="text"
          placeholder="Search Account #"
          value={searchAccount}
          onChange={(e) => setSearchAccount(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="overflow-auto mt-4 border rounded-lg">
        {records.length ? (
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Account Number</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{r.address}</td>
                  <td className="px-4 py-2">{r.account_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 text-center text-sm text-gray-500">
            No account records found.
          </div>
        )}
      </div>
    </div>
  );
}

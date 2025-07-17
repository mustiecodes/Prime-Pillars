'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { fetchJSON } from '@/lib/api';

type StaffUser = {
  id: number;
  first_name: string;
  surname: string;
  email: string;
  role: 'staff' | 'admin';
  is_active: boolean;
};

type StaffForm = {
  first_name: string;
  surname: string;
  email: string;
  password: string;
  role: 'staff' | 'admin';
};

export default function StaffManagement() {
  const [staffList, setStaffList] = useState<StaffUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<StaffForm>({
    first_name: '',
    surname: '',
    email: '',
    password: '',
    role: 'staff',
  });

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const data: StaffUser[] = await fetchJSON('http://localhost:5000/api/admin/staff');
      setStaffList(data);
    } catch (err: any) {
      console.error('Failed to fetch staff:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const { first_name, surname, email, password } = formData;
    if (!first_name || !surname || !email || !password) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    try {
      await fetchJSON('http://localhost:5000/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      await fetchStaff();
      setFormData({
        first_name: '',
        surname: '',
        email: '',
        password: '',
        role: 'staff',
      });
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const toggleActive = async (staffId: number) => {
    try {
      await fetchJSON(`http://localhost:5000/api/admin/staff/${staffId}/toggle`, {
        method: 'POST',
      });
      fetchStaff();
    } catch {
      alert('Failed to toggle staff status');
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-black">Manage Staff Users</h2>

      {error && (
        <p className="mb-3 text-[#C8102E] text-sm font-medium bg-red-50 px-3 py-2 rounded">
          ⚠️ {error}
        </p>
      )}

      <form onSubmit={handleCreate} className="grid gap-4 mb-6">
        <input
          type="text"
          name="first_name"
          required
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded text-black"
        />
        <input
          type="text"
          name="surname"
          required
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded text-black"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded text-black"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded text-black"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded text-black"
        >
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? 'Creating...' : 'Add Staff'}
        </button>
      </form>

      <table className="w-full text-sm border text-black">
        <thead>
          <tr className="bg-gray-100 text-left text-black">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id} className="text-black">
              <td className="p-2 border">{staff.first_name} {staff.surname}</td>
              <td className="p-2 border">{staff.email}</td>
              <td className="p-2 border capitalize">{staff.role}</td>
              <td className="p-2 border">{staff.is_active ? 'Active' : 'Inactive'}</td>
              <td className="p-2 border">
                <button
                  onClick={() => toggleActive(staff.id)}
                  className={`px-3 py-1 text-sm rounded ${
                    staff.is_active
                      ? 'bg-[#C8102E] text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {staff.is_active ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

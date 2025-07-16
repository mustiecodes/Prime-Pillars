'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { registerUser } from '@/lib/api'

export default function RegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    first_name: '',
    surname: '',
    other_names: '',
    email: '',
    pen_number: '',
    password: '',
    confirm_password: '',
  })

  const [penExists, setPenExists] = useState(false)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (e.target.name === 'pen_number') setPenExists(false)
  }

  const handleBlur = () => {
    const existingPENs = ['PEN12345', 'PEN67890']
    if (existingPENs.includes(formData.pen_number)) {
      setPenExists(true)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (formData.password !== formData.confirm_password) {
      toast.error('Passwords do not match')
      return
    }
    try {
      await registerUser({
        first_name: formData.first_name,
        surname: formData.surname,
        other_names: formData.other_names,
        email: formData.email,
        pen_number: formData.pen_number,
        password: formData.password,
      })
      toast.success('Registration successful')
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message || 'Registration failed')
    }
  }

  return (
    <div className="max-w-[500px] mx-auto bg-white p-8 rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] mt-10">
      <h2 className="text-2xl font-semibold text-[#0057A0] text-center mb-6">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-semibold">First Name</label>
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="w-full p-3 border border-[#ccc] rounded-[6px]" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Surname</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} required className="w-full p-3 border border-[#ccc] rounded-[6px]" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Other Names (Optional)</label>
          <input type="text" name="other_names" value={formData.other_names} onChange={handleChange} className="w-full p-3 border border-[#ccc] rounded-[6px]" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-[#ccc] rounded-[6px]" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">PEN Number</label>
          <input
            type="text"
            name="pen_number"
            value={formData.pen_number}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="w-full p-3 border border-[#ccc] rounded-[6px]"
          />
          {penExists && <small className="text-red-600 mt-1 block">This PEN Number already exists.</small>}
        </div>
        <div>
          <label className="block mb-2 font-semibold">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-3 border border-[#ccc] rounded-[6px]" />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Confirm Password</label>
          <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} required className="w-full p-3 border border-[#ccc] rounded-[6px]" />
        </div>
        <button type="submit" className="w-full py-3 rounded-[6px] bg-[#0057A0] text-white font-semibold hover:bg-[#004080] transition-colors">
          Register
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-8">&copy; 2025 Prime Pillars Real Estate</p>
    </div>
  )
}

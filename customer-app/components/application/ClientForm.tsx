'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import FormInput from '@/components/common/FormInput'
import FormSelect from '@/components/common/FormSelect'
import FileUpload from '@/components/application/FileUpload'

import { submitApplication } from '@/lib/api'
import { validateClientForm } from '@/lib/validators'

type Props = {
  initialData: {
    pen_number: string
    first_name: string
    surname: string
    other_names?: string
    email: string
    pfa?: string
    rsa_balance?: string
    bvn?: string
    nin?: string
    dob?: string
    phone_number?: string
    alt_phone?: string
    alt_email?: string
  }
}

type FormData = {
  penNumber: string
  firstName: string
  surname: string
  otherNames: string
  email: string
  pfa: string
  rsaBalance: string
  bvn: string
  nin: string
  dob: string
  phone1: string
  phone2: string
  altEmail: string
}

const REQUIRED_DOCS = [
  'Account Opening Form',
  'NIN Slip',
  'Undertaken Form',
  'Consent Form',
  'Indemnity Form',
  'Application Letter',
  'Passport',
]

export default function ClientForm({ initialData }: Props) {
  const router = useRouter()

  const [form, setForm] = useState<FormData>({
    penNumber: '',
    firstName: '',
    surname: '',
    otherNames: '',
    email: '',
    pfa: '',
    rsaBalance: '',
    bvn: '',
    nin: '',
    dob: '',
    phone1: '',
    phone2: '',
    altEmail: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [requiredDocs, setRequiredDocs] = useState<Record<string, File | null>>({})
  const [optionalDocs, setOptionalDocs] = useState([{ title: '', file: null as File | null }])
  const [pfaOptions, setPfaOptions] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!initialData) return
    setForm({
      penNumber: initialData.pen_number || '',
      firstName: initialData.first_name || '',
      surname: initialData.surname || '',
      otherNames: initialData.other_names || '',
      email: initialData.email || '',
      pfa: initialData.pfa || '',
      rsaBalance: initialData.rsa_balance || '',
      bvn: initialData.bvn || '',
      nin: initialData.nin || '',
      dob: initialData.dob || '',
      phone1: initialData.phone_number || '',
      phone2: initialData.alt_phone || '',
      altEmail: initialData.alt_email || '',
    })
  }, [initialData])

  useEffect(() => {
    const fetchPFAs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/admin/pfa')
        const data = await res.json()
        setPfaOptions(data.map((p: { name: string }) => p.name))
      } catch {
        console.error('Failed to fetch PFAs')
      }
    }
    fetchPFAs()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (['bvn', 'nin'].includes(name)) {
      if (!/^\d*$/.test(value)) return
      if (value.length > 12) return
    }

    if (['phone1', 'phone2'].includes(name)) {
      if (!/^\d*$/.test(value)) return
      if (value.length > 11) return
    }

    if (name === 'rsaBalance') {
      const cleaned = value.replace(/,/g, '').replace(/\D/g, '')
      const formatted = cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      setForm((prev) => ({ ...prev, [name]: formatted }))
      setErrors((prev) => ({ ...prev, [name]: '' }))
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleRequiredDocUpload = (docTitle: string, file: File | null) => {
    setRequiredDocs((prev) => ({ ...prev, [docTitle]: file }))
  }

  const handleOptionalDocChange = (index: number, key: 'title' | 'file', value: any) => {
    setOptionalDocs((prev) => {
      const updated = [...prev]
      updated[index][key] = value
      return updated
    })
  }

  const addOptionalDoc = () => {
    setOptionalDocs((prev) => [...prev, { title: '', file: null }])
  }

  const removeOptionalDoc = (index: number) => {
    setOptionalDocs((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage('')
    setErrors({})

    const validationErrors = validateClientForm({
      rsaBalance: form.rsaBalance,
      bvn: form.bvn,
      nin: form.nin,
      dob: form.dob,
      phone1: form.phone1,
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitting(false)
      return
    }

    try {
      await submitApplication(form, requiredDocs, optionalDocs, requiredDocs['Passport'])
      router.push(`/client/${form.penNumber}`)
    } catch {
      setMessage('❌ Could not submit application.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <section>
        <h2 className="text-xl font-semibold text-[#0057A0] border-b pb-2">Biodata</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="First Name" name="firstName" value={form.firstName} disabled />
          <FormInput label="Surname" name="surname" value={form.surname} disabled />
          <FormInput label="Other Names" name="otherNames" value={form.otherNames} disabled />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#0057A0] border-b pb-2">RSA and Personal Info</h2>
        <div className="space-y-4">
          <FormSelect label="PFA" name="pfa" value={form.pfa} onChange={handleChange}>
            <option value="">Select your PFA</option>
            {pfaOptions.map((pfa) => (
              <option key={pfa} value={pfa}>{pfa}</option>
            ))}
          </FormSelect>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput label="RSA Balance" name="rsaBalance" value={form.rsaBalance} onChange={handleChange} />
            <FormInput label="BVN" name="bvn" value={form.bvn} onChange={handleChange} />
            <FormInput label="NIN" name="nin" value={form.nin} onChange={handleChange} />
            <FormInput label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange} />
            <FormInput label="Phone Number" name="phone1" value={form.phone1} onChange={handleChange} />
            <FormInput label="Alt Phone" name="phone2" value={form.phone2} onChange={handleChange} />
            <FormInput label="Email" name="email" value={form.email} disabled />
            <FormInput label="Alt Email" name="altEmail" value={form.altEmail} onChange={handleChange} />
          </div>
        </div>
      </section>

      <section>
        <FileUpload
          requiredDocs={REQUIRED_DOCS}
          requiredUploads={requiredDocs}
          onRequiredChange={handleRequiredDocUpload}
          optionalDocs={optionalDocs}
          onOptionalChange={handleOptionalDocChange}
          onAddOptional={addOptionalDoc}
          onRemoveOptional={removeOptionalDoc}
        />
      </section>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#0057A0] hover:bg-[#003f7a] text-white font-semibold py-3 rounded-md"
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>

      {message && <p className="text-sm text-gray-600 text-center">{message}</p>}
    </form>
  )
}

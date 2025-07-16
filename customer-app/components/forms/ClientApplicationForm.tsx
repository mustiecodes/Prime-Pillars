'use client'

import { useEffect, useState } from 'react'
import FormInput from '@/components/inputs/FormInput'
import FormSelect from '@/components/inputs/FormSelect'
import FileUpload from '@/components/forms/FileUpload'
import { submitApplication } from '@/utils/api'
import { validateClientApplicationForm } from '@/utils/validators'

const REQUIRED_DOCS = [
  'Account Opening Form',
  'NIN Slip',
  'Undertaken Form',
  'Consent Form',
  'Indemnity Form',
  'Application Letter',
]

type Props = {
  initialData: any
}

export default function ClientApplicationForm({ initialData }: Props) {
  const [form, setForm] = useState({
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

  // Prefill form with user data
  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
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
      }))
    }
  }, [initialData])

  // Fetch PFA options
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
    setForm((prev) => ({ ...prev, [name]: value }))
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

  const handleSubmit = async () => {
    setSubmitting(true)
    setMessage('')
    setErrors({})

    const validationErrors = validateClientApplicationForm({
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
      await submitApplication(form, requiredDocs, optionalDocs)
      setMessage('✅ Application submitted successfully!')
    } catch {
      setMessage('❌ Could not submit application.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Apply for Housing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput label="PEN Number" name="penNumber" value={form.penNumber} disabled />
        <FormInput label="First Name" name="firstName" value={form.firstName} disabled />
        <FormInput label="Surname" name="surname" value={form.surname} disabled />
        <FormInput label="Other Names (Optional)" name="otherNames" value={form.otherNames} disabled />
        <FormInput label="Email" name="email" value={form.email} disabled />

        <FormSelect label="PFA" name="pfa" value={form.pfa} onChange={handleChange}>
          <option value="">-- Select PFA --</option>
          {pfaOptions.map((pfa) => (
            <option key={pfa} value={pfa}>
              {pfa}
            </option>
          ))}
        </FormSelect>

        <FormInput
          label="RSA Balance"
          name="rsaBalance"
          type="number"
          value={form.rsaBalance}
          onChange={handleChange}
          error={errors.rsaBalance}
        />
        <FormInput label="BVN" name="bvn" value={form.bvn} onChange={handleChange} error={errors.bvn} />
        <FormInput label="NIN" name="nin" value={form.nin} onChange={handleChange} error={errors.nin} />
        <FormInput
          label="Date of Birth"
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          error={errors.dob}
        />
        <FormInput
          label="Phone Number"
          name="phone1"
          value={form.phone1}
          onChange={handleChange}
          error={errors.phone1}
        />
        <FormInput label="Alt Phone Number" name="phone2" value={form.phone2} onChange={handleChange} />
        <FormInput
          label="Alt Email"
          name="altEmail"
          type="email"
          value={form.altEmail}
          onChange={handleChange}
        />
      </div>

      <hr className="my-6" />

      <FileUpload
        requiredDocs={REQUIRED_DOCS}
        requiredUploads={requiredDocs}
        onRequiredChange={handleRequiredDocUpload}
        optionalDocs={optionalDocs}
        onOptionalChange={handleOptionalDocChange}
        onAddOptional={addOptionalDoc}
      />

      <button
        onClick={handleSubmit}
        disabled={submitting}
        className={`w-full py-2 mt-6 rounded-lg text-white ${
          submitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  )
}

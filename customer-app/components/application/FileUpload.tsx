'use client'

import { useState } from 'react'

type OptionalDoc = { title: string; file: File | null }

type Props = {
  requiredDocs: string[]
  requiredUploads: Record<string, File | null>
  onRequiredChange: (docTitle: string, file: File | null) => void
  optionalDocs: OptionalDoc[]
  onOptionalChange: (index: number, key: 'title' | 'file', value: any) => void
  onAddOptional: () => void
  onRemoveOptional: (index: number) => void
}

const MAX_FILE_SIZE_MB = 2
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024

const validateFile = (file: File | undefined | null): string | null => {
  if (!file) return null
  if (file.type !== 'application/pdf') return 'Only PDF files are allowed.'
  if (file.size > MAX_FILE_SIZE_BYTES) return `File too large. Max size is ${MAX_FILE_SIZE_MB}MB.`
  return null
}

export default function FileUpload({
  requiredDocs,
  requiredUploads,
  onRequiredChange,
  optionalDocs,
  onOptionalChange,
  onAddOptional,
  onRemoveOptional,
}: Props) {
  const [errors, setErrors] = useState<{ required: Record<string, string>; optional: Record<number, string> }>({
    required: {},
    optional: {},
  })

  const handleRequiredChange = (title: string, file: File | null) => {
    const error = validateFile(file)
    setErrors((prev) => ({ ...prev, required: { ...prev.required, [title]: error || '' } }))
    if (!error) onRequiredChange(title, file)
  }

  const handleOptionalFileChange = (index: number, file: File | null) => {
    const error = validateFile(file)
    setErrors((prev) => ({ ...prev, optional: { ...prev.optional, [index]: error || '' } }))
    if (!error) onOptionalChange(index, 'file', file)
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-[#0057A0] border-b border-[#0057A0] pb-2 mb-4">Mandatory Uploads</h2>
        <div className="space-y-6">
          {requiredDocs.map((title) => (
            <div key={title} className="space-y-1">
              <label className="block font-semibold text-sm text-gray-800">{title}</label>
              <input
                type="file"
                required
                accept="application/pdf"
                onChange={(e) => handleRequiredChange(title, e.target.files?.[0] || null)}
                className="w-full px-3 py-2 rounded border border-gray-300 text-sm file:rounded file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-gray-700"
              />
              {requiredUploads[title] && !errors.required[title] && (
                <p className="text-xs text-green-600 mt-1">✅ {requiredUploads[title]?.name}</p>
              )}
              {errors.required[title] && (
                <p className="text-xs text-red-600 mt-1">❌ {errors.required[title]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#0057A0] border-b border-[#0057A0] pb-2 mb-4">Optional Upload</h2>
        <div className="space-y-4">
          {optionalDocs.map((doc, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <input
                type="text"
                placeholder="Document Title"
                value={doc.title}
                className="w-full px-3 py-2 rounded border border-gray-300 text-sm"
                onChange={(e) => onOptionalChange(index, 'title', e.target.value)}
              />
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleOptionalFileChange(index, e.target.files?.[0] || null)}
                className="w-full px-3 py-2 rounded border border-gray-300 text-sm file:rounded file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-gray-700"
              />
              {doc.file && !errors.optional[index] && (
                <p className="text-xs text-green-600 col-span-2">✅ {doc.file.name}</p>
              )}
              {errors.optional[index] && (
                <p className="text-xs text-red-600 col-span-2">❌ {errors.optional[index]}</p>
              )}
              <button
                type="button"
                onClick={() => onRemoveOptional(index)}
                className="text-red-600 text-sm hover:underline col-span-2"
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={onAddOptional} className="text-[#0057A0] text-sm hover:underline">
            + Add Another Optional Document
          </button>
        </div>
      </section>
    </div>
  )
}

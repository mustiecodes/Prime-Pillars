'use client'

type OptionalDoc = { title: string; file: File | null }

type Props = {
  requiredDocs: string[]
  requiredUploads: Record<string, File | null>
  onRequiredChange: (docTitle: string, file: File | null) => void
  optionalDocs: OptionalDoc[]
  onOptionalChange: (index: number, key: 'title' | 'file', value: any) => void
  onAddOptional: () => void
  errors?: {
    required?: Record<string, string>
    optional?: Record<number, string>
  }
}

export default function FileUpload({
  requiredDocs,
  requiredUploads,
  onRequiredChange,
  optionalDocs,
  onOptionalChange,
  onAddOptional,
  errors = {},
}: Props) {
  return (
    <div className="space-y-8">
      {/* Required Documents */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Mandatory Documents</h3>
        <div className="space-y-4">
          {requiredDocs.map((doc) => (
            <div key={doc}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{doc}</label>
              <input
                type="file"
                required
                className="block w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-1.5 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={(e) => onRequiredChange(doc, e.target.files?.[0] || null)}
              />
              {requiredUploads[doc] && (
                <p className="text-xs text-green-600 mt-1">✅ {requiredUploads[doc]?.name}</p>
              )}
              {errors.required?.[doc] && (
                <p className="text-xs text-red-600 mt-1">❌ {errors.required[doc]}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optional Documents */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Optional Documents</h3>
        <div className="space-y-4">
          {optionalDocs.map((doc, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Document Title"
                  value={doc.title}
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) => onOptionalChange(idx, 'title', e.target.value)}
                />
              </div>
              <div>
                <input
                  type="file"
                  className="block w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-1.5 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                  onChange={(e) => onOptionalChange(idx, 'file', e.target.files?.[0] || null)}
                />
                {doc.file && (
                  <p className="text-xs text-green-600 mt-1">✅ {doc.file.name}</p>
                )}
              </div>
              {errors.optional?.[idx] && (
                <p className="text-sm text-red-600 col-span-2">{errors.optional[idx]}</p>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onAddOptional}
          className="mt-3 text-blue-600 text-sm hover:underline"
        >
          + Add Another Optional Document
        </button>
      </div>
    </div>
  )
}

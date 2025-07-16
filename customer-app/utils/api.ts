const BASE_URL = 'http://localhost:5000'

const buildUrl = (path: string) => `${BASE_URL}${path}`

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.error || 'An unexpected error occurred')
  }
  return res.json()
}

export async function apiGet<T = any>(path: string): Promise<T> {
  const res = await fetch(buildUrl(path), {
    method: 'GET',
    credentials: 'include',
  })
  return handleResponse(res)
}

export async function apiPost<T = any>(path: string, data: Record<string, any>): Promise<T> {
  const res = await fetch(buildUrl(path), {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return handleResponse(res)
}

export async function submitApplication(
  form: Record<string, any>,
  requiredDocs: Record<string, File | null>,
  optionalDocs: { title: string; file: File | null }[]
): Promise<any> {
  const formData = new FormData()

  formData.append('pen_number', form.penNumber)
  formData.append('pfa', form.pfa)
  formData.append('rsa_balance', form.rsaBalance)
  formData.append('bvn', form.bvn)
  formData.append('nin', form.nin)
  formData.append('dob', form.dob)
  formData.append('phone_number', form.phone1)
  formData.append('alt_phone', form.phone2)
  formData.append('alt_email', form.altEmail)

  Object.entries(requiredDocs).forEach(([title, file]) => {
    if (file) {
      formData.append('documents', file, title)
    }
  })

  optionalDocs.forEach(({ title, file }) => {
    if (file && title) {
      formData.append('documents', file, `optional:${title}`)
    }
  })

  const res = await fetch(buildUrl('/api/application/submit'), {
    method: 'POST',
    credentials: 'include',
    body: formData,
  })
  
  return handleResponse(res)
}

export async function fetchCurrentUser(): Promise<any> {
  return apiGet('/api/auth/me')
}

export async function loginUser(data: {
  pen_number: string
  password: string
}): Promise<any> {
  return apiPost('/api/auth/login', data)
}

export async function registerUser(data: {
  first_name: string
  surname: string
  other_names?: string
  email: string
  pen_number: string
  password: string
}): Promise<any> {
  return apiPost('/api/auth/register', data)
}

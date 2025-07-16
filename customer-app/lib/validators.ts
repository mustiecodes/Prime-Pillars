/**
 * Checks if a password is strong enough:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one digit
 * - At least one special character
 */
export function validatePassword(password: string): boolean {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/
  return regex.test(password)
}

/**
 * Validates login form data.
 */
export function loginValidator(data: { pen_number: string; password: string }) {
  const errors: Record<string, string> = {}

  if (!data.pen_number) {
    errors.pen_number = 'PEN number is required'
  }

  if (!data.password) {
    errors.password = 'Password is required'
  }

  return errors
}

/**
 * Validates registration form data.
 */
export function registerValidator(data: {
  first_name: string
  surname: string
  email: string
  pen_number: string
  password: string
  confirm_password: string
}) {
  const errors: Record<string, string> = {}

  if (!data.first_name) {
    errors.first_name = 'First name is required'
  }

  if (!data.surname) {
    errors.surname = 'Surname is required'
  }

  if (!data.email) {
    errors.email = 'Email is required'
  }

  if (!data.pen_number) {
    errors.pen_number = 'PEN number is required'
  }

  if (!data.password) {
    errors.password = 'Password is required'
  } else if (!validatePassword(data.password)) {
    errors.password = 'Password must include uppercase, lowercase, number, and symbol'
  }

  if (data.password !== data.confirm_password) {
    errors.confirm_password = 'Passwords do not match'
  }

  return errors
}

/**
 * Validates client application form fields.
 */
export function validateClientForm(data: {
  rsaBalance: string
  bvn: string
  nin: string
  dob: string
  phone1: string
  altEmail?: string
}) {
  const errors: Record<string, string> = {}

  if (!data.rsaBalance) errors.rsaBalance = 'RSA balance is required'
  if (!data.bvn) {
    errors.bvn = 'BVN is required'
  } else if (data.bvn.length !== 12) {
    errors.bvn = 'BVN must be exactly 12 digits'
  }

  if (!data.nin) {
    errors.nin = 'NIN is required'
  } else if (data.nin.length !== 12) {
    errors.nin = 'NIN must be exactly 12 digits'
  }

  if (!data.dob) errors.dob = 'Date of Birth is required'

  if (!data.phone1) {
    errors.phone1 = 'Phone number is required'
  } else if (data.phone1.length !== 11) {
    errors.phone1 = 'Phone number must be exactly 12 digits'
  }

  return errors
}

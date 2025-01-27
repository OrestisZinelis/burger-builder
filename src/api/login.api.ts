import type { LoginCredentials, LoginResponse } from '../types/Login'

export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch('https://react-interview.xm.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Login failed: ${error}`)
  }

  const data: LoginResponse = await response.json()
  return data
}

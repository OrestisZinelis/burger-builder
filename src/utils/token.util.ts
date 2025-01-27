import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  exp: number
}

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true

  try {
    const decoded: DecodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000 // Get current time in seconds
    return decoded.exp < currentTime
  } catch (e) {
    console.log(e)
    return true // Invalid token format
  }
}

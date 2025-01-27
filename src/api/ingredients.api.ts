import type { Ingredient } from '../types/Ingredient'

export const fetchIngredients = async (): Promise<Ingredient[]> => {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('No token found')

  const response = await fetch('https://react-interview.xm.com/ingredients', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch ingredients')
  }

  return response.json()
}

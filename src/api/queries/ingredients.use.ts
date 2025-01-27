import { useQuery } from '@tanstack/react-query'
import { fetchIngredients } from '../ingredients.api'
import type { Ingredient } from '../../types/Ingredient'

export const useIngredients = () => {
  const token = localStorage.getItem('token')

  return useQuery<Ingredient[], Error>({
    queryKey: ['ingredients'],
    queryFn: token
      ? fetchIngredients
      : () => {
          throw new Error('No token found')
        },
    enabled: !!token
  })
}

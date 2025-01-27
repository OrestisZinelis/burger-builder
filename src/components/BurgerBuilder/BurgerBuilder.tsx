import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIngredients } from '../../api/queries/ingredients.use'
import {
  BurgerBuilderContainer,
  IngredientList,
  IngredientButton,
  BurgerView,
  BurgerIngredient,
  BurgerTopBun
} from './BurgerBuilder.styles'
import type { Ingredient } from '../../types/Ingredient'

const IMG_URL = 'https://react-interview.xm.com/img/'

const BurgerBuilder = () => {
  const [burger, setBurger] = useState<Ingredient[]>([])
  const { data: ingredients, isLoading, isError, error } = useIngredients()
  const navigate = useNavigate()

  useEffect(() => {
    if (error?.message === 'No token found') {
      alert('Please log in again.')
      localStorage.removeItem('token')
      navigate('/')
    }
  }, [error, navigate])

  const addIngredient = (ingredient: Ingredient) => {
    setBurger([...burger, ingredient])
  }

  const removeIngredient = (index: number) => {
    setBurger(burger.filter((_, i) => i !== index))
  }

  if (isLoading) return <p>Loading ingredients...</p>
  if (isError) return <p>Error loading ingredients. Please try again.</p>

  return (
    <BurgerBuilderContainer>
      <h1>Build Your Burger</h1>
      <IngredientList>
        {ingredients?.map((ingredient: Ingredient) => (
          <IngredientButton key={ingredient.id} onClick={() => addIngredient(ingredient)}>
            {ingredient.name}
          </IngredientButton>
        ))}
      </IngredientList>
      <BurgerView>
        <BurgerTopBun src={`${IMG_URL}bun_top.png`} alt="bun_top" />
        {burger.map(({ id, name, src }, index) => (
          <BurgerIngredient
            key={`${id}_${index}`}
            src={`${IMG_URL}${src}`}
            alt={name}
            onClick={() => removeIngredient(index)}
          />
        ))}
        <BurgerTopBun src={`${IMG_URL}bun_bottom.png`} alt="bun_bottom" />
      </BurgerView>
    </BurgerBuilderContainer>
  )
}

export default BurgerBuilder

import styled from 'styled-components'

export const BurgerBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`

export const IngredientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const IngredientButton = styled.button`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(85, 84, 84);
  }
`

export const BurgerView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
`

export const BurgerIngredient = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;
`

export const BurgerTopBun = styled.img`
  width: 240;
  height: auto;
`

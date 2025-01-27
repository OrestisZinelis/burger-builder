import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../login.api'
import type { LoginCredentials, LoginResponse } from '../../types/Login'

export const useLogin = (setToken: (token: string | null) => void) =>
  useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: loginUser,
    onSuccess: data => {
      localStorage.setItem('token', data.token)
      setToken(data.token)
    }
  })

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../api/queries/login.use'
import { Container, Form, Input, Button, ErrorMessage } from './Login.styles'

const Login = ({ setToken }: { setToken: (token: string | null) => void }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { mutateAsync: login, isPending, isError } = useLogin(setToken)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await login({ name: userName, password })
      navigate('/builder')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {isError && <ErrorMessage>Invalid credentials. Please try again.</ErrorMessage>}
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    </Container>
  )
}

export default Login

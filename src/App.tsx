import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login/Login'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import { isTokenExpired } from './utils/token.util'

const App = () => {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true) // Track loading state

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken && !isTokenExpired(storedToken)) {
      setToken(storedToken)
    } else {
      localStorage.removeItem('token')
      setToken(null)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={!token ? <Login setToken={setToken} /> : <Navigate to="/builder" />} />
        <Route path="/builder" element={token ? <BurgerBuilder /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

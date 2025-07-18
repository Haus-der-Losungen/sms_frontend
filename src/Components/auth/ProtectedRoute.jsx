
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const router = useNavigate()

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const credentials = {
    userId: 1234,
    password: "password"
  }

  useEffect(() => {
    const checkAuth = () => {
       const userCredentials = JSON.parse(localStorage.getItem("credentials"))

       if(userCredentials?.userId == credentials.userId && userCredentials?.password === credentials.password) {
        setIsAuthenticated(true)
       }
       else {
        router("/portal")
       }
    }

    checkAuth()
  }, [])

  if(!isAuthenticated){
    router("/portal")
  }
  return (
    <div>
        {children}
    </div>
  )
}

export default ProtectedRoute
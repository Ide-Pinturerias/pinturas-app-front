import React from 'react'
import LoginForm from '@components/LoginForm/LoginForm'

const Login = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-md">
            <LoginForm />
        </div>
    </div>
  )
}

export default Login

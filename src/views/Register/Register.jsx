import React from 'react'
import RegisterForm from '@components/RegisterForm/RegisterForm'

const Register = () => {
  return (
    <div className="py-12 my-20 flex items-center justify-center mr:auto h-full">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register

import React from 'react'
import ProviderEditForm from '@components/ProviderEditForm/ProviderEditForm'

const EditProvider = () => {
  return (
    <main className="flex justify-center items-center mt-20 min-h-screen">
    <div className="w-full max-w-4xl p-5">
        <ProviderEditForm/>
    </div>
  </main>
  )
}

export default EditProvider

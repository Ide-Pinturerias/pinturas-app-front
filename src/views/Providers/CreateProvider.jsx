import React from 'react'
import CreateProviderForm from '@components/ProviderCreateForm/ProviderCreateForm'

const CreateProvider = () => {
  return (
    <main className="flex justify-center items-center mt-20 min-h-screen">
      <div className="w-full max-w-4xl p-5">
          <CreateProviderForm/>
      </div>
    </main>
  )
}

export default CreateProvider

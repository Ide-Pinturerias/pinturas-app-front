import CreateForm from '@components/CreateForm/CreateForm'

const CreateProduct = () => {
  return (
    <main className="flex justify-center items-center mt-20 min-h-screen">
      <div className="w-full max-w-4xl p-5">
        <CreateForm/>
      </div>
    </main>
  )
}

export default CreateProduct

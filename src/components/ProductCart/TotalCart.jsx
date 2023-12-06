const TotalCart = ({ products }) => {
  const total = products.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity
  }, 0)

  return (
      <main className="w-full flex justify-end p-10">
        <h2 className="text-xl font-bold text-gray-700">Total: ${total.toFixed(2)}</h2>
      </main>
  )
}

export default TotalCart

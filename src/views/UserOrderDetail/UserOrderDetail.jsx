import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetSpecificProducts } from "@/services/api";
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner'
import Swal from 'sweetalert2';
import { ButtonLink } from '../../components/Controls/Links';

const UserOrderDetail = () => {
  const navigate = useNavigate();
  const detail = useSelector((state) => state.orderDetail);
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.id !== detail.userId) {
      Swal.fire({ icon: 'error', title: 'Oops!', text: 'No autorizado!' });
      navigate('/');
    } else {
      fetchProductsInfo();
    }
  }, [detail, user, navigate]);

  const fetchProductsInfo = async () => {
    const { ids, qus } = JSON.parse(detail.products);
    const specificProducts = ids.map((id, index) => ({
      id,
      quantity: qus[index]
    }));
    const fetchedProducts = await GetSpecificProducts(specificProducts);
    setProducts(fetchedProducts);
    setIsLoading(false); // Desactivar el spinner después de cargar los datos
  };

  if (isLoading) {
    return (
      <main className="flex justify-center items-center w-full min-h-screen">
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <div className="flex flex-col mt-20 md:mx-20 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 h-16 bg-indigo-300 rounded-t-xl">
        <h1 className="text-lg md:text-xl font-semibold text-center px-2">Orden: {detail.id}</h1>
        <h1 className="text-lg md:text-xl font-semibold text-center px-2">Fecha pedido: {detail.createdAt.slice(0, 10)}</h1>
      </div>
      <div className="border border-solid rounded-b-lg overflow-auto">
        <h1 className="text-lg font-medium px-4 mt-8">Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {products.map(product => (
            <div className="mb-4 flex" key={product.id}>
              <div className="flex p-3 w-full rounded hover:bg-gray-200">
                <img src={product.image} alt={product.name} className="w-16 md:w-20 lg:w-24" />
                <div className="flex flex-col justify-between p-3">
                  <p className="text-sm md:text-base font-semibold">{product.name}</p>
                  <h1 className="text-sm md:text-base font-semibold">Cantidad: {product.quantity}</h1>
                  <h1 className="flex items-end text-sm md:text-base">${product.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-4">
        <h1 className="text-lg md:text-xl font-semibold">
            Total compra: ${detail.total}
        </h1>
        <ButtonLink path="/account">Volver a Cuenta</ButtonLink>
      </div>
    </div>
  );
};

export default UserOrderDetail;

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetSpecificProducts } from "@/services/api";
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner'
import Swal from 'sweetalert2';

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
      <main className="flex justify-center w-full min-h-screen">
        <LoadingSpinner />;
      </main>
    );
  }

  return (
    <div className="flex flex-col p-16 h-screen">
      <div className="flex items-center justify-around h-16 bg-indigo-300 rounded-t-xl">
        <h1 className="text-xl font-semibold">Orden {detail.id}</h1>
        <h1 className="text-xl font-semibold">Fecha pedido {detail.createdAt.slice(0, 10)}</h1>
      </div>
      <div className="border border-solid rounded-b-lg">
        <h1 className="text-xg font-medium px-7 py-3">Productos</h1>
        <div className="grid grid-cols-2">
          {products.map(product => (
            <div className="mb-9 flex" key={product.id}>
              <div className="flex p-5 w-full rounded hover:bg-gray-200">
                <img src={product.image} alt={product.name} className="w-20" />
                <div className="flex flex-col justify-between p-5">
                  <p className="text-base font-semibold">{product.name}</p>
                  <h1 className="text-base font-semibold">cantidad: {product.quantity}</h1>
                  <h1 className="flex items-end text-base">${product.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <h1 className="flex font-semibold text-xl">Total compra: ${detail.total}</h1>
      </div>
    </div>
  );
};

export default UserOrderDetail;

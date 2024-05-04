import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DetailButton from '../DetailButton/DetailButton';
import { useEffect, useState } from 'react';

const Orders = () => {
  const orders = useSelector(state => state.ordersUser);
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setMatches(event.matches);
      };
  
      mediaQuery.addEventListener('change', handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, [query]);
  
    return matches;
  };

  const isMobile = useMediaQuery('(max-width: 768px)');

  const columnsForMobile = [
    { field: 'id', headerName: 'Orden', width: 90 },
    { field: 'state', headerName: 'Estado', width: 100 },
    { field: 'detail', headerName: '', width: 120, renderCell: params => <DetailButton idOrder={params.row.id} /> }
  ];

  const columnsForDesktop = [
    { field: 'id', headerName: 'Numero de orden', width: 300 },
    { field: 'state', headerName: 'Estado', width: 110 },
    { field: 'date', headerName: 'Fecha de Orden', width: 130 },
    { field: 'total', headerName: 'Precio total', width: 130 },
    { field: 'detail', headerName: 'Ver Detalle', width: 130, renderCell: params => <DetailButton idOrder={params.row.id} /> }
  ];

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded">
        {orders.length > 0 ? (
          <div className="overflow-x-auto">
            <DataGrid
              rows={orders.map(order => ({
                id: order.id,
                state: order.state,
                date: order.createdAt.slice(0, 10),
                total: '$' + order.total
              }))}
              columns={isMobile ? columnsForMobile : columnsForDesktop}
              initialState={{
                pagination: { paginationModel: { page: 0, pageSize: 10 } },
                sorting: true,
                filter: { filterModel: { items: [5, 10, 20, 50, 100] } }
              }}
              disableColumnMenu
              disableSelectionOnClick
            />
          </div>
        ) : (
          <p className="flex items-center justify-center text-gray-500 p-2">
            No tienes pedidos activos
          </p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/products">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Ir a buscar Productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;

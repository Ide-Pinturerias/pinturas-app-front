import React from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import DetailButton from '../DetailButton/DetailButton'

const Orders = () => {
  const orders = useSelector(state => state.ordersUser)
  const columns = [
    { field: 'id', headerName: 'Numero de orden', width: 320 },
    { field: 'state', headerName: 'Estado', width: 110 },
    { field: 'date', headerName: 'Fecha de Orden', width: 130 },
    { field: 'total', headerName: 'Precio total', width: 130 },
    {
      field: 'detail',
      headerName: 'Ver Detalle',
      width: 130,
      renderCell: (params) => (
                <DetailButton idOrder={params.row.id} />
      )
    }
  ]

  return (
        <div className="container mx-auto px-4 mt-20">
            <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded bg-gray-200">
                {orders.length > 0
                  ? (<div>
                        <DataGrid
                            rows={orders.map(order => ({
                              id: order.id,
                              state: order.state,
                              date: order.createdAt.slice(0, 10),
                              total: '$' + order.total
                            }))}
                            columns={columns}
                            initialState={{
                              pagination: {
                                paginationModel: {
                                  page: 0,
                                  pageSize: 10
                                }
                              },
                              sorting: true,
                              filter: {
                                filterModel: {
                                  items: [5, 10, 20, 50, 100]
                                }
                              }
                            }}
                        />
                    </div>

                    )
                  : (<p className="flex items-center space-x-3 text-gray-500 p-2 ">
                        No tienes pedidos activos
                    </p>)
                }
                <p>
                    <p>Te invitamos a darnos tu opinión de tu compra</p>
                    <Link to="/reviews" className="underline">
                        <span className="underline text-pink-800">Da click aquí</span>
                    </Link>
                </p>
            </div>
            <div className="flex justify-between m-10">
                <Link to="/products">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Ir a buscar Productos
                    </button>
                </Link>
            </div>
        </div>
  )
}

export default Orders

import React, { useEffect } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import getAllOrders from '@redux/actions/Orders/getAllOrders'
import PendingButton from '../OrdersButtons/PendingButton'
import PaidButton from '../OrdersButtons/PaidButton'
import CompletedButton from '../OrdersButtons/CompletedButton'
import CancelledButton from '../OrdersButtons/CancelledButton'
import { useMediaQuery } from "@mui/material";

const SalesDash = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.allOrders)
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    getAllOrders()(dispatch)
  }, [dispatch])

  const columnsForMobile=[
    {
      field: 'date',
      headerName: 'Fecha',
      width: 120
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 100
    },
    {
      field: 'state',
      headerName: 'Estado',
      width: 120
    }
  ]

  const columnsForDesktop = [
    {
      field: 'id',
      headerName: 'ID',
      width: 300
    },
    {
      field: 'date',
      headerName: 'Fecha',
      width: 190
    },
    {
      field: 'userId',
      headerName: 'Usuario',
      width: 100
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 80
    },
    {
      field: 'state',
      headerName: 'Estado',
      width: 90
    },
    {
      field: 'pending',
      headerName: 'Pendiente',
      width: 150,
      renderCell: (params) => (
                <PendingButton idOrder={params.row.id} />
      )
    },
    {
      field: 'paid',
      headerName: 'Pagado',
      width: 150,
      renderCell: (params) => (
                <PaidButton idOrder={params.row.id} />
      )
    },
    {
      field: 'complete',
      headerName: 'Completado',
      width: 150,
      renderCell: (params) => (
                <CompletedButton idOrder={params.row.id} />
      )
    },
    {
      field: 'cancelled',
      headerName: 'Cancelado',
      width: 150,
      renderCell: (params) => (
                <CancelledButton idOrder={params.row.id} />
      )
    }

  ]

  return (
        <div className="container mx-auto px-4 mt-20">
            <DataGrid
                rows={orders.map(order => ({
                  id: order.id,
                  date: order.createdAt,
                  userId: order.userId,
                  total: order.total,
                  state: order.state
                }))}
                columns={isMobile?columnsForMobile:columnsForDesktop}
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
                      items: []
                    }
                  }
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true
                  }
                }}
                disableColumnFilter
                pageSizeOptions={[5, 10, 15, 20, 50, 100]}
            />
        </div>
  )
}

export default SalesDash

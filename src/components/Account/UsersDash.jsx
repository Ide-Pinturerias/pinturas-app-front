import { useEffect } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '@redux/actions/User/getAllUsers'
import UpdateUserButton from './UpdateButtons/UpdateUserButton'
import { useMediaQuery } from '@mui/material'

const UsersDash = () => {
  const dispatch = useDispatch()
  const isMobile=useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    getAllUsers()(dispatch)
  }, [dispatch])

  const users = useSelector(state => state.allUsers)

  const columnsForMobile=[
    {
      field: 'name',
      headerName: 'Nombre',
      width: 110
    },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 110
    },
    {
      field: 'rol',
      headerName: 'Rol',
      width: 60
    },
    {
      field: 'edit',
      headerName: 'Admin',
      width: 50,
      sorteable: false,
      renderCell: (params) => (
                <UpdateUserButton idUser={params.row.id} />
      )
    }
  ]
  const columnsForDesktop = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 160
    },
    {
      field: 'lastName',
      headerName: 'Apellido',
      width: 160
    },
    {
      field: 'rol',
      headerName: 'Rol',
      width: 80
    },
    {
      field: 'status',
      headerName: 'Estado',
      width: 80
    },
    {
      field: 'address',
      headerName: 'Direccion',
      width: 180
    },
    {
      field: 'locality',
      headerName: 'Localidad',
      width: 160
    },
    {
      field: 'province',
      headerName: 'Provincia',
      width: 160
    },
    {
      field: 'edit',
      headerName: 'Admin',
      width: 120,
      sorteable: false,
      renderCell: (params) => (
                <UpdateUserButton idUser={params.row.id} />
      )
    }
  ]

  return (
        <div className="container mx-auto px-4 mt-20">
            <DataGrid
                rows={users.map(user => ({
                  id: user.id,
                  name: user.name,
                  lastName: user.lastName,
                  rol: user.rol,
                  status: user.active ? 'Activo' : 'Inactivo',
                  address: user.address,
                  locality: user.locality,
                  province: user.province
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

export default UsersDash

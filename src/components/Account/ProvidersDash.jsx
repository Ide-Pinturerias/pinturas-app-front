import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProviders } from '@redux/actions/Providers/getProviders'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import DeleteProviderButton from './ProvidersButtons/DeleteProviderButton'
import EditProviderButton from './ProvidersButtons/EditProviderButton'
import { ButtonLink } from "../Controls/Links.jsx";
import { useMediaQuery } from "@mui/material";

const ProvidersDash = () => {
  const dispatch = useDispatch()
  const providers = useSelector(state => state.providers)
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    dispatch(getProviders())
  }, [dispatch])

  const columnsForMobile=[
    {
      field: 'name',
      headerName: 'Nombre',
      width: 150
    },
    {
      field: 'discount',
      headerName: 'Descuento',
      width: 50
    },
    {
      field: 'markup',
      headerName: 'Ganancia',
      width: 50
    },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => (
        <EditProviderButton providerId={params.row.id} />
      )
    }
  ]
  const columnsForDesktop = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 200
    },
    {
      field: 'discount',
      headerName: 'Descuento',
      width: 150
    },
    {
      field: 'markup',
      headerName: 'Ganancia',
      width: 150
    },
    {
      field: 'status',
      headerName: 'Estado',
      width: 150
    },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 150,
      renderCell: (params) => (
        <EditProviderButton providerId={params.row.id} />
      )
    },
    {
      field: 'delete',
      headerName: 'Eliminar',
      width: 150,
      // SOLO MUESTRO EL BOTON ELIMINAR SI EL PROVEEDOR ESTA ACTIVO
      renderCell: (params) => (
        params.row.status === 'Activo' ? <DeleteProviderButton providerId={params.row.id} /> : <></>
      )
    }

  ]
  return (
    <div className='container mx-auto px-4 mt-4 md:mt-16'>
      <section className="p-8 ">
      <ButtonLink path="/admin/providers/create">
          Crear Proveedor
        </ButtonLink>
      </section>
      <div className="w-full">
        <DataGrid
          rows={providers.map(provider => ({
            id: provider.id,
            name: provider.name,
            discount: provider.discount,
            markup: provider.markup,
            status: provider.active ? 'Activo' : 'Inactivo'
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
    </div>
  )
}

export default ProvidersDash

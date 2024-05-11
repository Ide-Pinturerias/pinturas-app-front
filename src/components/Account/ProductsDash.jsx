import { useEffect } from "react";
import UpdateButton from "./UpdateButtons/UpdateButton.jsx"
import DeleteButton from "../DeleteButton/DeleteButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsNoFilter } from "@redux/actions/Products/getAllProductsNoFilter.js";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ButtonLink } from "../Controls/Links.jsx";
import { useMediaQuery } from "@mui/material";

const ProductsDash = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    getAllProductsNoFilter()(dispatch);
  }, [dispatch]);

  const columnsForMobile = [
    { field: "name", headerName: "Nombre", width: 200 },
    {
      field: "edit",
      headerName: "Editar",
      renderCell: (params) => <UpdateButton idProduct={params.row.id} />,
      width: 85,
    },
    {
      field: "delete",
      headerName: "Eliminar",
      renderCell: (params) => <DeleteButton idProduct={params.row.id} />,
      width: 85,
    },
  ];

  const columnsForDesktop = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "Nombre", width: 300 },
    { field: "category", headerName: "Categoría", width: 200 },
    { field: "package", headerName: "Formato", width: 80 },
    { field: "stock", headerName: "Stock", width: 60 },
    {
      field: "edit",
      headerName: "Editar",
      renderCell: (params) => <UpdateButton idProduct={params.row.id} />,
      width: 200,
    },
    {
      field: "delete",
      headerName: "Eliminar",
      renderCell: (params) => <DeleteButton idProduct={params.row.id} />,
      width: 200,
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-4 md:mt-16">
      <section className="p-8">
        <ButtonLink 
        path="/admin/create">
          Crear Producto</ButtonLink>
        <ButtonLink path="/admin/products/update/prices">
          Actualizar Precios
        </ButtonLink>
      </section>
      <div className="flex">
        <DataGrid
          rows={products.map((product) => ({
            id: product.idProduct,
            name: product.name,
            category: product.category,
            package: product.package,
            stock: product.stock,
          }))}
          columns={isMobile ? columnsForMobile : columnsForDesktop}
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: 10,
              },
            },
            sorting: true,
            filter: {
              filterModel: {
                items: [],
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          disableColumnFilter
          pageSizeOptions={[5, 10, 15, 20, 50, 100]}
        />
      </div>
    </div>
  );
};

export default ProductsDash;

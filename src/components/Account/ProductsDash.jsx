import { useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateButton from "../UpdateButton/UpdateButton.jsx";
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
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "Nombre", width: 200 },
    {
      field: "edit",
      headerName: "Editar",
      renderCell: (params) => <UpdateButton idProduct={params.row.id} />,
      width: 90,
    },
    {
      field: "delete",
      headerName: "Eliminar",
      renderCell: (params) => <DeleteButton idProduct={params.row.id} />,
      width: 90,
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
    <div className="container mx-auto px-4 mt-16">
      <section className="p-8">
        <ButtonLink path="/admin/create">Crear Producto</ButtonLink>
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
                pageSize: 15,
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

      <div className="flex justify-between m-10">
        <Link to="/products">
          <button
            type="submit"
            className="bg-fadepa hover:bg-primaryClear text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ir a buscar Productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsDash;

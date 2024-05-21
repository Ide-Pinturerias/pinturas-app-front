Documentation for the project.

# VIEWS/ROUTES:

## App (every component):

1. NavBar.jsx (SearchBar.jsx)
2. Footer.jsx

## Home:

1. AboutCard.jsx
2. Banner.jsx
3. FeaturedContainer.jsx (CardRegular.jsx)
4. AboutCard.jsx
5. BannerBlog.jsx

## Products:

1. Paginated.jsx
2. ProductBox.jsx
3. FilterMenu.jsx
4. SortMenu.jsx

## Cart:

1. Accordion.jsx
2. Controls (Button, ButtonLink)
3. CartList.jsx
4. ClearCart.jsx
5. PurchaseCart.jsx

## Detail:

1. FeaturedContainer.jsx (CardRegular.jsx)

## Contact:

- No components (other than SVG components) are being used yet.

## About:

- No components (other than SVG components) are being used yet.

## Blog:

## Account:

# STRUCTURE

```
src
|--assets

|--components


<!-- HOME -->
|--|--AboutCard
|--|--|--AboutCard.jsx

|--|--Banner
|--|--|--Banner.jsx

|--|--CategoryContainer
|--|--|--CategoryContainer.jsx

|--|--BannerBlog
|--|--|--BannerBlog.jsx

|--|--FeaturedContainer (TOP SELLERS)
|--|--|--FeaturedContainer.jsx


|--|--Cart
|--|--|--Accordion.jsx
|--|--|--CartList.jsx
|--|--|--ClearCart.jsx
|--|--|--LoadingSpinner.jsx
|--|--|--ProductCart.jsx
|--|--|--PurchaseCart.jsx
|--|--|--TotalCart.jsx (CAN BE REMOVED)

|--|--Controls
|--|--|--Buttons.jsx
|--|--|--Buttons.tsx
|--|--|--Links.jsx
|--|--|--ProductQuantitySelector.jsx

-
|--|--Featured (CAN BE REMOVED)
|--|--|--Featured.jsx
-
&
-
|--|--Products (CAN BE REMOVED)
|--|--|--ProductCard.jsx
=>
-
|--|--ProductCards (THIS COMPONENT REPLACES: Featured & Products)
|--|--|--CardCategory.jsx
|--|--|--CardRegular.jsx
-

|--|--Footer
|--|--|--Footer.jsx

|--|--NavBar
|--|--|--NavBar.jsx

|--|--Paginated
|--|--|--Paginated.jsx

-
|--|--ProductContainer (CAN BE REMOVED)
|--|--|--ProductContainer.jsx
-
=>
-
|--|--ProductBox (THIS COMPONENT REPLACES: ProductContainer)
|--|--|--ProductBox.jsx
-

-
|--|--SideBar (CAN BE REMOVED)
|--|--|--SideBar.jsx
-
=>
|--|--Refiners (THESE COMPONENTS REPLACE: SideBar)
|--|--|--FilterMenu.jsx
|--|--|--SortMenu.jsx

|--|--SearchBar
|--|--|--SearchBar.jsx

|--|--SVG.jsx

|--context
...
|--views
|--|--About
|--|--Contact
|--|--Home
|--|--Detail
|--|--Products

...
```

# REDUX REVIEW REPORT

## 1. setCategory

```
redux/actions/filters/setCategory
```

- Crear un array con todas las categorías existentes. En caso de que la
  categoría pasada por parámetro no se encuentre en este array, lanzar un error
  para evitar problemas en producción.

## 2. get_best_sellers_request

```
services/api/getBestSellers
```

- El controlador para el endpoint <u>**products?limit=${limit}&minRating=5**</u> debe realizar la manipulación de datos, y retornar solo la respuesta necesaria, en lugar de realizarla en la misma petición.

## 3. Actions in use

### cart/addProductCart
### cart/clearCart
### cart/deleteProductCart
### cart/findOrCreateCart
### cart/setCart 🤔
### cart/updateQuantity
### categories/getAllCategories
### favorites/deleteFavorite 🤔
### favorites/getFavorites
### favorites/postFavorite
### filters/getAllProductsFiltered
### filters/setCategory
### filters/setHighPrice
### filters/setLowPrice
### filters/sort
### pagination/setPage
### products/cleanProductDetail
### products/getAllProductsNoFilter 🤔
### products/getAllProductsPaginated
### products/getBestSellers
### products/postProducts 🤔
### products/productById
### products/productByName
### products/putProducts 🤔

# COMPONENTS

## Controls (buttons)

Prod:
```
Path: '@components/Controls/Buttons.jsx'
```
Dev:
```
Path: '@components/Controls/Buttons.tsx'
```
### Props:
- `children`: Texto del botón.
- `variant`: Tipo de botón. Valores posibles: `primary`, `secondary`, `tertiary`, `danger`. Puede ser para la acción principal, secundaria, terciaria o la de peligro.
- `subVariant`: **No reemplaza a `variant`**. Valores posibles: `icon`.
- `className`: Sobreescribe las clases en caso de ser necesario.
- Y el resto de propiedades disponibles para `button` de React.


## Controls (links)

```
Path: '@components/Controls/Links.jsx'
```

### 1. ButtonLink
- `children`: Texto del link.
- `path`: String que indica la URL.
- `styles`: Objecto con estilos adicionales.

### 2. PlaintNavLink
- `children`: Texto del link.
- `path`: String que indica la URL.
- `styles`: Objecto con estilos adicionales.

### 3. PlainExternalLink
- `children`: Texto del link.
- `path`: String que indica la URL.
- `styles`: Objecto con estilos adicionales.
- `icon`: Booleano. En caso de ser ícono se aplicarán diferentes estilos.

## Controls (ProductQuantitySelector)
```
Path: '@components/Controls/ProductQuantitySelector.jsx'
```

### Props
- `number`: Número actual que se muestra en el input.
- `setNumber`: Función seteadora el estado local pasado por props `number`.
- `limit`: Stock del producto.
- `isNumberOfItemsUpdating`: Estado local usado como bandera.
- `setIsNumberOfItemsUpdating`: Función seteadora del estado local pasado por props `isNumberOfItemsUpdating`.
- `idProduct`: ID del producto.
- `idUser`: ID del usuario.

## Cart (Accordion)

```
Path: '@components/Cart/Accordion.jsx'
```

### 1. AccordionHeader
- `setIsOpen`: Función que settea el estado `isOpen`.
- `isOpen`: Booleano que indica si el contenido se está mostrando o no.
- `children`: Contenido del botón.

### 2. AccordionBody
- `isOpen`: Booleano que indica si el contenido se está mostrando o no.
- `children`: Contenido del cuerpo.

### 3. Accordion
- `children`: Los subelementos SOLO deben ser `<AccordionHeader>` y `<AccordionBody>`

# BUGS

1. En el componente `<ProductQuantitySelector>`, cuando se hace click en el botón para cambiar la cantidad de productos `handleNumberChange(add)` varias veces en poco tiempo, el estado sobrepasa la cantidad máxima y vuelve a 1. (Fixed on commit `[FIX]: Fixed handleNumberChange() delayed behaviour affecting the state by removing the setTimeout function.`).

2. En el componente `<ProductQuantitySelector>`, no se puede settear la cantidad de productos, a llevar, escribiendo en el `<input>`. (Fixed on commit `[FIX]: Fixed text input in <ProductQuantitySelector> by removing the setTimeout function.`).

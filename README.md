# Pinturas App Frontend App

## Dev Team Members (Equipo de Desarrollo)

- [Jamer José](https://github.com/jamerrq)
- [Edgar Juan](https://github.com/ejguercio)
- [Carlos Barrera](https://github.com/CBarreraB)
- [Basilio Romero](https://github.com/bachiromero)
- [Sebastian Menacho](https://github.com/Squiffles)
## Description (Descripción)

This is the client side of the Pinturas App project. It is a web application for
a paint store. It allows the user to search for products, add them to a cart and
place an order. It also allows the user to see the order history and the status
of each order.

[ES] Este es el lado cliente del proyecto Pinturas App. Es una aplicación web
para una pinturería. Permite al usuario buscar productos, agregarlos a un
carrito y realizar un pedido. También permite al usuario ver el historial de
pedidos y el estado de cada pedido.

## Technologies Used (Tecnologías Utilizadas)

![React](https://img.shields.io/badge/-React-000000?style=flat&logo=react)
![Redux](https://img.shields.io/badge/-Redux-000000?style=flat&logo=redux)
![Tailwind
CSS](https://img.shields.io/badge/-Tailwind%20CSS-000000?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/-Vite-000000?style=flat&logo=vite)
![ESLint](https://img.shields.io/badge/-ESLint-000000?style=flat&logo=eslint)

## Deployment (Despliegue)

The application is deployed on [Vercel](https://vercel.com/).

[ES] La aplicación está desplegada en [Vercel](https://vercel.com/).

## Testing Status (Estado de las Pruebas)

[![eslint-check](https://github.com/Ide-Pinturerias/pinturas-app-front/actions/workflows/eslint.yml/badge.svg)](https://github.com/Ide-Pinturerias/pinturas-app-front/actions/workflows/eslint.yml)


---

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

## Detail:

1. FeaturedContainer.jsx (CardRegular.jsx)

## Contact:

- No components (other than SVG components) are being used yet.

## About:

- No components (other than SVG components) are being used yet.

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


|--|--BookmarkList
|--|--|--BookmarkList.jsx

|--|--Controls
|--|--|--Buttons.jsx
|--|--|--Links.jsx

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
|--|--Bookmarks
|--|--Contact
|--|--Home
|--|--Detail
|--|--Products

...
```

# REDUX REVIEW REPORT

##  1. setCategory

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

### filters/getAllProductsFiltered
### filters/setCategory
### filters/setHighPrice
### filters/setLowPrice
### filters/sort
### pagination/setPage
### products/cleanProductDetail
### products/getAllProductsPaginated
### products/getBestSellers
### products/productById
### products/productByName
### favorites/getFavorites
### favorites/postFavorite

# Components

## Controls (buttons)

```
Path: '@components/controls/Buttons.jsx'
```

### 1. ButtonPrimary
- ```children```: Texto del botón.
- ```action```: Función que se ejecuta ```onClick```.
- ```styles```: Objecto con estilos adicionales.

### 2. ButtonSecondary
- ```children```: Texto del botón.
- ```action```: Función que se ejecuta ```onClick```.
- ```styles```: Objecto con estilos adicionales.

### 3. ButtonTertiary
- ```children```: Texto del botón.
- ```action```: Función que se ejecuta ```onClick```.
- ```styles```: Objecto con estilos adicionales.

### 4. ButtonDanger
- ```children```: Texto del botón.
- ```action```: Función que se ejecuta ```onClick```.
- ```styles```: Objecto con estilos adicionales.

## Controls (links)

```
Path: '@components/controls/Links.jsx'
```

### 1. ButtonLink
- ```children```: Texto del link.
- ```path```: String que indica la URL.
- ```styles```: Objecto con estilos adicionales.

### 2. PlaintNavLink
- ```children```: Texto del link.
- ```path```: String que indica la URL.
- ```styles```: Objecto con estilos adicionales.

### 3. PlainExternalLink
- ```children```: Texto del link.
- ```path```: String que indica la URL.
- ```styles```: Objecto con estilos adicionales.
- ```icon```: Booleano. En caso de ser ícono se aplicarán diferentes estilos.
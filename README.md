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

# COMPONENTS:

## App:

1. NavBar.jsx (SearchBar.jsx)
2. Footer.jsx

## Home:

1. Banner.jsx
2. FeaturedContainer.jsx (CardRegular.jsx)
3. AboutCard.jsx
4. BannerBlog.jsx

## Products:

1. Paginated.jsx
2. ProductBox.jsx
3. FilterMenu.jsx
4. SortMenu.jsx

## Detail:

- No components (other than SVG components) are being used yet.

## Contact:

- No components (other than SVG components) are being used yet.

## About:

- No components (other than SVG components) are being used yet.

# STRUCTURE

```
src
|--assets

|--components

|--|--AboutCard
|--|--|--AboutCard.jsx

<!-- HOME -->
|--|--Banner
|--|--|--Banner.jsx

|--|--CategoryContainer
|--|--|--CategoryContainer.jsx

|--|--BannerBlog
|--|--|--BannerBlog.jsx

|--|--FeaturedContainer (TOP SELLERS) 
|--|--|--FeaturedContainer.jsx

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
|--|--ProductCards
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
|--|--ProductBox (THIS COMPONENT REPLACE: ProductContainer)
|--|--|--ProductBox.jsx
-

-
|--|--SideBar (CAN BE REMOVED)
|--|--|--SideBar.jsx
-
=>
|--|--Refiners
|--|--|--FilterMenu.jsx
|--|--|--SortMenu.jsx

|--|--SearchBar
|--|--|--SearchBar.jsx

|--|--SVG.jsx

|--context
...
|--views
|--|--Home
|--|--About
|--|--Contact

...
```

# REDUX REVIEW REPORT

##  1. setCategory

```
redux/actions/filters/setCategory
```

- Crear un array con todas las categorías existentes. En caso de que la categoría pasada por parámetro no se encuentre en este array, lanzar un error para evitar problemas en producción.

## 2. get_best_sellers_request

```
services/api/get_best_sellers_request
```

- El controlador para el endpoint <u>**products?limit=${limit}&minRating=5**</u> debe realizar la manipulación de datos, y retornar solo la respuesta necesaria, en lugar de realizarla en la misma petición.
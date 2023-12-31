import {
  // PRODUCTS
  GET_ALL_PRODUCTS,
  POST_PRODUCT,
  PUT_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS_NO_FILTER,
  CLEAN_PRODUCT_DETAIL,

  // CATEGORIES
  GET_ALL_CATEGORIES,

  // USERS
  POST_REGISTER_USER,
  POST_LOGIN_USER,
  GET_ALL_USERS,
  DELETE_USER,
  PUT_USER,
  ACCESS_TOKEN,
  SET_USER,

  // FILTERS
  GET_PRODUCT_FILTER,
  GET_BEST_SELL,
  SET_CATEGORY,
  SET_LOW_PRICE,
  SET_HIGH_PRICE,

  // PAGES
  SET_TOTAL_PAGES,
  SET_PAGE,

  // CART
  FIND_OR_CREATE_CART,
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  SET_CART,

  // ORDERS
  GET_ALL_ORDERS,
  GET_ORDERS_USER,
  GET_ORDER_BY_ID,
  POST_ORDER_PAYMENT,
  PUT_ORDER,

  // NODE MAILER
  POST_CONTACT_EMAIL,
  POST_ORDER_EMAIL,
  POST_REGISTER_EMAIL,
  LOGOUT_USER,

  // AUTH0-USERS-INFO
  SET_USER_DATA,
  GET_USER_BY_ID,

  // BLOG
  GET_POSTS,
  GET_POST_BY_ID,
  DELETE_POST,
  PUT_POST,
  POST_POST,

  // FAVORITES
  ADD_FAVORITE,
  GET_FAVORITES,
  DELETE_FAVORITES,

  // REVIEWS
  SAVE_REVIEW,

  // PROVIDERS
  GET_PROVIDERS,
  GET_PROVIDERS_ACTIVE,
  GET_PROVIDER_BY_ID,
  CLEAN_PROVIDER

} from '../action-type'

const initialState = {
  // CART
  cart: {},
  // ORDERS
  allOrders: [],
  newOrder: {},
  payment: '',

  // PRODUCTS
  products: [],
  detail: {},
  allProducts: [],
  bestSell: [],

  // CATEGORIES
  categories: [],

  // USER
  user: {},
  allUsers: [],
  token: '',
  userId: {},

  // FILTERS
  filterCategory: '',
  price: {
    high: 0,
    low: 0
  },

  // PAGES
  totalPages: 0,
  thisPage: 1,

  // MAIL
  mail: {},

  // ORDERS
  initPoint: '',
  ordersUser: {},
  orderDetail: {},

  // AUTH0-USERS-INFO
  userData: {},

  // REVIEWS
  userReview: {},

  // BLOG
  posts: [],
  post: {},

  // FAVORITES
  favorites: [],
  allFavorites: [],

  // PROVIDERS
  providers: [],
  providersActive: [],
  provider: {}
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // PRODUCTS
    case GET_ALL_PRODUCTS:
      return { ...state, products: payload }
    case POST_PRODUCT:
      return { ...state, products: payload }
    case PUT_PRODUCT:
      return { ...state, products: payload }
    case GET_PRODUCT_BY_ID:
      return { ...state, detail: payload }
    case GET_BEST_SELL:
      return { ...state, bestSell: payload }
    case GET_PRODUCT_BY_NAME:
      return { ...state, products: payload }
    case GET_ALL_PRODUCTS_NO_FILTER:
      return { ...state, allProducts: payload }
    case CLEAN_PRODUCT_DETAIL:
      return { ...state, detail: {} }

    // CATEGORIES
    case GET_ALL_CATEGORIES:
      return { ...state, categories: payload }

    // USER
    case POST_REGISTER_USER:
      return { ...state, user: payload }
    case POST_LOGIN_USER:
      return { ...state, user: payload }
    case GET_ALL_USERS:
      return { ...state, allUsers: payload }
    case DELETE_USER:
      return { ...state }
    case PUT_USER:
      return { ...state, user: payload }
    case LOGOUT_USER:
      return { ...state, user: payload }
    case ACCESS_TOKEN:
      return { ...state, token: payload }
    case SET_USER:
      return { ...state, user: payload }
    case GET_USER_BY_ID:
      return { ...state, userId: payload }

    // FILTERS
    case GET_PRODUCT_FILTER:
      return { ...state, products: payload }
    case SET_CATEGORY:
      return { ...state, filterCategory: payload }
    case SET_HIGH_PRICE:
      return { ...state, price: { ...state.price, high: payload } }
    case SET_LOW_PRICE:
      return { ...state, price: { ...state.price, low: payload } }

    // PAGES
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: payload }
    case SET_PAGE:
      return { ...state, thisPage: payload }

    // CART
    case FIND_OR_CREATE_CART:
      return { ...state, cart: payload }
    case ADD_PRODUCT_CART:
      return { ...state, cart: payload }
    case DELETE_PRODUCT_CART:
      return { ...state, cart: payload }
    case SET_CART:
      return { ...state, cart: payload }

    // NODE MAILER
    case POST_CONTACT_EMAIL:
      return { ...state, mail: payload }
    case POST_ORDER_EMAIL:
      return { ...state, mail: payload }
    case POST_REGISTER_EMAIL:
      return { ...state, mail: payload }

    // ORDERS
    case GET_ALL_ORDERS:
      return { ...state, allOrders: payload }
    case POST_ORDER_PAYMENT:
      return { ...state, initPoint: payload }
    case GET_ORDERS_USER:
      return { ...state, ordersUser: payload }
    case GET_ORDER_BY_ID:
      return { ...state, orderDetail: payload }
    case PUT_ORDER:
      return { ...state, orderDetail: payload }

    // AUTH0-USERS-INFO
    case SET_USER_DATA:
      return { ...state, userData: payload }

    // BLOG
    case GET_POSTS:
      return { ...state, posts: payload }
    case GET_POST_BY_ID:
      return { ...state, post: payload }
    case PUT_POST:
      return { ...state }
    case DELETE_POST:
      return { ...state }
    case POST_POST:
      return { ...state }

    // REVIEWS
    case SAVE_REVIEW:
      return { ...state, userReview: payload }

    // FAVORITES
    case ADD_FAVORITE:
      return { ...state, favorites: payload }
    case GET_FAVORITES:
      return { ...state, allFavorites: payload }
    case DELETE_FAVORITES:
      return { ...state, allFavorites: payload }

    // PROVIDERS
    case GET_PROVIDERS:
      return { ...state, providers: payload }
    case GET_PROVIDERS_ACTIVE:
      return { ...state, providers: payload }
    case GET_PROVIDER_BY_ID:
      return { ...state, provider: payload }
    case CLEAN_PROVIDER:
      return { ...state, provider: payload }

    default:
      return { ...state }
  }
}

export default reducer

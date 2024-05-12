import {
    // PRODUCTS
    GET_ALL_PRODUCTS_PAGINATED,
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
    GET_USER_BY_ID,

    // FILTERS
    GET_ALL_PRODUCTS_FILTERED,
    GET_BEST_SELL,
    SET_CATEGORY,
    SET_LOW_PRICE,
    SET_HIGH_PRICE,

    // SORTING
    SET_SORT_CLAUSE,
    SET_SORT_DIRECTION,

    // PAGES
    SET_TOTAL_PAGES,
    SET_PAGE,

    // CART
    FIND_OR_CREATE_CART,
    ADD_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    SET_CART,
    CLEAR_CART,

    // ORDERS
    GET_ALL_ORDERS,
    GET_ORDERS_USER,
    GET_ORDER_BY_ID,
    POST_ORDER_PAYMENT,
    POST_ORDER_CART,
    PUT_ORDER,

    // NODE MAILER
    POST_CONTACT_EMAIL,
    POST_ORDER_EMAIL,
    POST_REGISTER_EMAIL,
    LOGOUT_USER,

    // BLOG
    GET_POSTS,
    GET_POST_BY_ID,
    DELETE_POST,
    PUT_POST,
    POST_POST,
    CLEAR_POST,

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
    // USER
    user: {},
    allUsers: [],
    token: '',
    userId: {},

    // CART
    cart: {},

    // ORDERS
    allOrders: [],
    ordersUser: {},
    orderDetail: {},

    // FAVORITES
    allFavorites: [],

    // REVIEWS
    userReview: {},

    // PRODUCTS
    allProductsPaginated: [],
    detail: {},
    allProducts: [],
    bestSellers: [],

    // CATEGORIES
    categories: [],

    // FILTERS
    filterCategory: '',
    price: {
        highPrice: 0,
        lowPrice: 0
    },

    // SORTING
    sortBy: '', // 'price' | 'rating' | 'stock' | 'name' | undefined, '' => 'idProduct'
    orderBy: '', // 'asc' | 'desc'

    // PAGES
    totalPages: 0,
    thisPage: 1,

    // MAIL
    mail: {},

    // BLOG
    posts: [],
    post: {},

    // PROVIDERS
    providers: [],
    providersActive: [],
    provider: {}
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
            return { ...state, user: payload, ordersUser: payload, allUsers: [], token: "", allFavorites: [], cart: {} }
        case ACCESS_TOKEN:
            return { ...state, token: payload }
        case SET_USER:
            return { ...state, user: payload }
        case GET_USER_BY_ID:
            return { ...state, userId: payload }

        // CART
        case FIND_OR_CREATE_CART:
            return { ...state, cart: payload }
        case ADD_PRODUCT_CART:
            return { ...state, cart: payload }
        case DELETE_PRODUCT_CART:
            return { ...state, cart: payload }
        case SET_CART:
            return { ...state, cart: payload }
        case CLEAR_CART:
            return { ...state, cart: payload }

        // ORDERS
        case GET_ALL_ORDERS:
            return { ...state, allOrders: payload }
        case POST_ORDER_PAYMENT:
            return { ...state }
        case GET_ORDERS_USER:
            return { ...state, ordersUser: payload }
        case GET_ORDER_BY_ID:
            return { ...state, orderDetail: payload }
        case PUT_ORDER:
            return { ...state, orderDetail: payload }
        case POST_ORDER_CART:
            return { ...state }

        // FAVORITES
        case ADD_FAVORITE:
            return { ...state, allFavorites: payload }
        case GET_FAVORITES:
            return { ...state, allFavorites: payload }
        case DELETE_FAVORITES:
            return { ...state, allFavorites: payload }

        // PRODUCTS
        case GET_ALL_PRODUCTS_PAGINATED:
            return { ...state, allProductsPaginated: payload }
        case POST_PRODUCT:
            return { ...state, allProductsPaginated: payload }
        case PUT_PRODUCT:
            return { ...state, allProductsPaginated: payload }
        case GET_PRODUCT_BY_ID:
            return { ...state, detail: payload }
        case GET_BEST_SELL:
            return { ...state, bestSellers: payload }
        case GET_PRODUCT_BY_NAME:
            return { ...state, allProductsPaginated: payload }
        case GET_ALL_PRODUCTS_NO_FILTER:
            return { ...state, allProducts: payload }
        case CLEAN_PRODUCT_DETAIL:
            return { ...state, detail: {} }

        // CATEGORIES
        case GET_ALL_CATEGORIES:
            return { ...state, categories: payload }


        // FILTERS
        case GET_ALL_PRODUCTS_FILTERED:
            return { ...state, allProductsPaginated: payload }
        case SET_CATEGORY:
            return { ...state, filterCategory: payload }
        case SET_HIGH_PRICE:
            return { ...state, price: { ...state.price, highPrice: payload } }
        case SET_LOW_PRICE:
            return { ...state, price: { ...state.price, lowPrice: payload } }

        // SORTING
        case SET_SORT_CLAUSE:
            return { ...state, sortBy: payload }
        case SET_SORT_DIRECTION:
            return { ...state, orderBy: payload }

        // PAGES
        case SET_TOTAL_PAGES:
            return { ...state, totalPages: payload }
        case SET_PAGE:
            return { ...state, thisPage: payload }


        // NODE MAILER
        case POST_CONTACT_EMAIL:
            return { ...state, mail: payload }
        case POST_ORDER_EMAIL:
            return { ...state, mail: payload }
        case POST_REGISTER_EMAIL:
            return { ...state, mail: payload }


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
        case CLEAR_POST:
            return { ...state, post: payload }

        // REVIEWS
        case SAVE_REVIEW:
            return { ...state, userReview: payload }


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

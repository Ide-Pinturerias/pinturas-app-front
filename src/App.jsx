import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Detail from './views/Detail/Detail'
import Cart from './views/Cart/Cart'
import Blog from './views/Blog/Blog'
import Products from './views/Products/Products'
import Account from './views/Account/Account'
import UpdateProduct from './views/UpdateProduct/UpdateProduct'
import CreateProduct from './views/CreateProduct/CreateProduct'
import Developers from './views/Developers/Developers'
import Register from './views/Register/Register'
import NotFound from './views/NotFound/NotFound'
import SuccessfulPayment from './views/Payment/SuccessfulPayment'
import FailurePayment from './views/Payment/FaillurePayment'
import PendingPayment from './views/Payment/PendingPayment'
import Login from './views/Login/Login'
import ReviewsPage from './views/ReviewsPage/ReviewsPage'
import Dashboard from './views/Dashboard/Dashboard'
import BlogCreate from './views/Blog/BlogCreate'
import EditBlog from './views/Blog/EditBlog'
import BlogDetail from './views/Blog/BlogDetail'
import UserOrderDetail from './views/UserOrderDetail/UserOrderDetail'
import UpdatePrices from './views/UpdatePrices/UpdatePrices'
import CreateProvider from './views/Providers/CreateProvider'
import EditProvider from './views/Providers/EditProvider'
import ScrollToTop from './hooks/ScrollToTop'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import UpdateUserFormByAdmin from '@components/UpdateUserFormByAdmin/UpdateUserFormByAdmin'
import { getAllProductsPaginated } from './redux/actions/Products/getAllProductsPaginated'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions/User/setUser'
import { findOrCreateCart } from './redux/actions/Cart/findOrCreateCart'
// import ChatBotApp from './components/ChatBot/ChatBotApp'

function App () {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (user) {
      dispatch(setUser(user))
      dispatch(findOrCreateCart(user.id))
    }
    dispatch(getAllProductsPaginated())
  }, [])

  useEffect(() => {
    process.env.NODE_ENV === 'development' && (
      document.body.classList.add('debug-screens')
    )
  }, [user])

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <div className="h-full w-full">
          <div className="">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route path="/products" element={<Products />} />
              <Route path="/products/:idProduct" element={<Detail />} />
              <Route path="/products/edit/:idProduct" element={<UpdateProduct />}
              />

              <Route path="/login" element={<Login />} />
              <Route path="/login/register" element={<Register />} />

              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/create" element={<CreateProduct />} />
              <Route path="/admin/edit/:idUser" element={<UpdateUserFormByAdmin />} />
              <Route path="/admin/products/update/prices" element={<UpdatePrices />} />
              <Route path="/admin/providers/create" element={<CreateProvider />} />
              <Route path="/admin/providers/edit/:id" element={<EditProvider />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/orders/:idOrder" element={<UserOrderDetail />} />

              <Route path="/payment/successful" element={<SuccessfulPayment />} />
              <Route path="/payment/failure" element={<FailurePayment />} />
              <Route path="/payment/pending" element={<PendingPayment />} />

              <Route path="/reviews/:orderId" element={<ReviewsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/developers" element={<Developers />} />

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:idBlog" element={<BlogDetail />} />
              <Route path="/blog/create" element={<BlogCreate />} />
              <Route path="/blog/edit/:id" element={<EditBlog />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* <footer className="flex"> */}
          <Footer />
          {/* </footer> */}
        </div>
      </BrowserRouter>
      {/* <ChatBotApp /> */}
    </div>
  )
}

export default App

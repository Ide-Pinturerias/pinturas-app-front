import { useEffect, useState } from "react";
import SideBarUser from "@components/Account/SideBarUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "@redux/actions/User/logoutUser";
import UpdateUserForm from "@components/Account/UpdateUserForm";
import Addresses from "@components/Account/Addresses";
import Favorities from "@components/Account/Favorites";
import Orders from "@components/Account/Orders";
import ProductsDash from "@components/Account/ProductsDash";
import LoginForm from "@components/LoginForm/LoginForm";
import UsersDash from "@components/Account/UsersDash";
import SalesDash from "@components/Account/SalesDash";
import { getFavorites } from "@redux/actions/Favorites/getFavorites";
import getOrdersUser from "@redux/actions/Orders/getOrdersUser";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("dashboard");
  const [updateUserForm, setUpdateUserForm] = useState(false);
  const [addresses, setAddresses] = useState(true);
  const [favorities, setFavorities] = useState(false);
  const [orders, setOrders] = useState(false);
  const [products, setProducts] = useState(false);
  const [users, setUsers] = useState(false);
  const [sales, setSales] = useState(false);

  const loggedUser = useSelector((state) => state.user);


  const logoutUserAction = () => {
    localStorage.clear();
    logoutUser(dispatch);
    navigate("/");
  };
  useEffect(() => {
    if (loggedUser.id) {
      dispatch(getFavorites(loggedUser.id));
      dispatch(getOrdersUser(loggedUser.id));
    }
  }, [loggedUser]);

  const handleButtonClick = (buttonName) => {
    if (buttonName === "account") {
      setUpdateUserForm(true);
      setAddresses(false);
      setFavorities(false);
      setOrders(false);
      setProducts(false);
      setUsers(false);
      setSales(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "addresses") {
      setUpdateUserForm(false);
      setAddresses(true);
      setFavorities(false);
      setOrders(false);
      setProducts(false);
      setUsers(false);
      setSales(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "favorities") {
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(true);
      setOrders(false);
      setProducts(false);
      setUsers(false);
      setSales(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "orders") {
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(false);
      setOrders(true);
      setProducts(false);
      setUsers(false);
      setSales(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "products") {
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(false);
      setOrders(false);
      setProducts(true);
      setUsers(false);
      setSales(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "users") {
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(false);
      setOrders(false);
      setProducts(false);
      setUsers(true);
      setSales(false);
      setActiveButton(buttonName);
    }
    if (buttonName === "sales") {
      setUpdateUserForm(false);
      setAddresses(false);
      setFavorities(false);
      setOrders(false);
      setProducts(false);
      setUsers(false);
      setSales(true);
      setActiveButton(buttonName);
    }
  };

  if (loggedUser.id) {
    return (
      <div className="flex flex-col md:flex-row">
        <SideBarUser
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
          user={loggedUser}
          logout={logoutUserAction}
        />
        <div className="w-full md:w-9/12 md:ml-auto flex flex-col flex-1 h-screen">
          {updateUserForm && loggedUser && <UpdateUserForm />}
          {addresses && <Addresses />}
          {favorities && <Favorities />}
          {orders && <Orders />}
          {products && <ProductsDash />}
          {users && <UsersDash />}
          {sales && <SalesDash />}
          <footer style={{ textAlign: "center", padding: "10px" }}></footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    );
  }
};

export default Account;

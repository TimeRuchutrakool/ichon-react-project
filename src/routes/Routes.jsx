import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SearchedProducts from "../pages/SearchedProducts";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import UserLayout from "../components/UserLayout";
import Orders from "../pages/Orders";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:brandTitle/:productId" element={<Product />} />
        <Route path="/search/:searchedName" element={<SearchedProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate replace to='orders' />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Route>
      <Route path="*" element={<p>Wrong path</p>} />
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

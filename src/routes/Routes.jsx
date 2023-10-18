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
import ProtectedRoute from "../components/ProtectedRoute";
import { SortContextProvider } from "../context/SortContext";
import AdminLayout from "../components/AdminLayout";
import AdminHome from "../features/admin/AdminHome";
import AdminOrders from "../features/admin/AdminOrders";
import AdminProducts from "../features/admin/AdminProducts";
import AdminUsers from "../features/admin/AdminUsers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:brandTitle/:productId" element={<Product />} />
        <Route
          path="/search/:searchedTitle"
          element={
            <SortContextProvider>
              <SearchedProducts />
            </SortContextProvider>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="orders" />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
      <Route path="*" element={<p>Wrong path</p>} />
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

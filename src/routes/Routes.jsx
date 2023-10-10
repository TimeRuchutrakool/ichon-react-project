import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SearchedProducts from "../pages/SearchedProducts";
import Cart from "../pages/Cart";
import Order from "../pages/Order";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:brandTitle/:productId" element={<Product />} />
        <Route path="/search/:searchedName" element={<SearchedProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Route>
      <Route path="*" element={<p>Wrong path</p>} />
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

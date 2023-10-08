import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:brandTitle/:productId" element={<Product />} />
      </Route>
      <Route path="*" element={<p>Wrong path</p>} />
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

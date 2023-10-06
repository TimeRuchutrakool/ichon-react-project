import ImageCarousel from "../components/ImageCarousel";
import ProductsView from "../components/ProductsView";
import { BACKEND_ROOT } from "../utils/config";

function Home() {
  return (
    <>
      <ImageCarousel />
      <ProductsView
        view={{
          headerTitle: "Best Seller รวมสินค้าขายดี",
          view: `${BACKEND_ROOT}/best-seller`,
        }}
      />
    </>
  );
}

export default Home;

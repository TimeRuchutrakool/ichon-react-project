import ImageCarousel from "../components/ImageCarousel";
import ProductsView from "../components/ProductsView";
import { mockImagesCarousel } from "../data/mockData";
import { BACKEND_ROOT } from "../utils/config";

function Home() {
  const images = mockImagesCarousel;
  return (
    <>
      <ImageCarousel contents={images}/>
      <ProductsView
        view={{
          headerTitle: "Best Seller รวมสินค้าขายดี",
          view: `${BACKEND_ROOT}/best-seller`,
        }}
      />
      <ProductsView
        view={{
          headerTitle: "New Arrival ตามเทรนด์ก่อนใคร",
          view: `${BACKEND_ROOT}/best-seller`,
        }}
      />
    </>
  );
}

export default Home;

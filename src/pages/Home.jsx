import ImageCarousel from "../components/ImageCarousel";
import { mockImagesCarousel } from "../data/mockData";
import ProductsView from "../features/product/ProductsView";

function Home() {
  const images = mockImagesCarousel;
  return (
    <>
      <ImageCarousel contents={images} />
      <ProductsView
        view={{
          headerTitle: "Best Seller รวมสินค้าขายดี",
          view: `/best-seller`,
        }}
      />
      <ProductsView
        view={{
          headerTitle: "New Arrival ตามเทรนด์ก่อนใคร",
          view: `/new-arrival`,
        }}
      />
    </>
  );
}

export default Home;
